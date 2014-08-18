var gulp = require('gulp'),
    connect = require('gulp-connect'),
    _ = require('lodash'),
    karma = require('karma').server,
    shell = require('gulp-shell');

var karmaCommonConf = {
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'requirejs'],
    files: [
        'specs/unit/spec-main.js',
        {pattern: 'src/bower_components/**/*.js', included: false},
        {pattern: 'specs/test-data/**/*.*', included: false},
        {pattern: 'src/javascript/**/*.js', included: false},
        {pattern: 'specs/unit/**/*Spec.js', included: false}
    ],

    // list of files to exclude
    exclude: [
        'src/main.js'
    ]
};

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start(_.assign({}, karmaCommonConf, {singleRun: true}), done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    karma.start(karmaCommonConf, done);
});

gulp.task('protractor-single', shell.task([
    'protractor protractor_config.js'
]));

// watch for changes and run protractor
gulp.task('protractor-watch', function() {
    gulp.watch(['specs/functional/**/*.*'], ['protractor-single']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        livereload: true,
        port: 8100
    });
});

gulp.task('source', function() {
    gulp.src(['src/**/*.*', '!src/pages/**/*.*'])
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*.*', '!src/pages/**/*.*'], ['source']);
});

gulp.task('default', ['connect', 'watch']);
