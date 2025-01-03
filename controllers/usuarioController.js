const mongoose = require("mongoose");
const UsuarioModel = require("../models/UsuarioModel");
const bjs = require("bcryptjs");

class UsuarioController {

    static async cadastrar(req, res) {
        const { nome, email, senha } = req.body;
        const usuario = await UsuarioModel.findOne({ email });
        if (usuario != null){
            res.redirect("usuario/cadastrar?s=1")
        } else { 
            const salt = bcryptjs.genSaltSync();
            const hash =  bcryptjs.hashSync(senha, salt);
            const novoUsuario = new UsuarioModel({
                nome,
                email,
                senha: hash,
            });
            await novoUsuario.save();
            res.redirect(`/usuarios?s=1`);
        }
    }
    
}

module.exports = UsuarioController;
