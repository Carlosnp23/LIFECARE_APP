var mongoose = require("mongoose")
var Schema = mongoose.Schema

var patientsRecordsSchema = new Schema({
    Patient_ID: String,
    First_Name: String,
    Last_Name: String,
    CurrentDate: String,
    CurrentTime: String,
    Blood_Pressure: String,
    Respiratory_Rate : String,
    Blood_Oxygen: String,
    Heartbeat_Rate: String,
    Critical_conditions: String,
    create_at: { type: Date, require: true, default: Date.now },
})

module.exports = mongoose.model('PatientsRecords', patientsRecordsSchema)