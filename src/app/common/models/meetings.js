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
  .factory('Meeting', function(restmod, ENV) {
    return restmod.model(ENV.API_BASE_URL + '/meetings', {
        $hooks: {
            'after-feed': function() {
                this.date = new Date(this.date);
            }
        }
    });
  });
