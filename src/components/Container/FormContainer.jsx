import { Grid, Stack, Typography } from '@mui/material';
import Container from './Container';
import ControlButton from '../Controls/ControlButton';
import CheckIcon from '@mui/icons-material/Check';

const FormContainer = ({
  show,
  title,
  formID,
  currentDate,
  totalPrice,
  productAmount,
  resetForm,
  submitForm,
  children,
}) => {
  return (
    <Stack spacing={2} sx={{ p: '20px', display: `${show ? 'block' : 'none'}` }}>
      <Container>
        <form>
          <Typography variant="h4">
            <b>{title}</b>
          </Typography>
          <Typography>Ngày lập: {currentDate.toLocaleDateString()}</Typography>
          <Grid container spacing={2} sx={{ marginTop: '5px' }}>
            <Grid item xs={12}>
              <p>Mã phiếu: {formID}</p>
            </Grid>
            {children}
          </Grid>
        </form>
      </Container>
      {productAmount !== 0 && (
        <Container>
          <Stack direction="row" flex="1" alignItems="center">
            <ControlButton
              variant="text"
              color="warning"
              onClick={resetForm}
              width="80px"
              height="40px"
              fontSize="1.1rem"
            >
              XÓA PHIẾU
            </ControlButton>
            <Stack flexGrow="1" />
            <Typography sx={{ fontSize: '1.2rem' }}>Tổng thanh toán ({productAmount} sản phẩm):</Typography>
            <Typography sx={{ ml: '5px', mr: '10px', fontSize: '1.6rem', color: 'red' }}>
              <b>₫{totalPrice.toLocaleString()}</b>
            </Typography>
            <ControlButton
              color="success"
              onClick={submitForm}
              startIcon={<CheckIcon />}
              width="150px"
              height="40px"
              fontSize="1.1rem"
            >
              LẬP PHIẾU
            </ControlButton>
          </Stack>
        </Container>
      )}
    </Stack>
  );
};

export default FormContainer;
