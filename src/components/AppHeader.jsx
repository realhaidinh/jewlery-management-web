import React from 'react';
import { AppBar, Toolbar, Grid, IconButton, Badge } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const AppHeader = ({ children }) => {
  return (
    <AppBar position="sticky" sx={{ width: '100%' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <h1>{children}</h1>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
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
