angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
    return $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    })
  }

});
