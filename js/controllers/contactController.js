angular.module('contactController', [])

  // create the controller and inject Angular's $scope
    .controller('contactController', function($scope) {
        // create a message to display in our view
        $scope.message = 'This is Ladna\'s home page!';
        $scope.pageClass = 'page-home';
    });

