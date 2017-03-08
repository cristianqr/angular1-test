(function () {
    var app = angular.module('homeModule');

    app.component('home', {
        templateUrl: '/app/home/home.template.html',
        controller: ['$routeParams', function($routeParams){
            console.log('home page');
        }]
    });
})();