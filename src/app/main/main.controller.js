'use strict';

// ----------------------
// MAIN CONTROLLER
// ----------------------

angular.module('meetingsDesktop')
  .controller('MainCtrl', function ($scope, $rootScope, meetings, Gui, Printer) {
    // ----------------------
    // SCOPE DEFINITION
    // ----------------------
    $scope.meetings = meetings;

    // responsible for choosing a print and start printing an meeting
    $scope.printOut = function(meeting) {

      // if there are no printers installed, throws an exception
      if(!Printer.getPrinterQty()) {
	alert('Al parecer no tienes impresoras configuradas en tu S.O.');
	return;
      }

      // opens a window with the list of printers
      var printersWindow = Gui.Window.open('printer_list', {
	width: 320,
	height: 165,
	resizable: false,
	toolbar: false
      });

      // captures the 'closed' event from the new window
      printersWindow.on('close', function() {
	// prints a meeting
	var promise = Printer.print(global.currentPrinter, meeting);
	// if any error occurred, throws an exception
	promise.catch(function(err){ alert(err); });
	this.close(true);
      });
    }
  });
