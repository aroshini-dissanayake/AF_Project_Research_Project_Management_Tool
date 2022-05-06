const express = require('express');
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
require("dotenv").config();
const cors = require('cors');

//import routers
// const studentgroupRoutes = require('./routes/SS_routes/studentgroups')
const researchtopicRoutes= require ('./routes/IS_routes/researchtopic');

//app middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//routes use
// app.use(studentgroupRoutes);
app.use(researchtopicRoutes);

const PORT = process.env.PORT || 8070;
const URL = process.env.MONGODB_URL;
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';

mongoose.connect(URL, {

    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
console.log("Mongodb connection success!!!");

});
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
});