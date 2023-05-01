import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar, Typography, Box, Tab, Tabs } from '@mui/material';
import BuyForm from './BuyForm';
import BuySearch from './BuySearch';
import AppHeader from '../../components/AppHeader';

const Buy = () => {
  const [value, setValue] = useState('form');

  const handleTabButton = (event, newValue) => {
    if (value !== newValue) {
      setValue(newValue);
    }
  };

  return (
    <>
      <AppHeader>PHIẾU MUA</AppHeader>
      <Box sx={{ color: 'black', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example" value={value} onChange={handleTabButton}>
          <Tab label="Lập phiếu" value={'form'}></Tab>
          <Tab label="Tra cứu" value={'search'}></Tab>
        </Tabs>
      </Box>
      <main>
        <BuyForm show={value === "form"} />
        <BuySearch show={value === "search"} />
      </main>
    </>
  );
};

export default Buy;
