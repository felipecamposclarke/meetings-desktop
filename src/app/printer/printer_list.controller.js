'use strict';

// ----------------------
// PRINTER CONTROLLER
// ----------------------

angular.module('meetingsDesktop')
  .controller('PrinterListCtrl', function ($scope, $rootScope, GuiWin, Printer) {
    // ----------------------
    // SCOPE DEFINITION
    // ----------------------
    $scope.printers = Printer.getPrinterNames();
    $scope.printer = _.first($scope.printers);

    // print out and close windows
    $scope.setPrinter = function() {
      var printer = Printer.getPrinter($scope.printer);

      // if the printer is not connected, throws an exception
      if(printer.options['printer-state-reasons'] == 'offline-report') {
	  alert('Al parecer la impresora esta apagado o no esta conectada!');
	  return;
      }

      // TO-DO: changed by a simple local storage method
      // set current printer on global context
      global.currentPrinter = $scope.printer;
      // close current window
      GuiWin.close();
    };
  });
