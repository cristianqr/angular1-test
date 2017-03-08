(function () {
    var app = angular.module('app');

    app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('');

        $routeProvider.
            when('/', {
                template: '<home></home>'
            }).
            when('/persons', {
                template: '<person-page></person-page>'
            });
    }]);
})();