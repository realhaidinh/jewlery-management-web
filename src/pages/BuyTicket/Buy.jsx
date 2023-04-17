import React from "react";
import { AppBar, Typography } from "@mui/material";

const Buy = () => {
  return (
    <>
      <AppBar position="sticky">
        <Typography variant="h6" component="div" >
          Phiếu mua
        </Typography>
      </AppBar>
      <div style={{ backgroundColor: 'beige', height: '100%' }}>content</div>
    </>
  );
};

export default Buy;
