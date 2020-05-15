import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link as RouterLink
} from "react-router-dom";
import JobCard from './JobCard';
import errorPDF from './dummy/ReportError.pdf';
import reportPDF from './dummy/Report.pdf';
import resultsCSV from './dummy/TestResults.csv';
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
  paperStart: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'start',
    height: '100%',
    color: theme.palette.text.primary,
  },
  paperForm: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'start',
    height: '100%',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.primary,
  },
}));


function MyJobs(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container 
        spacing={6}
        justify="center"
        alignItems="center" > 
          <Grid item xs={12}>
            <Paper className={classes.paper} >
              <Paper className={classes.paper} elevation={3}>
              <Typography variant="h4">
                Welcome, {props.username}
              </Typography>
              <Typography variant="subtitle1">
                Check the status of your Current Jobs and Download your results
              </Typography>
              </Paper>
            <Paper className={classes.paperStart} elevation={3}>
            <Grid container 
              spacing={3}
              justify="flex-start"
              alignItems="stretch"
            > 
            <Grid item xs={12}>
            <Typography variant="subtitle1">
              Jobs in Progress
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <JobCard jobName='Test Job' jobId='UUID-UASUASDII12ad2' status="Pending" explain/>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="subtitle1">
              Complete Jobs
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <JobCard jobName='Test Job Complete' jobId='UUID-dasdasdas231231' status="Complete" report={reportPDF} results={resultsCSV} explain/>
            <JobCard jobName='Test Job Error' jobId='UUID-dasdasdasUAD1' report={errorPDF} status="Error"/>
            </Grid>            
            </Grid>            
            </Paper>
            </Paper>
          </Grid>
      </Grid>
    </div>
  )
}

export default MyJobs;