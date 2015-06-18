angular.module('UserService', []).factory('User', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/users');
        },


        create : function(userData) {
            return $http.post('/users', userData);
        },

        delete : function(id) {
            return $http.delete('/users/' + id);
        }
    }       

}]);

