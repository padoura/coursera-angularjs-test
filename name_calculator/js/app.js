(function () {
'use strict';
  angular.module('myFirstApp', [])

  .controller('MyFirstController', function ($scope){
    $scope.name = "Michalis";
    $scope.sayHello = function () {
      return "Hello Coursera"
    }
  });


})();
