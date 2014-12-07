'use strict';

// requires
var gulp = require('gulp')
var shell = require('gulp-shell')

// Run project
gulp.task('run', shell.task([
     'node dist/node_modules/node-webkit-builder/bin/nwbuild -v 0.8.6 --run ./dist'
]));

// Compile project
gulp.task('build-osx', shell.task([
     'node dist/node_modules/node-webkit-builder/bin/nwbuild -v 0.8.6 -p osx ./dist'
]));

// Compile project
gulp.task('build-win', shell.task([
     'node dist/node_modules/node-webkit-builder/bin/nwbuild -v 0.8.6 -p win ./dist'
]));

// Compile project
gulp.task('build-linux', shell.task([
     'node dist/node_modules/node-webkit-builder/bin/nwbuild -v 0.8.6 -p linux32,linux64 ./dist'
]));
