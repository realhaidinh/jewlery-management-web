import { Typography } from "@mui/material";
import React from "react";

const Services = ({ show }) => {
  return (
    <Typography sx={{ display: `${show ? "block" : "none"}` }}>
      Services
    </Typography>
  );
};

export default Services;
