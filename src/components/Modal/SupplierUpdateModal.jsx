import {
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ModalContainer } from "../Container";
import { ControlButton } from "../Controls";

// TODO: call api product type for selection
const SupplierUpdateModal = ({ open, onButtonClose, title, data }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAddress, setNewAddress] = useState("");
  // const [priceDisplay, setPriceDisplay] = useState(newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

  const modalTitle = (
    <div>
      <Typography variant="h4" component="h4" mt="12px">
        <b>{title}</b>
      </Typography>
    </div>
  );

  useEffect(() => {
    setNewName("");
    setNewPhone("");
    setNewAddress("");
  }, [open])

  const handleUpdateSupplier = async () => {
    //TODO:
  };

  return (
    <ModalContainer title={modalTitle} open={open} onClose={onButtonClose}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={1}>
          <TextField
            disabled
            label="Mã nhà cung cấp"
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
            label="Tên nhà cung cấp"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            sx={{ mb: "28px" }}
          />
          <TextField
            variant="outlined"
            id="id"
            label="Số điện thoại"
            value={newName}
            onChange={(e) => setNewPhone(e.target.value)}
            sx={{ mb: "28px" }}
          />
          <TextField
            variant="outlined"
            id="id"
            label="Địa chỉ"
            value={newName}
            onChange={(e) => setNewAddress(e.target.value)}
            sx={{ mb: "28px" }}
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
            onClick={handleUpdateSupplier}
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

export default SupplierUpdateModal;
