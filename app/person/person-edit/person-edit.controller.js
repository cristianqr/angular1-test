(function () {
    var app = angular.module('personPageModule');
    app.controller('personEditController', ['$scope', '$uibModalInstance', 'personService', 'params', function ($scope, $uibModalInstance, personService, params) {
        $scope.row = params.row;

        $scope.update = function () {
            personService.update($scope.row).then(function(res){
                $uibModalInstance.close(res.data);
            });
        }


        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        }
    }])
})();