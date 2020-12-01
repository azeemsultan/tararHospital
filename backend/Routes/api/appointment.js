const express    = require("express");
const router     = express.Router();
const bodyparser = require("body-parser");
const decode     = require("jwt-decode");
const { Customer , validateCustomer, validateLogin } = require('../../Model/Customer/Customer');
const { setToken } = require("../../Auth/auth");
const {Appointment,validateAppointment} = require('../../Model/Customer/Appointment');

router.use(bodyparser.json());
router.use(bodyparser.urlencoded());

router.post('/post', async ( req , res ) =>{
  const jwt = decode(req.header("x-auth-token"));
    try{
    console.log("hello"+jwt.id);
    }catch(err){
        console.log("i am error"+err);

    }
    let cus= await Customer.findOne({_id:jwt.id});
    // Validate Schema
    const { error } = validateAppointment(req.body);
    if (error) {
      console.log("validation Error", error);
      return res.status(400).send(error.details[0].message);
    }

    let appointment = await Appointment.findOne({ customer: jwt.id,doctor:req.body.doctor});
    if (appointment) {
      console.log("Appointment already exists");
      return res.status(400).send("Appointment already exists!");
    }
    else {
   
      try {
        appointment = new Appointment({
            customer: jwt.id,
            customeremail:cus.email,
            date:req.body.date,
            status: "pending",
            description:req.body.description,
            doctor:req.body.doctor,
            doctoremail:req.body.doctoremail
  
        });
      } catch (ex) {
        console.log("Error in posting task", ex);
      }
      await appointment.save();
      
      res.send(appointment);
    }
  });
router.update;
module.exports = router;