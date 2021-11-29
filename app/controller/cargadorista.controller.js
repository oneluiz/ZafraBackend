'use strict';

const con = require('../conexion');
const sql = require('mssql');

//************* Semanas Disponibles Controller **********************//
async function getSemanaDisponble() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request().execute('sp_cargadoristas_semana_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

//************* Planillas Controller **********************//
async function crearPlanillaCargadorista(cargadorista) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('semana', sql.Int, cargadorista.semana)
                            .input('monto', sql.Decimal(10, 2), cargadorista.monto)
                            .input('detalle', sql.VarChar, cargadorista.detalle)
                                .execute('sp_cargadoristas_insert');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function deletePlanillaCargadorista(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, id)
                                .execute('sp_cargadoristas_delete');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function getPlanilla(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id_cargadorista_planilla', sql.Int, id)
                                .execute('sp_cargadoristas_planilla_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}
async function getPlanillas() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id_cargadorista_planilla', sql.Int, null)
                                .execute('sp_cargadoristas_planilla_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}
module.exports = {
    getSemanaDisponble: getSemanaDisponble,
    getPlanilla: getPlanilla,
    getPlanillas: getPlanillas,
    crearPlanillaCargadorista: crearPlanillaCargadorista,
    deletePlanillaCargadorista: deletePlanillaCargadorista
};