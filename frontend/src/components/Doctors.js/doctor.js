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
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import Link from '@material-ui/core/Link';
import { Backdrop, Badge, Divider, Fade, Modal, TextField } from '@material-ui/core';
import img from '../../assets/img/doc.png';
import * as doctorService from '../../Axios-Actions/doctorService';
import Chat from '../Common/Location';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



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
  table: {
    minWidth: 700,
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
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


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
  const [chat, setChat] = React.useState(false);
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
     <Card className={classes.card} style={{maxWidth:'300px'}}>
                 <center>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Doctor Scheduled
                    </Typography>
                    <Typography variant="h6" color="textSecondary" >
                    {Appoint.firstname}      {Appoint.lastname}
                    </Typography>
                
                    <Typography variant="h6" color="textSecondary" >
        {Appoint.doctoremail}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" >
        {Appoint.date}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" >
        {Appoint.time}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" >
        {Appoint.status}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Divider/>
                <div style={{marginLeft:'15%'}}>
                    <Button onClick={(e)=>settoA(Appoint._id)}
                    style={{backgroundColor:'#61e885',color:'white'}}
                    >Accept</Button>
            
         <Button onClick={(e)=>settoR(Appoint._id)}
         style={{backgroundColor:'#ed4e4e',marginLeft:'5px',color:'white'}}
         >Reject</Button>
         </div>
                  </CardActions>
                  </center>
                </Card>
                </Grid>):null
            ))}
         
        
              </Grid>
     </Container>
    </div>
  </Fade>
</Modal>


<Modal 
  className={classes.modal}
  open={chat}
  onClose={handleViewClose}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500, 
  }}
>
  <Fade in={chat}>
  <div className={classes.paper}>
  <Chat/>
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
      <Container maxWidth="md">
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
       <div style={{marginTop:'10px'}}>
     <label style={{fontWeight:'bold',color:'blueviolet'}}>Time </label> 
     <input style={{marginLeft:'20px',paddingTop:'20px'}}
   type='time' onChange={(e)=>{setTime(e.target.value)}} style={{ marginLeft:'5px',width:"20%"}} ></input>
   </div>
     <TextField style={{marginLeft:'10px',width:"70%"}}
     label="Enter Description"
     onChange={(e)=>{setDescription(e.target.value)}}
     />
 
  
     </div>
     
      <center style={{marginTop:'20px'}}>
        <Button variant="outlined" onClick={handleApp}>Submit</Button>
        <Button variant="outlined" style={{marginLeft:'10px'}}
        onClick={handleClose}
        >Cancel</Button>
        </center>
        </Container>
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
      <main style={{color:'#336bd4'}}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
          <div style={{marginBottom:'20px'}}>
            <Typography variant="h6">Notifications</Typography> 
            <Button onClick={handleNotif}>
            <Badge badgeContent={1} color="secondary">
            <NotificationsNoneIcon style={{fontSize:'50px',color:'#336bd4'}}/>
            </Badge>
            </Button>
            
          </div>
            <Typography variant="h4" style={{marginBottom:'20px'}}>Your appointments</Typography>
            <Grid >
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Doctor Email</StyledTableCell>
            <StyledTableCell align="right">Time&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Date&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Status&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {a.map((row) => (( (row.status==="accepted")||(row.status==="rejected"))?(
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.doctoremail}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ):null
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         
              </Grid>
              <br/>
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
                  <Button onClick={()=>setChat(true)}> 
                      Chat now
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
                    image= {img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style={{color:'#336bd4'}}>
                      Doctor
                    </Typography>
                    <Typography variant="h6"  color="textSecondary">
                    {card.firstname}      {card.lastname}
                    </Typography>
                
                    <Typography variant="h6"  color="textSecondary">
        {card.email}
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