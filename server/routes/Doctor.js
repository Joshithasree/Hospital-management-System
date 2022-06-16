const express = require('express');
const router = express.Router();
const { verifyAdmin, verifyUser } = require('../utils/verifyToken');
const {
  getDoctors,
  postDoctors,
  deleteDoctor,
  getDoctor,
  editDoctor,
} = require('../contollers/Doctor');
const {
  getAppointments,
  postAppointment,
  updateAppointment,
  getAppointmentById,
} = require('../contollers/Appointment');
router.get('/', getDoctors);
router.post('/', postDoctors);
router.get('/:id',  getDoctor);
router.patch('/:id', verifyAdmin, editDoctor);
router.delete('/:id',verifyAdmin, deleteDoctor);
router.get('/:id/appointments', getAppointments);
router.get('/:doctorId/appointments/:appointmentId', getAppointmentById);
router.post('/:id/appointments',  postAppointment);
router.put('/:id1/appointments/:id2',  updateAppointment);
module.exports = router;
