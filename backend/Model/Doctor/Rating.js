const mongoose = require("mongoose");
const Joi = require("joi");

const rating = mongoose.model("Rating", mongoose.Schema({

    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required:true       
   },
   doctoremail:{
     type: String,
     ref: "Doctor",
     required:true        
 },    customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required:true
  },
  star:{
      type: String,
      required:true
  },
  review:{
      type:String,
      required:true
  }

}))


exports.Rating = rating;
