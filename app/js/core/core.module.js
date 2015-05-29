/* Define routes and basic config. for the core module */

(function(){
    'use strict';

    angular
        .module("app.core", ['ngRoute'])
        .config(getRoutes);

    // We define a function to configure the routes. This way we can change the 
    // router module in the future.
    getRoutes.$inject = ['$routeProvider'];
    function getRoutes($routeProvider){
       $routeProvider
            .when('/', {
                templateUrl: 'partials/init.html',
            })
            .when('/hello', {
                templateUrl: 'partials/hello.html',
                controller: 'HelloWorldController',
                controllerAs: 'vm'
            })
            .when('/bye', {
                templateUrl: 'partials/bye.html',
                controller: 'ByeByeController',
                controllerAs: 'vm'
            });
    };
})();
