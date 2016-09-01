//use async library

var util = require('./myUtil');
var os = require('os');
var addNode = require('ff-add-node-module');
var EventEmitter = require('events').EventEmitter;

// second();
console.log('start of add node test');
console.log("20 + 12 = " + addNode.curryAdd(20)(12));
console.log('end of add node test');

var getResource = function () {
    var e = new EventEmitter();
    process.nextTick(function () {
        var count = 0;
        e.emit('start');
        setTimeout(function () {
            e.emit('done');
        }, 20);
    });

    return e;
}

var r = getResource();

r.on('start', function () {
    console.log("process started");
});

r.on('done', function () {
    console.log("process done");
})




process.stdout.write('from stdout');