/* Define Controllers for the core module */

(function(){
    'use strict';

    angular
        .module('app.core')
        .controller('ByeByeController', ByeByeController);

    ByeByeController.$inject = ['ByeByeWorldService'];
    function ByeByeController(ByeByeWorldService){
        var vm = this;
        vm.message;
        vm.person;

        ByeByeWorldService.get({},
        	function(success){
        		vm.person = success;
        		vm.message = "Bye bye, "+ vm.person.name+" "+vm.person.lastname+"!";
        	},
        	function(error){
        		vm.message = "Believe or not person isn't at home, leave your message at the beep, it must be ot it would pick up the phone, where would it be? Believe or not person's not home..."
        		console.log(vm.message);
        	}
        	) 
    };
})();
