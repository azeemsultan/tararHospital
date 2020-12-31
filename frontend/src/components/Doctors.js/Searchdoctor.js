import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import img from '../../assets/img/doc.png';
import Grid from '@material-ui/core/Grid';
import { Button, Container, Paper, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import ReactStars from "react-rating-stars-component";
import TableRow from '@material-ui/core/TableRow';
import CardMedia from '@material-ui/core/CardMedia';
import { Backdrop, Badge, Divider, Fade, Modal} from '@material-ui/core';
import * as searchService from "../../Axios-Actions/searchService";
import * as doctorService from '../../Axios-Actions/doctorService';
import * as consultService from '../../Axios-Actions/consultService';
const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

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
let di,de;
let f,l,fe,sp;
export default function Searchdoctor() {
  const classes = useStyles();
 
  const [se,setSe]= useState('');
  const [p,setP]= useState('');
  const [cards,setCards] =useState([]);
  const [view, setView] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [consult,setConsult] = React.useState(false);
  const [time, setTime] = React.useState('');
  const [date, setDate] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');
  const [description, setDescription] = React.useState('');
  const searchbyemail=(se)=>{

    searchService.searchbyemail(se)
    .then((result) => {setCards(result.data)});

  }
  const handleViewClose = () => {
    setView(false);
  }; const handleApp = () =>{

    let t=''+time+'';
    let da= ''+date+'/'+month+'/'+year+'';
    doctorService.PostAppointment(da,t,description,di,de)
    .then(() => {
      console.log("Successfully Sent Appointment!");
      setTimeout(function () {
        window.location = "/doctors";
      }, 2000);
      
    })
    .catch((err) => {
      console.log(err)
    });


  };
  const handleCon = () =>{

    let t=''+time+'';
    let da= ''+date+'/'+month+'/'+year+'';
    consultService.PostConsult(da,t,description,di,de)
    .then(() => {
      console.log("Successfully Sent Consult!");
      setTimeout(function () {
        window.location = "/doctors";
      }, 2000);
      
    })
    .catch((err) => {
      console.log(err)
    });


  };const handleCloseConsult = () => {
    setConsult(false);
  };
  const handleOpen = (doci,doce) => {

    di=doci;
    de=doce;
    setOpen(true);
  };
  
const handleConsult = (doci,doce) => {
  di=doci;
  de=doce;
  setConsult(true);
};
  const handleView = (fn,ln,fee,spec) => {
    f=fn;
    l=ln;
    fe=fee;
    sp=spec;
    setView(true);
  };

  const searchbypmdc=(p)=>{

    searchService.searchbypmdc(p)
    .then((result) => {setCards(result.data)});

  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm">
    <Typography variant="h6" style={{marginTop:'20px',backgroundColor:'#336bd4',color:'white'}}>Search Doctor by Speciality</Typography>
    <TextField
    onChange={(e)=>{setSe(e.target.value)}}
    label="Enter Doctors Speciality"
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="speciality"
    name="speciality"
    autoComplete="speciality"
    autoFocus
    >
    </TextField>
    <Button               fullWidth
              variant="contained"
              color="primary"
            onClick={(e)=>{searchbyemail(se)}}>Search</Button>
 
             <Typography variant="h6" style={{marginTop:'20px',backgroundColor:'#336bd4',color:'white'}}>Search Doctor by Location </Typography>
    <TextField
    onChange={(e)=>{setP(e.target.value)}}
    label="Enter Doctors Location"
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="location"
    name="location"
    autoComplete="location"
    autoFocus
    >
    </TextField>
    <Button               fullWidth
              variant="contained"
              color="primary"
            onClick={(e)=>{searchbypmdc(p)}}>Search</Button>
 
            <Typography variant="h6" style={{marginTop:'20px',backgroundColor:'#336bd4',color:'black'}}>Results</Typography>
            <Grid>
    {cards.map((card,key) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <br/>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                  
                    title="Image title"
                  >
                      <img  style={{maxWidth:"300px",maxHeight:"300px"}}src={card.imageURL||img}></img>
                  </CardMedia>
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
                    onClick= {()=>handleView(card.firstname,card.lastname,card.fee,card.speciality)}>
                      View
                    </Button>
                    <Button  size="small" color="primary" onClick={()=>handleOpen(card._id,card.email)}>
                     Appointment
                    </Button>
                    <Button size="small" color="primary" onClick={()=>handleConsult(card._id,card.email)}>
                      Consult
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            </Grid>
          
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

      <Typography variant="h4" style={{textAlign:'center',marginBottom:'10px',color:'#336bd4'}}>
       {f} {l}
      </Typography>
    <Divider/>
     <div style={{display:'inline-flex',marginTop:'10px'}}>
     <div>
       <img src={img}/>

     </div>
 
     <div>
     <Typography variant="h6" style={{marginLeft:'30px'}}>
       Speciality: {sp}
     </Typography> <Divider/> <br/>
     <div>
     <Typography variant="h6" style={{marginLeft:'30px'}}>
       Fee: {fe}
     </Typography>
     </div> <Divider/> <br/>
     <div>
     <Typography variant="h6" style={{marginLeft:'30px'}}>
       5 Stars ({Math.floor((Math.random() * 10) + 1)})
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
  open={consult}
  onClose={handleCloseConsult}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500, 
  }}
>
  <Fade in={consult}>
    <div className={classes.paper}>
      <Container maxWidth="md">
        <div style={{backgroundColor:'#336bd4',color:'white'}}>
      <Typography variant="h4">
        Online Consulting Request
      </Typography>
      </div>
     <div>
     <Typography variant="h6" style={{marginTop:'20px',backgroundColor:'#336bd4',color:'white'}}>
        Select your date
      </Typography>
      
      <label style={{fontWeight:'bold',color:'#336bd4'}}>Date </label> <span>   
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
      
      
      <label style={{fontWeight:'bold',color:'#336bd4'}}>Month </label> <span>   
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
        <label style={{fontWeight:'bold',color:'#336bd4'}}>Year </label> <span>   
        <select id="Year"onChange={(e)=>{setYear(e.target.value)}} style={{marginTop:'10px',width:'150px',height:'30px',marginLeft:'20px',border:'0px solid #fff'}}>
        <option value="2020">0000</option>
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
     <label style={{fontWeight:'bold',color:'#336bd4'}}>Time </label> 
     <input style={{marginLeft:'20px',paddingTop:'20px'}}
   type='time' onChange={(e)=>{setTime(e.target.value)}} style={{ marginLeft:'5px',width:"20%"}} ></input>
   </div>
     <TextField style={{marginLeft:'10px',width:"70%"}}
     label="Enter Description"
     onChange={(e)=>{setDescription(e.target.value)}}
     />
 
  
     </div>
     
      <center style={{marginTop:'20px'}}>
        <Button variant="outlined" color="primary" onClick={handleCon}>Submit</Button>
        <Button variant="outlined" color="secondary" style={{marginLeft:'10px'}}
        onClick={()=>setConsult(false)}
        >Cancel</Button>
        </center>
        </Container>
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
        <div style={{backgroundColor:'#336bd4',color:'white'}}>
      <Typography variant="h4">
        Get your Appointment
      </Typography>
      </div>
     <div>
     <Typography variant="h6" style={{marginTop:'20px',backgroundColor:'#336bd4',color:'white'}}>
        Select your date
      </Typography>
      
      <label style={{fontWeight:'bold',color:'#336bd4'}}>Date </label> <span>   
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
      
      
      <label style={{fontWeight:'bold',color:'#336bd4'}}>Month </label> <span>   
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
        <label style={{fontWeight:'bold',color:'#336bd4'}}>Year </label> <span>   
        <select id="Year"onChange={(e)=>{setYear(e.target.value)}} style={{marginTop:'10px',width:'150px',height:'30px',marginLeft:'20px',border:'0px solid #fff'}}>
        <option value="2020">0000</option>
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
     <label style={{fontWeight:'bold',color:'#336bd4'}}>Time </label> 
     <input style={{marginLeft:'20px',paddingTop:'20px'}}
   type='time' onChange={(e)=>{setTime(e.target.value)}} style={{ marginLeft:'5px',width:"20%"}} ></input>
   </div>
     <TextField style={{marginLeft:'10px',width:"70%"}}
     label="Enter Description"
     onChange={(e)=>{setDescription(e.target.value)}}
     />
 
  
     </div>
     
      <center style={{marginTop:'20px'}}>
        <Button variant="outlined" color="primary" onClick={handleApp}>Submit</Button>
        <Button variant="outlined" color="secondary" style={{marginLeft:'10px'}}
        onClick={()=>handleClose}
        >Cancel</Button>
        </center>
        </Container>
    </div>
  </Fade>
</Modal>
</div>
            </Container> 
            
    </React.Fragment>
    
  );
}