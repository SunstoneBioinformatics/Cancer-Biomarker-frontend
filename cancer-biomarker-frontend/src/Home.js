import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
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


function Home() {
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
                Sunstone Bioinformatics
              </Typography>
              <Typography variant="subtitle1">
                Bioinformatic tools at the tip of your fingers
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
              Welcome to the test build of Sunstone Bioinformatics, this page serves as a testing platform for the results of my graduation thesis for the bioinformatics engineering program at <i>Universidad del Valle de Guatemala</i>. Today you will be participating in a guided exploration of the interface corresponding to the <b>Breast Cancer Biomarker Assistant</b> tool.
            </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="body2">
            </Typography>
            This tool allows the user to submit FASTA sequences to be evaluated by an Artificial Neural Network model which identifies if any of the sequences submitted match with an up-to-date Breast Cancer Biomarker database maintained in house. This matching process is not a dictionary lookup, it accounts for genetic variations and provides an estimated match. 
            </Grid>
            <Grid item xs={6}>
            <Typography variant="body2">
            Please answer the questions on the following form: <Link href='https://forms.gle/UF3Xgd6ZyhpNk7VD6' target='_blank'>Survey</Link>. These questions will help me improve the platform to provide a better user experience. 
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body2">
              Note: This platform is a prototype build and does not produce real results. The purpose of this build is to show the graphical interface in action and to display a specific use case with FASTA sequences pertaining to the BRCA1 cancer gene (these results are not computed in any way by a neural network model). 
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

export default Home;