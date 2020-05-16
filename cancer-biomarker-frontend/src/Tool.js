import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography, IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {
  Link as RouterLink
} from "react-router-dom";
import TooltipModal from './TooltipModal'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


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
    overflowY: 'hidden',
    color: theme.palette.text.primary,
  },
  paperStart: {
    padding: theme.spacing(0),
    margin: theme.spacing(0),
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
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  input: {
    color: theme.palette.text.primary,

  },
  inputForm: {
    display: 'none',

  },
}));
const placeholderSeq = '>NC_000017.11:c43125364-43044295 Homo sapiens chromosome 17, GRCh38.p13 Primary Assembly\nGCTGAGACTTCCTGGACGGGGGACAGGCTGTGGGGTTTCTCAGATAACTGGGCCCCTGCGCTCAGGAGGC\nCTTCACCCTCTGCTCTGGGTAAAGGTAGTAGAGTCCCGGGAAAGGGACAGGGGGCCCAAGTGATGCTCTG\nGGGTACTGGCGTGGGAGAGTGGA'
function Tool() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedAI: false,
    filename: "",
    fileText: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  async function handleFile(event) {
    if (event.target.files === undefined){
      setState({ ...state, filename: "", fileText: ""});
    }
    else if (event.target.files[0] !== undefined){
      if (event.target.files[0].name.includes(".fast") ){
        const reader = new FileReader();
      reader.readAsText(event.target.files[0])
      const filename= event.target.files[0].name
      reader.onloadend =  await function(){
        setState({ ...state, filename: filename, fileText: reader.result});
      } 

      }else {
        alert('Please upload a FASTA or FASTQ file')
      }
    } 
    
  }

  return (
    <div className={classes.root}>
      <Grid container 
        spacing={3}
        justify="center"
        alignItems="center" > 
          <Grid item xs={12}>
            <Paper className={classes.paper} >
            <Paper className={classes.paperStart} elevation={0}>
                  <Grid container spacing={0}>
                    <Grid item xs={11}>
                      <Box/>
                    </Grid>
                    <Grid item xs={1}>
                      <TooltipModal title="Cancer Biomarker Assistant Tutorial" extraText1="To add a new job fill the form and submit it. The job identification fields provide general information for the job that you are performing as well as an email adress to reach you once your job has been finished. If you wish for the email section to be filled by default, log in to your profile. You can also prevent the email from being sent in your user profile ." extraText2="Results usually take a couple of minutes to be ready, this depends on the server load and on the length of the records being submitted. Please be mindful of the shared resource and do not spam jobs. If you reach a cap of 20 different jobs posted your subsequent jobs will be ignored until ALL your queued jobs are completed." text="This tool allows the user to submit FASTA sequences to be evaluated by an Artificial Neural Network model which identifies if any of the sequences submitted match with an up-to-date Breast Cancer Biomarker database maintained in house. This matching process is not a dictionary lookup, it accounts for genetic variations and provides an estimated match. "/>
                    </Grid>
                  </Grid>
                </Paper>
              <Paper className={classes.paper} elevation={3}>
                <Typography variant="h4">
                  Breast Cancer Biomarker Assistant
                </Typography>
                <Typography variant="subtitle1">
                  Submit FASTA DNA sequence files to check for breast cancer biomarkers
                </Typography>
            </Paper>
            <Paper className={classes.paper} elevation={3}>
            <Grid container 
              spacing={3}
              justify="flex-start"
              alignItems="stretch"
            > 
            <Grid item xs={12}>
              <Typography variant="body2">
              Fill out the form to submit up to 20 DNA or cDNA sequences in a batch <b>job</b> for prediction. Sequences should be in <b>FASTA</b> or <b>FASTQ</b> format and can be submitted as a text-file or by copy-and-pasting into the text-field below. You will recieve an email to check your test results. If you are logged in the results will be accessible directly on the page through the <b>My Jobs</b> section.
              </Typography>
              
              <form action="./" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted Data!')} }>
                <Paper className={classes.paperForm}>
                <Typography variant="body1">
                  Job Identification
                </Typography>
                <Divider className={classes.divider} elevation={3}/>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                    <TextField  
                      required
                      InputProps={{
                        className: classes.input
                      }}
                      size="small"
                      id="job-name" 
                      label="Job Name"  
                      placeholder="My Job Name" 
                      variant="filled"
                      fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField  
                      required
                      InputProps={{
                        className: classes.input
                      }}
                      size="small"
                      id="job-email" 
                      label="e-mail"  
                      placeholder="your@email.com" 
                      variant="filled"
                      fullWidth
                      type='email'
                    />
                    </Grid>
                  </Grid>
                </Paper>
                <Paper className={classes.paperForm} elevation={3}>
                <Typography variant="body1">
                  Sequences for Prediction
                </Typography>
                <Divider className={classes.divider}/>
                <TextField  
                      InputProps={{
                        className: classes.input
                      }}
                      size="small"
                      id="job-sequences" 
                      label="Sequences"  
                      placeholder={placeholderSeq}
                      value={state.fileText}
                      variant="filled"
                      fullWidth
                      multiline
                      rows={6}
                      rowsMax={6}
                      onChange={(e) => setState({...state, fileText: e.target.value})}
                      />
                <Divider className={classes.divider} elevation={3}/>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                    <input
                    accept=".fasta"
                    className={classes.inputForm}
                    id="contained-button-file"
                    onChange={handleFile}
                    type="file"
                    />
                    <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="default"
                      startIcon={<CloudUploadIcon />}
                      component="span"
                    >
                      Upload Sequence
                    </Button>
                    </label>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="overline">
                        {state.filename}
                      </Typography>
                      {state.filename === ""?<Box/> :<IconButton onClick={handleFile}><CloseIcon/></IconButton>}
                    </Grid>
                    <Grid item xs={4}>
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedAI}
                        onChange={handleChange}
                        name="checkedAI"
                        color="primary"
                      />
                    }
                    label="Explain Neural Network Model (experimental)"
                  />
                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="primary" type="submit" component={RouterLink} to='/my-jobs'>Submit</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </form>
            </Grid>

            </Grid>            
            </Paper>
            </Paper>
          </Grid>
      </Grid>
    </div>
  )
}

export default Tool;