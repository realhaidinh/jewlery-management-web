import { useState, useReducer, useEffect } from 'react';
import formReducer from '../../reducer/form';
import { FormContainer, CartContainer } from '../../components/Container';
import { Grid, TextField, Typography } from '@mui/material';
import { ControlButton } from '../../components/Controls';
import {
  resetForm,
  handleChange,
  handleDecreaseService,
  handleIncreaseService,
  handleRemoveService,
} from '../../reducer/form_actions';
import { useUserStore } from '../../../store';
import { getAllServices } from '../../api/service';

const defaultFormFields = {
  serviceFormID: '',
  currentDate: new Date(),
  customerName: '',
  customerPhone: '',
  total: 0,
  prePaid: '',
  remain: 0,
  serviceCart: [],
};

const initialSearchInput = '';

const ServiceForm = ({ show }) => {
  const [state, dispatch] = useReducer(formReducer, defaultFormFields);

  let productAmount = state.serviceCart.length;

  const token = useUserStore(state => state.token);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
  // TODO: Submit Form
  const handleSubmit = (event) => {
    
  };


  const handleAddService = (service) => {
    dispatch({
      type: 'add_service',
      payload: {
        toAddService: service
      }
    })
  }

  const setPrePaidService = (id, value) => {
    dispatch({
      type: 'set_pre_paid_service',
      payload: {
        id,
        value
      }
    })
  }
  const setIncurredService = (id, value) => {
    
    dispatch({
      type: 'set_incurred_service',
      payload: {
        id,
        value,
      }
    })
  }

  // SearchBox
  const [SearchInput, setSearchInput] = useState(initialSearchInput);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const deleteSearchInput = () => {
    setSearchInput(initialSearchInput);
  };

  // console.log(token);
  console.log(state.serviceCart);

  return (
    <FormContainer
      show={show}
      title="Lập phiếu dịch vụ"
      formID={state.sellFormID}
      currentDate={state.currentDate}
      totalPrice={state.total}
      productAmount={productAmount}
      resetForm={() => resetForm(dispatch, defaultFormFields)}
      // submitForm={handleSubmit}
    >
      <Grid item xs={7.5} marginLeft="10px">
        <TextField
          label="Tên khách hàng"
          placeholder="Nhập tên"
          name="customerName"
          value={state.customerName}
          onChange={(e) => handleChange(dispatch, e)}
          sx={{ width: '250px' }}
        />
      </Grid>
      <Grid item xs={5} marginLeft="10px">
        <TextField
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
          name="customerPhone"
          value={state.customerPhone}
          onChange={(e) => handleChange(dispatch, e)}
          sx={{ width: '250px' }}
        />
      </Grid>
      <Grid item xs={12}>
        {/* Gio Hang */}
        <CartContainer
          title="Dịch vụ"
          productAmount={productAmount}
          cart={state.serviceCart}
          handleDecrease={(e) => handleDecreaseService(dispatch, e, state)}
          handleIncrease={(e) => handleIncreaseService(dispatch, e, state)}
          handleRemove={(e) => handleRemoveService(dispatch, e, state)}
          open={open}
          AddItem={handleAddService}
          onButtonClick={handleClickOpen}
          onButtonClose={handleClose}
          varient="service"
          // Cho Search Box
          SearchInput={SearchInput}
          handleSearchInput={handleSearchInput}
          deleteSearchInput={deleteSearchInput}
          setPrePaidService={setPrePaidService}
          setIncurredService={setIncurredService}
        ></CartContainer>
      </Grid>
    </FormContainer>
  );
};

export default ServiceForm;
