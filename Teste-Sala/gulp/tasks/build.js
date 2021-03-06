var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

//temporarily disabling jshint
gulp.task('build', ['wrap', 'html', 'images', 'extras', 'wiredep'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});