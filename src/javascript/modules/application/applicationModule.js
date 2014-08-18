define(function(require) {
    var angular = require('angular'),
        applicationController = require('modules/application/applicationController');

    angular.module('applicationModule', [])
        .controller('applicationController', applicationController);
});
