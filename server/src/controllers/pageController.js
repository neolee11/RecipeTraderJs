//revealing module pattern

var pageController = function(){

    var myFun = function () {

    };

    return {
        myFun : myFun
    };
}

module.exports = pageController(); //or just pageController and let the consumer calls it and pass in any params necessary