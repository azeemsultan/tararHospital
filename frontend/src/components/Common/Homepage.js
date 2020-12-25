import { Avatar, Backdrop, Button, Container, Divider, Fade, Grid, IconButton, Input, InputBase, Paper, TextField, Typography } from '@material-ui/core';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
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
import { Carousel } from 'react-responsive-carousel';
import logo from '../../assets/img/Logo.png'
import { makeStyles } from '@material-ui/core/styles';
import Searchdoctor from "../../components/Doctors.js/Searchdoctor"
import * as rateService from "../../Axios-Actions/rateService";
import google from '../../assets/Assets/gp-icon.png'

import Modal from '@material-ui/core/Modal';

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
  const [contact, setContact] = React.useState(false);
  const [close,setClose] = React.useState(false);

  const [r, setR] = React.useState([]);
  React.useEffect(() => {
    rateService.findallrate()
    .then((result) => {setR(result.data)});
    
},[]);
  const handleContact = () => {
   setContact(true);
  };

  const handleCloseContact = () => {
    setContact(false);
  };

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

  var sectionStyle = {
    width: "100%",
    height: "550px",
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover'
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
    <div>
    <Modal 
  className={classes.modal}
  open={contact}
  onClose={handleCloseContact}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500, 
  }}
>
  <Fade in={contact}>
  <Container maxWidth="sm">
<Paper>
<Grid container>
  
<Grid item md={2}></Grid>
<Grid item md={8}>
   <Typography variant="h6">
     Contact us
   </Typography>
   <Divider/>
   <br/>
<Typography variant="subtitle1">
Mail: OzairTarar@Gmail.com
</Typography>
<Typography variant="subtitle1">
Phone: 03212121425
</Typography>
<Typography variant="subtitle1">
Fax: 112-241-111
</Typography>
  <Button variant="outlined" onClick={()=>handleCloseContact()} style={{marginLeft:'5px'}}

   >Close</Button>
     </Grid>
<Grid item md={2}></Grid>
  </Grid>
</Paper>

  </Container>
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
                            <a href="/doctors" style={{color:'#336bd4'}}>
                        <Typography variant="h6" style={{textAlign:'center',marginTop:'5px'}} >
                            Doctors
                        </Typography>
                        <Typography variant="subtitle2" >
                            Book an Appointment
                        </Typography>
                        </a>
                        </div>
                        <div style={{marginLeft:'40px'}}>
                        <a href="/doctors" style={{color:'#336bd4'}}>
                            <Typography variant="h6" style={{textAlign:'center',marginTop:'5px'}} >
                                Consult
                            </Typography>
                            <Typography variant="subtitle2" >
                                Consult with Doctors
                            </Typography>
                            </a>
                            </div>
                            <div style={{marginLeft:'40px'}}>
                            <a href="/" style={{color:'#336bd4'}} onClick={()=>handleContact()} >
                            <Typography variant="h6" style={{textAlign:'center',marginTop:'5px'}} >
                              Contact us
                            </Typography>
                            <Typography variant="subtitle2" >
                            Contact with us 
                            </Typography>
                            
                          </a>
                            </div>
             
                </div>
            </Grid>
            <Grid item md={3} xs={12}>
              
                <button style={{color:'white',backgroundColor:'#336bd4',marginTop:'25px',borderRadius:'18px'
                ,height:'35px',border:'1px solid #336bd4',marginBottom:'10px',width:'130px'}}>
                <center style={{display:'inline-flex',textAlign:'center',textDecoration:'none'}}>
                  <a href="/login" style={{color:'white'}}> <Typography>Login</Typography></a>/<a href="/signup" style={{color:'white'}}>
                    <Typography>Signup</Typography></a>
                  
                     </center> 
                </button>
                </Grid>
       
        </Grid>

        <Grid container>

            <Container maxWidth="xxl" style={{height:'550px'}}>
            <section style={ sectionStyle }>

              <Grid container>
              <Grid item md={1}></Grid>
              <Grid item md={5} xs={12}>
                <div className="img" style={{height:'auto',width:'100%'}}>
                <div style={{textAlign:'center',marginLeft:'20%',marginRight:'20%',color:'#336bd4',marginTop:'10px'}}>
                    <Typography variant="h3" >
                        Lorem ipsum dolorsit 
                    </Typography>
                    <Typography variant="subtitle1" style={{color:'black'}}>
                        Adips is lorem fics omunga lorem cons gago ka putanginamo putang tanga ka gago bobo ako mid
                    </Typography>
                    <br/>
                    <div style={{display:'inline-flex',marginTop:'10px'}}>
                    <Button variant="outlined"
                    style={{border:'2px solid #336bd4',borderRadius:'13%'}}
                    ><Typography variant="subtitle1">Start Consulting</Typography></Button>
                   <Typography variant="subtitle1"
                   style={{marginLeft:'20px',color:'#336bd4',marginTop:'3px'}}
                   >Find Doctors now</Typography>
