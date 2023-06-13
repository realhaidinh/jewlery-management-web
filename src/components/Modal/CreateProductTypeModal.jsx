import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { React, useEffect, useState } from "react";
import { useUserStore } from "../../../store";
import Alert from "@mui/material/Alert";
import { createProductType } from "../../api/producttype";

// Use for adding supplier only since the api called is unique
const CreateProductTypeModal = ({ title, producttypes, setRefetch }) => {
  // Fields is an array of multiple objects,
  // each must have these properties: name, label, type, placeholder
  const [submitObj, setSubmitObj] = useState({
    name: "",
    unit: "",
    interest: 0,
  });
  const [open, setOpen] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [interestError, setInterestError] = useState(false);
  const [unitError, setUnitError] = useState(false);
  const token = useUserStore((state) => state.token);
  const [errorMsg, setErrorMsg] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const duplicate = producttypes.findIndex(
      (type) => type.name === submitObj.name
    );
    if (duplicate !== -1) {
      setErrorMsg("Trùng tên loại sản phẩm khác");
      setError(true);
    }
    else {
      setErrorMsg("");
      setError(false);
    }
  }, [submitObj]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    if (!submitObj.name || !submitObj.unit || !submitObj.interest) {
      alert("Vui lòng nhập đủ các trường");
      return;
    }
    setIsLoading(true);
    setSubmitObj({
      ...submitObj,
      interest: Number(submitObj.interest),
    });
    try {
      await createProductType(token, submitObj);
      setRefetch((prev) => !prev);
      alert("Thêm loại sản phẩm thành công");
    } catch (error) {
      alert("Có lỗi xảy ra");
    }
    setIsLoading(false);

    setSubmitObj({
      name: "",
      unit: "",
      interest: 0,
    });
    setOpen(false);
  };
  const handleChange = (e) => {
    setSubmitObj({
      ...submitObj,
      [e.target.name]: e.target.value,
    });
  };

  console.log(submitObj);
  return (
    <>
      <Button onClick={handleOpen}>{title}</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: 3 }}>
            Nhập đầy đủ các thông tin dưới.
          </DialogContentText>

          <TextField
            id="name"
            name="name"
            label="Tên loại sản phẩm"
            fullWidth
            placeholder="Tên loại sản phẩm"
            sx={{ marginTop: 2 }}
            value={submitObj.name}
            onChange={handleChange}
            required
            error={nameError}
            helperText={nameError ? "Vui lòng nhập tên" : ""}
            inputProps={{
              onBlur: () => {
                if (!submitObj.name.length) setNameError(true);
              },
              onFocus: () => {
                setNameError(false);
              },
            }}
          />
          <TextField
            id="unit"
            name="unit"
            label="Đơn vị tính"
            fullWidth
            placeholder="Đơn vị tính"
            sx={{ marginTop: 2 }}
            value={submitObj.unit}
            onChange={handleChange}
            required
            error={unitError}
            helperText={unitError ? "Vui lòng nhập đơn vị" : ""}
            inputProps={{
              onBlur: () => {
                if (!submitObj.unit.length) setUnitError(true);
              },
              onFocus: () => {
                setUnitError(false);
              },
            }}
          />
          <TextField
            id="interest"
            name="interest"
            label="Phần trăm lợi nhuận"
            fullWidth
            placeholder="Phần trăm lợi nhuận"
            sx={{ marginTop: 2 }}
            value={submitObj.supplierAddress}
            onChange={handleChange}
            required
            error={interestError}
            helperText={
              interestError ? "Vui lòng nhập phần trăm lợi nhuận" : ""
            }
            inputProps={{
              onBlur: () => {
                if (!Number(submitObj.interest)) setInterestError(true);
              },
              onFocus: () => {
                setInterestError(false);
              },
              style: {
                fontSize: "1.5rem",
                height: 20,
                textAlign: "center",
              },
              type: "number",
              step: 1,
              min: 1,
              max: 100,
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />

          {errorMsg ? <Alert severity="error">{errorMsg}</Alert> : <></>}

          <DialogActions sx={{ marginTop: 5 }}>
            <Button onClick={handleClose}>Hủy</Button>
            <Button
              onClick={handleSubmit}
              disabled={isLoading || error}
              color="success"
              variant="contained"
            >
              Xong
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateProductTypeModal;
