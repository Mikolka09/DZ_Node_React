const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    // Описать поля в колекции
    ImgAv: String,
    FirstName: String,
    LastName: String,
    Login: String,
    Email: String,
    Year: Number,
    Pass: String,
    DateReg: Date

});

module.exports = mongoose.model("User", User);