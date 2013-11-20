"use strict";

var makePerson = function(persArr){
    var result = {
        minAge: 0,
        maxAge: 0,
        averageAge: 0,
        names: ""
    };
    
    var totalAge = 0;
    var person, tempA, tempB;
    
    persArr.sort(function(a,b) {return a.age - b.age;});
    result.minAge = persArr[0].age;
    result.maxAge = persArr[persArr.length - 1].age;
    
    for (person in persArr) {
        totalAge += persArr[person].age;
    }
    
    result.averageAge = Math.round(totalAge / persArr.length);
    
    console.log("Totalålder: " + totalAge + ". Medelålder: " + result.averageAge);
    
    /*
    
    persArr.sort(function(a,b) {
        tempA = a.name.toLowerCase();
        tempB = b.name.toLowerCase();
        if (tempA > tempB)
        {
            return b.name - a.name;
        }
        else
        {
            return a.name - b.name;
        }
    });
    
    for(var i = 0; i < persArr.length; i++)
    {
        persArr.names += persArr[i].name;
        if (i !== persArr.length - 1)
        {
            persArr.names += ", ";
        }
    }
    
    alert(persArr.names);
    /*
    for (person in persArr) {
        persArr.names += persArr[person].name + ", ";
        console.log(persArr.names);
    }*/
    
    
    return result;
}

