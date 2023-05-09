import { Stack, Typography, Box, IconButton, TextField, InputAdornment } from '@mui/material';
import Container from './Container';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

const SearchContainer = ({ show, title, onChange, onClick, value, children, open, handleClickOpen, handleClose }) => {
  return (
    <Stack spacing={2} sx={{ p: '20px', display: `${show ? 'block' : 'none'}` }}>
      {/* <Stack spacing={2} sx={{ p: '20px' }}> */}
      <Container>
        <Stack direction="row" flex="1" alignItems="center" mb="10px">
          <Box sx={{ width: '60%' }}>
            <Typography variant="h5">
              <b>{title}</b>
            </Typography>
          </Box>
          <Box variant="outlined" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '40%' }}>
            <SearchIcon sx={{ m: '10px', fontSize: 20 }} />
            <TextField
              sx={{ mr: 1, flex: 1 }}
              variant="standard"
              placeholder="Tìm kiếm"
              value={value}
              onChange={onChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={onClick}>
                      <CancelIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Stack>
        {children}
      </Container>
    </Stack>
  );
};

export default SearchContainer;
