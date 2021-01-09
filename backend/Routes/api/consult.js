const express    = require("express");
const router     = express.Router();
const bodyparser = require("body-parser");
const decode     = require("jwt-decode");
const { Customer , validateCustomer, validateLogin } = require('../../Model/Customer/Customer');
const { setToken } = require("../../Auth/auth");
const {Consult,validateConsult} = require('../../Model/Customer/Consult');
const { Doctor } = require("../../Model/Doctor/Doctor");

router.use(bodyparser.json());
router.use(bodyparser.urlencoded());


router.post('/post', async ( req , res ) =>{

    const jwt = decode(req.header("x-auth-token"));
    
    let cus= await Customer.findOne({_id:jwt.id});
   console.log(cus);
    let consult = await Consult.findOne({ customer: jwt.id,doctor:req.body.doctor,status:"pending"});
    if (consult) {
      console.log("Consult already exists");
      return res.status(400).send("Consult already exists!");
    }
    else {
   
      try {
        consult = new Consult({
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
      await consult.save();
      
      res.send(consult);
    }
  });
  router.get('/view',async ( req , res )=>{
    const jwt = decode(req.header("x-auth-token"));
    const Ap = await Consult.find({doctor:jwt.id});
    if(!Ap)res.status(400);
    res.send(Ap);
  });
  router.get('/viewall',async ( req , res )=>{
    const jwt = decode(req.header("x-auth-token"));
    const Ap = await Consult.find({customer:jwt.id});
    if(!Ap)res.status(400);
    res.send(Ap);
  });
  router.post('/getpaymentinfo',async ( req , res )=>{
    const jwt = decode(req.header("x-auth-token"));
    const Ap = await Consult.findOne({customer:jwt.id,status:"accepted but not paid"});
    if(!Ap)res.status(400);
    const doc = await Doctor.findOne({email:Ap.doctoremail});
    if(!doc)res.status(400);
    res.send(doc);
  });


router.post('/accept', async (req,res)=>{
  await Consult.update(
    {_id:req.body.id},
    {
      $set: {
        status:'accepted but not paid'
      },
    },
    { new: true }
  );

res.send(200);
});
router.post('/reject', async (req,res)=>{
  await Consult.update(
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
  await Consult.update(
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
  await Consult.update(
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
  let table = await Consult.findOne({_id:req.body.id});
  table.deleteOne({_id:req.body.id});
res.send(200);
});

router.get('/sendratetable',async (req,res)=>{
  const jwt = decode(req.header("x-auth-token"));
  let con = await Consult.findOne({customer:jwt.id,isRated:"no",status:"accepted"});
  if(!con)res.status(400);
  let d=await Doctor.findOne({_id:con.doctor});
  if(!d)res.status(400);
  res.send(d);
});


router.update;
module.exports = router;