const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");
const FrentistaController = require("../controllers/frentistaController")

routes.get("/cadastro-frentista", auth, FrentistaController.cadastroFrentista);

routes.get("/relatorio-frentista", auth, FrentistaController.relatorioFrentistas);

routes.post("/salvar-frentista", auth, FrentistaController.salvarFrentista);

routes.get("/detalhar-frentista/:email", auth, FrentistaController.detalharFrentista);

routes.post("/excluir-frentista/:email", auth, FrentistaController.excluirFrentista);

module.exports = routes;
