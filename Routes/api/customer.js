const express    = require("express");
const router     = express.Router();
const bcrypt     = require("bcryptjs");
const bodyparser = require("body-parser");
const decode     = require("jwt-decode");
const { Customer , validateCustomer, validateLogin } = require('../../Model/Customer/Customer');
const { setToken } = require("../../Auth/auth");
const email = require("./email");
router.use(bodyparser.json());
router.use(bodyparser.urlencoded());
// Customer sign-up fr-
router.post("/signup", async (req,res) => {

    console.log(
        "signUp Backend ",
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password
      );
  // Validate Schema
  const { error } = validateCustomer(req.body);
  if (error) {
    console.log("validation Error", error);
    return res.status(400).send(error.details[0].message);
  }

  // Check if this Customer already exisits
  let user = await Customer.findOne({ email: req.body.email });
  if (user) {
    console.log("Customer already exists");
    return res.status(400).send("Customer already exists!");
  } 
  // Insert the new Customer if they do not exist yet
  else {
    try {
      user = new Customer({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      });
    } catch (ex) {
      console.log("Error in creating Customer", ex);
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    let text="Your Sign up as a Customer has been accepted on email: "+user.email+".";
    email(user.email, " Sign up Accepted ", text);
    const token = setToken(user._id, user.isApproved, user.email, user.isAdmin);
    console.log("token", token);
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send(token);
  }

 });


 router.post("/login", async (req, res) => {
    const { error } = validateLogin(req.body);
  
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
  
    let user = await Customer.findOne({ email: req.body.email });
    if (user) {
      const validatePassword = await bcrypt.compare(req.body.password,user.password);
      if (!validatePassword)
      {
        res.send("No Registered Customer exists");
      }    
      try{
      const token = setToken(user._id, user.email, user.isAdmin, user.isApproved);
      console.log(token);
      res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(token)
        .status(200)
      }
      catch(ex){
         console.log("Setting token Exception" , ex)
      }
    } else res.send(404);
  });
  router.get('/view',async ( req , res )=>{
    const cus = await Customer.find();
    if(!cus)res.status(400);
    res.send(cus);
  });
  router.post("/del", async (req,res)=>{
    const task = await Customer.findOne({email:req.body.csearchemail});
    if(task){
      task.deleteOne({_id:task._id});
      res.send(200);
  }
  else{

      console.log("Customer not found"+req.body.csearchemail);
      return res.status(400).send("customer not exists!");

  }


  });
 router.update;
 module.exports = router;