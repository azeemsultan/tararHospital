const express    = require("express");
const router     = express.Router();
const bcrypt     = require("bcryptjs");
const bodyparser = require("body-parser");
const decode     = require("jwt-decode");
const { Doctor , validateDoctor, validateLogin } = require('../../Model/Doctor/Doctor');
const { setToken } = require("../../Auth/auth");
const {Rating}= require('../../Model/Doctor/Rating');
const cloudinary= require('./cloudinary');
const { Consult } = require("../../Model/Customer/Consult");
router.use(bodyparser.json({limit: '50mb', extended: true}));
router.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
// Doctor sign-up fr-
router.post("/signup", async (req,res) => {

    console.log(
        "signUp Backend ",
        req.body.firstname,
        req.body.lastname,
        req.body.pmdc,
        req.body.email,
        req.body.password
      );
  // Validate Schema
  const { error } = validateDoctor(req.body);
  if (error) {
    console.log("validation Error", error);
    return res.status(400).send(error.details[0].message);
  }

  // Check if this Doctor already exisits
  let user = await Doctor.findOne({ email: req.body.email });
  if (user) {
    console.log("Doctor already exists");
    return res.status(400).send("Doctor already exists!");
  } 
  // Insert the new Doctor if they do not exist yet
  else {
    try {
      user = new Doctor({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        pmdc:req.body.pmdc,
        email: req.body.email,
        password: req.body.password,
        status:"pending"
      });
    } catch (ex) {
      console.log("Error in creating Doctor", ex);
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

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
  
    let user = await Doctor.findOne({ email: req.body.email });
    if (user) {
      const validatePassword = await bcrypt.compare(req.body.password,user.password);
      if (!validatePassword)
      {
           res.status(400)
      }    
      try{
      const token = setToken(user._id, user.email, user.isAdmin, user.isApproved);
      res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(token)
        .status(200)
      }
      catch(ex){
         console.log("Setting token Exception" , ex)
      }
    } else res.status(400).send("No Registered Doctor exists");
  });

  router.get('/view',async ( req , res )=>{
    const doc = await Doctor.find({status:"accepted"});
    if(!doc)res.status(400);
    res.send(doc);
  });
  router.get('/viewd', async (req,res)=>{
    const jwt = decode(req.header("x-auth-token"));
    const d =await Doctor.findOne({_id:jwt.id});
    if(!d)res.status(400);
    res.send(d);
  });
  router.get('/allrate', async (req,res)=>{
    const r =await Rating.find();
    res.send(r);
  });
  router.post('/deleterate', async (req,res)=>{
    const r =await Rating.findById({_id:req.body.id});
    r.deleteOne({_id:req.body.id});
    res.send(200);
  });
  router.post('/updatedetails', async (req,res)=>{
    const jwt = decode(req.header("x-auth-token"));
    const d =await Doctor.findOne({_id:jwt.id});
    if(!d)res.status(400);

    await Doctor.update(
      {_id:jwt.id},
      {
        $set: {
          fee:req.body.fee,
          speciality:req.body.speciality,
          location:req.body.location,
          education:req.body.education
        },
      },
      { new: true }
    );
    res.send(d);
  });
  router.post('/updateinfo', async (req,res)=>{
    const jwt = decode(req.header("x-auth-token"));
    const d =await Doctor.findOne({_id:jwt.id});
    if(!d)res.status(400);

    await Doctor.update(
      {_id:jwt.id},
      {
        $set: {
          firstname:req.body.firstname,
          lastname:req.body.lastname,
          email:req.body.email,
          password:req.body.password
        },
      },
      { new: true }
    );
    res.send(d);
  });
  router.post('/upload',async(req,res)=>{
    try{
    const jwt = decode(req.header("x-auth-token"));
    const result= await cloudinary.uploader.upload(req.body.imagestring);

    await Doctor.update(
      {_id:jwt.id},
      {
        $set: {
          imageURL:result.secure_url,
          imageCLOUDID:result.public_id
        },
      },
      { new: true }
    );
    }catch(err){
      console.log(err);
    }
    res.send(200);
  });
  router.post('/newrate',async (req,res)=>{
    const jwt = decode(req.header("x-auth-token"));

    let r = new Rating({
      doctor:req.body.did,
      doctoremail:req.body.de,
      customer:jwt.id,
      star:req.body.star,
      review:req.body.review
    });
  
    await r.save();
    await Consult.update(
      {isRated:"no",customer:jwt.id,doctor:req.body.did},
      {
        $set: {
         isRated:"yes"
        },
      },
      { new: true }
    );
    res.send(200);
  });
 router.update;
 module.exports = router;