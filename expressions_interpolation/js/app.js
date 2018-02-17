(function () {
'use strict';

angular.module('MsgApp', [])
.controller(
  'MsgController', MsgController);

  MsgController.$inject = ['$scope'];

  function MsgController ($scope) {
    $scope.name = "Michalis";
    $scope.stateOfBrightness = "dark";

    $scope.sayMessage = function () {
      return "This is a message from " + $scope.name + "!"
    };

    $scope.lightMe = function (){
      $scope.stateOfBrightness = "light";
    }

  };

})();
