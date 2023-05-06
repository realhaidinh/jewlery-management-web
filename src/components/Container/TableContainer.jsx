import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const TableContainer = ({ columns, rows, SearchInput }) => {
  return (
    <Box
      sx={{
        height: 350,
        width: '100%',
        '& .table-header': {
          fontSize: '1.2rem',
        },
        '& .table-row': {
          fontSize: '1.2rem',
        },
      }}
    >
      <DataGrid
        columns={columns}
        rows={rows.filter((form) => {
          return Object.values(form).some((value) => {
            return value.toString().toLowerCase().includes(SearchInput.toLowerCase());
          });
        })}
      />
    </Box>
  );
};

export default TableContainer;
