'use strict'
// Modulos
var sql = require('mssql/msnodesqlv8');
var conn = require('../../db');
var pool = new sql.ConnectionPool(conn.conexion());

var controller = {
    info: (req, res) => {
        var dni = req.params.dni;

        if(!dni || dni == null || dni == undefined){
            return res.status(200).send({
                message: 'No se encontro el número de identificación'
            });
        } else {
            pool.connect(err => {
                pool.query(`EXEC [sp_proveedor_info] @dni = ${dni}`, (err, response) => {
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
    },
    CrearProveedor: (req, res) => {
        
        let params = req.body;
        let dni     = params.dni;
        let nombre  = params.nombre;
        let tipo    = params.tipo;
        let codigo  = params.cod_interno;
        let telefono= params.telefono;
        let correo  = params.correo;

        if(dni == null) return res.status(200).send({message: 'DNI invalido'});
        if(nombre == null) return res.status(200).send({message: 'Nombre invalido'});
        if(tipo == null) return res.status(200).send({message: 'Tipo de identificación invalido'});
        if(codigo == null) return res.status(200).send({message: 'Código Interno invalido'});
        if(correo == null) return res.status(200).send({message: 'Correo invalido'});
        if(telefono == null) return res.status(200).send({message: 'Telefono invalido'});

        pool.connect(err => {
            pool.query(`EXEC [sp_proveedor_crear] @dni = '${dni}', @nombre = '${nombre}', @tipo = ${tipo}, @cod_interno = '${codigo}', @telefono = '${telefono}', @correo = '${correo}'`, (err, response) => {
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
    }
};  // Fin controller

module.exports = controller;