var conexion = {
    user: 'devfy',
    password: 'Luchy$1210',
    server: 'LUIS-CORTES\\SQLEXPRESS',
    database: 'zafra',
    port : 1433,
    options: {
        encrypt: false,
        enableArithAbort: true,
        trustedConnection: true
    }
}

module.exports = conexion;
/* 
exports.conexion = function () {
    var config = {
        user: 'devfy',
        password: 'Luchy$1210',
        server: 'LUIS-CORTES\\SQLEXPRESS',
        database: 'zafra',
        driver: 'msnodesqlv8',
        port : 1433,
        options: {
            encrypt: false,
            enableArithAbort: true,
            trustedConnection: true
        }
    }
    return config;
}; */