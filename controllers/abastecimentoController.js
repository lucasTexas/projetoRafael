const AbastecimentoModel = require("../models/AbastecimentoModel");

class AbastecimentoController{
    static async cadastroAbastecimento(req, res){
        res.render("telaCadastroAbastecimento");
    }

    static async relatorioAbastecimentos(req, res){
        const abastecimentos = await AbastecimentoModel.find();
        res.render("listagemAbastecimento", {abastecimentos});
    }

    static async salvarAbastecimento(req, res){
        const abastecimento = req.body;
    
        const novoAbastecimento = new AbastecimentoModel({
            tipoCombustivel: abastecimento.combustivel,
            data: abastecimento.data,
            hora: abastecimento.hora,
            valor: abastecimento.valor
        });
        await novoAbastecimento.save();
        res.redirect("/");
    }

    static async detalharAbastecimento(req, res){
        const data = req.params.data;
        const hora = req.params.hora;
        const abastecimento = await AbastecimentoModel.findOne({data: data, hora: hora});
        res.render("detalharAbastecimento", {abastecimento});
    }

    static async excluirAbastecimento(req, res){
        const data = req.params.data;
        const hora = req.params.hora;
        await AbastecimentoModel.deleteOne({data: data, hora: hora});
        res.redirect("/relatorio-abastecimento");
    }

    static async atualizarAbastecimento(req, res){
        const data = req.params.data;
        const hora = req.params.hora;
        const id = req.params.id;
        const abastecimento = await AbastecimentoModel.findOne({_id: id});
        console.log(abastecimento);
        res.render("atualizarAbastecimento", {abastecimento});
    }

    static async salvarAtualizacao(req, res){
        const abastecimento = req.body;
        const id = req.body.id;
        console.log(id);
        const novoAbastecimento = await AbastecimentoModel.findOneAndUpdate(
            { _id: id },
            { tipoAbastecimento: abastecimento.tipo, data: abastecimento.data, hora: abastecimento.hora, valor: abastecimento.valor },    // Atualização
            { new: true }
        );
        res.redirect("/");
    }

}

module.exports = AbastecimentoController;
    
