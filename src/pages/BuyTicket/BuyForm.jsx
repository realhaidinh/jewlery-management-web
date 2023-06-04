import { useReducer, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import productData from '../productData';
import supplierData from '../supplierData';
import { FormContainer, CartContainer } from '../../components/Container';
import formReducer from '../../reducer/form';
import Dropdown from '../../components/Container/Dropdown';
import CreateNewModal from '../../components/Modal/CreateNewModal';
import {
  resetForm,
  handleChange,
  handleAdd,
  handleDecrease,
  handleIncrease,
  handleRemove,
  handleBuySubmit,
} from '../../reducer/form_actions';

const defaultFormFields = {
  buyFormID: '',
  currentDate: new Date(),
  supplierName: '',
  supplierAddress: '',
  supplierPhone: '',
  productCart: [],
  total: 0,
};

const initialSearchInput = '';

const createSupplierFields = [
  {
    name: 'supplierName',
    label: 'Tên nhà cung cấp',
    placeholder: 'Tên nhà cung cấp',
  },
  {
    name: 'supplierAddress',
    label: 'Địa chỉ nhà cung cấp',
    placeholder: 'Địa chỉ nhà cung cấp',
  },
  {
    name: 'supplierPhone',
    label: 'Số điện thoại nhà cung cấp',
    placeholder: 'Số điện thoại nhà cung cấp',
  },
];

const BuyForm = ({ show }) => {
  const [state, dispatch] = useReducer(formReducer, defaultFormFields);

  const [dropdownShow, setDropdownShow] = useState(false);

  // Dispatches
  const handleSupplierPick = (e) => {
    setDropdownShow(true);
    dispatch({
      type: 'supplier_pick',
      payload: {
        id: e.currentTarget.id,
        suppliers: supplierData,
      },
    });
  };

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

  const handleCreateNewSupplier = (submitObj) => {
    dispatch({
      type: 'create_new_supplier',
      payload: {
        newSupplier: submitObj,
      },
    });
  };

  // SearchBox
  const [SearchInput, setSearchInput] = useState(initialSearchInput);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const deleteSearchInput = () => {
    setSearchInput(initialSearchInput);
  };

  console.log(state);

  return (
    <FormContainer
      show={show}
      title="Lập phiếu mua hàng"
      currentDate={state.currentDate}
      formID={state.buyFormID}
      totalPrice={state.total}
      productAmount={productAmount}
      resetForm={() => resetForm(dispatch, defaultFormFields)}
      submitForm={() => handleBuySubmit(dispatch, state, defaultFormFields, productAmount)}
    >
      <Grid item xs={7.5} marginLeft="10px">
        <TextField
          label="Tên nhà cung cấp"
          placeholder="Nhập tên"
          name="supplierName"
          value={state.supplierName}
          onChange={(e) => handleChange(dispatch, e)}
          sx={{ width: '250px' }}
        />
        {/* Dropdown chọn nhanh supplier, current có tác dụng filter */}
        <Dropdown
          current={state.supplierName}
          data={supplierData}
          handler={handleSupplierPick}
          showOverridden={dropdownShow}
        />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <TextField
          disabled
          label="Địa chỉ nhà cung cấp"
          name="supplierAddress"
          value={state.supplierAddress}
          sx={{ width: '250px' }}
          helperText="Không cần nhập"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          disabled
          label="Số điện thoại"
          name="supplierPhone"
          value={state.supplierPhone}
          sx={{ width: '250px' }}
          helperText="Không cần nhập"
        />
      </Grid>
      <Grid item xs={4}>
        <CreateNewModal
          title="Thêm nhà cung cấp"
          fields={createSupplierFields}
          handleCreateNew={handleCreateNewSupplier}
        ></CreateNewModal>
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
          // Cho Search Box
          SearchInput={SearchInput}
          handleSearchInput={handleSearchInput}
          deleteSearchInput={deleteSearchInput}
        />
      </Grid>
    </FormContainer>
  );
};

export default BuyForm;
