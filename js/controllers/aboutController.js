angular.module('aboutController', [])

  // create the controller and inject Angular's $scope
    .controller('aboutController', function($scope) {
        $scope.message = 'Know my Story';
        $scope.pageClass = 'page-about';
    });