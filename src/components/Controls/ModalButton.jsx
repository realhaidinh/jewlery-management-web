import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
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
      <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="md">
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>{children}</Box>
        </DialogContent>
        <DialogActions>
          <ControlButton onClick={onClose} width="120px" height="35px" margin="0 12px 12px 0">
            Đóng
          </ControlButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalButton;
