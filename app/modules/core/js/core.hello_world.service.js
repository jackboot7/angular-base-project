(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('HelloWorldService', HelloWorldService);

    HelloWorldService.$inject = ['$resource'];
    function HelloWorldService($resource){
        return $resource('http://localhost:8000/app/static/data/ted.json');
    };

})();