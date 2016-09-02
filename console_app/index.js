var readline = require('readline');
var commandUtils = require('./services/commandUtils');

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('> ');
rl.prompt();
rl.on('line', function(line) {

    // console.log(commandUtils);
    commandUtils.processCommand(line);


    console.log();

    rl.prompt();
}).on('close',function(){
    process.exit(0); //or rl.close();
});

//node native way of reading user console inputs
// process.stdin.resume();
// process.stdin.setEncoding('utf8');
//
// process.stdin.on('data', function (chunk) {
//     process.stdout.write('Data! -> ' + chunk);
// });
//
// process.stdin.on('end', function () {
//     process.stderr.write('End\n');
// });