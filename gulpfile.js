/**
 * Gulp configuration file.
 * We can use gulp to automate deployment tasks, unit tests and integration.
 */

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
// const react = require('gulp-react');
const server = require('./server.js');
const notify = require('gulp-notify');
// const del = require('del');

// This task lets you access locally to the mock-ups
gulp.task('mockups', server.mockups);

//start our server and listen for changes
gulp.task('server', function(){
  // configure nodemon
  nodemon({
    // the script to run the app
    script: 'app.js',
    // this listens to changes in any of these files/folders and restarts the application
    watch: ["app.js", 'src/app/*', 'src/app/*/**'],
    // tasks: ["transform", "copy"],
    ext: 'js html',
    env: { 'NODE_ENV': 'development' } //now you can use safely console.debug 
  }).on('restart', function() {
    gulp.src('app.js')
      .pipe(notify('This notification shows when restarting but you can add any other task'));
  });
});

// gulp.task('clean', function() {
//   del(['dist/*'])
// })

// gulp.task('transform', function() {
//   gulp.src(['src/app/js/*','src/app/index.js'])
//     .pipe(react())
//     .pipe(gulp.dest('dist/js'))
// })

// gulp.task('copy', function() {
//   gulp.src('src/app/index.html')
//     .pipe(gulp.dest('dist'));
//   gulp.src('src/app/main.css')
//     .pipe(gulp.dest('dist/css'));
// })

gulp.task('default', ['server']);