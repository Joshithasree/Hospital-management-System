const express = require('express');
const router = express.Router();
const {
  getDepartments,
  postDepartment,
  deleteDepartment,
} = require('../contollers/Department');
router.get('/', getDepartments);
router.post('/',postDepartment);
router.delete('/:id', deleteDepartment);
module.exports = router;
