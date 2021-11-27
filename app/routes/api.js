'use strict'

var express = require('express');

/**
 * Controladores
 */
/* var ApiController = require('../controllers/cuenta');
var ProveedorController = require('../controllers/proveedor');
var MovimientoController = require('../controllers/movimiento'); */
var AjustesController = require('../controllers/ajustes');/* 
var CargadoristaController = require('../controllers/cargadorista');
var CreditosController = require('../controllers/creditos');
var DuenoCamionController = require('../controllers/dueno_camion'); */

var router = express.Router();

/**
 * Rutas
 */
/* router.post('/crear-usuario', ApiController.crearUsuario);
router.post('/iniciar-sesion', ApiController.login); */

/* Proveedor */
/* router.post('/proveedor/crear', ProveedorController.CrearProveedor);
router.get('/proveedor/info/:dni', ProveedorController.info); */

/* Movimiento */
/* router.get('/movimiento/:id/:proveedor', MovimientoController.Movimientos);
router.get('/movimiento/egreso/dia', MovimientoController.movimiento_egresos_dia);
router.get('/movimiento/tipo_pago/:tipo', MovimientoController.tipo_pago);
router.post('/movimiento/crear/', MovimientoController.CrearMovimiento);
router.post('/movimiento/crear-detalle/', MovimientoController.CrearDetalleMovimiento);
router.get('/movimiento/estado-cuenta/:proveedor/:estado', MovimientoController.EstadoCuenta); */

/* Ajustes */
router.get('/ajustes/tipo-cedula/', AjustesController.getTipoCedula);
/* router.get('/ajustes/tipo-pago/:id', AjustesController.getTipoPago);
router.get('/ajustes/tipo-credito/:id', AjustesController.getFormaPago);
router.get('/ajustes/tipo-estado/:id', AjustesController.getTipoEstado);
router.get('/ajustes/tipo-movimiento/:id', AjustesController.getTipoMovimiento);
router.get('/ajustes/tipo-medida/:id', AjustesController.getTipoMedidas);
router.get('/ajustes/detalles-movimiento/:id', AjustesController.MovimientoDetalle); */

/* Planilla */
/* router.get('/planilla/cargadorista/semana', CargadoristaController.getSemanaDisponble);
router.get('/planilla/cargadorista/lista/:id_semana', CargadoristaController.getPlanilla);
router.post('/plantilla/cargadorista/ingresar-planilla', CargadoristaController.CrearPlanilla);
router.get('/plantilla/cargadorista/planilla/eliminar/:semana', CargadoristaController.eliminarPlanilla); */

/* Creditos & Interes */
/* router.get('/creditos/interes/:id', CreditosController.getInteres);
router.post('/creditos/interes/crear', CreditosController.CrearInteres);
router.get('/creditos/interes/desactivar/:id', CreditosController.desactivarInteres); */

/* Dueño Vehiculos */
/* router.get('/dueno-vehiculo/:ced', DuenoCamionController.getDuenosCamion);
router.post('/dueno-vehiculo/crear', DuenoCamionController.CrearDuenoCamion); */

module.exports = router;