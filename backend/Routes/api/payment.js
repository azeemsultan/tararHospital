const express    = require("express");
const router     = express.Router();
const bodyparser = require("body-parser");
const decode     = require("jwt-decode");
const { setToken } = require("../../Auth/auth");

router.use(bodyparser.json());
router.use(bodyparser.urlencoded());

const stripe = require('stripe')("sk_test_51Hv0nsJTgZiOu1hO3kiQxiRzfPxVuxLk0v9773zo5ezPklKd4T2wcWJRpk6h4OSrHGd9wTQtdfw9FgG7TxeBQeCW00inY4EtUN");

router.post('/pay', async (req, res) => {
    const {email} = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 5000,
        currency: 'usd',
        metadata: {integration_check: 'accept_a_payment'},
        receipt_email: email,
      });

      res.json({'client_secret': paymentIntent['client_secret']})
});
 router.update;
 module.exports = router;