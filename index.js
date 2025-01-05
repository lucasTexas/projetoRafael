const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
require('dotenv/config');
const session = require("express-session");
const auth = require("./middlewares/usuarioAuth");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false
    }));

const FrentistaRoutes = require("./routes/frentistaRoutes");
const AbastecimentoRoutes = require("./routes/abastecimentoRoutes");
const UsuarioRoutes = require("./routes/usuarioRoutes");


app.use(FrentistaRoutes);
app.use(AbastecimentoRoutes);
app.use(UsuarioRoutes);


app.get("/", auth, function(req, res){
    res.render("index");
});


app.listen(process.env.PORT, "localhost", () => console.log("rodando"));
