const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const bcrypt = require('bcryptjs');
const createError = require('../utils/errors');
const Login = async(req, res, next) => {
  // console.log(req.body)
  const { name, password } = req.body;
  if (!name || !password ) {
    return next(createError(400, "Please enter name or password"));
  }
 
  try {
    const user = await Doctor.findOne({ name });
    console.log(req.body.password)
    if (!user) return next(createError(404, "user not found"));

    const isPasswordCorrect =  await user.comparePassword(password);
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect)
        return next(createError(400, "wrong password"));

    const token = jwt.sign({ id: user._id, role: user.role }, "itsasecret")
    const { password:_pass, ...otherDetails } = user._doc;

    res.cookie("access_token", token, { httpOnly: true, }).status(200).json({...otherDetails});
} catch (err) {
    next(err);
}
};

// const Doctor = require('../models/Doctor');
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const { StatusCodes } = require('http-status-codes');
// const Login = async (req, res) => {
//   var { name, password, role } = req.body;
//   if (!name || !password) {
//     res
//       .status(StatusCodes.BAD_REQUEST)
//       .json({ error: 'Please enter email and password' });
//   }
//   let currModel;
//   if (role === 'doctor') {
//     currModel = Doctor;
//   } else {
//     currModel = User;
//   }
//     const user = await currModel.findOne({ name: req.body.name });
//     if (!user) {
//         res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
//       }
//       const isCorrect = await user.checkPassword(password);

//       if (isCorrect) {
//         const token = user.generateAuthToken();
//         const { password, isAdmin, ...otherDetails } = user._doc;

//         res.cookie("access_token", token, { httpOnly: true, }).status(200).json({...otherDetails });
        
//       } else {
//         res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Incorrect password' });
//       }
    
    

// };
// const SignUp = async (req, res) => {
//   const { role, user } = req.body;
//   console.log(user);
//   let currModel;
//   if (role === 'doctor') {
//     currModel = Doctor;
//   } else {
//     currModel = User;
//   }
//   const savedUser = await currModel.create({ ...user });

//   if (savedUser) {
//     const token = savedUser.generateAuthToken();
//     const { password, isAdmin, ...otherDetails } = user._doc;

//     res.cookie("access_token", token, { httpOnly: true, }).status(200).json({...otherDetails });
//   } else {
//     res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not saved' });
//   }
// };

module.exports = Login;

