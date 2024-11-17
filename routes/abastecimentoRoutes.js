const express = require("express");
const routes = express.Router();
const AbastecimentoController = require("../controllers/abastecimentoController");

routes.get("/cadastro-abastecimento", AbastecimentoController.cadastroAbastecimento);

routes.get("/relatorio-abastecimento", AbastecimentoController.relatorioAbastecimentos);

routes.post("/salvar-abastecimento", AbastecimentoController.salvarAbastecimento);

routes.get("/detalhar-abastecimento/:data/:hora", AbastecimentoController.detalharAbastecimento);

routes.post("/excluir-abastecimento/:data/:hora", AbastecimentoController.excluirAbastecimento);

module.exports = routes;
