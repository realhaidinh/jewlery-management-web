import { useState, useReducer  } from "react";
import formReducer from "../../components/reducer/form";
import { FormContainer, CartContainer } from "../../components/Container";
import { Grid, TextField, Typography } from "@mui/material";
import { ControlButton } from "../../components/Controls";
import ProductSelectModal from "../../components/Modal/ProductSelectModal";

const defaultFormFields = {
  serviceFormID: "",
  currentDate: new Date(),
  customerName: "",
  customerPhone: "",
  total: 0,
  prePaid: 0,
  remain: 0,
  serviceCart: [],
};

const ServiceForm = ({ show }) => {

  const [username, setUsername] = useState("");
  const [state, dispatch] = useReducer(formReducer, defaultFormFields);

  // Dispatches
  const resetForm = () => {
    dispatch({
      type: "reset_form",
      payload: {
        defaultFormFields
      }
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "input_change",
      payload: {
        name: name,
        value: value,
      }
    });
  };

  let productAmount = state.serviceCart.length;
  let totalPrice = state.serviceCart.reduce(
    (totalP, product) =>
      totalP + product.productPrice * product.productQuantity,
    0
  );

  const handleAdd = (event) => {
    const toAddProduct = productData[event.target.value];
    dispatch({
      type: "add_product",
      payload: {
        toAddProduct
      }
    });
  };
  const handleRemove = (event) => {
    dispatch({
      type: "remove_product",
      payload: {
        index: event.target.value,
      }
    });
  };
  const handleDecrease = (event) => {
    dispatch({
      type: "decrease",
      payload: {
        index: event.target.value,
      }
    });
    // console.log(state);
  };
  const handleIncrease = (event) => {
    dispatch({
      type: "increase",
      payload: {
        index: event.target.value,
      }
    });
  };

  // Modal Button
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  // Submit Form
  const handleSubmit = (event) => {
    dispatch({
      type: "sell_submit",
      payload: {
        customerName: state.customerName.length,
        productAmount,
        defaultFormFields: defaultFormFields
      }
    });
  };

  return (
    <FormContainer
      title="Phiếu bán hàng"
      formID={state.sellFormID}
      currentDate={state.currentDate}
      show={show}
    >
      <Grid item xs={7.5} marginLeft="10px">
        <TextField
          label="Tên khách hàng"
          placeholder="Nhập tên"
          name="customerName"
          value={state.customerName}
          onChange={handleChange}
          sx={{ width: "250px" }}
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
      <Grid item xs={5} marginLeft="10px">
        <TextField
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
          name="customerPhone"
          value={state.customerPhone}
          onChange={handleChange}
          sx={{ width: "250px" }}
        />
      </Grid>
      <Grid item xs={5} marginLeft="10px">
        <TextField
          label="Trả trước"
          placeholder="Nhập số tiền trả trước"
          name="prePaid"
          value={state.prePaid}
          onChange={handleChange}
          sx={{ width: "250px" }}
        />
      </Grid>
      <Grid item xs={12}>
        {/* Gio Hang */}
        <CartContainer title="Dịch vụ" productAmount={productAmount}>
          <Grid item xs={1}>
            {/* Product Table */}
            <ProductSelectModal
              open={open}
              AddItem={handleAdd}
              onButtonClick={handleClickOpen}
              onButtonClose={handleClose}
            />
          </Grid>
          <Grid item xs={12} marginTop="10px">
            {state.serviceCart.map((product, index) => (
              <Box
                key={index}
                width="auto"
                display="flex"
                marginTop="5px"
                justifyContent="space-between"
              >
                <Box width="5%">#{index + 1}</Box>
                <Box width="80%" display="flex" justifyContent="space-between">
                  <div>
                    <h3>{product.productName}</h3>
                    <span>({product.productType})</span>
                  </div>
                  <Box textAlign="right">
                    {product.productPrice.toLocaleString()} <b>VNĐ</b> x
                    <ButtonGroup
                      variant="outlined"
                      size="small"
                      aria-label="outlined button group"
                    >
                      <Button
                        name="Decrease"
                        value={index}
                        onClick={handleDecrease}
                      >
                        -
                      </Button>
                      <Button>{product.productQuantity}</Button>
                      <Button
                        name="Increase"
                        value={index}
                        onClick={handleIncrease}
                      >
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
  );
};

export default ServiceForm;