(function() {
  'use strict';

    angular.module('app.components')
      .directive('signup', signup);

    function signup() {
      return {
        scope: true,
        restrict: 'A',
        controller: 'SignupController',
        controllerAs: 'vm',
        templateUrl: 'app/components/signup/signup.html'
      };
    }
})();
