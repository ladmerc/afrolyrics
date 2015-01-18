angular.module('appRoutes', [])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'partials/signup.html',
                controller  : 'userController'
            })
            //route for signup page
            .when('/log', {
                templateUrl : 'singupform/signup.html',
                controller  : 'userController'
            })

        /*==============================================================================

            SERVER ROUTES
        ==============================================================================*/

            .when('/lyrics', {
                templateUrl : 'partials/lyrics.html',
                controller  : 'mainController'
            })






            // route for the about page
            .when('/about', {
                templateUrl : 'partials/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'partials/contact.html',
                controller  : 'contactController'
            }).
            otherwise({
            redirectTo: function ($routeParams, $path, $search) {
                console.log($routeParams);
                console.log($path);
                console.log($search);
                return "/" + routeParams.crust;
            }
        });

            // $locationProvider.html5Mode(true);
    }]);
