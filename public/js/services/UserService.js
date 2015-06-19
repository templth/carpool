angular.module('UserService', []).factory('User', ['$http', function($http) {

    return {
        // call to get all nerds
        list: function() {
            return $http.get('/users');
        },

        read : function(name) {
            return $http.get('/users/name');
        },
         
        update : function(userData) {
            return $http.put('/users/', userData);
        },

        create : function(userData) {
            return $http.post('/users', userData);
        },

        del : function(name) {
            return $http.delete('/users/' + name);
        }
    }       

}]);

