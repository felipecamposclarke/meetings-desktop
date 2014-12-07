'use strict';

// ------------------------
// GUI AND GUIWIN SERVICES
// ------------------------

angular.module('meetingsDesktop')
// service to interact with the printer
.factory('Printer', function($q){

  // ------------------------
  // PRIVATE CONTEXT
  // ------------------------
  var PRINTER_TYPE = "TEXT";
  var printer = require('printer');

  // becomes valid format text for printing
  function formattingData(data) {
    return _.reduce(data, function(memo, value, key) {
      return memo += key.indexOf('$') ? '\n' + key + ' = ' + value : '';
    }, "");
  }

  // ------------------------
  // PUBLIC CONTEXT
  // ------------------------
  return {
    // returns an array with the names of installed printers
    getPrinterNames: function() {
      var printers = printer.getPrinters();
      return _.map(printers, function(p){ return p.name });
    },
    // return the number of installed printers
    getPrinterQty: function() {
      return _.size(printer.getPrinters());
    },
    // returns all  information from a particular printer
    getPrinter: function(printerName) {
      return printer.getPrinter(printerName);
    },
    // sent to print a set of sentences
    print: function(printerName, paragraphs) {

      // promise
      var deferred = $q.defer();

      // generates a readable text to the printer
      var printableText = formattingData(paragraphs);

      // send the Instruction to print
      printer.printDirect({
	data: printableText,
	printer: printerName,
	type: PRINTER_TYPE,
	success:function() { deferred.resolve(); },
	error:function(err) { deferred.reject(err); }
      });

      return deferred.promise;
    }
  };
});
