'use strict'
// Modulos
var sql = require('mssql/msnodesqlv8');
var conn = require('../../db');
var pool = new sql.ConnectionPool(conn.conexion());


var bcrypt = require('bcrypt-nodejs');

// Servicio JWT
/* var jwt = require('../services/jwt'); */

var controller = {
    crearUsuario: (req, res) => {
        let params  = req.body;
        let dni = params.dni;
        let correo = params.correo;
        let pass = params.pass;
        let nombre = params.nombre;
        let apellidos = params.apellidos;

        if(dni == null) return res.status(200).send({message: 'DNI invalido'});
        if(correo == null) return res.status(200).send({message: 'Correo invalido'});
        if(pass == null) return res.status(200).send({message: 'Contraseña invalido'});
        if(nombre == null) return res.status(200).send({message: 'Nombre invalido'});
        if(apellidos == null) return res.status(200).send({message: 'Apellidos invalido'});

        // Cifrar contraseña
        bcrypt.hash(pass, null, null, function(err, hash){
            let pass_hash = hash;
            pool.connect(err => {
                pool.query(`EXEC [sp_usuario_crear] @dni = '${dni}', @correo = '${correo}', @pass = '${pass_hash}', @nombre  = '${nombre}', @apellidos  = '${apellidos}'`, (err, response) => {
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
        });
    },
    login: (req, res) => {
        // Parametros de la petición
        var params = req.body;
        let dni = params.dni;
        let pass = params.pass;

        if(dni == null || dni == '' ) return res.status(200).send({message: 'DNI invalido'});
        if(pass == null || pass == '') return res.status(200).send({message: 'Contraseña invalido'});

        if (!dni && !pass) {
            return res.status(200).send({ message : 'Datos invalidos.', success : false});
        }else {
            pool.connect(err => {
                pool.query(`EXEC sp_usurio_iniciar_sesion @cedula = '${dni}'`, (err, response) => {
                    pool.close();
                        if (err) {
                            res.status(500).send({
                                message: err
                            });
                        } else {
                            if (!response) {
                                return res.status(404).send({
                                    message: 'No fue posible ver los datos.', success : false
                                });
                            } else {

                            if(response.recordset.length == 0){
                                return res.status(200).send({ message : 'El usuario no ha podido iniciar sesión correctamente.', success : false});
                            }else{
                                bcrypt.compare(pass, response.recordset[0]['pass'], (err, check) => {
                                    if (check) {
                                        return res.status(200).send({ message : 'El usuario ha podido iniciar sesión correctamente.', success : true});
                                    } else {
                                        return res.status(400).send({ message : 'El usuario no ha podido iniciar sesión correctamente.', success : false});
                                    }
                                });
                            }
                        }
                    }
                });
            });
        }

    },
    img:(req, res) => {
        // Parametros de la petición
        var cedula = req.params.cedula;

        if (!cedula) {
            return res.status(200).send({ message : 'Cedula invalido.'});
        }else {
            connection.connect(err => {
                connection.query(`EXEC sp_cobros_login_socios @cedula = '${cedula}'`, (err, response) => {
                    connection.close();
                    if (err) {
                        res.status(500).send({
                            message: err
                        });
                    } else {
                        if (!response) {
                            return res.status(404).send({
                                message: 'No fue posible ver los datos.'
                            });
                        } else {
                            if(Object.keys(response.recordset).length === 0){
                                return res.status(200).send({ success : false });
                            }else{
                                res.writeHead(200, {'Content-Type': 'image/jpeg'});
                                let image  = Buffer.from(response.recordset[0].foto);

                                return res.end(image);
                            }
                        }
                    }
                });
            });
        }
    },
    info: (req, res) => {
        // Parametros de la petición
        var cedula = req.params.cedula;

        if (!cedula) {
            return res.status(200).send({ message : 'Cedula invalido.'});
        }else {
            connection.connect(err => {
                connection.query(`EXEC sp_cobros_login_socios @cedula = '${cedula}'`, (err, response) => {
                    connection.close();
                    if (err) {
                        res.status(500).send({
                            message: err
                        });
                    } else {
                        if (!response) {
                            return res.status(404).send({
                                message: 'No fue posible ver los datos.'
                            });
                        } else {
                            return res.status(200).send(response.recordset);
                        }
                    }
                });
            });
        }

    },
    acciones: (req, res) => {

        // Parametros de la petición
        var cedula = req.params.cedula;

        if (!cedula) {
            return res.status(200).send({ message : 'Cedula invalido.'});
        }else {
            connection.connect(err => {
                connection.query(`EXEC sp_cobros_datos_socios @cedula = '${cedula}'`, (err, response) => {
                    connection.close();
                    if (err) {
                        res.status(500).send({
                            message: err
                        });
                    } else {
                        if (!response) {
                            return res.status(404).send({
                                message: 'No fue posible ver los datos.'
                            });
                        } else {
                            if(Object.keys(response.recordset).length === 0){
                                return res.status(200).send({success : false });
                            }else{
                                return res.status(200).send({success : true, response: response.recordset});
                            }
                        }
                    }
                });
            });
        }
    }
};  // Fin controller

module.exports = controller;