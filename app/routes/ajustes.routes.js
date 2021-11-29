
'use strict';

let express = require('express');
let router = express.Router();

/**
 * Controlador
 */
 let AjustesController = require('../controller/ajustes.controller');

//************* Tipos de Medidas Routes **********************//
/**
 * Listar Tipo de Medida
 * @param {number} id
 */
router.route('/ajustes/tipo-medida/:id').get((req, res) => {
    AjustesController.getTipoMedida(req.params.id).then(result => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 * Listar Tipos de Medidas
 */
router.route('/ajustes/tipo-medida/').get((req, res) => {
    AjustesController.getTipoMedidas().then(result => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});


//************* Tipos de Cedulas Routes **********************//
/**
 *  Listar Tipo de Cedula
 * @param {number} id
 */
 router.route('/ajustes/tipo-cedula/:id').get((req, res) => {
    AjustesController.getTipoCedula(req.params.id).then(result => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 * Listar Tipos de Cedulas
 */
router.route('/ajustes/tipo-cedula/').get((req, res) => {
    AjustesController.getTipoCedulas().then(result => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

//************* Tipos de Pago Routes **********************//
/**
 *  Listar Tipo de Pago
 * @param {number} id
 */
 router.route('/ajustes/tipo-pago/:id').get((req, res) => {
    AjustesController.getTipoPago(req.params.id).then(result => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 * Listar Tipos de Pagos
 */
router.route('/ajustes/tipo-pago/').get((req, res) => {
    AjustesController.getTipoPagos().then(result => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

//************* Formas de Pago Routes **********************//
/**
 *  Listar Forma de Pago
 * @param {number} id
 */
 router.route('/ajustes/forma-pago/:id').get((req, res) => {
    AjustesController.getFormaPago(req.params.id).then(result => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 * Listar Formas de Pagos
 */
router.route('/ajustes/forma-pago/').get((req, res) => {
    AjustesController.getFormasPago().then(result => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

//************* Tipos de Estado Routes **********************//
/**
 *  Listar Tipo de Estado
 * @param {number} id
 */
 router.route('/ajustes/tipo-estado/:id').get((req, res) => {
    AjustesController.getTipoEstado(req.params.id).then(result => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 * Listar Tipos de Estados
 */
router.route('/ajustes/tipo-estado/').get((req, res) => {
    AjustesController.getTiposEstado().then(result => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

//************* Tipos de Movimiento Routes **********************//
/**
 *  Listar Tipo de Movimiento
 * @param {number} id
 */
 router.route('/ajustes/tipos-movimiento/:id').get((req, res) => {
    AjustesController.getTipoMovimiento(req.params.id).then(result => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 * Listar Tipos de Movimientos
 */
router.route('/ajustes/tipos-movimiento/').get((req, res) => {
    AjustesController.getTiposMovimiento().then(result => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

//** Exporto Routes **//
module.exports = router;
