const https = require('https');
const fs = require('fs');
const express = require("express")
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./Routers/Route');
const app = express()
app.use(cors())
app.use(express.json())
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
global.__basedir = __dirname + "/..";
const connect = require("./db")
const multer = require('multer')

const csvtojson = require('csvtojson')
const reader = require('xlsx') 
connect.Connection("student")
app.use('/', routes);
const port = 4000
/* const options = {key:"",cert:""};
https.createServer(options, app) */

app.use(express.static('public'));
const Student = require("./models/Student"); 
const addBranch = require('./models/addBranch');
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/uploads', express.static(path.join(__dirname, 'images')));


app.listen(port, () => console.log(`The server is listening on port ${port}`))

// SET STORAGE
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
    });
    const uploadFiles = multer({ storage: storage });
    app.post("/fileupload", uploadFiles.single("file"), (req, res, next) => {
    const file = req.file;
    if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
    }
    res.json({
    success: true,
    statusCode: 200,
    fileName: file.filename });
    });
    