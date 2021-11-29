
'use strict';

let express = require('express');
let router = express.Router();

/**
 * Controlador
 */
let CargadoristaController = require('../controller/cargadorista.controller');

 //************* Semanas Disponibles Routes **********************//
/**
 * Listar Semana Disponibles
 * @param {number} id
 */
router.route('/ajustes/semana-disponible/').get((req, res) => {
    CargadoristaController.getSemanaDisponble().then(result => {
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
 router.route('/cargadorista/planilla/:id').get((req, res) => {
    CargadoristaController.getPlanilla(req.params.id).then(result => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 * Listar Tipos de Movimientos
 */
router.route('/cargadorista/planillas/').get((req, res) => {
    CargadoristaController.getPlanillas().then(result => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

//************* Tipos de Movimiento Routes **********************//
/**
 *  Crear Planilla
 */
 router.route('/cargadorista/crear-planilla/').post((req, res) => {
    
    let cargadoristas = { ...req.body };
    
    CargadoristaController.crearPlanillaCargadorista(cargadoristas).then((result) => {
        res.status(200).json('Registro Correcto');
    }).catch(function (err) {
        res.status(500).json(err);
    });
});
/**
 *  Eliminar Planilla
 */
 router.route('/cargadorista/eliminar-planilla/:id').get((req, res) => {
    
    CargadoristaController.crearPlanillaCargadorista(req.params.id).then((result) => {
        res.status(200).json('Registro Eliminado Correctamente');
    }).catch(function (err) {
        res.status(500).json(err);
    });
});
//** Exporto Routes **//
module.exports = router;