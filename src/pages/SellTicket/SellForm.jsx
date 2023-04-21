import { useState } from 'react';
import { ButtonGroup, Button, Grid, TextField, Paper, Box, Typography } from '@mui/material';
import productData from './productData';
import ProductSelect from '../../components/Modal/ProductSelect';
import { FormContainer, CartContainer } from '../../components/Container';
import { ControlButton, ModalButton } from '../../components/Controls';

const defaultFormFields = {
  sellFormID: '',
  currentDate: new Date(),
  customerName: '',
  productCart: [],
};

const SellForm = () => {
  const [reload, setReload] = useState(0);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { sellFormID, currentDate, customerName, productCart } = formFields;
  const resetForm = () => {
    const resetCart = [];
    setFormFields({ ...defaultFormFields, productCart: [...resetCart] });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  // Product Cart
  let productAmount = formFields.productCart.length;
  let totalPrice = formFields.productCart.reduce(
    (totalP, product) => totalP + product.productPrice * product.productQuantity,
    0,
  );
  const handleAdd = (event) => {
    const value = event.target.value;
    let cloneCart = formFields.productCart;
    const check = cloneCart.findIndex((product) => product.productID === productData[value].productID);
    check === -1
      ? cloneCart.push({ ...productData[value], productQuantity: 1 })
      : (cloneCart[check].productQuantity += 1);
    setFormFields({ ...formFields, productCart: [...cloneCart] });
  };
  const handleRemove = (event) => {
    let cloneCart = formFields.productCart;
    cloneCart.splice(event.target.value, 1);
    setFormFields({ ...formFields, productCart: [...cloneCart] });
  };
  const handleQuantity = (event) => {
    formFields.productCart[event.target.value].productQuantity +=
      event.target.name === 'Increase' ? 1 : formFields.productCart[event.target.value].productQuantity > 1 ? -1 : 0;
    setReload(reload + 1);
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
    let a = formFields.customerName.length;

    if (a && productAmount) {
      console.log(formFields);
      alert('Nhận phiếu thành công');
      resetForm();
    } else {
      a === 0 ? alert('Vui lòng điền thông tin khách hàng.') : alert('Vui lòng thêm hàng vào giỏ.');
    }
  };

  return (
    <>
      <FormContainer title="Phiếu bán hàng" formID={formFields.sellFormID} currentDate={formFields.currentDate}>
        <Grid item xs={7.5} marginLeft="10px">
          <TextField
            label="Tên khách hàng"
            placeholder="Nhập tên"
            name="customerName"
            value={formFields.customerName}
            onChange={handleChange}
            sx={{ width: '250px' }}
          />
        </Grid>
        <Grid item xs={4}>
          <div>
            <ControlButton variant="outlined" onClick={resetForm}>
              Reset
            </ControlButton>
            <ControlButton onClick={handleSubmit}>Submit</ControlButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          {/* Gio Hang */}
          <CartContainer title="Giỏ hàng" productAmount={productAmount}>
            <Grid item xs={1}>
              {/* Click nut hien bang them san pham */}
              <ModalButton buttonName="Thêm" open={open} onClick={handleClickOpen} onClose={handleClose}>
                <Box>
                  <Box marginBottom="10px" textAlign="center">
                    <h2>Thêm sản phẩm</h2>
                  </Box>
                </Box>
                {/* Product Table */}
                <ProductSelect onClick={handleAdd} />
              </ModalButton>
            </Grid>
            <Grid item xs={12} marginTop="10px">
              {formFields.productCart.map((product, index) => (
                <Box key={index} width="auto" display="flex" marginTop="5px" justifyContent="space-between">
                  <Box width="5%">#{index + 1}</Box>
                  <Box width="80%" display="flex" justifyContent="space-between">
                    <div>
                      <h3>{product.productName}</h3>
                      <span>({product.productType})</span>
                    </div>
                    <Box textAlign="right">
                      {product.productPrice.toLocaleString()} <b>VNĐ</b> x
                      <ButtonGroup variant="outlined" size="small" aria-label="outlined button group">
                        <Button name="Decrease" value={index} onClick={handleQuantity}>
                          -
                        </Button>
                        <Button>{product.productQuantity}</Button>
                        <Button name="Increase" value={index} onClick={handleQuantity}>
                          +
                        </Button>
                      </ButtonGroup>
                    </Box>
                  </Box>
                  <Button value={index} onClick={handleRemove}>
                    Xóa
                  </Button>
                </Box>
              ))}
            </Grid>
          </CartContainer>
          <Typography align="right" fontSize="18px">
            Thành tiền: {totalPrice.toLocaleString()} VNĐ
          </Typography>
        </Grid>
      </FormContainer>
    </>
  );
};

export default SellForm;
