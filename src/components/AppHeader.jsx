import React, { useContext } from 'react';
import { AppBar, Toolbar, Grid, IconButton, Badge } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { LoginContext } from '../App';
import { useNavigate } from 'react-router-dom';


const AppHeader = ({ children }) => {

  const { login, setLogin} = useContext(LoginContext);
  const navigate = useNavigate();

  const handleUserButton = () => {
    // if (login) {
    //   setLogin(false);
    // }
    console.log("called");
    navigate("/login");
  }

  return (
    <AppBar position="sticky" sx={{ width: '100%' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <h1>{children}</h1>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton onClick={handleUserButton}>
              <Badge>
                <PowerSettingsNewIcon fontSize="medium" sx={{ color: '#fff' }} />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
