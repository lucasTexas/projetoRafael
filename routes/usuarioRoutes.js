const express = require("express");
const routes = express.Router();
const UsuarioController = require("../controllers/usuarioController");


routes.get("/login", UsuarioController.login);

routes.get("/cadastro-usuario", UsuarioController.telaCadastro);

routes.post("/cadastrar", UsuarioController.salvarCadastro);

routes.post("/verificar", UsuarioController.verificarLogin)


module.exports = routes;