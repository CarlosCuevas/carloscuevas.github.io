var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var livereload = require('gulp-livereload');

gulp.task('css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(concatCss('bundle.min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});

gulp.task('html', function() {
    return gulp.src('./src/index.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});

gulp.task('js', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('./js')
    ],
    cb
  );
});

gulp.task('build', ['css', 'html', 'js']);

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./src/css/*.css', ['css']);
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('default', ['build', 'watch']);