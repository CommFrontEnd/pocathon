/**
 * Gulp configuration file. 
 * We use gulp to automate deployment task, unit tests and integration.
 */


const gulp = require('gulp');
const gls = require('gulp-live-server');


// This task lets you access locally your application
gulp.task('server', function(){
    let server = gls.new(['app.js'])
    console.log('Your application is available at');


});

gulp.task('default', ['server']);