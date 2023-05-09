import { useReducer, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import productData from '../productData';
import supplierData from '../supplierData';
import { FormContainer, CartContainer } from '../../components/Container';
import formReducer from '../../components/reducer/form';
import Dropdown from '../../components/Container/Dropdown';
import CreateNewModal from '../../components/Modal/CreateNewModal';

const defaultFormFields = {
  buyFormID: '',
  currentDate: new Date(),
  supplierName: '',
  supplierAddress: '',
  supplierPhone: '',
  productCart: [],
};

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
  const resetForm = (e) => {
    dispatch({
      type: 'reset_form',
      payload: {
        defaultFormFields,
      },
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDropdownShow(false);
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
  // Submit Form
  const handleSubmit = (event) => {
    dispatch({
      type: 'buy_submit',
      payload: {
        supplierName: state.supplierName,
        supplierAddress: state.supplierAddress,
        supplierPhone: state.supplierPhone,
        productAmount,
        defaultFormFields: defaultFormFields,
      },
    });
  };

  const handleCreateNewSupplier = (submitObj) => {
    dispatch({
      type: 'create_new_supplier',
      payload: {
        newSupplier: submitObj,
      },
    });
  };

  console.log(state);

  return (
    <FormContainer
      show={show}
      title="Lập phiếu mua hàng"
      currentDate={state.currentDate}
      formID={state.buyFormID}
      totalPrice={totalPrice}
      productAmount={productAmount}
      resetForm={resetForm}
      submitForm={handleSubmit}
    >
      <Grid item xs={7.5} marginLeft="10px">
        <TextField
          label="Tên nhà cung cấp"
          placeholder="Nhập tên"
          name="supplierName"
          value={state.supplierName}
          onChange={handleChange}
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
          onChange={handleChange}
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
        />
      </Grid>
    </FormContainer>
  );
};

export default BuyForm;
