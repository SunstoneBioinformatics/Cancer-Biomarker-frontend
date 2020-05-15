import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'
import RecordIcon from '@material-ui/icons/FiberManualRecordRounded';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import PDFIcon from '@material-ui/icons/PictureAsPdf';
const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: 275,
    backgroundColor: theme.palette.primary.light,
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    padding: theme.spacing(),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  buttons: {
    marginTop: '15%',
  },
  buttonsExplain: {
    marginTop: '20%',
  },
  statusText: {
    marginTop: '20%',
  }
  
}));

export default function JobCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container >
        <Grid item xs={8}>
        <CardContent>
        <Grid container               
        justify="flex-start"
        alignItems="center">
          <Grid item xs={9}>
            <Typography variant="h5" component="h2">
              Job Name: {props.jobName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Job ID: {props.jobId}
            </Typography>
            <Typography variant="overline" color="textSecondary">
              {props.explain === true? 'Explain NNet (Experimental)': ""}
            </Typography>
          </Grid>
          <Grid item xs={2}>
          <Typography variant="subtitle2" >
              Status: {props.status}
          </Typography>
          </Grid>
          <Grid item xs={1}>
            {props.status === 'Complete'? <RecordIcon style={{ color: green[500] }}/>: props.status === 'Error'? <RecordIcon style={{ color: red[900] }} />: <RecordIcon style={{ color: yellow[700] }} />}
            </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
        <Button
          className={props.explain? classes.buttonsExplain :classes.buttons}
          variant="contained"
          color="default"
          size='small'
          startIcon={<PDFIcon />}
          disabled={props.status === 'Pending' ? true : false}
          href={props.report}
          target="_blank"
        >
        Report
        </Button>
      </Grid>
        <Grid item xs={2}>
        <Button
          className={props.explain ? classes.buttonsExplain :classes.buttons}
          variant="contained"
          color="default"
          size='small'
          startIcon={<DownloadIcon />}
          disabled={props.status === 'Pending' ? true: props.status === 'Error' ? true : false}
          href={props.results}
          target="_blank"
        >
        Results
        </Button>
        </Grid>
      </Grid>
    </Card>
  );
}