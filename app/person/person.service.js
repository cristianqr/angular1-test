(function () {
    var app = angular.module('personPageModule');
    app.factory('personService', ['$http', function($http){
        var services = {};
        services.listAll = function () {
            return $http.get('http://lumen/person/listAll');
        };

        services.delete = function (id) {
            return $http.get('http://lumen/person/delete/' + id);
        }

        services.save = function (data) {
            return $http.post('http://lumen/person/register', data);
        }

        services.update = function (data) {
            return $http.post('http://lumen/person/update', data);
        }

        return services;

    }]);
})();