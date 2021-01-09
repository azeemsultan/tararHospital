import React from "react";
import TextField from '@material-ui/core/TextField';
// @material-ui/core components
import {Card,CardHeader,Button,Grid} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components

import * as authService from "../../Axios-Actions/authService";
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import image from "../../assets/img/docs.jpg";


const useStyles = makeStyles(styles);

export default function AdminLogin(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email,setEmail] = React.useState('');
  const [pass,setPass] = React.useState('');


  const validation=()=>{

    authService.AdminLogin(email,pass)
    .then((result) => {
      console.log("Successfully admin login");
        setTimeout(function () {
          window.location = "/dashboard";
        }, 2000);
      })
      .catch((err) => {
        console.log(" upload error");
      });

  }

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>

      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>

              <Card >
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h2> Admin Authentication</h2>
                 
                  </CardHeader>
             
                  <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>{setPass(e.target.value)}}
              
            />
                 
                    <Button onClick={()=>{validation()}} simple color="primary" size="lg">
                     Log In
                    </Button>
                 
                </form>
              </Card>
         
        </div>
      </div>
    </div>
  );
}
