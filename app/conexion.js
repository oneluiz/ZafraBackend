let conexion = {
    user : 'devfy',
    password : 'Luchy$1210',
    server : 'LUIS-CORTES\\SQLEXPRESS',
    database : 'zafra',
    options : {
        encrypt : false, // Use this if you're on Windows Azure
        trustedConnection : false,
        enableArithAbort : true,
        instancename: 'SQLSERVER'
    }
};

module.exports = conexion;
