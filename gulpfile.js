var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gulpMocha = require('gulp-mocha');
var env = require('gulp-env');
var superTest = require('supertest');

gulp.task('default', function() {
  nodemon({
      script: 'server.js',
      ext: 'js',
      env: {
        PORT: 8000
      },
      ignore: ['./node_modules/**']
  })
  .on('restart', function() {
    console.log('Server restarting...');
  });
});

gulp.task('test', function(){
  env({vars: {ENV: 'TEST'}});
  gulp.src('tests/*.js', {read: false})
    .pipe(gulpMocha({reporter: 'nyan'}));
});
