const express = require('express');
const serveStatic = require('serve-static');
module.exports = {
    mockups : function(){
        var port = 8082;
        var app = express();
        //app.use(serveStatic(__dirname + '/public-optimized'));
        app.use(serveStatic(__dirname + '/mockups/app'));
        app.use('/static', express.static('./dist'));
        app.use('/vendors', express.static('./node_modules'));
        app.listen(port);
        console.info('Maquettes Server started at : localhost:'+ port+'/');
    }
};

