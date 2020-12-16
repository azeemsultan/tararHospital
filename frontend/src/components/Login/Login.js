import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl,FormLabel,RadioGroup} from '@material-ui/core';
import * as authService from '../../Axios-Actions/authService'
import img from '../../assets/img/docs.jpg'

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
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles(); 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [option, setOption] = useState('');

  const SignIn = () => {
    if(option==='customer'){
    authService
    .CustomerLogin(email,password)
    .then((result) => {
       localStorage.setItem("token", result.data);
      console.log("Successfully logged in!");
      setTimeout(function () {
        window.location = "/";
      }, 2000);
      
    })
    .catch((err) => {
      setPassword({ invalid: true });
      console.log(err)
    });
  }else if(option==='doctor'){
    authService
    .DoctorLogin(email,password)
    .then((result) => {
      localStorage.setItem("token", result.data);
      console.log("Successfully logged in!");
      setTimeout(function () {
        window.location = "/doctordashboard";
      }, 2000);
      
    })
    .catch((err) => {
      setPassword({ invalid: true });
      console.log(err)
    });
  }
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        
            <TextField  onChange={(e)=>{setEmail(e.target.value)}
              }
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField  onChange={(e)=>{setPassword(e.target.value)}
              }
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />            
            
            <FormControl component="fieldset">
  <RadioGroup aria-label="gender" name="option" value={option} onChange={(e)=>{setOption(e.target.value)}}>
    <FormControlLabel value="customer" control={<Radio />} label="Sign in as Customer" />
    <FormControlLabel value="doctor" control={<Radio />} label="Sign in as Doctor" />
  </RadioGroup>
</FormControl>

            <Button onClick={SignIn}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
           
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
    </Grid>
  );
}