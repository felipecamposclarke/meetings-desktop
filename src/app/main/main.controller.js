'use strict';

// ----------------------
// MAIN CONTROLLER
// ----------------------

angular.module('meetingsDesktop')
  .controller('MainCtrl', function ($scope, meetings, Gui) {

    // ----------------------
    // SCOPE DEFINITION
    // ----------------------
    $scope.meetings = meetings;

    $scope.awesomeThings = [
      {
	'title': 'AngularJS',
	'url': 'Felipe Campos',
	'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	'logo': 'angular.png'
      },
      {
	'title': 'BrowserSync',
	'url': 'Felipe Campos',
	'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	'logo': 'browsersync.png'
      },
      {
	'title': 'GulpJS',
	'url': 'Felipe Campos',
	'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	'logo': 'gulp.png'
      },
      {
	'title': 'Jasmine',
	'url': 'Felipe Campos',
	'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	'logo': 'jasmine.png'
      },
      {
	'title': 'Karma',
	'url': 'Felipe Campos',
	'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	'logo': 'karma.png'
      },
      {
	'title': 'Protractor',
	'url': 'Felipe Campos',
	'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	'logo': 'protractor.png'
      },
      {
	'title': 'Bootstrap',
	'url': 'Felipe Campos',
	'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	'logo': 'bootstrap.png'
      },
      {
	'title': 'Angular UI Bootstrap',
	'url': 'Felipe Campos',
	'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	'logo': 'ui-bootstrap.png'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });

    // responsible for choosing a print and start printing an meeting
    $scope.printOut = function() {

      // opens a window with the list of printers
      var x = Gui.Window.open('printer_list', {
	width: 320,
	height: 165,
	resizable: false,
	toolbar: false
      });

      // captures the 'loaded' event from the new window
      x.on('loaded', function() {
	console.log('Loaded');
      });

      // captures the 'closed' event from the new window
      x.on('close', function() {
	console.log('Close')
	this.close(true);
      });
    }
  });
