var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var mongoose = require("mongoose")
var app = express()

var DEFAULT_PORT = 3000
var DEFAULT_HOST = '127.0.0.1'

var port = DEFAULT_PORT
var ipAddress = DEFAULT_HOST

//Connection data
const user = "centennial"
const pass = "centennial"
const dbName = "LIFECARE_APP"

//Connection to the mongodb database
var uristring = 
  process.env.MONGODB_URI || 
  `mongodb+srv://${user}:${pass}@cluster0.xni3biz.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uristring, function(err, res) {
    if (err) {
        console.log('ERROR: Connecting to Database. ' + err)
    } else {
        // Where we are connected
        console.log(" *** Connected to db: " + uristring)
    }
})

//Configuration
app.use(bodyParser.json())
app.use(methodOverride())

app.get("/ip", (req, res) => {
    console.log(req.ip) 
    var ip = req.ip.split(':');
    var ip_details = req.socket.address();
    // { address: '::ffff:127.0.0.1', family: 'IPv6', port: 3001
    console.log(ip_details);

    //127.0.0.1
    console.log(ip[3]);
    res.json(ip[3]);  
})

//Define the port on which it listens
app.listen(port, function() {
    console.log('El servidor esta escuchando por: ' + port)
})

//Define the routing of requests
var controllerUsers = require('./Controller/UsersController')

var router = express.Router()

router.get('/', function(req, res) {
    res.send("Holaaa")
})

//Add Users
router.post('/Users/addUsers', function (req, res) {
    controllerUsers.addUsers(req, function(data) {
        res.send(data)
    })
})

//Update Users
router.put('/Users/updateUsers/:id', function (req, res) {
    controllerUsers.updateUsers(req, function(data) {
        res.send(data)
    })
})

//Delete Users
router.delete('/Users/DeleteUsers/:id', function (req, res) {
    controllerUsers.deleteUsers(req, function(data) {
        res.send(data)
    })
})

//Find Users
router.get('/Users/findbyIdUsers/:id', function (req, res) {
    controllerUsers.findAllUsers(req, function(data) {
        res.send(data)
    })
})

//List Users
router.get('/Users/findAllUsers', function (req, res) {
    controllerUsers.findAllUsers(req, function(data) {
        res.send(data)
    })
})


//Patients
var controllerPatients = require('./Controller/PatientsController')

//Add Patients
router.post('/Patients/AddNewPatients', function (req, res) {
    controllerPatients.addNewPatients(req, function(data) {
        res.send(data)
    })
})

//Update Patients
router.put('/Patients/updatePatients/:id', function (req, res) {
    controllerPatients.updateUsers(req, function(data) {
        res.send(data)
    })
})

//Delete Patients
router.delete('/Patients/DeletePatients/:id', function (req, res) {
    controllerPatients.deletePatients(req, function(data) {
        res.send(data)
    })
})

//Find Patients
router.get('/Patients/findbyIdPatients/:id', function (req, res) {
    controllerPatients.findbyIdPatients(req, function(data) {
        res.send(data)
    })
})

//List Patients
router.get('/Patients/findAllPatients', function (req, res) {
    controllerPatients.findAllPatients(req, function(data) {
        res.send(data)
    })
})

var controllerPatientsRecords = require('./Controller/PatientsRecordsController')

//Add PatientsRecords
router.post('/PatientsRecords/AddNewPatientsRecords', function (req, res) {
    controllerPatientsRecords.addNewPatientsRecords(req, function(data) {
        res.send(data)
    })
})

//Update PatientsRecords
router.put('/PatientsRecords/updatePatientsRecords/:id', function (req, res) {
    controllerPatientsRecords.updatePatientsRecords(req, function(data) {
        res.send(data)
    })
})

//Delete PatientsRecords
router.delete('/PatientsRecords/DeletePatientsRecords/:id', function (req, res) {
    controllerPatientsRecords.deletePatientsRecords(req, function(data) {
        res.send(data)
    })
})

//Find PatientsRecords
router.get('/PatientsRecords/findbyIdPatientsRecords/:id', function (req, res) {
    controllerPatientsRecords.findbyIdPatientsRecords(req, function(data) {
        res.send(data)
    })
})

//List PatientsRecords
router.get('/PatientsRecords/findAllPatientsRecords', function (req, res) {
    controllerPatientsRecords.findAllPatientsRecords(req, function(data) {
        res.send(data)
    })
})


app.use(router)