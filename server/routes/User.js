// const express = require('express');
// const { updateUser, deleteUser, getUser, getAll, createUser } = require('../contollers/User');
// const { verifyAdmin, verifyUser } = require('../utils/verifyToken');
// const router = express.Router();
// // router.get("/checkvalidation/:id", verifyAdmin, (req, res, next) => {
// //     res.send("verifying the user")
// // })
// //

// router.post("/", verifyAdmin, createUser)
//     //update
// router.put("/:id",  updateUser)

// //delete
// router.delete("/:id",verifyAdmin, deleteUser)

// //get
// router.get("/:id",verifyUser, getUser)

// //getall 
// router.get("/", verifyAdmin, getAll)



// module.exports = router;

const router = require('express').Router();
const Login  = require('../contollers/User');
router.post('/login', Login);

module.exports = router;