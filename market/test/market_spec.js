'use strict';

var expect = require('chai').expect;

var market = require('../index');

describe("market tests", function () {
   describe("functionality tests", function () {
       it("it should return $300", function () {
          var result = market.getMoney("dollar");
          expect(result).include('400');
       });
   })
});