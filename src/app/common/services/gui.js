'use strict';

// ------------------------
// GUI AND GUIWIN SERVICES
// ------------------------

angular.module('meetingsDesktop')
  // return a wrapper of DOM's window
  .factory('Gui', function() {
    return "require('nw.gui')";
  })
  // return a current window
  .factory('GuiWin', ['Gui', function(Gui) {
    return Gui.Window.get();
  }]);
