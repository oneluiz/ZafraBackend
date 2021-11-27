'use strict'
// Modulos
var sql = require('mssql/msnodesqlv8');
var conn = require('../../db');
var pool = new sql.ConnectionPool(conn.conexion());

var controller = {
    getInteres: (req, res) => {

        // Parametros de la petición
        var id = req.params.id;

        pool.connect(err => {
            pool.query(`EXEC [sp_interes_select] @id = ${id}`, (err, response) => {
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
    CrearInteres: (req, res) => {

        let params = req.body;
        let desc     = params.desc;
        let interes  = params.interes;
        let dias    = params.dias;

        if(desc == null) return res.status(200).send({message: 'Descripción invalido'});
        if(interes == null) return res.status(200).send({message: 'Interes invalido'});
        if(dias == null) return res.status(200).send({message: 'Día invalido'});

        pool.connect(err => {
            

            pool.query(`EXEC [sp_interes_insert] @desc = '${desc}', @interes = ${interes}, @dias = ${dias}`, (err, response) => {
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
    desactivarInteres: (req, res) => {
        
        let id = req.params.id;

        if(id == null) return res.status(200).send({message: 'id Interes invalido'});

        pool.connect(err => {
            pool.query(`EXEC [sp_interes_update] @id = ${id}`, (err, response) => {
                pool.close();
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                } else {
                    return res.status(200).send({
                        message: 'Registro Desactivado Correctamente'
                    });
                }
            });
        });
    }
};  // Fin controller

module.exports = controller;