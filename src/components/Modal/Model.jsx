import React from "react";
import { Modal, Box, Button, Typography, Table, TableBody, TableHead, TableCell, TableRow } from "@mui/material";

const Model = ({ data, handleSubmit }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const testHandleSubmit = () => {
    console.log("ran");
  }

  return (
    <>
      <div>
        <Button onClick={handleOpen}>Thêm sản phẩm</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Danh sách sản phẩm
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">
                      <input type="number" name="quantity" value={0} onChange={e => this.value = e.target.value}></input>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button varient="contained" onClick={testHandleSubmit}>Submit</Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Model;
