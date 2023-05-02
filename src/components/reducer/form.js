import productData from "../../pages/productData";

const formReducer = (state, action) => {
  let updatedCart = state.productCart.slice();
  const suppliers = action.payload.suppliers;
  switch (action.type) {
    case "reset_form":
      return { ...action.payload.defaultFormFields };

    case "input_change":
      return { ...state, [action.payload.name]: action.payload.value };

    case "add_product":
      let foundIndex = updatedCart.findIndex(
        (product) => product.productID === action.payload.toAddProduct.productID
      );
      if (foundIndex !== -1) {
        updatedCart = state.productCart.map((product, index) => {
          if (index === foundIndex) {
            return {
              ...product,
              productQuantity: product.productQuantity + 1,
            };
          }
          return product;
        });
      } else {
        updatedCart = [
          ...state.productCart,
          { ...action.payload.toAddProduct, productQuantity: 1 },
        ];
      }
      return {
        ...state,
        productCart: updatedCart,
      };

    case "remove_product":
      return {
        ...state,
        productCart: state.productCart.filter((product, index) => index !== Number(action.payload.index)),
      };

    case "decrease":
      const decIndex = Number(action.payload.index);
      if (state.productCart[decIndex].productQuantity === 1) {
        updatedCart = state.productCart.filter((product, index) => index !== decIndex);
      } else {
        updatedCart = state.productCart.map((product, index) => {
          if (index === decIndex) {
            return { ...product, productQuantity: product.productQuantity - 1 };
          } else {
            return product;
          }
        });
      }
      return {
        ...state,
        productCart: updatedCart,
      };

    case "increase":
      const incIndex = Number(action.payload.index);
      updatedCart = state.productCart.map((product, index) => {
        if (index === incIndex) {
          return { ...product, productQuantity: product.productQuantity + 1 };
        } else {
          return product;
        }
      });
      return {
        ...state,
        productCart: updatedCart,
      };

    case "sell_submit":
      // Hạn chế side effect.
      if (action.payload.customerName && action.payload.productAmount) {
        // console.log(state);
        alert("Nhận phiếu thành công");
      } else {
        action.payload.customerName === 0
          ? alert("Vui lòng điền thông tin khách hàng.")
          : alert("Vui lòng thêm hàng vào giỏ.");
      }
      return { ...action.payload.defaultFormFields };

    case "buy_submit":
      console.log(action.payload);
      const { supplierName, supplierAddress, supplierPhone, productAmount, defaultFormFields } = action.payload;

      if (supplierName.length === 0 || supplierAddress.length === 0 || supplierPhone.length === 0) {
        alert("Vui lòng chọn nhà cung cấp");
        return {...state}
      }
      else if (productAmount === 0) {
        alert("Vui lòng thêm hàng vào giỏ mua");
        return {...state}
      } 
      else {
        alert("Tạo phiếu mua thành công");
        return {...defaultFormFields}
      }

    case "supplier_pick":
      const supplierId = Number(action.payload.id);
      const newSupplier = suppliers.find(supplier => supplier.id === supplierId);

      return {
        ...state,
        supplierName: newSupplier.name,
        supplierAddress: newSupplier.address,
        supplierPhone: newSupplier.phone,
      };

    default:
      return state;
  }
};

export default formReducer;
