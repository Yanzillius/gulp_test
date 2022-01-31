'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
};

function watch() {
  gulp.watch('./sass/**/*.scss', styles);
}

exports.default = gulp.series(watch);

