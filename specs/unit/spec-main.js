var specFiles = null;
var baseUrl = '/base/src/javascript';

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    // looking for *_spec.js files
    specFiles = [];
    for (var file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {
            if (/Spec\.js$/.test(file)) {
                specFiles.push(file);
            }
        }
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: baseUrl,

    // example of using shim, to load non AMD libraries (such as underscore and jquery)
    paths: {
        'angular': '../bower_components/angular/angular',
        'underscore': '../bower_components/underscore/underscore',
        'text': '../bower_components/requirejs-text/text',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'underscore': {
            exports: '_'
        },
        'angular-mocks': {
            deps: ['angular'],
            exports: 'angular'
        }
    },

    // dynamically load all test files
    deps: specFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
