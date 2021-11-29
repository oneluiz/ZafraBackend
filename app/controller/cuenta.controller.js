'use strict';

const con = require('../conexion');
const sql = require('mssql');
const bcrypt = require('bcrypt-nodejs');

//************* Cuenta Controller **********************//
async function crearUsuario(datos) {
    try {
        // Cifrar contraseña
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(datos.pass, salt);

        let pool = await sql.connect(con);
        let result = await pool.request()
                        .input('dni', sql.Char, datos.dni)
                        .input('correo', sql.VarChar, datos.correo)
                        .input('pass', sql.VarChar, hash)
                        .input('nombre', sql.VarChar, datos.nombre )
                        .input('apellidos', sql.VarChar, datos.apellidos)
                                .execute('sp_usuario_crear');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function login(datos) {
    try {
        let pool = await sql.connect(con);
        let result = await pool.request()
                        .input('cedula', sql.Char, datos.dni)
                                .execute('sp_usurio_iniciar_sesion');
        return result.recordset;

    } catch (err) {
        throw new Error(`Se presento un error en el procedimiento ${err.procName}...${err.message}`);
    }
}

module.exports = {
    crearUsuario: crearUsuario,
    login: login
};
