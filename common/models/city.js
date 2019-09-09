'use strict';

module.exports = function(City) {
    City.validatesUniquenessOf('nombre');
    City.status = function(id, cb) {
        //  var currentDate = new Date();
        //  var currentHour = currentDate.getHours();
        //  console.log(currentHour, id);
        //  var OPEN_HOUR = 6;
        //  var CLOSE_HOUR = 20;
        //  console.log('Current hour is %d', currentHour);
        //  var response;
        //  if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
        //      response = `${id}`;
        //  } else {
        //      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
        // }
        City.findOne({ where: { id: id } }, function(err, dog) {
            cb(null, dog);
        });

        // cb(null, response);
    };
    City.remoteMethod(
        'status', {
            http: {
                path: '/:id/status',
                verb: 'get'
            },
            returns: {
                arg: 'status',
                type: 'array'
            },
            accepts: {
                arg: 'id',
                type: 'string'
            }
        }
    );
    ///comienza otro metodo
};