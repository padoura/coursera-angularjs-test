(function () {
'use strict';

angular.module('msgApp', [])
.controller('MsgCtrl', MsgCtrl)
  .filter('dollarSymbol', DollarSymbolFilter);

  MsgController.$inject = ['$scope', '$filter', 'dollarSymbolFilter'];

  function MsgCtrl ($scope, $filter, dollarSymbolFilter) {
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

  function DollarSymbolFilter() {
    return function (input){
      input = input || "";
      input = input.replace("€", "$");
      return input;
    }
  }

})();
