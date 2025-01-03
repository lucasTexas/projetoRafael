const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ltsf:1234@cluster0.et1su.mongodb.net/?retryWrites=true&w=majority&appName=cluster0");
const FrentistaRoutes = require("./routes/frentistaRoutes");
const AbastecimentoRoutes = require("./routes/abastecimentoRoutes");

app.use(FrentistaRoutes);
app.use(AbastecimentoRoutes);

app.get("/", function(req, res){
    res.render("index");
});

app.listen("8080", "localhost", () => console.log("rodando"));
