'use strict';

const express = require('express');
const router = express.Router();

/**
 * Controlador
 */
let MovimientoController = require('../controller/movimiento.controller');

//************* Movimientos Routes *************//
/**
 *  Crear Movimiento
 */
 router.route('/movimiento/crear').post((req, res) => {
    
    let dato = { ...req.body };
    
    MovimientoController.crearMovimiento(dato).then((result) => {
        res.status(200).json('Registro Correcto');
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 *  Crear Movimiento
 */
 router.route('/movimiento/crear-detalle').post((req, res) => {
    
    let dato = { ...req.body };
    
    MovimientoController.CrearDetalleMovimiento(dato).then((result) => {
        res.status(200).json('Registro Correcto');
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 *  Listar Detalle Movimiento
 */
router.route('/movimiento/detalle/:id').get((req, res) => {
    
    let id = req.params.id;

    MovimientoController.movimientoDetalle(id).then((result) => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 *  Listar Movimiento
 */
router.route('/movimiento/:dni/:proveedor').get((req, res) => {
    
    let dni = req.params.dni;
    let proveedor = req.params.proveedor;

    MovimientoController.movimiento(dni, proveedor).then((result) => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 *  Listar Movimientos
 */
router.route('/movimiento/').get((req, res) => {

    MovimientoController.movimientos().then((result) => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

/**
 *  Listar Egresos del día
 */
router.route('/movimiento/egresos-dia/').get((req, res) => {

    MovimientoController.movimientoEgresosDia().then((result) => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

//** Exporto Routes **//
module.exports = router;
