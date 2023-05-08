import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ControlButton from './ControlButton';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ModalButton = ({ buttonName, open, onClick, onClose, dialogTitle, children }) => {
  return (
    <>
      <ControlButton
        onClick={onClick}
        variant="outlined"
        color="primary"
        startIcon={<AddShoppingCartIcon />}
        fontSize="1.1rem"
      >
        {buttonName}
      </ControlButton>
      <Dialog disableEscapeKeyDown open={open} onClose={onClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>{children}</Box>
        </DialogContent>
        <DialogActions>
          <ControlButton onClick={onClose} variant="contained" sx={{ marginBottom: '10px', marginRight: '5px' }}>
            Đóng
          </ControlButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalButton;
