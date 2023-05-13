const formReducer = (state, action) => {
  let updatedCart = (state.productCart || state.serviceCart).slice();

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
        total: updatedCart.reduce(
          (totalP, product) =>
            totalP + product.productPrice * product.productQuantity,
          0
        ),
      };

    case "remove_product":
      updatedCart = updatedCart.filter(
        (product, index) => index !== Number(action.payload.index)
      );
      return {
        ...state,
        productCart: updatedCart,
        total: updatedCart.reduce(
          (totalP, product) =>
            totalP + product.productPrice * product.productQuantity,
          0
        ),
      };

    case "decrease":
      const decIndex = Number(action.payload.index);
      if (state.productCart[decIndex].productQuantity === 1) {
        updatedCart = state.productCart.filter(
          (product, index) => index !== decIndex
        );
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
        total: updatedCart.reduce(
          (totalP, product) =>
            totalP + product.productPrice * product.productQuantity,
          0
        ),
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
        total: updatedCart.reduce(
          (totalP, product) =>
            totalP + product.productPrice * product.productQuantity,
          0
        ),
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
      const {
        supplierName,
        supplierAddress,
        supplierPhone,
        productAmount,
        defaultFormFields,
      } = action.payload;

      if (
        supplierName.length === 0 ||
        supplierAddress.length === 0 ||
        supplierPhone.length === 0
      ) {
        alert("Vui lòng chọn nhà cung cấp");
        return { ...state };
      } else if (productAmount === 0) {
        alert("Vui lòng thêm hàng vào giỏ mua");
        return { ...state };
      } else {
        alert("Tạo phiếu mua thành công");
        return { ...defaultFormFields };
      }

    case "supplier_pick":
      const suppliers = action.payload.suppliers;
      const supplierId = Number(action.payload.id);
      const newSupplier = suppliers.find(
        (supplier) => supplier.id === supplierId
      );

      return {
        ...state,
        supplierName: newSupplier.name,
        supplierAddress: newSupplier.address,
        supplierPhone: newSupplier.phone,
      };

    case "create_new_supplier":
      const newlyCreatedSupplier = action.payload.newSupplier;
      // send POST request to create new supplier
      console.log("create new supplier", newlyCreatedSupplier);

    // Services actions =================================

    case "add_service":
      let serviceIdx = updatedCart.findIndex(
        (servicee) => servicee.id === action.payload.toAddService.id
      );
      if (serviceIdx !== -1) {
        updatedCart = state.serviceCart.map((service, index) => {
          if (index === serviceIdx) {
            return {
              ...service,
              quantity: service.quantity + 1,
            };
          }
          return service;
        });
      } else {
        updatedCart = [
          ...state.serviceCart,
          { ...action.payload.toAddService, quantity: 1 },
        ];
      }
      return {
        ...state,
        serviceCart: updatedCart,
        total: updatedCart.reduce(
          (totalP, service) => totalP + service.price * service.quantity,
          0
        ),
      };
    case "remove_service":
      updatedCart = updatedCart.filter(
        (service, index) => index !== Number(action.payload.index)
      );
      return {
        ...state,
        serviceCart: updatedCart,
        total: updatedCart.reduce(
          (totalP, service) => totalP + service.price * service.quantity,
          0
        ),
      };
    case "decrease_service":
      const serviceDecIdx = Number(action.payload.index);
      if (state.serviceCart[serviceDecIdx].quantity === 1) {
        updatedCart = state.serviceCart.filter(
          (service, index) => index !== serviceDecIdx
        );
      } else {
        updatedCart = state.serviceCart.map((service, index) => {
          if (index === serviceDecIdx) {
            return { ...service, quantity: service.quantity - 1 };
          } else {
            return service;
          }
        });
      }
      return {
        ...state,
        serviceCart: updatedCart,
        total: updatedCart.reduce(
          (totalP, service) => totalP + service.price * service.quantity,
          0
        ),
      };

    case "increase_service":
      const serviceIncIdx = Number(action.payload.index);
      updatedCart = state.serviceCart.map((service, index) => {
        if (index === serviceIncIdx) {
          return { ...service, quantity: service.quantity + 1 };
        } else {
          return service;
        }
      });
      return {
        ...state,
        serviceCart: updatedCart,
        total: updatedCart.reduce(
          (totalP, service) =>
            totalP + service.price * service.quantity,
          0
        ),
      };

    case "remain_calc":
      return {
        ...state,
        remain: action.payload.newRemain,
      }

    default:
      return state;
  }
};

export default formReducer;
