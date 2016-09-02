// (function(Command){
//
//     'use strict';
//
//     command.
//
//     return Command;
//
// })(exports);

'use strict';

function Command(commandType, mainObjPair, optionalCommandPairs) {

    this.commandType = commandType;
    this.mainObjPair = mainObjPair ? mainObjPair : { key : '', value : ''};
    this.optionalCommandPairs = optionalCommandPairs;
}

Command.prototype.toString = function () {
    var optCommandStr = '';
    if(this.optionalCommandPairs && this.optionalCommandPairs.length > 0){
        for(var i = 0; i < this.optionalCommandPairs.length; i++){
            optCommandStr += this.optionalCommandPairs[i].key + " - " + this.optionalCommandPairs[i].value + '\n';
        }
    }

    return 'Command Type : ' + this.commandType + '\n'
        + 'MainObjPair :' + this.mainObjPair.key + ' - ' + this.mainObjPair.value + '\n'
        + 'Arguments' + '\n'
        + optCommandStr;
};



module.exports = Command;