'use strict'
// Modulos
var conexion = require('../../db');
var sql = require('mssql');


async function getTipoCedula(req, res, next) {
    
    try {
        let pool = await sql.connect(conexion.config);

        //var id = req.params.id;

        let result = await pool.request().query('select * from tipo_cedula');
        return res.status(200).json(result.recordset);

    } catch (error) {
        console.log(error);
    }
}

getTipoCedula();
module.exports = {
    getTipoCedula: getTipoCedula
}

/* 
var controller = {
    getTipoCedula: (req, res) => {

        var id = req.params.id;

        pool.connect(err => {
            pool.query(`EXEC [sp_ajustes_tipo_cedula_select] @id = ${id}`, (err, response) => {
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
    getTipoPago: (req, res) => {

        var id = req.params.id;

        pool.connect(err => {
            pool.query(`EXEC [sp_tipo_pago_select] @id = ${id}`, (err, response) => {
                pool.close();
                if (err) {
                    res.status(500).send({
                        message: err
                    });z
                } else {
                    return res.status(200).send(response.recordset);
                }
            });
        });
    },
    getFormaPago: (req, res) => {

        var id = req.params.id;

        pool.connect(err => {
            pool.query(`EXEC [sp_tipo_credito_select] @id = ${id}`, (err, response) => {
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
    getTipoEstado: (req, res) => {

        var id = req.params.id;

        pool.connect(err => {
            pool.query(`EXEC [sp_tipo_estado_select] @id = ${id}`, (err, response) => {
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
    getTipoMovimiento: (req, res) => {

        var id = req.params.id;

        pool.connect(err => {
            pool.query(`EXEC [sp_tipo_movimiento_select] @id = ${id}`, (err, response) => {
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
    getTipoMedidas: (req, res) => {

        var id = req.params.id;

        pool.connect(err => {
            pool.query(`EXEC [sp_tipo_medida_select] @id = ${id}`, (err, response) => {
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
    MovimientoDetalle: (req, res) => {

    
        var id = req.params.id;

        pool.connect(err => {
            pool.query(`EXEC sp_movimiento_detalle_select @id_movimiento = ${id}`, (err, response) => {
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
};   */// Fin controller
