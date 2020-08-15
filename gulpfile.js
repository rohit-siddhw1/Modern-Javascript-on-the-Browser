const gulp = require('gulp');

function copyDist() {
    return gulp.src('./node_modules/reveal.js/dist/**/*.js')
    .pipe(gulp.dest('./dist')) && gulp.src('./node_modules/reveal.js/dist/**/*.css')
    .pipe(gulp.dest('./dist'));
}

function copyPlugins() {
    return gulp.src('./node_modules/reveal.js/plugin/**/*.js')
    .pipe(gulp.dest('./plugin')) && gulp.src('./node_modules/reveal.js/plugin/**/*.css')
    .pipe(gulp.dest('./plugin'));
}

function copyFont() {
    return gulp.src('./font/*.ttf')
    .pipe(gulp.dest('./dist/theme/fonts/source-sans-pro/'));
}

gulp.task('default', function() {
    return copyPlugins() && copyDist() && copyFont();
  });