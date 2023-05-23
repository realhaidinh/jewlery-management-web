import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const TableContainer = ({ columns, rows }) => {
  return (
    <Box
      sx={{
        height: '400px',
        width: '100%',
        '& *': {
          fontSize: '1.2rem',
        },
      }}
    >
      <DataGrid columns={columns} rows={rows} />
    </Box>
  );
};

export default TableContainer;
