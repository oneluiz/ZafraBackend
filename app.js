'use strict';

// Cargar Modulos de node para el servidor
var express = require('express');

// Ejecutar express (http)
var app = express();

// Cargar ficheros de rutas
let ajustes_routes = require('./app/routes/ajustes.routes');
let cargadorista_routes = require('./app/routes/cargadorista.routes');
let duenos_routes = require('./app/routes/duenos.routes');
let credito_routes = require('./app/routes/credito.routes');
let cuenta_routes = require('./app/routes/cuenta.routes');
let proveedor_routes = require('./app/routes/proveedor.routes');
let movimiento_routes = require('./app/routes/movimiento.routes');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, HEAD');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Añadir prefijos a rutas / Cargar rutas
app.use('/api',  [
    ajustes_routes,
    cargadorista_routes,
    duenos_routes,
    credito_routes,
    cuenta_routes,
    proveedor_routes,
    movimiento_routes
]);

// Exportar modulo (fichero actual)
module.exports = app;