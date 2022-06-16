const express = require('express');
const router = express.Router();

const {
  getPatientDetails,
  getAllPatientDetails,
  updatePatient,
  deletePatient,
  createPatient,
} = require('../contollers/Patient');
router.post("/", createPatient);
router.use('/',  getAllPatientDetails);
router.get('/:id', getPatientDetails);
router.put('/:id', updatePatient);
router.delete('/:id',  deletePatient);
module.exports = router;
