(function(domainObjectType){

    'use strict';

    domainObjectType = {
        Unknown : 'Unknown',
        User : 'User',
        PrivateRecipe : 'PrivateRecipe', //private recipe
        PublicRecipe : 'PublicRecipe',
        RecipeItem : 'RecipeItem',
        UserAccountBalance : 'UserAccountBalance',
        SystemStatus : 'SystemStatus'
    };

    return domainObjectType;

})(exports);