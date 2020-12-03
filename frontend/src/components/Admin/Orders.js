import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Button } from '@material-ui/core';
import * as adminService from "../../Axios-Actions/adminService";
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const [doc1, setDoc1] = React.useState([]);
  React.useEffect(() => {
    adminService.getpendingdoc()
    .then((result) => {setDoc1(result.data)});
},[]);
   const acceptdoc=(e,id)=>{
console.log("ID="+id);
    adminService.accept(id)
    .then(() => {
      console.log("Successfully Accepted Doctor Signup!");
      setTimeout(function () {
        window.location = "/dashboard";
      }, 2000);
      
    })
    .catch((err) => {
      console.log(err)
    });


   }
   const rejectdoc=(e,id)=>{

    adminService.reject(id)  
     .then(() => {
      console.log("Successfully Rejected Doctor Signup!");
      setTimeout(function () {
        window.location = "/dashboard";
      }, 2000);
      
    })
    .catch((err) => {
      console.log(err)
    });


   }

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Accept Doctor Sign up Request</Title>

          {doc1.map((d) => (
             <ul style={{listStyle:'none',display:'inline-flex',border:'1px solid black',width:'100%',flexWrap:"wrap"}}>
       
             <li style={{width:'15%'}}>
               <div> <Typography variant="h5">Doctor ID</Typography>
                <Typography variant="h6" color="textSecondary" >{d._id}</Typography>
               </div>
               </li >
               <li style={{width:'25%',marginLeft:'10px'}}>
               <div>   <Typography variant="h5">Doctor Email</Typography>
                <Typography variant="h6" color="textSecondary" >{d.email}</Typography>
               </div>
               
               </li>
               <li style={{width:'20%',marginLeft:'10px'}}>
               <div>   <Typography variant="h5">Name</Typography>
          <Typography variant="h6" color="textSecondary" >{d.firstname} {d.lastname}</Typography>
               </div>
               </li>
               <li style={{width:'35%'}}>
               <div>    <Typography variant="h5">PMDC</Typography>
                <Typography variant="h6" color="textSecondary" >{d.pmdc}</Typography>
               </div>
               </li>
               <li style={{width:'35%'}}>
               <div>    <Typography variant="h5">Approve</Typography>
               <Button color="secondary" onClick={(e)=>acceptdoc(e,d._id)} >Accept</Button>  <Button color="secondary"onClick={(e)=>rejectdoc(e,d._id)}>Reject</Button>
               </div>
               </li>
             </ul>
          ))}

      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more 
        </Link>
      </div>
    </React.Fragment>
  );
}