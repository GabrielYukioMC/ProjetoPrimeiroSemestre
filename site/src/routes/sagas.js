var express = require("express");
var router = express.Router();

var sagasController = require("../controllers/sagasController");

router.get("/", function (req, res) {
    sagasController.testar(req, res);
});

router.get("/listar", function (req, res) {
    sagasController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de sagasController.js
router.post("/cadastrar", function (req, res) {
    sagasController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    sagasController.entrar(req, res);
});

module.exports = router;