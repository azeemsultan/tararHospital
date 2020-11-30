const express    = require("express");
const router     = express.Router();
const bcrypt     = require("bcryptjs");
const bodyparser = require("body-parser");
const decode     = require("jwt-decode");
const { Doctor , validateDoctor, validateLogin } = require('../../Model/Doctor/Doctor');
const { setToken } = require("../../Auth/auth");

router.use(bodyparser.json());
router.use(bodyparser.urlencoded());
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
        password: req.body.password
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
 router.update;
 module.exports = router;