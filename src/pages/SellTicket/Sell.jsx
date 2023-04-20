import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppBar, Typography, Box, Tab, Tabs } from '@mui/material';
import SellForm from './SellForm';
import SellSearch from './SellSearch';
import AppHeader from '../../components/AppHeader';

const Sell = () => {
  const [value, setValue] = useState('search');
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
      <AppHeader>PHIẾU BÁN</AppHeader>
      <Box sx={{ color: 'black', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example" value={value} onChange={handleTabButton}>
          <Tab label="Lập phiếu" value={'form'}></Tab>
          <Tab label="Tra cứu" value={'search'}></Tab>
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
};

export default Sell;
