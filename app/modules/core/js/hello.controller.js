/* Define Controllers for the core module */

(function(){
    'use strict';

    angular
        .module('app.core')
        .controller('HelloController', HelloController)

    HelloController.$inject = ['HelloWorldService', '$modal', '$state', '$scope'];
    function HelloController( HelloWorldService, $modal , $state, $scope ){
        var vm = this;
        vm.name = "Bill"
        vm.otherName;

        HelloWorldService.get({},
            function (success){
                vm.otherName = success.name;
            },
            function(){
                vm.otherName = 'Unknown!'
        });

        vm.goHomeModal = function () {
            vm.acceptButton = true;
            vm.cancelButton = true;
            vm.message = 'Do you wish to go back?'
            vm.okButton = false;
            $scope.modalInstance = $modal.open({
                templateUrl: 'modules/core/partials/modal/modal_example.html',
                scope: $scope,
                size: 'sm',
                backdrop: 'static',
                keyboard  : false
            });
        };

        vm.goHome = function () {
            $state.go('home');
        };

         vm.ok = function () {
            $state.go('home')
            $scope.modalInstance.dismiss('cancel');
        };

        vm.cancel = function () {
            $scope.modalInstance.dismiss('cancel');
        };

    };

})();
