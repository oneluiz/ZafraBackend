'use strict'
// Modulos
var sql = require('mssql/msnodesqlv8');
var conn = require('../../db');
var pool = new sql.ConnectionPool(conn.conexion());

var controller = {
    movimiento_egresos_dia: (req, res) => {
        pool.connect(err => {
            pool.query(`EXEC [sp_movimiento_egresos_x_dia]`, (err, response) => {
                pool.close();
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                } else {
                    return res.status(200).send(response.recordset);
                }
            });
        });
    },
    tipo_pago: (req, res) => {
        var tipo = req.params.tipo;

        pool.connect(err => {
            pool.query(`EXEC [sp_tipo_pago_select] @id = ${tipo}`, (err, response) => {
                pool.close();
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                } else {
                    return res.status(200).send(response.recordset);
                }
            });
        });
    },
    Movimientos: (req, res) => {

        var id  = req.params.id;
        var proveedor = req.params.proveedor;

        pool.connect(err => {
            pool.query(`EXEC [sp_movimiento_select] @id = ${id}, @proveedor = ${proveedor}`, (err, response) => {
                pool.close();
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                } else {
                    return res.status(200).send(response.recordset);
                }
            });
        });
    },
    CrearMovimiento: (req, res) => {

        let params  = req.body;
        let proveedor = params.proveedor;
        let nro_factura = params.nro_factura;
        let tipo_movimiento = params.tipo_movimiento;
        let monto = params.monto;
        let vencimiento = params.vencimiento;
        let tipo_credito = params.tipo_credito;
        let comprobante = params.comprobante;
        let tipo_pago = params.tipo_pago;

        pool.connect(err => {
            pool.query(`EXEC [sp_movimiento_crear] @id_provedor = '${proveedor}', @nro_factura = '${nro_factura}', @tipo_movimiento = ${tipo_movimiento}, @tipo_credito = ${tipo_credito}, @monto = ${monto}, @vence = '${vencimiento}', @tipo_pago = ${tipo_pago}, @comprobante = '${comprobante}'`, (err, response) => {
                pool.close();
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                } else {
                    return res.status(200).send(response.recordset);
                }
            });
        });
    },
    CrearDetalleMovimiento: (req, res) => {

        let params  = req.body;
        let movimiento = params.id_movimiento;
        let monto = params.monto;
        let comprobante = params.comprobante;
        let tipo_pago = params.tipo_pago;

        pool.connect(err => {
            pool.query(`EXEC [sp_movimiento_detalle_crear] @id_movimiento = '${movimiento}', @comprobante = '${comprobante}', @monto = ${monto}, @tipo_pago = ${tipo_pago}`, (err, response) => {
                pool.close();
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                } else {
                    return res.status(200).send(response.recordset);
                }
            });
        });
    },

    EstadoCuenta : (req, res) => {
        var proveedor   = req.params.proveedor;
        var estado      = req.params.estado;

        pool.connect(err => {
            pool.query(`EXEC [sp_estado_de_cuenta] @proveedor = '${proveedor}', @estado = ${estado}`, (err, response) => {
                pool.close();
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                } else {
                    return res.status(200).send(response.recordset);
                }
            });
        });
    }
};  // Fin controller

module.exports = controller;