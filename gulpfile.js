var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./public/src/js/main.js')
      .transform(babelify)
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy',function() {
    gulp.src('public/src/index.html')
      .pipe(gulp.dest('dist'));
    gulp.src('public/src/styles/*.*')
      .pipe(gulp.dest('dist/styles'));
    gulp.src('public/src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));
});

gulp.task('default',['browserify', 'copy'], function() {
    return gulp.watch('public/src/**/*.*', ['browserify', 'copy'])
});