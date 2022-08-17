
var years = [1993, 1956, 1982, 1933]

function calculate(arr, func){

    var array = [];
    for(var i = 0; i <arr.length; i++){

        array.push(func(arr[i]));
    }
    return array;
}

function ageCalculate(arr){

    return 2017 - arr;
}

function isFullAges(arr){

    return arr >= 18;
}

var ages = calculate(years, ageCalculate);

console.log(ages);

var fullAges = calculate(ages, isFullAges);

console.log(fullAges);