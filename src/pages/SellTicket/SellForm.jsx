import { useReducer, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import productData from '../productData';
import { FormContainer, CartContainer } from '../../components/Container';
import formReducer from '../../components/reducer/form';

const defaultFormFields = {
  sellFormID: '',
  currentDate: new Date(),
  customerName: '',
  productCart: [],
};

const initialSearchInput = '';

const SellForm = ({ show }) => {
  const [state, dispatch] = useReducer(formReducer, defaultFormFields);

  // Dispatches
  const resetForm = () => {
    dispatch({
      type: 'reset_form',
      payload: {
        defaultFormFields,
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: 'input_change',
      payload: {
        name: name,
        value: value,
      },
    });
  };

  let productAmount = state.productCart.length;
  let totalPrice = state.productCart.reduce(
    (totalP, product) => totalP + product.productPrice * product.productQuantity,
    0,
  );

  const handleAdd = (event) => {
    const toAddProduct = productData[event.target.value];
    dispatch({
      type: 'add_product',
      payload: {
        toAddProduct,
      },
    });
  };

  const handleRemove = (event) => {
    dispatch({
      type: 'remove_product',
      payload: {
        index: event.target.value,
      },
    });
  };

  const handleDecrease = (event) => {
    dispatch({
      type: 'decrease',
      payload: {
        index: event.target.value,
      },
    });
    // console.log(state);
  };

  const handleIncrease = (event) => {
    dispatch({
      type: 'increase',
      payload: {
        index: event.target.value,
      },
    });
  };

  // Modal Button
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  // SearchBox
  const [SearchInput, setSearchInput] = useState(initialSearchInput);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const deleteSearchInput = () => {
    setSearchInput(initialSearchInput);
  };

  // Submit Form
  const handleSubmit = (event) => {
    dispatch({
      type: 'sell_submit',
      payload: {
        customerName: state.customerName.length,
        productAmount,
        defaultFormFields: defaultFormFields,
      },
    });
  };

  return (
    <FormContainer
      show={show}
      title="Lập phiếu bán hàng"
      currentDate={state.currentDate}
      formID={state.sellFormID}
      totalPrice={totalPrice}
      productAmount={productAmount}
      resetForm={resetForm}
      submitForm={handleSubmit}
    >
      <Grid item xs={12}>
        <TextField
          label="Khách hàng"
          placeholder="Nhập tên"
          name="customerName"
          value={state.customerName}
          onChange={handleChange}
          sx={{ width: '250px' }}
        />
      </Grid>
      <Grid item xs={12}>
        {/* Gio Hang */}
        <CartContainer
          title="Giỏ hàng"
          productAmount={productAmount}
          productCart={state.productCart}
          // Thay doi so luong, xoa san pham trong productCart
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleRemove={handleRemove}
          // Cho Modal Select
          open={open}
          AddItem={handleAdd}
          onButtonClick={handleClickOpen}
          onButtonClose={handleClose}
          // Cho Search Box
          SearchInput={SearchInput}
          handleSearchInput={handleSearchInput}
          deleteSearchInput={deleteSearchInput}
        />
      </Grid>
    </FormContainer>
  );
};

export default SellForm;
