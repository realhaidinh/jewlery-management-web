import * as React from 'react';
import { Box } from '@mui/material';
import { ModalButton } from '../Controls';
import InfoIcon from '@mui/icons-material/Info';

export default function ProductDetailModal({ onButtonClick, onButtonClose, open }) {
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
        <Box marginBottom="10px" textAlign="center">
          <h2>Phiếu bán hàng</h2>
        </Box>
      </Box>
    </ModalButton>
  );
}
