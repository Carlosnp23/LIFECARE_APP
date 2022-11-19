var mongoose = require("mongoose")
require('../Models/Users')
var UsersModel = mongoose.model('Users')

//Add Users
exports.addUsers = function (req, callback) {

    var objUsers = new UsersModel()
    objUsers.Full_Name = req.body.Full_Name
    objUsers.UserName = req.body.UserName
    objUsers.Password = req.body.Password

    objUsers.save ( function (err, returnUser ) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Users: returnUser })

    })
}

//Update Users
exports.updateUsers = function (req, callback) {

    UsersModel.findById(req.params.id, function(err, findUser) {

        findUser.UserName = req.body.UserName
        findUser.Password = req.body.Password

        findUser.save ( function (err, update ) {

            if (err) callback({ state: { code: 2, text: err.message }})
            callback({ state: { Code: 1, text: 'Successful Process' }, Users: update })
    
        })

    })

}

//Remove Users
exports.deleteUsers = function (req, callback) {

    UsersModel.findById(req.params.id, function(err, findUser) {

        findUser.remove ( function (err) {

            if (err) callback({ state: { code: 2, text: err.message }})
            callback({ state: { Code: 1, text: 'Successful Process' }})
    
        })

    })

}

//Find Users
exports.findbyIdUsers = function (req, callback) {

    UsersModel.findById(req.params.id, function(err, findUser) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Users: findUser })

    })

}
//List Users
exports.findAllUsers = function (req, callback) {

    UsersModel.find( {}, function(err, findUsers) {

        if (err) callback({ state: { code: 2, text: err.message }})
        callback({ state: { Code: 1, text: 'Successful Process' }, Users: findUsers })

    })

}