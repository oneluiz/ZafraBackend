'use strict';

const con = require('../conexion');
const sql = require('mssql');

//************* Movimiento Controller **********************//
async function crearMovimiento(datos) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id_proveedor', sql.Char, datos.proveedor)
                            .input('nro_factura', sql.Char, datos.nro_factura)
                            .input('tipo_movimiento', sql.TinyInt, datos.tipo_movimiento)
                            .input('monto', sql.Decimal, datos.monto)
                            .input('vence', sql.Date, datos.vencimiento)
                            .input('tipo_credito', sql.TinyInt, datos.tipo_credito)
                            .input('comprobante', sql.TinyInt, datos.comprobante)
                            .input('tipo_pago', sql.Char, datos.tipo_pago)
                                .execute('sp_movimiento_crear');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function CrearDetalleMovimiento(datos) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('id_movimiento', sql.Int, datos.id_movimiento)
                            .input('monto', sql.Decimal, datos.monto)
                            .input('comprobante', sql.VarChar, datos.comprobante)
                            .input('tipo_pago', sql.TinyInt, datos.tipo_pago)
                                .execute('sp_movimiento_detalle_crear');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function movimientoDetalle(id) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                        .input('id_movimiento', sql.Int, id)
                                .execute('sp_movimiento_detalle_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function movimiento(id, proveedor) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                        .input('id', sql.Int, id)
                        .input('proveedor', sql.Char, proveedor)
                                .execute('sp_movimiento_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function movimientos() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                        .input('id', sql.Int, null)
                        .input('proveedor', sql.Char, null)
                                .execute('sp_movimiento_select');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function movimientoEgresosDia() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request().execute('sp_movimiento_egresos_x_dia');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function estadoCuenta(proveedor, estado) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                        .input('proveedor', sql.Char, proveedor)
                        .input('estado', sql.TinyInt, estado)
                                .execute('sp_estado_de_cuenta');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

module.exports = {
    crearMovimiento: crearMovimiento,
    CrearDetalleMovimiento: CrearDetalleMovimiento,
    movimientoDetalle: movimientoDetalle,
    movimiento: movimiento,
    movimientos: movimientos,
    movimientoEgresosDia: movimientoEgresosDia,
    estadoCuenta: estadoCuenta
};
