var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.get("/", function (req, res) {
    comentarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    comentarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de comentarioController.js
router.post("/cadastrar", function (req, res) {
    comentarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    comentarioController.entrar(req, res);
});

router.post("/update", function (req, res) {
    comentarioController.update(req, res);
});

router.post("/verificarAviso", function (req, res) {
    comentarioController.verificarAviso(req, res);
});

router.get("/listarA", function (req, res) {
    comentarioController.listarAvisos(req, res);
});


module.exports = router;