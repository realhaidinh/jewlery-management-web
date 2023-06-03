import { useReducer, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import productData from '../productData';
import { FormContainer, CartContainer } from '../../components/Container';
import formReducer from '../../reducer/form';
import {
  resetForm,
  handleChange,
  handleAdd,
  handleRemove,
  handleDecrease,
  handleIncrease,
  handleSellSubmit,
} from '../../reducer/form_actions';

const defaultFormFields = {
  sellFormID: '',
  currentDate: new Date(),
  customerName: '',
  productCart: [],
  total: 0,
};

const initialSearchInput = '';

const SellForm = ({ show }) => {
  const [state, dispatch] = useReducer(formReducer, defaultFormFields);

  // Dispatches

  let productAmount = state.productCart.length;

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

  console.log(state);

  return (
    <FormContainer
      show={show}
      title="Lập phiếu bán hàng"
      currentDate={state.currentDate}
      formID={state.sellFormID}
      totalPrice={state.total}
      productAmount={productAmount}
      resetForm={() => resetForm(dispatch, defaultFormFields)}
      submitForm={() => handleSellSubmit(dispatch, state, defaultFormFields, productAmount)}
    >
      <Grid item xs={12}>
        <TextField
          label="Khách hàng"
          placeholder="Nhập tên"
          name="customerName"
          value={state.customerName}
          onChange={(e) => handleChange(dispatch, e)}
          sx={{ width: '250px' }}
        />
      </Grid>
      <Grid item xs={12}>
        {/* Gio Hang */}
        <CartContainer
          title="Giỏ hàng"
          productAmount={productAmount}
          cart={state.productCart}
          // Thay doi so luong, xoa san pham trong productCart
          handleDecrease={(e) => handleDecrease(dispatch, e, state)}
          handleIncrease={(e) => handleIncrease(dispatch, e, state)}
          handleRemove={(e) => handleRemove(dispatch, e, state)}
          // Cho Modal Select
          open={open}
          AddItem={(e) => handleAdd(dispatch, e, productData, state)}
          onButtonClick={handleClickOpen}
          onButtonClose={handleClose}
          varient="ticket"
        />
      </Grid>
    </FormContainer>
  );
};

export default SellForm;
