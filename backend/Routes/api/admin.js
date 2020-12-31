const express    = require("express");
const router     = express.Router();
const bcrypt     = require("bcryptjs");
const bodyparser = require("body-parser");
const decode     = require("jwt-decode");
const { Doctor , validateDoctor, validateLogin } = require('../../Model/Doctor/Doctor');
const { setToken } = require("../../Auth/auth");
const {Customer} = require("../../Model/Customer/Customer");
const {Admin} =require('../../Model/Admin/Admin');
const email = require("./email");

router.use(bodyparser.json());
router.use(bodyparser.urlencoded());
router.post('/login', async ( req , res ) => {

  // validate Schema
  const { error } = validateLogin(req.body)
  if (error) {
      console.log(error.details[0].message)
      return res.status(400).send(error.details[0].message)
  }

  // authentication of email and password 
  let user = await Admin.findOne({ email: req.body.email });
  if (user) {
      const validatePassword = bcrypt.compare(req.body.password, user.password)
      if (!validatePassword){
          res.status().send("Invalid email and password")
      }
      else{
      const token = setToken(user._id, user.email, user.isAdmin, user.isApproved)
      res
          .header("x-auth-token", token)
          .header("access-control-expose-headers", "x-auth-token")
          .send(token)         
          .status(200)
          
      }
  }
  else{
      res.status(400).send("No Registered Admin exists")
  }

});
router.post("/acceptdoc",async (req,res)=>{

    try{
    const u = await Doctor.findById({_id:req.body.id});
    let text="Your Sign up as a doctor has been accepted on email: "+u.email+".";
    email(u.email, " Sign up Accepted ", text);
    await Doctor.update(
        {_id:req.body.id},
        {
          $set: {
            status:'accepted'
          },
        },
        { new: true }
      );
    }catch(err){console.log(err)}
    res.send(200);


});
router.post("/rejectdoc",async (req,res)=>{
    try{
    let table = await Doctor.findById({_id:req.body.id});
    let text="Your Sign up as a doctor has been rejected on email: "+table.email+".";
    email(table.email, " Sign up Rejected ", text);

    table.deleteOne({_id:req.body.id});

    }catch(err){console.log(err)}

    res.send(200);
});

router.get("/getdoc",async (req,res)=>{
    let doc= await Doctor.find({status:"pending"});
    res.send(doc);
});
router.get("/getaccepteddoc",async (req,res)=>{
    let doc= await Doctor.find({status:"accepted"});
    res.send(doc);
});
router.get("/getcus",async (req,res)=>{
    let c= await Customer.find();
    res.send(c);
});

router.update;
module.exports = router;