var express = require('express');
var mercadoPago = require('../controllers/mercado-pago.js');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/enviar', mercadoPago.enviarPago);

module.exports = router;