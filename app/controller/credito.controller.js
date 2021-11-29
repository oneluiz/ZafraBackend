'use strict';

const con = require('../conexion');
const sql = require('mssql');

//************* Credito Controller **********************//
async function crearInteres(interes) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('desc', sql.VarChar, interes.desc)
                            .input('interes', sql.TinyInt, interes.interes)
                            .input('dias', sql.TinyInt, interes.dias)
                                .execute('sp_interes_insert');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}
async function getInteres(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, id)
                                .execute('sp_interes_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function getIntereses() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, null)
                                .execute('sp_interes_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function desactivarInteres(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Char, id)
                                .execute('sp_interes_update');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

module.exports = {
    crearInteres: crearInteres,
    getInteres: getInteres,
    getIntereses: getIntereses,
    desactivarInteres: desactivarInteres
};
