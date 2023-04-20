import { Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ModelButton = ({ buttonName, open, onClick, onClose, dialogTitle, children, ...props }) => {
  return (
    <>
      <Button onClick={onClick} sx={{ position: 'flex-end' }}>
        {buttonName}
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={onClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>{children}</Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModelButton;
