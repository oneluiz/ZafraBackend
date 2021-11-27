'use strict'
// Modulos
var sql = require('mssql/msnodesqlv8');
var conn = require('../../db');
var pool = new sql.ConnectionPool(conn.conexion());

var controller = {
    getSemanaDisponble: (req, res) => {

        pool.connect(err => {
            pool.query(`EXEC [sp_cargadoristas_semana_select]`, (err, response) => {
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
    getPlanilla: (req, res) => {

        // Parametros de la petición
        var id_semana = req.params.id_semana;

        pool.connect(err => {
            pool.query(`EXEC [sp_cargadoristas_planilla_select] @id_cargadorista_planilla = ${id_semana}`, (err, response) => {
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
    CrearPlanilla: (req, res) => {
        
        let params = req.body;
        let semana     = params.semana;
        let monto  = params.monto;
        let detalle    = params.detalle;

        if(semana == null) return res.status(200).send({message: 'Semana invalido'});
        if(monto == null) return res.status(200).send({message: 'Monto invalido'});
        if(detalle == null) return res.status(200).send({message: 'Detalle invalido'});

        pool.connect(err => {
            pool.query(`EXEC [sp_cargadoristas_insert] @semana = ${semana}, @monto = ${monto}, @detalle = '${detalle}'`, (err, response) => {
                pool.close();
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                } else {
                    return res.status(200).send({
                        message: 'Registro Correcto'
                    });
                }
            });
        });
    },
    eliminarPlanilla: (req, res) => {
        
        var semana = req.params.semana;

        if(semana == null) return res.status(200).send({message: 'Semana invalido'});

        pool.connect(err => {
            pool.query(`EXEC [sp_cargadoristas_delete] @id = ${semana}`, (err, response) => {
                pool.close();
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                } else {
                    return res.status(200).send({
                        message: 'Registro Eliminado Correcto'
                    });
                }
            });
        });
    }
};  // Fin controller

module.exports = controller;