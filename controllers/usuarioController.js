const mongoose = require("mongoose");
const UsuarioModel = require("../models/UsuarioModel");
const bjs = require("bcryptjs");

class UsuarioController {

    static async login(req, res){
        res.render("login");
    }

    static async telaCadastro(req, res){
        res.render("cadastrar");
    }
    
    static async salvarCadastro(req, res){
        const usuario = req.body;
        const salt = bjs.genSaltSync();
        const hash = bjs.hashSync(usuario.senha, salt);
            
        const novoUsuario = new UsuarioModel({
            nome: usuario.nome,
            email: usuario.email,
            senha: hash
        });
        await novoUsuario.save();
        res.redirect("/");
    }

    static async verificarLogin(req, res){
        const usuario = req.body;
        const verificacao = await UsuarioModel.findOne({email: usuario.email});
        if(verificacao && bjs.compareSync(usuario.senha, verificacao.senha)){
            req.session.usuario = resultado.email;
            res.redirect("/");
        }else{
            res.redirect("/login");
        }
    }
}

module.exports = UsuarioController;
