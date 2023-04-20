import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import productData from './productData';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Cart({ onClick }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Mã sản phẩm</TableCell>
            <TableCell>Tên sản phẩm</TableCell>
            <TableCell>Loại sản phẩm</TableCell>
            <TableCell>Đơn giá</TableCell>
            <TableCell> </TableCell>
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
                <TableCell>
                  <Button value={index} onClick={onClick}>
                    Thêm
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
