import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar, Typography, Box, Tab, Tabs } from '@mui/material';
import Services from './Services';
import ServiceForm from './ServiceForm';
import ServiceSearch from './ServiceSearch';
import AppHeader from '../../components/AppHeader';

const Service = () => {
  const [value, setValue] = useState('search');
  let currentTab;
  const handleTabButton = (event, newValue) => {
    if (value !== newValue) {
      setValue(newValue);
    }
  };
  useEffect(() => {
    if (value === "form") {
      currentTab = <ServiceForm />;
    }
    else if (value === "search") {
      currentTab = <ServiceSearch />;
    }
    else if (value === "search-service") {
      currentTab = <Services />;
    }
  }, [value]);


  return (
    <>
      <AppHeader>PHIẾU DỊCH VỤ</AppHeader>
      <Box sx={{ color: 'black', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example" value={value} onChange={handleTabButton}>
          <Tab label="Lập phiếu" value={'form'}></Tab>
          <Tab label="Tra cứu phiếu" value={'search'}></Tab>
          <Tab label="Tra cứu dịch vụ" value={'search-service'}></Tab>
        </Tabs>
      </Box>
      <main>
        {
          currentTab
        }
      </main>
    </>
  );
};

export default Service;
