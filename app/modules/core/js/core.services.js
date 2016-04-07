(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('ByeByeWorldService', ByeByeWorldService);

    ByeByeWorldService.$inject = ['$resource'];
    function ByeByeWorldService($resource){
        return $resource('http://localhost:8000/app/static/data/person.json');
    };

})();
