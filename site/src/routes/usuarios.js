var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/update", function (req, res) {
    usuarioController.update(req, res);
});

router.post("/updatePerArc", function (req, res) {
    usuarioController.updatePerArc(req, res);
});

router.post("/listarPerArc", function (req, res) {
    usuarioController.listarPerArc(req, res);
});

router.delete("/deletar",function(req,res){
    usuarioController.deletar(req,res);
})


router.post("/listarAvisos",function(req,res){
    usuarioController.listarAvisos(req,res);
})

module.exports = router;