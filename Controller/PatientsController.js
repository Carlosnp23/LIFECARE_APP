var mongoose = require("mongoose")
require('../Models/Patients')
var PatientsModel = mongoose.model('Patients')

//Add Patients
exports.addNewPatients = function (req, callback) {

    var objPatients = new PatientsModel()
    objPatients.First_Name = req.body.First_Name
    objPatients.Last_Name = req.body.Last_Name
    objPatients.GenderValue = req.body.GenderValue
    objPatients.Mobile = req.body.Mobile
    objPatients.date = req.body.date
    objPatients.Email = req.body.Email
    objPatients.Address = req.body.Address
    objPatients.City = req.body.City
    objPatients.Country = req.body.Country
    objPatients.State_Province = req.body.State_Province
    objPatients.ZIP_PostalCode = req.body.ZIP_PostalCode

    objPatients.save ( function (err, returnPatients ) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Patients: returnPatients })

    })
}

//Update Patients
exports.updatePatients = function (req, callback) {

    PatientsModel.findById(req.params.id, function(err, findPatients) {

        findPatients.Mobile = req.body.Mobile
        findPatients.Email = req.body.Email
        findPatients.Address = req.body.Address
        findPatients.City = req.body.City
        findPatients.Country = req.body.Country
        findPatients.State_Province = req.body.State_Province
        findPatientsZIP_PostalCode = req.body.ZIP_PostalCode

        findPatients.save ( function (err, update ) {

            if (err) callback({ state: { code: 2, text: err.message }})
            callback({ state: { Code: 1, text: 'Successful Process' }, Patients: update })
    
        })

    })

}

//Remove Patients
exports.deletePatients = function (req, callback) {

    PatientsModel.findById(req.params.id, function(err, findPatients) {

        findPatients.remove ( function (err) {

            if (err) callback({ state: { code: 2, text: err.message }})
            callback({ state: { Code: 1, text: 'Successful Process' }})
    
        })

    })

}

//Find Patients
exports.findbyIdPatients = function (req, callback) {

    PatientsModel.findById(req.params.id, function(err, findPatients) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Patients: findPatients })

    })

}

//List Patients
exports.findAllPatients = function (req, callback) {

    PatientsModel.find( {}, function(err, findPatients) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Patients: findPatients })

    })

}