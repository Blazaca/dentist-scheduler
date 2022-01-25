import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { default as TemporaryDrawer } from '../../components/TemporaryDrawer/TemporaryDrawer'
import { default as FormDialog } from '../FormDialog/FormDialog'

export const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: 4 }}>
            Dr.Bronner's Schedule
          </Typography>
          <FormDialog/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}