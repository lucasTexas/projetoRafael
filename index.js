const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
});

app.get("/cadastro-frentista", function(req, res){
    res.render("telaCadastroFrentista");
});

app.get("/cadastro-abastecimento", function(req, res){
    res.render("telaCadastroAbastecimento");
});

app.get("/relatorio-frentista", function(req, res){
    res.render("listagemFrentista");
});

app.get("/relatorio-abastecimento", function(req, res){
    res.render("listagemAbastecimento");
});

app.listen("999", "localhost", () => console.log("rodando"));
