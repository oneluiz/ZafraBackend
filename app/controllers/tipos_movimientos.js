'use strict'
// Modulos
var sql = require('mssql/msnodesqlv8');
var conn = require('../../db');
var pool = new sql.ConnectionPool(conn.conexion());

var controller = {
    Tipos_Movimientos: (req, res) => {

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
    }
}

module.exports = controller;