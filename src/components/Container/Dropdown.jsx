import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Dropdown = ({ current, data, handler, showOverridden }) => {
  const [suppliers, setSupplier] = useState(data);
  const filtered = suppliers.filter((supplier) =>
    supplier.name.includes(current)
  );

  let dropDownInner = filtered.map((supplier, idx) => {
    return (
      <ListItem key={idx}>
        <ListItemButton id={supplier.id} onClick={handler}>
          <ListItemText primary={supplier.name}></ListItemText>
        </ListItemButton>
      </ListItem>
    );
  })

  let show = current.length && !showOverridden ? 'block' : 'none';
  if (filtered.length === 0) {
    dropDownInner = <Typography colorError variant="h6" align="left" sx={{ marginLeft: 1 }}>Không tìm thấy nhà cung cấp nào, tạo mới.</Typography>;
  }

  return (
    <Paper elevation={2} sx={{ display: `${show}` }}>
      <List dense>
        {dropDownInner}
      </List>
    </Paper>
  );
};

export default Dropdown;
