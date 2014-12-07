'use strict';

/**
* @name: Meeting
* @description: contains a set of meetings
* @attributes:
*
* | Name              | Type           |
* |-------------------|----------------|
* | @id               | int            |
* | @title            | string         |
* | @description      | string         |
* | @autor            | string         |
* | @date             | string         |
*
*/

angular.module('meetingsDesktop')
  .factory('Meeting', function(restmod) {
    return restmod.model('http://localhost:3000/api/meetings');
  });
