
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { AppBar, Grid, TextField, Toolbar, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import img from '../../assets/img/ubaid.jpg'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AcceptApp=()=> {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
         <div>
             <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>
                <Typography>Enter your Date:</Typography>
                <TextField
                label="00-00-00"
                />
            </div>
            <div>
                <Typography>Enter your time:</Typography>
                <TextField
                 label="00-00"
                />
            </div>
            <div style={{marginTop:'20px'}}>
                <Button>Send </Button>
                <Button style={{marginLeft:'20px'}}
                onClick={handleClose}
                >Cancel </Button>
                
            </div>
            </div>
        </Fade>
      </Modal>
    </div>
             <Grid container>
              <AppBar position="relative">
        <Toolbar style={{backgroundColor:'#336bd4'}}>
        
          <Typography variant="h6" color="inherit" noWrap>
           Doctor Online
          </Typography> 
        </Toolbar>
      </AppBar>
      </Grid>
      <Grid container>
          <Grid item md={2}>

          </Grid>

          <Grid item md={8} style={{marginTop:'30px'}}>
          <Card style={{maxWidth:'345px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ubaid Umer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Requested date:01-01-01 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Requested time 00:00 PM
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
        <Button size="small" color="primary" style={{marginLeft:'20%'}}>
         Accept
        </Button>
        <Button size="small" color="primary" style={{marginLeft:'10px'}}>
         Reject
        </Button>
        <Button onClick={handleOpen}
         size="small" color="primary" style={{marginLeft:'10px'}}>
         Edit
        </Button>
     
     
      </CardActions>
    </Card>
              </Grid>

              <Grid item md={2}>
              
              </Grid>
      </Grid>
    </div> );
}
 
export default AcceptApp;