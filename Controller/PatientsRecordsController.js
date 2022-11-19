var mongoose = require("mongoose")
require('../Models/PatientsRecords')
var PatientsRecordsModel = mongoose.model('PatientsRecords')

//Add PatientsRecords
exports.addNewPatientsRecords = function (req, callback) {

    var objPatientsRecords = new PatientsRecordsModel()
    objPatientsRecords.First_Name = req.body.First_Name
    objPatientsRecords.Last_Name = req.body.Last_Name
    objPatientsRecords.CurrentDate = req.body.CurrentDate
    objPatientsRecords.CurrentTime = req.body.CurrentTime
    objPatientsRecords.Blood_Pressure = req.body.Blood_Pressure
    objPatientsRecords.Respiratory_Rate = req.body.Respiratory_Rate
    objPatientsRecords.Blood_Oxygen = req.body.Blood_Oxygen
    objPatientsRecords.Heartbeat_Rate = req.body.Heartbeat_Rate
    objPatientsRecords.Critical_conditions = req.body.Critical_conditions

    objPatientsRecords.save ( function (err, returnPatientsRecords ) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, PatientsRecords: returnPatientsRecords })

    })
}

//Update PatientsRecords
exports.updatePatientsRecords = function (req, callback) {

    PatientsRecordsModel.findById(req.params.id, function(err, findPatientsRecords) {

        findPatientsRecords.Blood_Pressure = req.body.Blood_Pressure
        findPatientsRecords.Respiratory_Rate = req.body.Respiratory_Rate
        findPatientsRecords.Blood_Oxygen = req.body.Blood_Oxygen
        findPatientsRecords.Heartbeat_Rate = req.body.Heartbeat_Rate
        findPatientsRecords.Critical_conditions = req.body.Critical_conditions

        findPatientsRecords.save ( function (err, update ) {

            if (err) callback({ state: { code: 2, text: err.message }})
            callback({ state: { Code: 1, text: 'Successful Process' }, PatientsRecords: update })
    
        })

    })

}

//Remove PatientsRecords
exports.deletePatientsRecords = function (req, callback) {

    PatientsRecordsModel.findById(req.params.id, function(err, findPatientsRecords) {

        findPatientsRecords.remove ( function (err) {

            if (err) callback({ state: { code: 2, text: err.message }})
            callback({ state: { Code: 1, text: 'Successful Process' }})
    
        })

    })

}

//Find PatientsRecords
exports.findbyIdPatientsRecords = function (req, callback) {

    PatientsRecordsModel.findById(req.params.id, function(err, findPatientsRecords) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, PatientsRecords: findPatientsRecords })

    })

}

//List PatientsRecords
exports.findAllPatientsRecords = function (req, callback) {

    PatientsRecordsModel.find( {}, function(err, findPatientsRecords) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, PatientsRecords: findPatientsRecords })

    })

}