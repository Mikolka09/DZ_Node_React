const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Admin = new Schema({
    // Описать поля в колекции
    name: String
    // Описание полей не имеет значение
    //JS создает объект динамически
});

module.exports = mongoose.model("Admin", Admin);