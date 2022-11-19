var mongoose = require("mongoose")
var Schema = mongoose.Schema

var patientsSchema = new Schema({
    First_Name: String,
    Last_Name: String,
    GenderValue: String,
    Mobile: String,
    date: String,
    Email: String,
    Address: String,
    City: String,
    Country: String,
    State_Province: String,
    ZIP_PostalCode: String,
    create_at: { type: Date, require: true, default: Date.now },
})

module.exports = mongoose.model('Patients', patientsSchema)