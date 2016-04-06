/* Define Controllers for the core module */

(function(){
    'use strict';

    angular
        .module('app.core')
        .controller('HelloController', HelloController)

    HelloController.$inject = [];
    function HelloController(){
        var vm = this;
        vm.name = "Bob"
    };

})();
