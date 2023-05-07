var express = require("express");
var router = express.Router();

var personagensController = require("../controllers/personagensController");

router.get("/", function (req, res) {
    personagensController.testar(req, res);
});

router.get("/listar", function (req, res) {
    personagensController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de personagensController.js
router.post("/cadastrar", function (req, res) {
    personagensController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    personagensController.entrar(req, res);
});

module.exports = router;