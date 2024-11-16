const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const frentistaSchema = Schema({
    //id: Number,
    nome: String,
    email: String,
    salario: Number
});

module.exports = mongoose.model("Frentista", frentistaSchema);
