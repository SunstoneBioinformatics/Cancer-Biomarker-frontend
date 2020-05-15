import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
      offset: theme.mixins.toolbar,
      margin: 0,
      padding: theme.spacing(2),
      color: theme.palette.text.primary,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(2),
      marginLeft: theme.spacing(2),
      top: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    },
  });

const DialogTitle = withStyles(styles)((props) => {
  
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  },
}))(MuiDialogContent);


export default function TooltipModal(props) {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleClickOpen}>
         <InfoIcon />
      </IconButton>
    
      <Dialog scroll="body" color="secondary" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1">{props.text}</Typography>
          <Typography variant="body1">{props.extraText1}</Typography>
          <Typography variant="body1">{props.extraText2}</Typography>

        </DialogContent>
      </Dialog>
    </div>
  );
}