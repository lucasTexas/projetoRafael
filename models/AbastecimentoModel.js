const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const abastecimentoSchema = Schema({
    //id: Number,
    tipoCombustivel: String,
    data: String,
    valor: Number
});

module.exports = mongoose.model("Abastecimento", abastecimentoSchema);