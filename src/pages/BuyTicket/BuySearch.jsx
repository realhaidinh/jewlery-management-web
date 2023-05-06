import React from 'react'
import { Typography } from '@mui/material'

const BuySearch = ({ show }) => {
  return (
    <Typography sx={{
      display: `${show ? "block" : "none"}`
    }}>
      Buy Search
    </Typography>
  )
}

export default BuySearch