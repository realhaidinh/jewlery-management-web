import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import React, { useState } from "react";

const Dropdown = ({ current, data }) => {
  const [suppliers, setSupplier] = useState(data);
  const filtered = suppliers.filter((supplier) =>
    supplier.name.includes(current)
  );

  return (
    <Paper elevation={2}>
      <List>
        {filtered.map((supplier, idx) => {
          return (
            <ListItem key={idx}>
              <ListItemButton>
                <ListItemText>{supplier.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default Dropdown;
