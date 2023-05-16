import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Modal } from '@mui/material';
import ControlButton from './ControlButton';

const ModalButton = ({
  buttonName,
  variant,
  startIcon,
  endIcon,
  color,
  open,
  onClick,
  onClose,
  dialogTitle,
  children,
}) => {
  return (
    <>
      <ControlButton
        onClick={onClick}
        variant={variant || 'outlined'}
        color={color || 'primary'}
        startIcon={startIcon}
        endIcon={endIcon}
        fontSize="1.1rem"
      >
        {buttonName}
      </ControlButton>
      <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="lg">
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>{children}</Box>
        </DialogContent>
        <DialogActions>
          <ControlButton onClick={onClose} width="150px" height="40px">
            Đóng
          </ControlButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalButton;
