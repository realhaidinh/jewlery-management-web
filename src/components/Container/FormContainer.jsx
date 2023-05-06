import { Grid, Stack, Button } from '@mui/material';
import Container from './Container';
const FormContainer = ({ title, formID, currentDate, show, resetForm, submitForm, children }) => {
  return (
    <Stack spacing={2} sx={{ p: '20px', display: `${show ? 'block' : 'none'}` }}>
      <Container>
        <form>
          <h1>{title}</h1>
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
