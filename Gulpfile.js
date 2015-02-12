var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

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

gulp.task('preview', ['styles', 'scripts'], function (){
  return browserSync({
    server: {
      baseDir: ['./preview/', 'dist'],
    }
  })
});

gulp.task('watch', ['preview'], function () {
  gulp.watch('./lib/scss/*', ['styles', reload])
  gulp.watch('./lib/ts/*', ['scripts', reload])
})
