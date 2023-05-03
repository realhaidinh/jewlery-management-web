import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { React, useState } from "react";

const CreateNewModal = ({ title, fields, handleCreateNew }) => {
  // Fields is an array of multiple objects,
  // each must have these properties: name, label, type, placeholder
  const [submitObj, setSubmitObj] = useState({
    supplierName: "",
    supplierAddress: "",
    supplierPhone: ""
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleSubmit = () => {
    handleCreateNew(submitObj);
    setOpen(false);
    setSubmitObj({
      supplierName: "",
      supplierAddress: "",
      supplierPhone: ""
    });
  }
  const handleChange = (e) => {
    setSubmitObj({
      ...submitObj,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
    <Button onClick={handleOpen}>
      {title}
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{ marginBottom: 3 }}
        >Nhập đầy đủ các thông tin dưới.</DialogContentText>

        {fields.map((field, idx) => (
          <TextField
            autoFocus={idx === 0 ? true : false}
            id={field.name}
            name={field.name}
            label={field.label}
            fullWidth
            placeholder={field.placeholder}
            sx={{ marginTop: 2 }}
            value={submitObj[field.name]}
            onChange={handleChange}
          />
        ))}

        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleSubmit}>Xong</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default CreateNewModal;
