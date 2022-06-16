const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const argon=require('argon2')

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, 'Please enter your name'],
  },
  password: {
    type: String,
    // required: [true, 'Please enter password'],
  },
  email: {
    type: String,
    // required: [true, 'Please enter email'],
    unique: [true, 'Email already exists'],
  },
  phone: {
    type: String,
    // unique: [true, 'Phone already exists'],
  },
  department: {
    type: String,
  },
  address: {
    type: String,
  },
  appointments: [
    {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      age:{
        type: Number,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
      phone: {
        type: String,
      },
      prescription: {
        type: String,
      },
    },
  ],
});

// doctorSchema.methods.comparePassword =  function(passw) {
//   return bcrypt.compareSync(passw, this.password)
// };
// doctorSchema.pre('save', async function (next) {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });
doctorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();
  this.password = await argon.hash(this.password);
});

doctorSchema.methods.comparePassword = async function (enteredPassword) {
  return  argon.verify(this.password, enteredPassword);
};


module.exports = mongoose.model('doctor', doctorSchema);
