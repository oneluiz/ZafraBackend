'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');

/**
 * Controlador
 */
let CuentaController = require('../controller/cuenta.controller');

//************* Cuenta Routes *************//

/**
 *  Crear Dueño Camión
 */
 router.route('/cuenta/crear').post((req, res) => {
    
    let cuenta = { ...req.body };
    
    if(cuenta.dni == null) return res.status(200).send({message: 'DNI invalido'});
    if(cuenta.correo == null) return res.status(200).send({message: 'Correo invalido'});
    if(cuenta.pass == null) return res.status(200).send({message: 'Contraseña invalido'});
    if(cuenta.nombre == null) return res.status(200).send({message: 'Nombre invalido'});
    if(cuenta.apellidos == null) return res.status(200).send({message: 'Apellidos invalido'});

    CuentaController.crearUsuario(cuenta).then((result) => {
        res.status(200).json('Registro Correcto');
    }).catch(function (err) {
        res.status(500).json(err);
        console.log(err);
    });
});

router.route('/cuenta/iniciar-sesion').post((req, res) => {
    
    let cuenta = { ...req.body };

    if(cuenta.dni == null || cuenta.dni == '' ) return res.status(200).send({message: 'DNI invalido'});
    if(cuenta.pass == null || cuenta.pass == '') return res.status(200).send({message: 'Contraseña invalido'});

    CuentaController.login(cuenta).then((result) => {
        if(result.length == 0){
            return res.status(200).send({ message : 'El usuario no ha podido iniciar sesión correctamente.', success : false});
        }else{
            bcrypt.compare(cuenta.pass, result[0]['pass'], (err, check) => {
                if (check) {
                    return res.status(200).send({ message : 'El usuario ha podido iniciar sesión correctamente.', success : true});
                } else {
                    return res.status(400).send({ message : 'El usuario no ha podido iniciar sesión correctamente.', success : false});
                }
            });
        }
    }).catch(function (err) {
        res.status(500).json(err);
        console.log(err);
    });
});


//** Exporto Routes **//
module.exports = router;