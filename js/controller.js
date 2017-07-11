angular.module('controller.api', [])

.controller('cotacaoController', function($scope, api){
    api.getApi().then(function(result) {
        console.log(result);
        $scope.list = result.data;
    })
})