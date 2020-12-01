import { Avatar, Backdrop, Button, Divider, Fade, Grid, IconButton, Input, InputBase, Paper, TextField, Typography } from '@material-ui/core';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import img from '../../assets/img/homepage.png'
import img2 from '../../assets/img/homeline.png'
import doc from '../../assets/img/doc.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import logo from '../../assets/img/Logo.png'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';




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


const Homepage = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
        <Grid container style={{border:'1px solid #d1d0cd'}}>
            <Grid item md={3} xs={12}>
            <div>
                        <Typography variant="h6"  style={{textAlign:'center',marginTop:'17px'}}>
                           <img src={logo}
                           style={{height:'40px',width:'100px'}}
                           />
                        </Typography>
                        
                        </div>
                </Grid>
                <Grid item md={6}>
                <div style={{height:'70px',display:'inline-flex',marginTop:'10px'}}>
                
                        <div>
                            
                        <Typography variant="h6" style={{textAlign:'center',marginTop:'5px'}} >
                            Doctors
                        </Typography>
                        <Typography variant="subtitle2" >
                            Book an Appointment
                        </Typography>
                        </div>
                        <div style={{marginLeft:'40px'}}>
                            
                            <Typography variant="h6" style={{textAlign:'center',marginTop:'5px'}} >
                                Doctors
                            </Typography>
                            <Typography variant="subtitle2" >
                                Book an Appointment
                            </Typography>
                            </div>
                            <div style={{marginLeft:'40px'}}>
                            
                            <Typography variant="h6" style={{textAlign:'center',marginTop:'5px'}} >
                                Doctors
                            </Typography>
                            <Typography variant="subtitle2" >
                                Book an Appointment
                            </Typography>
                            </div>
             
                </div>
            </Grid>
            <Grid item md={3} xs={12}>
                <button style={{color:'white',backgroundColor:'#336bd4',marginTop:'25px',borderRadius:'18px',height:'35px',border:'1px solid #336bd4',marginBottom:'10px',width:'130px'}}>
                  Login/Signup  
                </button>
                </Grid>
       
        </Grid>

        <Grid container>
            <Grid item md={12} style={{backgroundImage: `url(${img})`,height:'500px'}}>
              <Grid container>
              <Grid item md={1}></Grid>
              <Grid item md={5}>
                <div className="img" style={{marginTop:'1px',height:'auto',width:'100%'}}>
                <div style={{textAlign:'center',marginLeft:'20%',marginRight:'20%',paddingTop:'5%',color:'#336bd4',marginTop:'10%'}}>
                    <Typography variant="h2" >
                        Lorem ipsum dolorsit cons
                    </Typography>
                    <Typography variant="subtitle1" style={{color:'black'}}>
                        Adips is lorem fics omunga lorem cons gago ka putanginamo putang tanga ka gago bobo ako mid ako throw walang tala gang
                    </Typography>
                    <div style={{display:'inline-flex',marginTop:'20px'}}>
                    <Button variant="outlined"
                    style={{border:'2px solid #336bd4',borderRadius:'16px'}}
                    >Start Consulting</Button>
                   <Typography variant="subtitle1"
                   style={{marginLeft:'20px',color:'#336bd4',marginTop:'3px'}}
                   >Find Doctors now</Typography>
</div>
                </div>
                
                </div>
                </Grid>
                </Grid>
            </Grid>
       
        </Grid>
        <Grid container style={{backgroundImage: `url(${img2})`,height:'700px'}}>
            <Grid item md={12}>
                <div style={{marginTop:'30px'}}>

              
                <InputBase style={{border:'1px solid #336bd4',borderRadius:'16px',textAlign:'center',width:'15%'}}
        placeholder="      Lahore"
        inputProps={{ 'aria-label': 'search doctors by location' }}
      />
        <IconButton type="submit" aria-label="search">
        <LocationOnIcon style={{color:'#336bd4'}}/>
      </IconButton> 
      
      <InputBase style={{border:'1px solid #336bd4',borderRadius:'16px',textAlign:'center',width:'40%'}}
        placeholder="       Search Doctors By Location"
        inputProps={{ 'aria-label': 'search doctors by location' }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{color:'#336bd4'}}/>
      </IconButton> 
                </div>
                <div style={{marginTop:'50px'}}>
                    <Typography variant="h4">
                        Lorem ipsum dolor sit amet,consec-
                    </Typography>
                </div>
                <div style={{marginTop:'10px'}}>
                    <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consecutetur Adipscing elit,
                    </Typography>
                </div>

                <div style={{marginTop:'50px'}}>
                    <center style={{display:'inline-flex'}}>
                        <div>
                        <Avatar style={{height:'120px',width:'120px'}}>
                          <img style={{height:'120px',width:'120px'}}
                          src={doc}/>

</Avatar>
<Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, 
                    </Typography>
                 
                    <Typography variant="subtitle1" style={{color:'#336bd4'}}
                     onClick={handleOpen}
                     >
                        Consult Now
                    </Typography>

                        </div>
                        <div style={{marginLeft:'20%'}}>
                        <Avatar style={{height:'120px',width:'120px'}}>
                        <img style={{height:'120px',width:'120px'}}
                          src={doc}/>

</Avatar>
<Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet,
                    </Typography>
                    <Typography variant="subtitle1" style={{color:'#336bd4'}}
                     onClick={handleOpen}
                     >
                        Consult Now
                    </Typography>

                        </div>

                        <div style={{marginLeft:'20%'}}>
                        <Avatar style={{height:'120px',width:'120px'}}>
                        <img style={{height:'120px',width:'120px'}}
                          src={doc}/>

</Avatar>
<Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, 
                    </Typography>
                    <Typography variant="subtitle1" style={{color:'#336bd4'}}
                     onClick={handleOpen}
                     >
                        Consult Now
                    </Typography>

                        </div>

                       
                    </center>
                </div>
                <a href="/doctors" style={{color:'#336bd4',fontWeight:'bold'}}>
                <Typography variant="h6" style={{marginTop:'20px'}}>
                    Browse through all <ArrowForwardIcon/>
                </Typography>
                </a>
            </Grid>
        </Grid>
        <Grid container style={{marginTop:'40px'}}>
            <Grid item md={12}>
                <div style={{marginTop:'40px'}}>
                    <center style={{display:'inline-flex'}}>
                        <div>
                    <Card style={{maxWidth:'340px',marginLeft:'10%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
                    <Card style={{maxWidth:'340px',marginLeft:'10%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
                    <Card style={{maxWidth:'340px',marginLeft:'10%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
                    </center>
                </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item md={12} style={{backgroundColor:'#336bd4',height:'150px',marginTop:'40px',color:'white'}}>
                Footer
                Logo
                pictures
                
            </Grid>
        </Grid>
    </div> );
}
 
export default Homepage;