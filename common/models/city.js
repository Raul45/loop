'use strict';

module.exports = function(City) {
    City.validatesUniquenessOf('nombre');
};
