import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ControlButton from './ControlButton';
import AddIcon from '@mui/icons-material/Add';

const ModalButton = ({ buttonName, open, onClick, onClose, dialogTitle, children }) => {
  return (
    <>
      <ControlButton onClick={onClick} variant="outlined" color="primary" startIcon={<AddIcon />} fontSize="1rem">
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
