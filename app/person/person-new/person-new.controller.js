(function () {
    var app = angular.module('personPageModule');
    app.controller('personNewController', ['$scope', '$uibModalInstance', 'personService', 'params', function ($scope, $uibModalInstance, personService, params) {
        $scope.row = {};

        $scope.save = function () {
            personService.save($scope.row).then(function(res){
                $uibModalInstance.close(res.data);
            });
        }


        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        }
    }])
})();