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
import Dropdown from "../Container/Dropdown";
import { getAllTypes } from "../../api/producttype";
import { createProduct } from "../../api/product";

// Use for adding supplier only since the api called is unique
const CreateProductModal = ({ title, products, setRefetch }) => {
  // Fields is an array of multiple objects,
  // each must have these properties: name, label, type, placeholder
  const [submitObj, setSubmitObj] = useState({
    name: "",
    ProductTypeId: "",
    typename: "",
    price: 0,
  });
  const [open, setOpen] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const token = useUserStore((state) => state.token);
  const [dropdownShow, setDropdownShow] = useState(false);

  const [productTypes, setProductTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getAllTypes(token);
        setProductTypes(res.result.data);
        setError(false);
      } catch (err) {
        setError(true);
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    setSubmitObj({
      ...submitObj,
      price: Number(submitObj.price),
    });
    try {
      await createProduct(token, submitObj);
      setRefetch(prev => !prev);
      alert("Thêm sản phẩm thành công");
    } catch (error) {
      alert("Có lỗi xảy ra");
    }
    setIsLoading(false);

    setSubmitObj({
      name: "",
      ProductTypeId: "",
      typename: "",
      price: 0,
    });
    setOpen(false);
  };
  const handleChange = (e) => {
    setSubmitObj({
      ...submitObj,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeType = (e) => {
    setDropdownShow(false);
    submitObj.typename = e.target.value;
  };

  const handleItemPick = (item) => {
    setDropdownShow(true);
    setSubmitObj({
      ...submitObj,
      typename: item.name,
      ProductTypeId: item.id,
    });
  };
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
            id="typename"
            name="typename"
            label="Loại sản phẩm"
            fullWidth
            placeholder="Loại sản phẩm"
            sx={{ marginTop: 2 }}
            value={submitObj.typename}
            onChange={handleChange}
            required
            error={typeError}
            helperText={typeError ? "Chọn loại sản phẩm" : ""}
            inputProps={{
              onBlur: () => {
                if (!submitObj.typename.length) setTypeError(true);
                setDropdownShow(false);
              },
              onFocus: () => {
                setTypeError(false);
              },
            }}
          />
          <Dropdown
            current={submitObj.typename}
            data={productTypes}
            handler={handleItemPick}
            showOverridden={dropdownShow}
          />

          <TextField
            id="name"
            name="name"
            label="Tên sản phẩm"
            fullWidth
            placeholder="Tên sản phẩm"
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
            id="price"
            name="price"
            label="Giá"
            fullWidth
            placeholder="Giá"
            sx={{ marginTop: 2 }}
            value={submitObj.supplierAddress}
            onChange={handleChange}
            required
            error={priceError}
            helperText={priceError ? "Vui lòng nhập giá" : ""}
            inputProps={{
              onBlur: () => {
                if (!Number(submitObj.price)) setPriceError(true);
              },
              onFocus: () => {
                setPriceError(false);
              },
              style: {
                fontSize: "1.5rem",
                height: 20,
                textAlign: "center",
              },
              type: "number",
              step: 50000,
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />

          <DialogActions sx={{ marginTop: 5 }}>
            <Button onClick={handleClose}>Hủy</Button>
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
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

export default CreateProductModal;
