var userController = angular.module('userController', []);
  
  userController.controller('userController', function($scope, $http, $rootScope) {

  $http.get("http://localhost:8080/").success(function(data) {
        console.log(data);
      });
    // console.log("dff");
  });
