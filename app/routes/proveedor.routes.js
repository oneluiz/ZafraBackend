'use strict';

const express = require('express');
const router = express.Router();

/**
 * Controlador
 */
let ProveedorController = require('../controller/proveedor.controller');

//************* Proveedor Routes *************//

/**
 *  Crear Dueño Camión
 */
 router.route('/proveedor/crear').post((req, res) => {
    
    let cuenta = { ...req.body };

    if(cuenta.dni == null) return res.status(200).send({message: 'DNI invalido'});
    if(cuenta.nombre == null) return res.status(200).send({message: 'Nombre invalido'});
    if(cuenta.tipo == null) return res.status(200).send({message: 'Tipo de identificación invalido'});
    if(cuenta.cod_interno == null) return res.status(200).send({message: 'Código Interno invalido'});
    if(cuenta.correo == null) return res.status(200).send({message: 'Correo invalido'});
    if(cuenta.telefono == null) return res.status(200).send({message: 'Telefono invalido'});

    ProveedorController.CrearProveedor(cuenta).then((result) => {
        res.status(200).json('Registro Correcto');
    }).catch(function (err) {
        res.status(500).json(err);
        console.log(err);
    });
});

router.route('/proveedor/:dni').get((req, res) => {
    
    let dni = req.params.dni;

    ProveedorController.proveedor(dni).then((result) => {
        res.status(200).json(result[0]);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

router.route('/proveedor/').get((req, res) => {
    

    ProveedorController.proveedores().then((result) => {
        res.status(200).json(result);
    }).catch(function (err) {
        res.status(500).json(err);
    });
});

//** Exporto Routes **//
module.exports = router;