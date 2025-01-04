const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");
const AbastecimentoController = require("../controllers/abastecimentoController");

routes.get("/cadastro-abastecimento", auth, AbastecimentoController.cadastroAbastecimento);

routes.get("/relatorio-abastecimento", auth, AbastecimentoController.relatorioAbastecimentos);

routes.post("/salvar-abastecimento", auth, AbastecimentoController.salvarAbastecimento);

routes.get("/detalhar-abastecimento/:data/:hora", auth, AbastecimentoController.detalharAbastecimento);

routes.post("/excluir-abastecimento/:data/:hora", auth, AbastecimentoController.excluirAbastecimento);

routes.get("/atualizar-abastecimento/:data/:hora", auth, AbastecimentoController.atualizarAbastecimento);

module.exports = routes;
