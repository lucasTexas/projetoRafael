const express = require("express");
const routes = express.Router();
const UsuarioController = require("../controllers/usuarioController");

routes.get("/login", UsuarioController.login);

routes.get("/cadastro-usuario", UsuarioController.telaCadastro);

routes.post("/salvar-abastecimento", AbastecimentoController.salvarAbastecimento);

routes.get("/detalhar-abastecimento/:data/:hora", AbastecimentoController.detalharAbastecimento);

routes.post("/excluir-abastecimento/:data/:hora", AbastecimentoController.excluirAbastecimento);
