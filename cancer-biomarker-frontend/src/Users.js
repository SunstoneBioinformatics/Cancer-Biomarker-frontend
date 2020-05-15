import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link as RouterLink
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    offset: theme.mixins.toolbar,
    flexGrow: 1,
    width: '100%',
    maxWidth: '100%',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    height: '100%',
    color: theme.palette.text.primary,
  },
}));


function Users(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container 
        spacing={3}
        justify="center"
        alignItems="center" > 
          <Grid item xs={12}>
            <Paper className={classes.paper} >
              <Paper className={classes.paper} elevation={3}>
              <Typography variant="h4">
                {props.username}'s Profile
              </Typography>
              <Typography variant="subtitle1">
                Modify your user
              </Typography>
              </Paper>
            <Paper className={classes.paper} elevation={3}>
            <Grid container 
              spacing={3}
              justify="flex-start"
              alignItems="stretch"
            > 
            <Grid item xs={12}>
            <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt nunc ac consequat placerat. Sed laoreet lacus sit amet nibh feugiat laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut volutpat ultrices lacus quis posuere. Donec non congue turpis, vitae eleifend leo. Donec in ipsum nisi. Sed lobortis in nisl id ullamcorper. Aliquam vitae sem eros. Sed volutpat pharetra leo, sit amet posuere massa lacinia et. Pellentesque in commodo quam, non imperdiet nunc. Vestibulum at dolor venenatis, faucibus augue at, consequat neque. Aenean sed efficitur metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="body2">
            Praesent in pulvinar ex. Morbi molestie, dui id gravida dapibus, felis nisl finibus nunc, nec tincidunt risus erat vel turpis. Ut varius ut dolor id consequat. Donec at ultrices nisi. Curabitur accumsan arcu est, ac pulvinar augue malesuada et. Pellentesque vehicula sed libero at lacinia. Nulla id magna lectus.
            </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="body2">
            Donec elementum magna ac justo vulputate aliquet. Duis a imperdiet ante. Donec pulvinar eu enim sit amet viverra. Proin vestibulum quam sit amet magna interdum, a scelerisque felis tincidunt. Mauris sed molestie metus, nec hendrerit sem. Aliquam et arcu id eros mattis cursus. Phasellus faucibus euismod libero sed laoreet.
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body2">
             Donec elementum magna ac justo vulputate aliquet. Duis a imperdiet ante. Donec pulvinar eu enim sit amet viverra. Proin vestibulum quam sit amet magna interdum, a scelerisque felis tincidunt. Mauris sed molestie metus, nec hendrerit sem. Aliquam et arcu id eros mattis cursus. Phasellus faucibus euismod libero sed laoreet.
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="primary" component={RouterLink} to='/cancer-nn'>Get Started</Button>
            </Grid>
            </Grid>            
            </Paper>
            </Paper>
          </Grid>
      </Grid>
    </div>
  )
}

export default Users;