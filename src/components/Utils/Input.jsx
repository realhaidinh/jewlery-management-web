import React, { useState } from 'react'

const Input = () => {
  const [value, setValue] = useState(0);

  return (
    <input type="number" name="product-qty" min="0" value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

export default Input