const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require("cookie-parser");


const connect = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/HM");
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({
    origin:['http://localhost:3000'],credentials:true
}));
app.use('/api', require('./routes/User'));
app.use('/api/auth', require('./routes/Auth'));
app.use('/api/patients', require('./routes/Patient'));
app.use('/api/departments', require('./routes/Department'));
app.use('/api/doctors', require('./routes/Doctor'));
app.use('/api/departments', require('./routes/Department'));
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.listen(1234, () => {
    connect()
    console.log("Server started ")
})