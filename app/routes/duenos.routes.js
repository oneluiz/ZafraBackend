'use strict';

let express = require('express');
let router = express.Router();

/**
 * Controlador
 */
let DuenoController = require('../controller/dueno.controller');

//************* Dueño Camion Routes *************//

/**
 *  Crear Dueño Camión
 */
 router.route('/dueno/crear').post((req, res) => {
    
    let dueno = { ...req.body };
    
    DuenoController.crearDuenosCamion(dueno).then((result) => {
        res.status(200).json('Registro Correcto');
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 *  Listar Dueño Camión
 */
 router.route('/dueno/:id').get((req, res) => {
    
    DuenoController.getDuenosCamion(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 *  Actualizar Dueño Camión
 */
 router.route('/dueno/:id').get((req, res) => {
    
    DuenoController.desactivarInteres(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

//** Exporto Routes **//
module.exports = router;