'use strict';

angular.module('meetingsDesktop', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'restmod'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
	url: '/',
	templateUrl: 'app/main/main.html',
	controller: 'MainCtrl',
	resolve: {
	  meetings: ['Meeting', function(Meeting) {
	    return Meeting.$search().$resolve().$asPromise();
	  }]
	}
      })
      .state('printerList', {
	url: '/printer_list',
	templateUrl: 'app/printer/printer_list.html',
	controller: 'PrinterListCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
