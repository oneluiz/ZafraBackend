'use strict';

const con = require('../conexion');
const sql = require('mssql');

//************* Tipos de Medidas Controller **********************//
async function getTipoMedida(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, id)
                                .execute('sp_tipo_medida_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function getTipoMedidas() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, null)
                                .execute('sp_tipo_medida_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

//************* Tipos de Cedulas Controller **********************//
async function getTipoCedula(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, id)
                                .execute('sp_ajustes_tipo_cedula_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function getTipoCedulas() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, null)
                                .execute('sp_ajustes_tipo_cedula_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

//************* Tipos de Pago Controller **********************//
async function getTipoPago(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, id)
                                .execute('sp_tipo_pago_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function getTipoPagos() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, null)
                                .execute('sp_tipo_pago_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

//************* Formas de Pago Controller **********************//
async function getFormaPago(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, id)
                                .execute('sp_tipo_credito_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function getFormasPago() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, null)
                                .execute('sp_tipo_credito_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

//************* Tipos de Estado Controller **********************//
async function getTipoEstado(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, id)
                                .execute('sp_tipo_estado_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function getTiposEstado() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, null)
                                .execute('sp_tipo_estado_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

//************* Tipos de Movimiento Controller **********************//
async function getTipoMovimiento(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, id)
                                .execute('sp_tipo_movimiento_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function getTiposMovimiento() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id', sql.Int, null)
                                .execute('sp_tipo_movimiento_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

module.exports = {
    getTipoMedida: getTipoMedida,
    getTipoMedidas: getTipoMedidas,
    getTipoCedula: getTipoCedula,
    getTipoCedulas: getTipoCedulas,
    getTipoPago: getTipoPago,
    getTipoPagos: getTipoPagos,
    getFormaPago: getFormaPago,
    getFormasPago: getFormasPago,
    getTipoEstado: getTipoEstado,
    getTiposEstado: getTiposEstado,
    getTipoMovimiento: getTipoMovimiento,
    getTiposMovimiento: getTiposMovimiento
};