</div>
                </div>
                
                </div> 
                </Grid>
                </Grid>
                </section>
            </Container>
       
        </Grid>
        <Grid container style={{backgroundImage: `url(${img2})`,height:'450px',marginTop:'10px'}}>
            <Grid item md={12}>
                <div style={{marginTop:'30px'}}>


                </div>
                <div style={{marginTop:'50px'}}>
                    <Typography variant="h4">
                       Our Doctors
                    </Typography>
                </div>
                <div style={{marginTop:'10px'}}>
                    <Typography variant="subtitle1">
                       Specialists
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
                        Dr Ozair
                    </Typography>
                 
                    <Typography variant="subtitle1" style={{color:'#336bd4'}}
                     onClick={handleOpen}
                     >
                        Gastroenterologist 
                    </Typography>

                        </div>
                        <div style={{marginLeft:'20%'}}>
                        <Avatar style={{height:'120px',width:'120px'}}>
                        <img style={{height:'120px',width:'120px'}}
                          src={doc}/>

</Avatar>
<Typography variant="subtitle1">
                        Dr Arslan
                    </Typography>
                    <Typography variant="subtitle1" style={{color:'#336bd4'}}
                     onClick={handleOpen}
                     >
                        Dermatologist
                    </Typography>

                        </div>

                        <div style={{marginLeft:'20%'}}>
                        <Avatar style={{height:'120px',width:'120px'}}>
                        <img style={{height:'120px',width:'120px'}}
                          src={doc}/>

</Avatar>
<Typography variant="subtitle1">
                        Dr Ubaid
                    </Typography>
                    <Typography variant="subtitle1" style={{color:'#336bd4'}}
                     onClick={handleOpen}
                     >
                       Cardiologist
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
    
        <Grid container style={{marginTop:'10px'}}>
            <Grid item md={12}>
            <div>
        <Searchdoctor/>
        </div>
              <br/>
              <Typography variant="h6">
                Recommendations
              </Typography>
                <div style={{marginTop:'40px'}}>
                
           
                    <CarouselProvider
        isPlaying={true}
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={2}
      >
        <Slider>
          
          <Slide index={0}> <center>
                    <div style={{display:'inline-flex',flexWrap:'wrap'}}>

                    {r.map((row) => (
<Card key={row.id} style={{maxWidth:'300px',marginLeft:'30px'}}>
<CardActionArea>
<CardMedia
component="img"
alt="Contemplative Reptile"
height="140"
image={img}
title="Contemplative Reptile"
/>
<CardContent>
<Typography gutterBottom variant="h6" component="h2">
{row.doctoremail}
</Typography>
<Typography variant="body2" color="textSecondary" >
Stars:{row.star}
</Typography>
<Typography variant="body2" color="textSecondary" >
Reviews:{row.review}
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
          ))}
</div>

</center></Slide>


          <Slide index={1}>
            
          <center style={{display:'inline-flex',flexWrap:'wrap'}}>
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
Best App
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Literally the best website to book the appointment online for Doctors. The service is great
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
Best App
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Literally the best website to book the appointment online for Doctors. The service is great
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
Best App
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Literally the best website to book the appointment online for Doctors. The service is great
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
</Slide>
        
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>    
                </div>
            </Grid>
        
        </Grid>
     
        <Grid container>
            <Grid item md={12} xs={12} style={{backgroundColor:'#336bd4',height:'150px',marginTop:'40px',color:'white'}}>
              <Grid container>
                <Grid item md={4}>
                 <center>
                   <br/>
                   <Typography variant="h6">
                     About us
                   </Typography>
                   <Typography variant="subtitle1">
                     Situated at lahore
                   </Typography>
                   <Typography variant="subtitle1">
                     Lorem ipsum dolorsit
                   </Typography>
                 </center>
                </Grid>
                <Grid item md={4}>
                <center>
                  <br/>
                   <Typography variant="h6">
                    Contact us
                   </Typography>
                   <Typography variant="subtitle1">
                     Mail: OzairTarar@Gmail.com
                   </Typography>
                   <Typography variant="subtitle1">
                     Phone: +92303030303
                   </Typography>
                 </center>
                  </Grid>
                  <Grid item md={4} sm={12}>
                  <center>
                  <br/>
                   <Typography variant="h6">
                    Coming Soon
                   </Typography>
                   <img src={google} style={{height:'50px',width:'150px',marginTop:'10px'}}/>
                 </center>
                  </Grid>
                  </Grid>
                
            </Grid>
        </Grid>
        
    </div> );
}


export default Homepage;