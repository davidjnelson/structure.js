require.config({
    baseUrl: '/javascript',
    paths: {
        angular: '../bower_components/angular/angular',
        text: '../bower_components/requirejs-text/text',
        angularRoute: '../bower_components/angular-route/angular-route',
        _: '../bower_components/underscore/underscore'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        _: {
            exports: '_'
        }
    }
});

require(['angular', 'text!modules/application/applicationTemplate.html', 'modules/application/applicationModule'],
    function(angular, applicationTemplate, applicationModule) {

        angular.element(document.body).attr('ng-controller', 'applicationController');
        angular.element(document.body).html(applicationTemplate);

        angular.bootstrap(document, ['applicationModule']);
    });
