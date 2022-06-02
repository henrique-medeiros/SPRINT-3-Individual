var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/votar/:idClube", function (req, res) {
    medidaController.votar(req, res);
});

router.get("/ultimas/:idClube", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idClube", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;