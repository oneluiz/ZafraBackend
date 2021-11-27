'use strict'

// Cargar Modulos de node para el servidor
var express = require('express');

// Ejecutar express (http)
var app = express();

// Cargar ficheros de rutas
var api_routes = require('./app/routes/api');

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
app.use('/api', [api_routes]);

// Exportar modulo (fichero actual)
module.exports = app;