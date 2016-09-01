/**
 * Created by Weili on 9/1/2016.
 */

(function(market){
    'use strict';

    var _ = require('lodash');


    market.getMoney = function (name) {
        return name + " has $100";
    };

    return market;

})(module.exports);


