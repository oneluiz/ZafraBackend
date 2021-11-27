'use strict'

var app     = require('./app');
var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor Zafra corriendo en http://localhost:${port}`);
});