/**
 * Gulp configuration file. 
 * We can use gulp to automate deployment tasks, unit tests and integration.
 */


const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const server = require('./server.js');
const notify = require('gulp-notify');

// This task lets you access locally to the mock-ups
gulp.task('mockups', server.mockups);
