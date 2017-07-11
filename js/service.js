angular.module('service.api', [])

.factort('api', function($http){
    return{
        getApi: function() {
            return $http({
                url: 'http://http://api.promasters.net.br/cotacao/v1/valores',
                method: 'GET'
            })
        }
    };
})