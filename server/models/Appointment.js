const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor_id: {
    type: mongoose.Types.ObjectId,
  },
  patient_name: {
    type: String,
  },
  email:{
    type: email,
  },
  description: {
    type: String,
  },
  age:{
    type:Number,
  },
  date: {
    type:Date,
  },
  phone: {
    type: String,
  },
  prescription: {
    type: String,
  },
});

module.exports = mongoose.model('appointment', appointmentSchema);
