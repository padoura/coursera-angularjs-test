(function () {
'use strict';

angular.module('msgApp', [])
.controller('MsgCtrl', MsgCtrl)
  .filter('changeCurrency', ChangeCurrencyFilter);

  MsgCtrl.$inject = ['$scope', '$filter'];

  function MsgCtrl ($scope, $filter) {
    $scope.name = "Michalis";
    $scope.stateOfBrightness = "dark";

    $scope.sayMessage = function () {
      var message = "This is an example of uppercase filter!";
      var output = $filter('uppercase')(message);
      return output;
    };

    $scope.sayPrice = function () {
      var price = 0.5;
      var output = $filter('currency')(price, "€", 2);
      return output;
    };

    $scope.lightMe = function (){
      $scope.stateOfBrightness = "light";
    }

  };

  function ChangeCurrencyFilter() {
    return function (input, symbol){
      input = input || "";
      input = input.replace("€", symbol);
      return input;
    }
  }

})();
