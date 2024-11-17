const express = require("express");
const routes = express.Router();
const FrentistaController = require("../controllers/frentistaController")

routes.get("/cadastro-frentista", FrentistaController.cadastroFrentista);

routes.get("/relatorio-frentista", FrentistaController.relatorioFrentistas);

routes.post("/salvar-frentista", FrentistaController.salvarFrentista);

routes.get("/detalhar-frentista/:email", FrentistaController.detalharFrentista);

routes.post("/excluir-frentista/:email", FrentistaController.excluirFrentista);

module.exports = routes;
