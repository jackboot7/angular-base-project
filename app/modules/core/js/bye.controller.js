/* Define Controllers for the core module */

(function(){
    'use strict';

    angular
        .module('app.core')
        .controller('HelloWorldController', HelloWorldController)
        .controller('ByeByeController', ByeByeController);


    HelloWorldController.$inject = [];
    function HelloWorldController(){
        var vm = this;
        vm.name = "Bob"
    };


    ByeByeController.$inject = [];
    function ByeByeController(){
        var vm = this;
        vm.message = "Bye bye, fellas!"
    };
})();
