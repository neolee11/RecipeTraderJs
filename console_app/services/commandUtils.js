(function(commandUtils){

    'use strict';
    var split = require('split-string-words');
    var Command = require('../models/command');

    commandUtils.processCommand = processCommand;

    function processCommand(rawCommand) {

        var parts = split(rawCommand);
        //console.log(parts.length);
        var i ;
        for(i = 0; i < parts.length; i++){
            var trimed = parts[i].replace(/^'(.*)'$/, '$1');
            console.log(trimed);
        }

        var command = new Command('test', {key: 'something', value: 'else'});
        //console.log(command.toString());
        return command;
    }

})(exports);