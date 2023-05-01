import React from 'react';
import {
  Typography,
} from "@mui/material";

const SellSearch = ({ show }) => {
  return (
    <Typography 
      sx={{
        display: `${show ? "block" : "none"}`
      }}
    >
      SellSearch
    </Typography>
  )
}

export default SellSearch