import { useState } from 'react';
import { ButtonGroup, Button, Grid, TextField, Paper, Box, Alert, Snackbar, Typography } from '@mui/material';
import ModalButton from './SellModal';
import productData from './productData';
import Cart from './Cart';

const defaultFormFields = {
  sellFormID: '',
  createdDate: new Date(),
  customerName: '',
  productName: '',
  productCart: [],
};

const SellForm = () => {
  const [reload, setReload] = useState(0);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { sellFormID, createdDate, customerID, customerName, productName } = formFields;
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  // Product Cart
  let productAmount = formFields.productCart.length;
  let totalPrice = formFields.productCart.reduce(
    (acc, product) => acc + product.productPrice * product.productQuantity,
    0,
  );
  const handleAdd = (event) => {
    const value = event.target.value;
    const check = formFields.productCart.findIndex((product) => product.productID === productData[value].productID);
    check === -1
      ? formFields.productCart.push({ ...productData[value], productQuantity: 1 })
      : (formFields.productCart[check].productQuantity += 1);
    setReload(reload + 1);
  };
  const handleRemove = (event) => {
    formFields.productCart.splice(event.target.value, 1);
    setReload(reload + 1);
  };
  const handleQuantity = (event) => {
    formFields.productCart[event.target.value].productQuantity +=
      event.target.name === 'Increase' ? 1 : formFields.productCart[event.target.value].productQuantity > 1 ? -1 : 0;
    setReload(reload + 1);
  };
  // Modal
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
    let b = formFields.productCart.length;
    if (a && b) {
      console.log(formFields);
      resetForm();
      alert('Nhận phiếu thành công');
    } else {
      alert('Vui lòng điền đủ thông tin. Xin cảm ơn!');
    }
  };

  return (
    <>
      <Paper
        sx={{
          padding: '20px',
          margin: '15px',
          width: 'auto',
          flexGrow: 1,
          backgroundColor: '#fff',
        }}
      >
        <form autoComplete="off">
          <h1>Hóa đơn bán hàng</h1>
          <Grid container spacing={2} sx={{ marginTop: '5px' }}>
            <Grid item xs={12}>
              <p>Mã hóa đơn: chưa biết</p>
              <p>Ngày lập: {formFields.createdDate.toLocaleDateString()}</p>
            </Grid>
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
                <Button variant="outlined" onClick={resetForm} sx={{ width: '100px', height: '35px', margin: '3px' }}>
                  Reset
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{ width: '100px', height: '35px', margin: '3px' }}
                >
                  Submit
                </Button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Paper
                variant="outlined"
                sx={{ width: 'auto', minHeight: '100px', padding: '20px', margin: '20px 10px' }}
              >
                <Grid container spacing={0.2}>
                  <Grid item xs={11}>
                    <h2>Giỏ hàng</h2>
                    {productAmount === 0 && <span>Giỏ hàng trống.</span>}
                    {productAmount > 0 && <span>Có {productAmount} mặt hàng trong giỏ.</span>}
                  </Grid>
                  <Grid item xs={1}>
                    <ModalButton buttonName="Thêm" open={open} onClick={handleClickOpen} onClose={handleClose}>
                      <Box>
                        <Box marginBottom="10px" textAlign="center">
                          <h2>Thêm sản phẩm</h2>
                        </Box>
                      </Box>
                      <Cart onClick={handleAdd} />
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
                </Grid>
              </Paper>
              <Typography align="right" fontSize="18px">
                Thành tiền: {totalPrice.toLocaleString()} VNĐ
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default SellForm;
