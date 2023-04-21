import { Paper, Grid } from '@mui/material';

const CartContainer = ({ title, productAmount, children }) => {
  return (
    <Paper variant="outlined" sx={{ width: 'auto', minHeight: '100px', padding: '20px', margin: '20px 10px' }}>
      <Grid container spacing={0.2}>
        <Grid item xs={11}>
          <h2>{title}</h2>
          {productAmount === 0 && <span>Giỏ hàng trống.</span>}
          {productAmount > 0 && <span>Có {productAmount} mặt hàng trong giỏ.</span>}
        </Grid>
        {children}
      </Grid>
    </Paper>
  );
};

export default CartContainer;
