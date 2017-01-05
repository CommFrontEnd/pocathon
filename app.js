const express = require('express');
const serveStatic = require('serve-static');
var port = 3000;
var app = express();
//app.use(serveStatic(__dirname + '/public-optimized'));
app.use(serveStatic(__dirname + '/src/app'));
app.listen(port);
console.info('Your web application started at : localhost:'+ port+'/');