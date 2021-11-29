'use strict';

const con = require('../conexion');
const sql = require('mssql');

//************* Dueño Camion Controller **********************//
async function crearDuenosCamion(duenos) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('cedula', sql.Char, duenos.cedula)
                            .input('nombre', sql.VarChar, duenos.nombre)
                            .input('telefono', sql.Char, duenos.telefono)
                            .input('correo', sql.VarChar, duenos.correo)
                            .input('iban', sql.Char, duenos.iban)
                                .execute('sp_dueno_vehiculo_insert');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function getDuenosCamion(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('cedula', sql.Char, id)
                                .execute('sp_dueno_vehiculo_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

module.exports = {
    getDuenosCamion: getDuenosCamion,
    crearDuenosCamion: crearDuenosCamion
};