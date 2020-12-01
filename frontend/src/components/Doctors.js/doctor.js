import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Backdrop, Fade, Modal, TextField } from '@material-ui/core';
import img from '../../assets/img/doc.png'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
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
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Doctor() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(false);
  const handleView = () => {
    setView(true);
  };

  const handleViewClose = () => {
    setView(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
             <div>

<Modal 
  aria-labelledby="transition-modal-title"
  aria-describedby="transition-modal-description"
  className={classes.modal}
  open={view}
  onClose={handleViewClose}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500, 
  }}
>
  <Fade in={view}>
    <div className={classes.paper}>
      <Typography variant="h4" style={{textAlign:'center',marginBottom:'10px'}}>
        Doctor Name
      </Typography>

     <div style={{display:'inline-flex',marginTop:'10px'}}>
     <div>
       <img src={img}/>

     </div>
     <div>
     <Typography variant="h6" style={{marginLeft:'30px'}}>
       Description: I am Cardiologist and Pro
     </Typography> <br/>
     <div>
     <Typography variant="subtitle1" style={{marginLeft:'30px'}}>
       Description: I am Cardiologist and Pro
     </Typography>
     </div> <br/>
     <div>
     <Typography variant="subtitle1" style={{marginLeft:'30px'}}>
       5 Stars (420 reviews)
     </Typography>
     </div>
     </div>
  
     </div>
   
     
      <center style={{marginTop:'20px'}}>
     
        <Button variant="outlined" style={{marginLeft:'10px'}}
        onClick={handleViewClose}
        >Close</Button>
        </center>
    </div>
  </Fade>
</Modal>
</div>

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
      <Typography variant="h4">
        Get your Appointment
      </Typography>
     <div>
     <Typography variant="h6" style={{marginTop:'20px'}}>
        Select your date
      </Typography>
     <TextField style={{marginLeft:'5px'}}
     label="Enter the date"
     />
     <TextField style={{marginLeft:'5px'}}
     label="Enter Week"
     />
       <TextField style={{marginLeft:'5px'}}
     label="Enter Month"
     />
     </div>
     
      <center style={{marginTop:'20px'}}>
        <Button variant="outlined">Submit</Button>
        <Button variant="outlined" style={{marginLeft:'10px'}}
        onClick={handleClose}
        >Cancel</Button>
        </center>
    </div>
  </Fade>
</Modal>
</div>

      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{backgroundColor:'#336bd4'}}>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
           Doctor Online
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Our Doctors
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" style={{backgroundColor:'#336bd4',color:'white'}}
>
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/doctors"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary"
                    onClick={handleView}>
                      View
                    </Button>
                    <Button size="small" color="primary" onClick={handleOpen}>
                     Consult Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}