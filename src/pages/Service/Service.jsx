import React, { useState, useEffect } from "react";
import { AppBar, Typography, Box, Tab, Tabs } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Services from "./Services";
import ServiceForm from "./ServiceForm";
import ServiceSearch from "./ServiceSearch";

const Service = () => {
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
          Dịch vụ
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
          <Tab label="Tra cứu phiếu" value={"search"}>
          </Tab>
          <Tab label="Tra cứu dịch vụ" value={"search-service"}>
          </Tab>
        </Tabs>
      </Box>
      <main>
        <Routes>
          <Route path="form" element={<ServiceForm />} />
          <Route path="search" element={<ServiceSearch />} />
          <Route path="search-service" element={<Services />} />
        </Routes>
      </main>
    </>
  );
};

export default Service;
