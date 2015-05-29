/* Define routes and basic config. for the core module */

(function(){
    'use strict';

    angular
        .module("app.core", ['ui.router'])
        .run(addStateToScope)
        .config(getRoutes);


    addStateToScope.$inject = ['$rootScope', '$state', '$stateParams'];
    function addStateToScope($rootScope, $state, $stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    };

    getRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function getRoutes($stateProvider, $urlRouterProvider){
        
        // We don't redirect any URL except a non-existent one.
        $urlRouterProvider.otherwise('/');

        // We define our states/routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "partials/init.html"
            })

            .state('hello', {
                url: '/hello',
                templateUrl: "partials/core/hello.html",
                controller: "HelloWorldController",
                controllerAs: 'vm'

            })
            .state('bye', {
                url: '/bye',
                template: "partials/core/bye.html",
                controller: "ByeByeController",
                controllerAs: 'vm'

            })
    };
})();
