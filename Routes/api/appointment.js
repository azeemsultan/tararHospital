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
    
    let cus= await Customer.findOne({_id:jwt.id});
   console.log(cus);
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
            time:req.body.time,
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
  router.get('/view',async ( req , res )=>{
    const jwt = decode(req.header("x-auth-token"));
    const Ap = await Appointment.find({doctor:jwt.id});
    if(!Ap)res.status(400);
    res.send(Ap);
  });
  router.get('/viewall',async ( req , res )=>{
    const jwt = decode(req.header("x-auth-token"));
    const Ap = await Appointment.find({customer:jwt.id});
    if(!Ap)res.status(400);
    res.send(Ap);
  });


router.post('/accept', async (req,res)=>{
  await Appointment.update(
    {_id:req.body.id},
    {
      $set: {
        status:'accepted'
      },
    },
    { new: true }
  );

res.send(200);
});
router.post('/reject', async (req,res)=>{
  await Appointment.update(
    {_id:req.body.id},
    {
      $set: {
        status:'rejected'
      },
    },
    { new: true }
  );

res.send(200);
});
router.post('/edit', async (req,res)=>{
  await Appointment.update(
    {_id:req.body.id},
    {
      $set: {
        status:'edited',
        date:req.body.date,
        time:req.body.time
      },
    },
    { new: true }
  );

res.send(200);
});
router.post('/cusaccept', async (req,res)=>{
  await Appointment.update(
    {_id:req.body.id},
    {
      $set: {
        status:'pending'
      },
    },
    { new: true }
  );

res.send(200);
});
router.post('/cusreject', async (req,res)=>{
  let table = await Appointment.findOne({_id:req.body.id});
  table.deleteOne({_id:req.body.id});
res.send(200);
});
router.update;
module.exports = router;