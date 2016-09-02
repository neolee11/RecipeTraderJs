var cp = require('child_process');

var cluster = require('cluster');

var market = require('market');

var User = require('./myUtil');

// console.log(market.getMoney('dollar'));

var john = new User('john');

var tom = new User('tom');

var dan = new User({
    name: 'dan',
    email: 'dan@yahoo.com'
});

console.log(john.name);
console.log(tom.name);
console.log(dan.name);
console.log(dan.email);


console.log('after mod names');

john.name = 'smith';

console.log(john.name);
console.log(tom.name);