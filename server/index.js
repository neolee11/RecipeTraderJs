//use async library

var util = require('./myUtil');
var market = require('./core/domain/market/market');

console.log(market.minus(4, 1));
console.log(util.add(3, 4));

console.log('hello1');



var a = bar();



var fun = function () {
    console.log('fun');
}

function bar() {
    console.log('bar');
}

function add(input){
    return function (intpu2) {
        return input + intpu2 + 100;
    }
}


console.log(add(3)(2));

var tim = new Object();
tim.name = 'tim';
console.log(tim);
console.log(tim.name);

var john = new Object();
console.log(john);


var addClosure = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();


console.log(addClosure());
console.log(addClosure());
console.log(addClosure());
console.log(addClosure());
console.log(addClosure());
