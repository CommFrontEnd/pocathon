const express = require('express');
const serveStatic = require('serve-static');
var port = 4000;
var app = express();
//app.use(serveStatic(__dirname + '/public-optimized'));
app.use(serveStatic(__dirname + '/src/app'));
 app.use('/vendors', express.static('./node_modules'));
app.listen(port);
console.info('Your web application started at : localhost:'+ port+'/');