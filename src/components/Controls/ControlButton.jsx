import { Button } from '@mui/material';

const ControlButton = ({ variant, color, onClick, children }) => {
  return (
    <Button
      variant={variant || 'contained'}
      color={color || 'primary'}
      onClick={onClick}
      sx={{ width: '100px', height: '35px', margin: '3px' }}
    >
      {children}
    </Button>
  );
};

export default ControlButton;
