(function () {
'use strict';

angular.module('LunchCheck', [])
.controller(
  'LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.dishes = "";
    $scope.messageColor = "";
    $scope.borderColor = "";

    $scope.checkLunchAmount = function () {
      var numItems = getNonEmptyItemList().length;
      if (numItems == 0){
        setErrorColorAndMessage();
      }else if (numItems > 3){
        $scope.message = "Too much!";
        setSuccessColor();
      } else {
        $scope.message = "Enjoy!";
        setSuccessColor();
      }
    }

    function getNonEmptyItemList() {
      var regexp = /,[,\s]*(?![,\s])/g; // discards empty strings between comma separators
      var itemList = $scope.dishes.split(regexp, 4); // stop searching after 4 occurences since we only care about 3 or less
      return discardFirstAndLastItemIfEmpty(itemList);
    }

    function discardFirstAndLastItemIfEmpty(array){
      if (array[0] == ""){ // discards the first item if empty
        array.splice(0, 1);
      }
      if (array[array.length-1] == ""){ // discards the last item if empty
        array.splice(array.length-1, 1);
      }
      return array;
    }


    function setSuccessColor () {
      $scope.messageColor = "text-success";
      $scope.borderColor = "has-success";
    }

    function setErrorColorAndMessage () {
      $scope.messageColor = "text-danger";
      $scope.borderColor = "has-error";
      $scope.message = "Please enter data first";
    }

  };
})();
