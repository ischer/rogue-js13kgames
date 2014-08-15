var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Basic usage
gulp.task('default', function() {
    // Single entry point to browserify
    gulp.src('src/game.js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
});