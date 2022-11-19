var mongoose = require("mongoose")
var Schema = mongoose.Schema

var usersSchema = new Schema({
    Full_Name: String,
    UserName: String,
    Password: String,
    create_at: { type: Date, require: true, default: Date.now },
})

module.exports = mongoose.model('Users', usersSchema)