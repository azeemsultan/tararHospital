const mongoose = require("mongoose");
const Joi = require("joi");

const doctor = mongoose.model("Doctor", mongoose.Schema({
    firstname: {
        type: String,
        maxlenght: 255,
        required: true
    },
    lastname: {
        type: String,
        maxlenght: 255,
        required: true
    },
    pmdc: {
        type:Number,
        minlenght: 11,
        required:true
    },
    email: {
        type: String,
        maxlenght: 255,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlenght: 4,
        maxlenght: 1024,
        required: true
    },
    status:{
        type: String
    }
}))

function validateDoctor(customer) {

    const Schema = Joi.object({
        firstname: Joi.string().max(255).required(),
        lastname: Joi.string().max(255).required(),
        pmdc:Joi.number().min(11).required(),
        email: Joi.string().max(255).required().email(),
        password: Joi.string().max(255).min(8).required()
    })
    return Schema.validate(customer)
}
function validateLogin(customer) {

    const Schema = Joi.object({
        email: Joi.string().max(255).required().email(),
        password: Joi.string().min(8).max(255).required()
    })
    return Schema.validate(customer)
}

exports.Doctor = doctor;
exports.validateDoctor = validateDoctor;
exports.validateLogin = validateLogin