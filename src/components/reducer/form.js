import productData from "../../pages/SellTicket/productData";

const formReducer = (state, action) => {
  let updatedCart = state.productCart.slice();
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
        productCart: state.productCart.filter((product, index) => index !== action.payload.index),
      };

    case "decrease":
      const decIndex = Number(action.payload.index);
      if (state.productCart[decIndex].productQuantity === 1) {
        updatedCart = state.productCart.filter((product, index) => index !== decIndex);
      } else {
        updatedCart = state.productCart.map((product, index) => {
          if (index === decIndex) {
            console.log("ran");
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
      if (action.payload.customerName && action.payload.productAmount) {
        // console.log(state);
        alert("Nhận phiếu thành công");
      } else {
        action.payload.customerName === 0
          ? alert("Vui lòng điền thông tin khách hàng.")
          : alert("Vui lòng thêm hàng vào giỏ.");
      }
      return { ...action.payload.defaultFormFields };

    default:
      return state;
  }
};

export default formReducer;
