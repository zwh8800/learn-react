var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var clean = require('gulp-clean');

var babelify = require("babelify");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var src = {
    base: 'src/',
    js: 'src/app/app.js',
    html: 'src/**/*.html'
};

var dest = {
    base: 'dist/',
    js: 'dist/js',
    html: 'dist/',
    all: 'dist/**'
};

gulp.task('clean', function() {
    gulp.src([dest.all], {read: false})
        .pipe(clean());
});

gulp.task('js', function () {
    var b = browserify({ debug: true })
        .transform(babelify.configure({
            presets: ['es2015', 'react']
        }))
        .require(src.js, { entry: true });

    return b.bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(dest.js));
});

gulp.task('html', function () {
    gulp.src(src.html)
        .pipe(gulp.dest(dest.html));
});

gulp.task('build', ['html', 'js']);

gulp.task('connect', function () {
    connect.server({
        root: '',
        port: 8089,
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch(src.js, ['js']);
    gulp.watch(src.html, ['html']);

    gulp.watch([dest.all]).on('change', function(file) {
        gulp.src(file.path)
            .pipe(connect.reload());
    });
});

gulp.task('server', ['connect', 'watch']);

gulp.task('default', ['build']);
