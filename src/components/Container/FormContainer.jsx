import { Grid, Stack, Typography, Button } from '@mui/material';
import Container from './Container';
const FormContainer = ({ show, title, formID, currentDate, resetForm, submitForm, children }) => {
  return (
    <Stack spacing={2} sx={{ p: '20px', display: `${show ? 'block' : 'none'}` }}>
      <Container>
        <form>
          <Typography variant="h5">
            <b>{title}</b>
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: '5px' }}>
            <Grid item xs={12}>
              <p>Mã phiếu: {formID}</p>
              <p>Ngày lập: {currentDate.toLocaleDateString()}</p>
            </Grid>
            {children}
          </Grid>
        </form>
      </Container>
      <Container>
        <Button variant="text" color="warning" onClick={resetForm}>
          XÓA PHIẾU
        </Button>
        <Button variant="contained" color="success" onClick={submitForm}>
          LẬP PHIẾU
        </Button>
      </Container>
    </Stack>
  );
};

export default FormContainer;
