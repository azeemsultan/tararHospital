import React ,{ useEffect } from 'react';
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
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import Link from '@material-ui/core/Link';
import { Backdrop, Badge, Fade, Modal, TextField } from '@material-ui/core';
import img from '../../assets/img/doc.png';
import * as doctorService from '../../Axios-Actions/doctorService';
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
    padding: theme.spacing(4, 0, 6),
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
let di,de;

export default function Doctor() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openNotif, setOpenNotif] = React.useState(false);
  const [view, setView] = React.useState(false);
  const [time, setTime] = React.useState('');
  const [date, setDate] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [cards, setCard] = React.useState([]);
  const [a,setA]=React.useState([]);
  useEffect(() => {
    doctorService.DoctorView()
    .then((result) => {setCard(result.data)});
    doctorService.GetAllAppointment()
    .then((result) => {setA(result.data)});
},[]);

  const handleView = () => {
    setView(true);
  };

  const handleViewClose = () => {
    setView(false);
  };
  const handleNotif = () => {
    setOpenNotif(true);
  };

  const handleCloseNotif = () => {
    setOpenNotif(false);
  };
  const handleOpen = (doci,doce) => {

    di=doci;
    de=doce;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleApp = () =>{

    let t=''+time+'';
    let da= ''+date+'/'+month+'/'+year+'';
    doctorService.PostAppointment(da,t,description,di,de)
    .then(() => {
      console.log("Successfully Sent Appointment!");
      setTimeout(function () {
        window.location = "/";
      }, 2000);
      
    })
    .catch((err) => {
      console.log(err)
    });


  };
  const settoA=(id)=>{
    doctorService.CusAccept(id)
    .then(() => {
      console.log("Successfully Accepted by Customer Appointment!");
      setTimeout(function () {
        window.location = "/";
      }, 2000);
      
    })
    .catch((err) => {
      console.log(err)
    });
  };
  const settoR=(id)=>{
    doctorService.CusReject(id)
    .then(() => {
      console.log("Successfully Rejected by Customer Appointment!");
      setTimeout(function () {
        window.location = "/";
      }, 2000);
      
    })
    .catch((err) => {
      console.log(err)
    });
  };
  return (
    <div>
             <div>
             <Modal 
  aria-labelledby="transition-modal-title"
  aria-describedby="transition-modal-description"
  className={classes.modal}
  open={openNotif}
  onClose={handleCloseNotif}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500, 
  }}
>
  <Fade in={openNotif}>
    <div className={classes.paper}>
     <Container maxWidth="md">
     <Grid >
          {a.map((Appoint) => (( (Appoint.status==="edited"))?(
              <Grid item key={Appoint}>
            <ul style={{listStyle:'none',display:'inline-flex',border:'1px solid black',width:'100%',flexWrap:"wrap"}}>
       
       <li style={{width:'15%'}}>
         <div> <Typography variant="h5">Appointment ID</Typography>
          <Typography variant="h6" color="textSecondary" >{Appoint._id}</Typography>
         </div>
         </li >
         <li style={{width:'25%',marginLeft:'10px'}}>
         <div>   <Typography variant="h5">Doctor Email</Typography>
          <Typography variant="h6" color="textSecondary" >{Appoint.doctoremail}</Typography>
         </div>
         
         </li>
         <li style={{width:'20%',marginLeft:'10px'}}>
         <div>   <Typography variant="h5">Time</Typography>
          <Typography variant="h6" color="textSecondary" >{Appoint.time}</Typography>
         </div>
         </li>
         <li style={{width:'35%'}}>
         <div>    <Typography variant="h5">Date</Typography>
          <Typography variant="h6" color="textSecondary" >{Appoint.date}</Typography>
         </div>
         </li>
         <li style={{width:'35%'}}>
         <div>    <Typography variant="h5">Status</Typography>
          <Typography variant="h6" color="textSecondary" >{Appoint.status}</Typography>
         </div>
         <Button onClick={(e)=>settoA(Appoint._id)}>Accept</Button>
         <Button onClick={(e)=>settoR(Appoint._id)}>Reject</Button>
         </li>
       </ul>
       </Grid>):null
            ))}
              </Grid>
     </Container>
    </div>
  </Fade>
