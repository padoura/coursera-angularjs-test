!function(){"use strict";function e(n,o,r){n.name="",n.upper=function(){var e=o("uppercase");n.upperName=e(n.name)},console.log(r.annotate(e))}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter","$injector"]}();

// (function () {
// 'use strict';
//
// angular.module('DIApp', [])
// .controller(
//   'DIController', DIController);
//
//   DIController.$inject = ['$scope', "$filter", "$injector"];
//
//   function DIController ($scope, $filter, $injector) {
//     $scope.name = "";
//
//     $scope.upper = function () {
//       var upCase = $filter('uppercase');
//       $scope.upperName = upCase($scope.name);
//     };
//
//     console.log($injector.annotate(DIController));
//
//   };
//
//
// })();
