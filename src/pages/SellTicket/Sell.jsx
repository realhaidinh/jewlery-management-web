import React, { useState, useEffect } from "react";
import { AppBar, Typography, Box, Tab, Tabs } from "@mui/material";
import SellForm from "./SellForm";
import SellSearch from "./SellSearch";
import { Route, Routes, useNavigate } from "react-router-dom";

const Sell = () => {
  const [value, setValue] = useState("search");
  const navigate = useNavigate();

  const handleTabButton = (event, newValue) => {
    if (value !== newValue) {
      setValue(newValue);
    }
  };

  useEffect(() => {
    navigate(value);
  }, [value]);

  return (
    <>
      <AppBar position="sticky">
        <Typography variant="h6" component="div">
          Phiếu bán
        </Typography>
      </AppBar>
      <Box sx={{ color: "black", borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          aria-label="basic tabs example"
          value={value}
          onChange={handleTabButton}
        >
          <Tab label="Lập phiếu" value={"form"}>
          </Tab>
          <Tab label="Tra cứu" value={"search"}>

          </Tab>
        </Tabs>
      </Box>
      <main>
        <Routes>
          <Route path="form" element={<SellForm />} />
          <Route path="search" element={<SellSearch />} />
        </Routes>
      </main>
    </>
  );
}

export default Sell