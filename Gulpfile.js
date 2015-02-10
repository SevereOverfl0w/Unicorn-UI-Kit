var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('styles', function(){
  return gulp.src('./lib/scss/unicorn.scss')
             .pipe($.plumber())
             .pipe($.sass())
             .pipe($.autoprefixer())
             .pipe(gulp.dest('./dist/'));
});

gulp.task('scripts', function() {
  return gulp.src('./lib/ts/*.ts')
             .pipe($.tsc())
             .pipe(gulp.dest('./dist/'))
});
