(function () {
'use strict';

angular.module('DIApp', [])
.controller(
  'DIController', DIController);


  function DIController ($scope, $filter, $injector) {
    $scope.name = "";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.upperName = upCase($scope.name);
    };

    console.log($injector.annotate(DIController));

  };


})();
