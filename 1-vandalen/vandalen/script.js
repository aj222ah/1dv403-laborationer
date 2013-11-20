"use strict";

var makePerson = function(persArr){
    var result = {
        minAge: 0,
        maxAge: 0,
        averageAge: 0,
        names: ""
    };
    
    var totalAge = 0;
    var person;
    
    persArr.sort(function(a,b) {return a.age - b.age;});
    result.minAge = persArr[0].age;
    result.maxAge = persArr[persArr.length - 1].age;
    
    for (person in persArr) {
        totalAge += persArr[person].age;
    }
    
    result.averageAge = Math.round(totalAge / persArr.length);
    
    persArr.sort(function(a, b) {
        // Fungerande sortering (å,ä,ö) hittad på: http://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
        return a.name.localeCompare(b.name);
    });
    
    for(var i = 0; i < persArr.length; i++)
    {
        if (i !== 0)
        {
            result.names = result.names + ", " + persArr[i].name;
        }
        else
        {
            result.names = persArr[i].name;
        }
    }
    
    return result;
};

