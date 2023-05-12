export const resetForm = (dispatch, defaultFormFields) => {
  dispatch({
    type: "reset_form",
    payload: {
      defaultFormFields,
    },
  });
};

export const handleChange = (dispatch, event) => {
  let { name, value } = event.target;
  if (event.target.type === "number") value = Number(value);
  dispatch({
    type: "input_change",
    payload: {
      name: name,
      value: value,
    },
  });
};

export const handleAdd = (dispatch, event, productData, state) => {
  const toAddProduct = productData[event.target.value];
  dispatch({
    type: "add_product",
    payload: {
      toAddProduct,
    },
  });
  // console.log(state);
};

export const handleRemove = (dispatch, event, state) => {
  dispatch({
    type: "remove_product",
    payload: {
      index: event.target.value,
    },
  });
};

export const handleDecrease = (dispatch, event, state) => {
  dispatch({
    type: "decrease",
    payload: {
      index: event.target.value,
    },
  });
};

export const handleIncrease = (dispatch, event, state) => {
  dispatch({
    type: "increase",
    payload: {
      index: event.target.value,
    },
  });
};

export const handleSellSubmit = (
  dispatch,
  state,
  defaultFormFields,
  productAmount
) => {
  dispatch({
    type: "sell_submit",
    payload: {
      customerName: state.customerName.length,
      productAmount,
      defaultFormFields: defaultFormFields,
    },
  });
};

export const handleBuySubmit = (
  dispatch,
  state,
  defaultFormFields,
  productAmount
) => {
  dispatch({
    type: "buy_submit",
    payload: {
      supplierName: state.supplierName,
      supplierAddress: state.supplierAddress,
      supplierPhone: state.supplierPhone,
      productAmount,
      defaultFormFields: defaultFormFields,
    },
  });
};
