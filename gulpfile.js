const gulp = require('gulp');
const minifyCss = require('gulp-minify-css');
const minifyHTML = require('gulp-minify-html');
const concatCss = require('gulp-concat-css');
const uglify = require('gulp-uglify');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const pump = require('pump');
const livereload = require('gulp-livereload');
const gutil = require('gulp-util');
const critical = require('critical').stream;

gulp.task('critical', ['css'], () => {
    return gulp.src('./src/*.html')
        .pipe(critical({
            base: './src/',
            inline: true,
            css: './src/css/myStyles.css',
            minify: true
        }))
        .on('error', (err) => gutil.log(gutil.colors.red(err.message)))
        .pipe(minifyHTML())
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});

gulp.task('css', () => {
    return gulp.src('./src/css/*.css')
        .pipe(concatCss('bundle.min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css/'))
});

gulp.task('js', (cb) => {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('./js')
    ], cb);
});

gulp.task('images', function () {
    return gulp.src('./src/images/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('./images'))
});

gulp.task('build', ['critical', 'js', 'images']);

gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('./src/css/*.css', ['critical']);
    gulp.watch('./src/*.html', ['critical']);
    gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('default', ['build', 'watch']);
