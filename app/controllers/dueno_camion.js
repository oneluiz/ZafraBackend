'use strict'
// Modulos
var sql = require('mssql/msnodesqlv8');
var conn = require('../../db');
var pool = new sql.ConnectionPool(conn.conexion());

var controller = {
    getDuenosCamion: (req, res) => {

        // Parametros de la petición
        var ced = req.params.ced;

        pool.connect(err => {
            pool.query(`EXEC [sp_dueno_vehiculo_select] @cedula = ${ced}`, (err, response) => {
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
    CrearDuenoCamion: (req, res) => {

        let params = req.body;
        let cedula = params.cedula;
        let nombre = params.nombre;
        let telefono = params.telefono;
        let correo = params.correo;
        let iban = params.iban;

        if(cedula == null) return res.status(200).send({message: 'cedula invalido'});
        if(nombre == null) return res.status(200).send({message: 'nombre invalido'});
        if(telefono == null) return res.status(200).send({message: 'telefono invalido'});
        if(correo == null) return res.status(200).send({message: 'correo invalido'});
        if(iban == null) return res.status(200).send({message: 'iban invalido'});

        //return res.status(200).send(`EXEC [sp_dueno_vehiculo_insert] @cedula= '${cedula}', @nombre= '${nombre}', @telefono = '${telefono}', @correo= '${correo}',  @iban= '${iban}'`);
        pool.connect(err => {
            pool.query(`EXEC [sp_dueno_vehiculo_insert] @cedula= '${cedula}', @nombre= '${nombre}', @telefono = '${telefono}', @correo= '${correo}',  @iban= '${iban}'`, (err, response) => {
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