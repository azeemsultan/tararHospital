
import React , {useEffect}from 'react';
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
import * as doctorService from '../../Axios-Actions/doctorService';
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

let e;

const AcceptApp=()=> {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [cards, setCard] = React.useState([]);
    const [time, setTime] = React.useState('');
    const [date, setDate] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [year, setYear] = React.useState('');
  useEffect(() => {
    doctorService.GetAppointment()
    .then((result) => {setCard(result.data)});
},[]);
    const handleOpen = (id) => {

      e=id;
      console.log(e);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   const accept=(id)=>{
    doctorService.SetAccept(id)
    .then(() => {
      console.log("Successfully Accepted Appointment!");
      setTimeout(function () {
        window.location = "/acceptappointment";
      }, 2000);
      
    })
    .catch((err) => {
      console.log(err)
    });
    };
    const reject=(id)=>{
      doctorService.SetReject(id)
      .then(() => {
        console.log("Successfully Rejected Appointment!");
        setTimeout(function () {
          window.location = "/acceptappointment";
        }, 2000);
        
      })
      .catch((err) => {
        console.log(err)
      });
      };
      const edit=(d,t)=>{
        doctorService.SetEdit(e,d,t)
        .then(() => {
          console.log("Successfully Edited Appointment!");
          setTimeout(function () {
            window.location = "/acceptappointment";
          }, 2000);
          
        })
        .catch((err) => {
          console.log(err)
        });


      }

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
   <Typography>Enter Time</Typography>
   <input type='time' onChange={(e)=>{setTime(e.target.value)}} style={{ marginLeft:'5px',width:"20%"}} ></input>
     </div>
     
            <div style={{marginTop:'20px'}}>
                <Button onClick={(e)=>edit(''+date+'/'+month+'/'+year+'',time)}>Send </Button>
                <Button style={{marginLeft:'20px'}}
                onClick={handleClose}
                >Cancel </Button>
                
            </div>
            </div>
        </Fade>
      </Modal>
    </div>
           
      <Grid container>
          <Grid item md={2}>

          </Grid>

          <Grid item md={8} style={{marginTop:'30px'}}>
          {cards.map((card) => ( (card.status==="pending")?(
              <Grid item key={card} xs={12} sm={6} md={4}>
          <Card style={{maxWidth:'350px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          {card.customeremail}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Date:{card.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Time:{card.time}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Description:{card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
        <Button onClick={(e)=>accept(card._id)} size="small" color="primary" style={{marginLeft:'10%'}}>
         Accept
        </Button>
        <Button onClick={(e)=>reject(card._id)} size="small" color="primary" style={{marginLeft:'10px'}}>
         Reject
        </Button>
        <Button onClick={()=>handleOpen(card._id)}
         size="small" color="primary" style={{marginLeft:'10px'}}>
         Edit
        </Button>
     
     
      </CardActions>
    </Card>
    </Grid>):null
            ))}
              </Grid>

              <Grid item md={2}>
              
              </Grid>
      </Grid>
    </div> );
}
 
export default AcceptApp;