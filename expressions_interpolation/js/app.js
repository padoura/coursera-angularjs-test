(function () {
'use strict';

angular.module('MsgApp', [])
.controller(
  'MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];

  function MsgController ($scope, $filter) {
    $scope.name = "Michalis";
    $scope.stateOfBrightness = "dark";

    $scope.sayMessage = function () {
      var message = "This is a message from " + $scope.name + "!";
      var output = $filter('uppercase')(message);
      return output;
    };

    $scope.lightMe = function (){
      $scope.stateOfBrightness = "light";
    }

  };

})();
