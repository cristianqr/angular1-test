(function () {
    var app = angular.module('personPageModule');

    app.component('personPage', {
        templateUrl: '/app/person/person-page.template.html',
        controller: ['$scope', '$routeParams', '$uibModal', 'personService', function($scope, $routeParams, $uibModal, personService){
            $scope.persons = [];
            personService.listAll().then(function (res) {
                $scope.persons = res.data;
            });

            $scope.new = function(){
                $uibModal.open({
                    templateUrl: '/app/person/person-new/person-new.template.html',
                    controller: 'personNewController',
                    ariaLabelledBy: 'modal-title-top',
                    ariaDescribedBy: 'modal-body-top',
                    resolve: {
                        params: function () {
                            return {

                            };
                        }
                    }
                }).result.then(function(newPerson){
                    $scope.persons.push(newPerson);
                });
            }

            $scope.edit = function(){
                if(!$scope.getCurrentRow()){
                    return;
                }

                $uibModal.open({
                    templateUrl: '/app/person/person-edit/person-edit.template.html',
                    controller: 'personEditController',
                    resolve: {
                        params: function () {
                            return {
                                row: $scope.getCurrentRow()
                            };
                        }
                    }
                }).result.then(function(update){

                });
            }

            $scope.delete = function () {
                if(!$scope.getCurrentRow()){
                    return;
                }

                personService.delete($scope.getCurrentRow().personId).then(function (res) {
                    $scope.persons = $scope.persons.filter(function (item) {
                        return item.personId != $scope.getCurrentRow().personId;
                    });

                    // $scope.persons.splice($scope.persons.indexOf($scope.getCurrentRow()), 1);
                })
            }

            $scope.toggleChecker = function (person) {
                $scope.persons.forEach(function (item) {
                    if(!angular.equals(item, person)){
                        item.checker = false;
                    }
                })
            };

            $scope.getCurrentRow = function () {
                var currentRow = null;
                $scope.persons.forEach(function (item) {
                    if(item.checker){
                        currentRow = item;
                    }
                });

                return currentRow;
            }
        }]
    });
})();