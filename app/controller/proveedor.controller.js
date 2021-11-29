'use strict';

const con = require('../conexion');
const sql = require('mssql');

//************* Proveedor Controller **********************//
async function CrearProveedor(datos) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                            .input('dni', sql.Char, datos.dni)
                            .input('nombre', sql.VarChar, datos.nombre)
                            .input('tipo', sql.TinyInt, datos.tipo)
                            .input('cod_interno', sql.Char, datos.codigo)
                            .input('telefono', sql.Char, datos.telefono)
                            .input('correo', sql.VarChar, datos.correo)
                                .execute('sp_proveedor_crear');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function proveedor(datos) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                        .input('dni', sql.Char, datos.dni)
                                .execute('sp_proveedor_info');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function proveedores() {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                        .input('dni', sql.Char, null)
                                .execute('sp_proveedor_info');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}
module.exports = {
    CrearProveedor: CrearProveedor,
    proveedor: proveedor,
    proveedores: proveedores
};
