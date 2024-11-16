const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ltsf:1234@cluster0.et1su.mongodb.net/?retryWrites=true&w=majority&appName=cluster0");
const FrentistaModel = require("./models/FrentistaModel");
const AbastecimentoModel = require("./models/AbastecimentoModel");



app.get("/", function(req, res){
    res.render("index");
});

app.get("/cadastro-frentista", function(req, res){
    res.render("telaCadastroFrentista");
});

app.get("/cadastro-abastecimento", function(req, res){
    res.render("telaCadastroAbastecimento");
});

app.get("/relatorio-frentista", async function(req, res){
    const frentistas = await FrentistaModel.find();
    res.render("listagemFrentista", {frentistas});
});

app.get("/relatorio-abastecimento", async function(req, res){
    const abastecimentos = await AbastecimentoModel.find();
    res.render("listagemAbastecimento", {abastecimentos});
});

app.post("/salvar-frentista", async function(req, res){
    const frentista = req.body;
    /*const ids = FrentistaModel.find({}, "id").exec();
    console.log(ids);
    novoId = ids.length;*/
    const novoFrentista = new FrentistaModel({
        //id: novoId,
        nome: frentista.nome,
        email: frentista.email,
        salario: frentista.salario
    });
    await novoFrentista.save();
    res.redirect("/");

});

app.post("/salvar-abastecimento", async function(req, res){
    const abastecimento = req.body;
    /*const ids = AbastecimentoModel.find({}, "id").exec();
    console.log(ids);
    novoId = ids.length;*/
    const novoAbastecimento = new AbastecimentoModel({
        //id: novoId,
        tipoCombustivel: abastecimento.combustivel,
        data: abastecimento.data,
        valor: abastecimento.valor
    });
    await novoAbastecimento.save();
    res.redirect("/");
});

app.listen("999", "localhost", () => console.log("rodando"));
