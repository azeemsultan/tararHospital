const mongoose = require("mongoose");
const Joi = require("joi");
const consult = mongoose.model("Consult",mongoose.Schema({
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required:true
    },
    customeremail: {
      type: String,
      ref: "Customer",
      required: true
    },
    date:{
        type:String,
        required:true
    },time:{
      type:String,
      required:true
    },
    description:{
        type:String,
        required:true
    },
      status: {
      type: String,
      maxlenght: 255,
  },
     doctor:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Doctor",
       required:true       
  },
  doctoremail:{
    type: String,
    ref: "Doctor",
    required:true        
},isRated:{
  type:String
}
  })
);

function validateConsult(consult) {

  const Schema = Joi.object({
    customeremail: Joi.string().max(255).required().email(),
    date: Joi.string().max(255).required(),
    time: Joi.string().max(255).required(),
    description: Joi.string().max(255).required(),
    status: Joi.string().max(255).required(),
    doctoremail: Joi.string().max(255).required().email(),
  })
  return Schema.validate(consult)
}

exports.Consult=consult;
exports.validateConsult=validateConsult;