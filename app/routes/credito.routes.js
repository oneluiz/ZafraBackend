'use strict';

let express = require('express');
let router = express.Router();

/**
 * Controlador
 */
let CreditoController = require('../controller/credito.controller');

//************* Interes Routes *************//

/**
 *  Crear Interes Credito
 */
 router.route('/credito/interes/crear').post((req, res) => {
    
    let interes = { ...req.body };
    
    CreditoController.crearInteres(interes).then((result) => {
        res.status(200).json('Registro Correcto');
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 *  Listar Interes Credito
 */
 router.route('/credito/interes/:id').get((req, res) => {
    
    CreditoController.getInteres(req.params.id).then((result) => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 *  Listar Intereses Creditos
 */
 router.route('/credito/intereses').get((req, res) => {
    CreditoController.getIntereses().then((result) => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 *  Listar Interes Credito
 */
 router.route('/credito/desactivar-interes/').put((req, res) => {
    
    let interes = { ...req.body };

    CreditoController.desactivarInteres(interes).then((result) => {
        res.status(200).json('Registro actualizado correctamente');
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

//** Exporto Routes **//
module.exports = router;