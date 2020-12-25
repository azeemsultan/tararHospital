import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Button, Paper } from '@material-ui/core';
import * as adminService from "../../Axios-Actions/adminService";
import * as rateService from "../../Axios-Actions/rateService";
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
  const [r, setR] = React.useState([]);
  React.useEffect(() => {
    adminService.getpendingdoc()
    .then((result) => {setDoc1(result.data)});
    rateService.findallrate()
    .then((result) => {setR(result.data)});
    
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
   const del=(id)=>{

    rateService.deleterate(id)
    .then(() => {
      setTimeout(function () {
        window.location = "/dashboard";
      }, 2000);
      
    })
    .catch((err) => {
      console.log(err)
    });

    
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

  

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Accept Doctor Sign up Request</Title>
      
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">PMDC</StyledTableCell>
            <StyledTableCell align="left">Approval</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doc1.map((row) => (
            <StyledTableRow key={row.name} >
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.firstname}{row.lastname} </StyledTableCell>
              <StyledTableCell align="left">{row.pmdc}</StyledTableCell>
              <StyledTableCell align="left">
              <Button color="primary" variant="outlined" onClick={(e)=>acceptdoc(e,row._id)} >Accept</Button>  <Button variant="outlined" color="secondary"onClick={(e)=>rejectdoc(e,row._id)}>Reject</Button>
              </StyledTableCell>
            </StyledTableRow>
         
          ))}
        </TableBody>
      </Table>
    </TableContainer>

          

      <div className={classes.seeMore}>
        <br/>
      <center>
      <Typography variant="h6">Reviews</Typography>
    </center>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell align="left">Customer ID</StyledTableCell>
            <StyledTableCell align="left">Doctor Email</StyledTableCell>
            <StyledTableCell align="left">Doctor ID</StyledTableCell>
            <StyledTableCell align="left">Stars</StyledTableCell>
            <StyledTableCell align="left">Review</StyledTableCell>
            <StyledTableCell align="left">Remove Review</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {r.map((row) => (
            <StyledTableRow key={row.id} >
        
              <StyledTableCell align="left">{row.customer}</StyledTableCell>
              <StyledTableCell align="left">{row.doctoremail}</StyledTableCell>
              <StyledTableCell align="left">{row.doctor}</StyledTableCell>
              <StyledTableCell align="left">{row.star}</StyledTableCell>
              <StyledTableCell align="left">{row.review}</StyledTableCell>
              <StyledTableCell align="left">
              <Button color="primary" variant="outlined" onClick={(e)=>del(row._id)} >Delete</Button> 
              </StyledTableCell>
            </StyledTableRow>
         
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </React.Fragment>
  );
}