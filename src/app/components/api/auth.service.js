(function() {
  'use strict';

  angular.module('app.components')
    .factory('auth', auth);
    
    auth.$inject = ['$window'];
    function auth($window) {

    	var user = null;
    	initialize();

    	var service = {
        isAuth: isAuth,
        setCurrentUser: setCurrentUser,
        getCurrentUser: getCurrentUser
    	};
    	return service;
      
      //////////////////////////

      function initialize() {
        setCurrentUser();
      }

      function setCurrentUser() {
        user = $window.localStorage.getItem('smartcitizen.token');
      }

      function getCurrentUser() {
        return user;
      }

      function isAuth() {
        return !!user;
      }
    }
})();