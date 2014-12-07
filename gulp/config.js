'use strict';

// requires
var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');
var util = require('gulp-util');
var rename = require('gulp-rename');

// enviroment variables
var env = util.env.env || 'development';
var envPath = 'enviroments/' + env + '.json'

gulp.task('config', function () {
  gulp.src(envPath)
    .pipe(ngConstant({
      name: 'app.config'
    }))
    .pipe(rename('config.js'))
    .pipe(gulp.dest('./src/app/common/modules'));
});
