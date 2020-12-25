import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as authService from '../../Axios-Actions/authService'
import img from "../../assets/Assets/bg-img.png"
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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpDoctor() {
  const classes = useStyles();

  const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [pmdc,setPmdc]= useState('')

const register = () =>{
  authService.DoctorSignUp(
      fname,
      lname,
      pmdc,
      email,
      password
  

  ).then((response)=>{
  console.log(response)
  setTimeout(function(){
    window.location = "/login";
  },2000);
  })
}

  return (
    <Container component="main"  maxWidth="md" style={{backgroundImage:`url(${img})`}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
       
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField onChange={(e)=>{setFname(e.target.value)}
              }
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField onChange={(e)=>{setLname(e.target.value)}
              }
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={(e)=>{setPmdc(e.target.value)}
              }
                variant="outlined"
                required
                fullWidth
                id="PMDC"
                label="Enter PMDC NO"
                name="pmdc"
           
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={(e)=>{setEmail(e.target.value)}
              }
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
          
            <Grid item xs={12}>
              <TextField onChange={(e)=>{setPassword(e.target.value)}
              }
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
         
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
  
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}