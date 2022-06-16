const Doctor = require('../models/Doctor');
const mongoose=require('mongoose')
const Patient = require('../models/Patient');
const { StatusCodes } = require('http-status-codes');
const getAppointments = async (req, res) => {
  const { id } = req.params;
  const doctor = await Doctor.findById(id);
  const appointments = doctor?.appointments ?? [];
  res.status(200).json({ appointments });
};
const getAppointmentById = async (req, res) => {
  const { doctorId, appointmentId } = req.params;
  const doctor = await Doctor.findById(doctorId);
  const appointments = doctor?.appointments ?? [];
  console.log(req.params)
  res.status(200).json({ appointment: appointments.filter(appointment => appointment._id === mongoose.Types.ObjectId(appointmentId))[0] });
};
const postAppointment = async (req, res) => {
  const { id } = req.params;
  const doctor = await Doctor.findById(id);
  doctor.appointments.push(req.body);
  doctor.save();
  // const newPatient = await Patient.create(req.body)
  // try {
  //     const savedPatient = await newPatient.save();
  //     res.status(200).json(savedPatient)
  // } catch (err) {
  //     console.log(err);
  // }
  res.status(200).json({ doctor });
};
const updateAppointment = async (req, res) => {
  const id1 = req.params.id1;
  const id2 = req.params.id2;
  // const user = req.user;
  const doctor = await Doctor.findById(id1);
  const index = doctor.appointments.findIndex(
    (appointments) => appointments._id == id2
  );
  if (index == -1) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'Appointment not found' });
  } else {
    doctor.appointments[index] = req.body;
    doctor.save();
    res.status(StatusCodes.OK).json({ doctor });
  }
};
module.exports = {
  getAppointments,
  postAppointment,
  updateAppointment,
  getAppointmentById,
};
