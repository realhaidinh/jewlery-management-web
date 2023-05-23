import * as React from 'react';
import { Box, Typography, TextField, Stack, Paper, Divider } from '@mui/material';
import { ModalContainer } from '../Container';

export default function ProductDetailModal({ onButtonClose, open, title, detail }) {
  const modalTitle = (
    <div>
      <Typography variant="h4" component="h4" mt="12px">
        <b>{title}</b>
      </Typography>
      <Typography variant="subtitle1">Ngày lập: {detail.date}</Typography>
    </div>
  );
  return (
    <ModalContainer title={modalTitle} open={open} onClose={onButtonClose}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={1}>
          <TextField disabled label="Mã hóa đơn" value={detail.id} sx={{ width: '250px' }} />
          <TextField disabled label="Khách hàng" value={detail.user} sx={{ width: '250px' }} />
        </Stack>
        <Paper variant="outlined" sx={{ padding: '16px' }}>
          <Typography sx={{ mb: '28px', fontSize: '1.8rem' }}>
            <b>Giỏ hàng</b>
          </Typography>
          <Box sx={{ width: '100%', height: '30px', fontSize: '1.4rem', display: 'flex', textAlign: 'center' }}>
            <Box width="5%">
              <b>#</b>
            </Box>
            <Box width="50%" textAlign="left">
              <b>Sản phẩm</b>
            </Box>
            <Box width="15%">
              <b>Đơn giá</b>
            </Box>
            <Box width="15%">
              <b>Số lượng</b>
            </Box>
            <Box width="15%">
              <b>Số tiền</b>
            </Box>
          </Box>
          <Divider />
          <Divider />
          {detail.cart.map((product, index) => (
            <div key={index}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  mt: '4px',
                  mb: '4px',
                  fontSize: '1.2rem',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box width="5%">{index + 1}</Box>
                <Box width="50%" textAlign="left">
                  <div>
                    <h3>{product.productName}</h3>
                    <span>({product.productType})</span>
                  </div>
                </Box>
                <Box width="15%">₫{product.price.toLocaleString()}</Box>
                <Box width="15%">{product.quantity}</Box>
                <Box width="15%" color="red">
                  ₫{(product.price * product.quantity).toLocaleString()}
                </Box>
              </Box>
              <Divider />
            </div>
          ))}
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '16px',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          <Typography variant="h5">Tổng thanh toán ({detail.cart.length} sản phẩm):</Typography>
          <Typography variant="h5" color="red" ml="4px">
            <b>₫{detail.totalPaid.toLocaleString()}</b>
          </Typography>
        </Paper>
      </Stack>
    </ModalContainer>
  );
}
