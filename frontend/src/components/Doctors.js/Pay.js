import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import {makeStyles} from '@material-ui/core/styles';
import CardInput from './CardInput';
import * as paymentService from '../../Axios-Actions/paymentService';
import { Container, Typography } from '@material-ui/core';
import * as consultService from '../../Axios-Actions/consultService';
const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: '35vh auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
  },
  button: {
    margin: '2em auto 1em',
  },
});

const Pay=(props)=> {
  const classes = useStyles();
  // State
  const [email, setEmail] = useState('');
  const [c    , setC]     = useState([]);

  const stripe = useStripe();
  const elements = useElements();

  React.useEffect(() => {
    consultService.Payment()
    .then((result) => {setC(result.data)}
    ,console.log(c)
    );
},[]);


  const handleSubmit = async (event) => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

        const res=await paymentService.Payment(email,c.fee,c._id);


 //   const res = await axios.post('http://localhost:3000/pay', {email: email});

    const clientSecret = res.data['client_secret'];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Money is in the bank!');
        setTimeout(function () {
          window.location = "/doctors";
        }, 2000);
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };


  return (
    <Container maxWidth="md">
    <Card className={classes.root}>
      <Button onClick={()=>props.xSetter(false)}
      style={{left:'90%'}}>X</Button>
      <CardContent className={classes.content}>
        <div style={{display:'inline-flex',flexWrap:'wrap'}}>
        <Typography variant="h6" style={{color:'#336bd4'}}>Dr Name: {c.firstname} {c.lastname}</Typography>
        <Typography variant="h6" style={{color:'#336bd4',marginLeft:'10%'}}>Dr Email: {c.email} </Typography>
        <Typography variant="h6" style={{color:'#336bd4',marginLeft:'10%'}}>Fee: {c.fee}</Typography>
        </div>
        <TextField
          label='Email'
          id='outlined-email-input'
          helperText={`Email you'll recive updates and receipts on`}
          margin='normal'
          variant='outlined'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <CardInput />
        <div className={classes.div}>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
            Pay
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Subscription
          </Button>
        </div>

      </CardContent>
    </Card>
    </Container>
  );
}

export default Pay;