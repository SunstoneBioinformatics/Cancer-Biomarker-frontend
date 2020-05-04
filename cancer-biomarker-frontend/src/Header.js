import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  Link as RouterLink
} from "react-router-dom";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Cancer Biomarker Assistant
          </Typography>
          <Button variant="contained" color="primary" component={RouterLink} to='/'>Home</Button>
          <Button variant="contained" color="primary" component={RouterLink} to='/about'>About</Button>
          <Button variant="contained" color="primary" component={RouterLink} to='/users'>Users</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}