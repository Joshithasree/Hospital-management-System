const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Please enter email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter password'],
  },
  description:{
    type:String,
  },
  phone: {
    type: String,
    required:[true, "please enter your mobile number"],
  },
  date:{
    type: Date,
    default:Date.now(),
  },
  address: {
    type: String,
  },
  sex: {
    type: String,
  },
  age: {
    type: String,
  },
  bloodgroup: {
    type: String,
  },
});

module.exports = mongoose.model('Patient', patientSchema);