</Modal>


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
      
      <label style={{fontWeight:'bold',color:'blueviolet'}}>Date </label> <span>   
        <select id="date"onChange={(e)=>{setDate(e.target.value)}} style={{marginTop:'10px',width:'150px',height:'30px',marginLeft:'20px',border:'0px solid #fff'}}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                
                                </select> </span>
      
      
      <label style={{fontWeight:'bold',color:'blueviolet'}}>Month </label> <span>   
        <select id="month"onChange={(e)=>{setMonth(e.target.value)}} style={{marginTop:'10px',width:'150px',height:'30px',marginLeft:'20px',border:'0px solid #fff'}}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                
                                </select> </span>
        <label style={{fontWeight:'bold',color:'blueviolet'}}>Year </label> <span>   
        <select id="Year"onChange={(e)=>{setYear(e.target.value)}} style={{marginTop:'10px',width:'150px',height:'30px',marginLeft:'20px',border:'0px solid #fff'}}>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                        
                                </select> </span>
     </div>
     <div>
     <TextField style={{marginLeft:'5px',width:"70%"}}
     label="Enter Description"
     onChange={(e)=>{setDescription(e.target.value)}}
     />
   <input type='time' onChange={(e)=>{setTime(e.target.value)}} style={{ marginLeft:'5px',width:"20%"}} ></input>
     </div>
     
      <center style={{marginTop:'20px'}}>
        <Button variant="outlined" onClick={handleApp}>Submit</Button>
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
          <Container maxWidth="md">
          <div style={{marginBottom:'20px'}}>
            <Typography variant="h6">Notifications</Typography> 
            <Button onClick={handleNotif}>
            <Badge badgeContent={1} color="secondary">
            <NotificationsNoneIcon style={{fontSize:'50px'}}/>
            </Badge>
            </Button>
          </div>
            <Typography variant="h4" style={{marginBottom:'20px'}}>Your appointments</Typography>
            <Grid >
          {a.map((Appoint) => (( (Appoint.status==="accepted")||(Appoint.status==="rejected"))?(
              <Grid item key={Appoint}>
            <ul style={{listStyle:'none',display:'inline-flex',border:'1px solid black',width:'100%',flexWrap:"wrap"}}>
       
       <li style={{width:'15%'}}>
         <div> <Typography variant="h5">Appointment ID</Typography>
          <Typography variant="h6" color="textSecondary" >{Appoint._id}</Typography>
         </div>
         </li >
         <li style={{width:'25%',marginLeft:'10px'}}>
         <div>   <Typography variant="h5">Doctor Email</Typography>
          <Typography variant="h6" color="textSecondary" >{Appoint.doctoremail}</Typography>
         </div>
         
         </li>
         <li style={{width:'20%',marginLeft:'10px'}}>
         <div>   <Typography variant="h5">Time</Typography>
          <Typography variant="h6" color="textSecondary" >{Appoint.time}</Typography>
         </div>
         </li>
         <li style={{width:'35%'}}>
         <div>    <Typography variant="h5">Date</Typography>
          <Typography variant="h6" color="textSecondary" >{Appoint.date}</Typography>
         </div>
         </li>
         <li style={{width:'35%'}}>
         <div>    <Typography variant="h5">Status</Typography>
          <Typography variant="h6" color="textSecondary" >{Appoint.status}</Typography>
         </div>
         </li>
       </ul>
       </Grid>):null
            ))}
              </Grid>
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
            {cards.map((card,key) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Doctor
                    </Typography>
                    <Typography>
                     FirstName: {card.firstname}
                    </Typography>
                    <Typography>
                     LastName: {card.lastname}
                    </Typography>
                    <Typography>
                     Email: {card.email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary"
                    onClick={handleView}>
                      View
                    </Button>
                    <Button  size="small" color="primary" onClick={()=>handleOpen(card._id,card.email)}>
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
    </div>
  );
}