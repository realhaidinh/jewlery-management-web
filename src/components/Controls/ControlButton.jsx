import { Button } from '@mui/material';

const ControlButton = ({
  value,
  variant,
  color,
  width,
  height,
  margin,
  fontSize,
  onClick,
  startIcon,
  endIcon,
  children,
}) => {
  return (
    <Button
      value={value}
      variant={variant || 'contained'}
      color={color || 'primary'}
      onClick={onClick}
      sx={{ width: { width }, height: { height }, margin: { margin }, fontSize: { fontSize } }}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};

export default ControlButton;
