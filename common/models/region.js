'use strict';

module.exports = function(Region) {
    
    Region.validatesUniquenessOf('name');
};
