import {
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useEffect, useState } from "react";
import { ModalContainer } from "../Container";
import { ControlButton } from "../Controls";

// TODO: call api product type for selection
const ProductTypeUpdateModal = ({ open, onButtonClose, title, data }) => {
  const [newName, setNewName] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const [newIntereset, setNewIntereset] = useState(data.interest);
  // const [priceDisplay, setPriceDisplay] = useState(newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

  const modalTitle = (
    <div>
      <Typography variant="h4" component="h4" mt="12px">
        <b>{title}</b>
      </Typography>
    </div>
  );

  useEffect(() => {
    setNewIntereset(0);
  }, [open])

  const handleUpdateProduct = async () => {
    //TODO:
  };

  const handleIncrementPrice = () => {
    setNewIntereset(newIntereset + 1)
    // setPriceDisplay(newIntereset.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  }
  const handleDecrementPrice = () => {
    setNewIntereset(newIntereset - 1)
    // setPriceDisplay(newIntereset.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  }
  const handleChangeInterest = (e) => {
    setNewIntereset(Number(e.target.value))
    // setPriceDisplay(newIntereset.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  }

  return (
    <ModalContainer title={modalTitle} open={open} onClose={onButtonClose}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={1}>
          <TextField
            disabled
            label="Mã sản phẩm"
            value={data.id}
            sx={{ width: "250px" }}
          />
        </Stack>
        <Paper variant="outlined" sx={{ padding: "16px", display: "flex", flexDirection: 'column' }}>
          <Typography sx={{ mb: "28px", fontSize: "2.4rem" }}>
            <b>Điền thông tin chỉnh sửa</b>
          </Typography>
          <TextField
            variant="outlined"
            id="id"
            label="Tên loại sản phẩm"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            sx={{ mb: "28px" }}
          />
          <TextField
            variant="outlined"
            id="id"
            label="Đơn vị"
            value={newUnit}
            onChange={(e) => setNewUnit(e.target.value)}
            sx={{ mb: "28px" }}
          />
          <TextField
            variant="outlined"
            id="price"
            label="Phần trăm loại sản phẩm"
            type="text"
            value={newIntereset}
            onChange={handleChangeInterest}
            InputProps={{
              endAdornment: 
                <>
                  <InputAdornment position="end">₫</InputAdornment>
                  <IconButton color="secondary" sx={{marginLeft: "6px"}} onClick={handleIncrementPrice}><ArrowDropUpIcon fontSize="large" /></IconButton>
                  <IconButton color="secondary" sx={{marginLeft: "6px"}} onClick={handleDecrementPrice}><ArrowDropDownIcon fontSize="large" /></IconButton>
                </>,
            }}
          />
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "16px",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <ControlButton 
            onClick={handleUpdateProduct}
            color='success'
            width={130}
            fontSize={14}
            height={40}
          >Xong</ControlButton>
        </Paper>
      </Stack>
    </ModalContainer>
  );
};

export default ProductTypeUpdateModal;
