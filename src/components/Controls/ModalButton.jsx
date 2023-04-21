import { Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ModalButton = ({ buttonName, open, onClick, onClose, dialogTitle, children }) => {
  return (
    <>
      <Button onClick={onClick} color="primary" sx={{ position: 'flex-end' }}>
        {buttonName}
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={onClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>{children}</Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="contained" sx={{ marginBottom: '10px', marginRight: '5px' }}>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalButton;
