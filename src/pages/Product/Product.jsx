import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar, Typography, Box, Tab, Tabs } from '@mui/material';
import Products from './Products';
import ProductType from './ProductType';
import AppHeader from '../../components/AppHeader';

const Product = () => {
  const [value, setValue] = useState('products');

  const handleTabButton = (event, newValue) => {
    if (value !== newValue) {
      setValue(newValue);
    }
  };

  return (
    <>
      <AppHeader>SẢN PHẨM</AppHeader>
      <Box sx={{ color: 'black', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example" value={value} onChange={handleTabButton}>
          <Tab label="Sản phẩm" value={'products'}></Tab>
          <Tab label="Loại sản phẩm" value={'product-type'}></Tab>
        </Tabs>
      </Box>
      <main>
          { value === "products" ? <Products />: <ProductType /> }
      </main>
    </>
  );
};

export default Product;
