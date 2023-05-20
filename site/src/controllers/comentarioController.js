var comentarioModel = require("../models/comentarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    comentarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        comentarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var tituloComentario = req.body.tituloServer;
    var conteudoComentario= req.body.conteudoServer;
    var tipoComentario= req.body.tipoServer;
    var emailUsuario= req.body.emailServer;

    // Faça as validações dos valores
    if (tituloComentario == undefined) {
        res.status(400).send("Seu tituloComentario está undefined!");
    } else if (conteudoComentario == undefined) {
        res.status(400).send("Seu conteudoComentario está undefined!");
    } else if (tipoComentario == undefined) {
        res.status(400).send("Sua tipoComentario está undefined!");
    }else if (emailUsuario == undefined) {
        res.status(400).send("Sua emailUsuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo comentarioModel.js
        comentarioModel.cadastrar(tituloComentario,conteudoComentario,tipoComentario,emailUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function update(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var resposta = req.body.respostaServer;
    var id = req.body.idServer;
    var campo = req.body.campoServer;

    // Faça as validações dos valores
    if (resposta == undefined) {
        res.status(400).send("Sua resposta está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (campo == undefined) {
        res.status(400).send("Seu campo está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo comentarioModel.js
        comentarioModel.update(resposta, id, campo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}




function updatePerArc(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var resposta = req.body.respostaServer;
    var id = req.body.idServer;
    var campo = req.body.campoServer;

    // Faça as validações dos valores
    if (resposta == undefined) {
        res.status(400).send("Sua resposta está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (campo == undefined) {
        res.status(400).send("Seu campo está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo comentarioModel.js
        comentarioModel.updatePerArc(resposta, id, campo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}




function listarPerArc(req, res) {
    var id = req.body.idUsuarioServer;

    comentarioModel.listarPerArc(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    update,
    updatePerArc,
    listarPerArc
}