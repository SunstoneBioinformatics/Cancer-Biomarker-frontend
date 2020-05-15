import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
//icons
import PersonIcon from '@material-ui/icons/Person';

import {
  Link as RouterLink
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Button variant="text" color="inherit" component={RouterLink} to='/'>
            <Typography variant="h6">
              Sunstone Bioinformatics
            </Typography>   
          </Button>
          <Box className={classes.title} />
          <Button variant="text" color="inherit" className={classes.menuButton} component={RouterLink} to='/cancer-nn'>Tools</Button>
          <Button variant="text" color="inherit" className={classes.menuButton} component={RouterLink} to='/my-jobs'>My Jobs</Button>
          <Button variant="text" color="inherit" className={classes.menuButton} disabled component={RouterLink} to='/about'>About</Button>
          <IconButton variant="text" color="inherit" className={classes.menuButton} disabled component={RouterLink} to='/users'><PersonIcon/></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}