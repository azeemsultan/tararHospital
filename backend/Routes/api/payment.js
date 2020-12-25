const express    = require("express");
const router     = express.Router();
const bodyparser = require("body-parser");
const decode     = require("jwt-decode");
const { setToken } = require("../../Auth/auth");
const {Consult,validateConsult} = require('../../Model/Customer/Consult');
const { default: jwtDecode } = require("jwt-decode");
router.use(bodyparser.json());
router.use(bodyparser.urlencoded());

const stripe = require('stripe')("sk_test_51Hv0nsJTgZiOu1hO3kiQxiRzfPxVuxLk0v9773zo5ezPklKd4T2wcWJRpk6h4OSrHGd9wTQtdfw9FgG7TxeBQeCW00inY4EtUN");

router.post('/pay', async (req, res) => {
    const {email} = req.body.email;
    const jwt = decode(req.header("x-auth-token"));
    if(req.body.id){
   const wait=await Consult.updateOne(
        {doctor:req.body.id,customer:jwt.id,status:"accepted but not paid"},
        {
          $set: {
            status:'accepted',
            isRated:'no'
          },
        },
        { new: true }
      );
      if(wait){
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.fee+"00",
        currency: 'PKR',
        metadata: {integration_check: 'accept_a_payment'},
        receipt_email: email,
      });
      res.json({'client_secret': paymentIntent['client_secret']})
    }}else{
      res.send(404);
    }
});
 router.update;
 module.exports = router;