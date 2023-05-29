var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/totalA", function (req, res) {
    medidaController.buscarTotalMedida(req, res);
});

router.get("/buscarTotalMedidaPersonagemF", function (req, res) {
    medidaController.buscarTotalMedidaPersonagemF(req, res);
});

router.get("/buscarTotalMedidaArcoF", function (req, res) {
    medidaController.buscarTotalMedidaArcoF(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;