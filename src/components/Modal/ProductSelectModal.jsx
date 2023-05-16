import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { ModalButton, ControlButton } from '../Controls';
import productData from '../../pages/productData';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductSelectModal({ AddItem, onButtonClick, onButtonClose, open }) {
  return (
    <ModalButton
      buttonName="Thêm"
      open={open}
      onClick={onButtonClick}
      onClose={onButtonClose}
      startIcon={<AddShoppingCartIcon />}
    >
      <Box>
        <Box marginBottom="10px" textAlign="center">
          <Typography variant="h4" component="h4">
            <b>Thêm sản phẩm</b>
          </Typography>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: '#fafafa', fontSize: '1.4rem' }}>
              <TableCell width="5%">#</TableCell>
              <TableCell width="10%">Mã sản phẩm</TableCell>
              <TableCell width="30%">Tên sản phẩm</TableCell>
              <TableCell width="15%">Loại sản phẩm</TableCell>
              <TableCell width="15%">Đơn giá</TableCell>
              <TableCell width="15%">Tình trạng</TableCell>
              <TableCell width="10%"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productData.map((row, index) => {
              {
                /* console.log(productData[index]); */
              }
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{row.productID}</TableCell>
                  <TableCell>{row.productName}</TableCell>
                  <TableCell>{row.productType}</TableCell>
                  <TableCell>{row.productPrice}</TableCell>
                  <TableCell>Còn hàng</TableCell>
                  <TableCell>
                    <ControlButton value={index} onClick={AddItem} variant="outlined" color="success">
                      + Thêm
                    </ControlButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ModalButton>
  );
}
