/* Define Controllers for the core module */

(function(){
    'use strict';

    angular
        .module('app.core')
        .controller('ByeByeController', ByeByeController);

    ByeByeController.$inject = [];
    function ByeByeController(){
        var vm = this;
        vm.message = "Bye bye, fellas!"
    };
})();
