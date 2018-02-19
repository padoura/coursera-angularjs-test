(function () {
'use strict';

angular.module('counterApp', [])
.controller('CounterCtrl', CounterCtrl);

  CounterCtrl.$inject = ['$scope', '$timeout'];

  function CounterCtrl ($scope, $timeout) {
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.test = "test";

    $scope.showNumberOfWatchers = function () {
      console.log("# of Watchers: ", $scope.$$watchersCount);
    }

    $scope.countOnce = function () {
      $scope.onceCounter = 1;
    }

    $scope.incrementalCount = function () {
      $scope.counter++;
    }

    $scope.incrementalDigestCount = function () {
      setTimeout(function (){
        $scope.counter++;
        $scope.$digest();
      }, 2000);
    }

    $scope.incrementalApplyCount = function () {
      setTimeout( function () {
        $scope.$apply(function (){
          $scope.counter++;
        });
      }, 2000);
    }

    $scope.incrementalAngularCount = function () {
      $timeout(function (){
        $scope.counter++;
      }, 2000);
    }

    $scope.$watch(function (newValue, oldValue){
      console.log("Digest Loop Fired!");
    });

    // // Manual watchers
    // $scope.$watch('onceCounter', function (newValue, oldValue){
    //   console.log("old value: ", oldValue);
    //   console.log("new value: ", newValue);
    // });
    //
    // $scope.$watch('counter', function (newValue, oldValue){
    //   console.log("old value: ", oldValue);
    //   console.log("new value: ", newValue);
    // });

  };

})();
