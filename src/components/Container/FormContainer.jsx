import { Grid, Paper } from '@mui/material';

const FormContainer = ({ title, formID, currentDate, children }) => {
  return (
    <Paper
      sx={{
        padding: '20px',
        margin: '15px',
        width: 'auto',
        flexGrow: 1,
        backgroundColor: '#fff',
      }}
    >
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
    </Paper>
  );
};

export default FormContainer;
