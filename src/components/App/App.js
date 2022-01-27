import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { BasicCalendar, ButtonAppBar } from '../../components'
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { MUIDrawer, 
  ListItem, 
  List, 
  ListItemIcon, 
  ListItemText, 
  Theme,
  useTheme, 
  makeStyles, 
  createStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  Button,
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle 
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    Calendar: {
      maxHeight: 100,
    }
    })
);

export const App = () => {
  const classes = useStyles();

  return (
    <div>
    <ButtonAppBar/>
      <div id="Calendar">
        <BasicCalendar/>
      </div>
      
    </div>
  );
}

