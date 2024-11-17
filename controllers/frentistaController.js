const FrentistaModel = require("../models/FrentistaModel");

class FrentistaController{
    static async cadastroFrentista(req, res){
        res.render("telaCadastroFrentista");
    }

    static async relatorioFrentistas(req, res){
        const frentistas = await FrentistaModel.find();
        res.render("listagemFrentista", {frentistas});
    }

    static async salvarFrentista(req, res){
        const frentista = req.body;
    
        const novoFrentista = new FrentistaModel({
            nome: frentista.nome,
            email: frentista.email,
            salario: frentista.salario
        });
        await novoFrentista.save();
        res.redirect("/");
    }

    static async detalharFrentista(req, res){
        const email = req.params.email;
        const frentista = await FrentistaModel.findOne({email: email});
        res.render("detalharFrentista", {frentista});
    }

    static async excluirFrentista(req, res){
        const email = req.params.email
        await FrentistaModel.deleteOne({email: email});
        res.redirect("/relatorio-frentista");
    }
}

module.exports = FrentistaController;
    
