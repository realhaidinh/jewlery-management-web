import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { ModalButton } from '../Controls';
import InfoIcon from '@mui/icons-material/Info';

export default function ProductDetailModal({ onButtonClick, onButtonClose, open, title }) {
  return (
    <ModalButton
      variant="text"
      buttonName="Chi tiết"
      color="secondary"
      endIcon={<InfoIcon />}
      open={open}
      onClick={onButtonClick}
      onClose={onButtonClose}
    >
      <Box>
        <Typography variant="h4" component="h4">
          <b>{title}</b>
        </Typography>
      </Box>
    </ModalButton>
  );
}
