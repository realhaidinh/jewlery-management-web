import { Box } from '@mui/material'
import React from 'react'

const ServiceSearch = ({ show }) => {
  return (
    <Box sx={{ display: `${show ? 'block' : 'none'}` }}>
      something
    </Box>
  )
}

export default ServiceSearch