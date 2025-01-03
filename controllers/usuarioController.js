const mongoose = require("mongoose");
const UsuarioModel = require("../models/UsuarioModel");
//const bjs = require("bcryptjs");

class UsuarioController {

    static async login(req, res){
        res.render("login");
    }

    static async telaCadastro(req, res){
        res.render("cadastrar");
    }
    
    static async salvarCadastro(req, res){
        const usuario = req.body;
            
        const novoUsuario = new UsuarioModel({
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha
        });
        await novoUsuario.save();
        res.redirect("/");
    }
}

module.exports = UsuarioController;
