const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
app.use(express.json());


const PORT = process.env.PORT || 8070;

//import routers
// const studentgroupRoutes = require('./routes/SS_routes/studentgroups')
const researchtopicRoutes= require ('./routes/IS_routes/researchtopic');


app.use(bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));
app.use(cors());


app.use(express.json());

//routes use
// app.use(studentgroupRoutes);
app.use("/addResearchTopic",researchtopicRoutes);


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

})

// @import routes
const studentRouter = require("./routes/AA_routes/student");
const studentGroupRouter = require("./routes/AA_routes/student-group")



// rotues
app.use("/student",studentRouter);
app.use("/studentgroup",studentGroupRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})