var express = require("express");
var router = express.Router();

var museuController = require("../controllers/museuController");

router.post("/rr", function (req, res) {
    museuController.rr(req, res);
})

router.get("/listar", function (req, res) {
    museuController.listar(req, res);
  });


module.exports = router;