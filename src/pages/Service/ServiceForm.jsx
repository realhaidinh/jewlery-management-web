import { useState, useReducer } from "react";
import formReducer from "../../reducer/form";
import { FormContainer, CartContainer } from "../../components/Container";
import { Grid, TextField, Typography } from "@mui/material";
import { ControlButton } from "../../components/Controls";
import { resetForm, handleChange } from "../../reducer/form_actions";

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
  const [state, dispatch] = useReducer(formReducer, defaultFormFields);

  let productAmount = state.serviceCart.length;

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
        defaultFormFields: defaultFormFields,
      },
    });
  };

  console.log(state);

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
          sx={{ width: "250px" }}
        />
      </Grid>
      <Grid item xs={4}>
        <div>
          <ControlButton variant="outlined" onClick={() => resetForm(dispatch, defaultFormFields)}>
            Reset
          </ControlButton>
          {/* <ControlButton onClick={handleSubmit}>Submit</ControlButton> */}
        </div>
      </Grid>
      <Grid item xs={5} marginLeft="10px">
        <TextField
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
          name="customerPhone"
          value={state.customerPhone}
          onChange={(e) => handleChange(dispatch, e)}
          sx={{ width: "250px" }}
        />
      </Grid>
      <Grid item xs={5} marginLeft="10px">
        <TextField
          label="Trả trước (sau đổi thành slider)"
          placeholder="Nhập số tiền trả trước"
          name="prePaid"
          value={state.prePaid}
          onChange={(e) => handleChange(dispatch, e)}
          sx={{ width: "250px" }}
          type="number"
        />
      </Grid>
      <Grid item xs={12}>
        {/* Gio Hang */}
        {/* <CartContainer
          title="Dịch vụ"
          productAmount={productAmount}
          cart={state.serviceCart}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleRemove={handleRemove}
          open={open}
          AddItem={handleAdd}
          onButtonClick={handleClickOpen}
          onButtonClose={handleClose}
          varient="service"
        ></CartContainer> */}
      </Grid>
    </FormContainer>
  );
};

export default ServiceForm;
