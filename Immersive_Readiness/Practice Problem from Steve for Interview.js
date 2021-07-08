//1. Write a function 'getBirthday' which takes in an object with year, day, and month properties, and returns a string with the month and day separated by a space.

var getBirthday = function(obj) {      //created function get b-day that takes in an obj
    return obj.month + " " + obj.day;  //expression that concatentates obj month and day
}

//Sample input:
var birthdayA = {
    year: 2010, 
    day: 19, 
    month: "September"
};
var birthdayB = {
    year: 1950, 
    day: 20, 
    month: "December"
};

getBirthday(birthdayA); //"September 19"  // call getBirthday function passing in argument B-day A object
// getBirthday(birthdayB); //"December 20"


/*2. Write a function which accepts an array of numbers and a target number. 
This function should return a new array of all numbers from the input array 
which are less than or equal to the input target number.*/


var getNumbersLessThan = function(numbersArr, targetNum) {
    var newArray = [];
    for (var i = 0; i < numbersArr.length; i ++) {
        if(numbersArr[i] <= targetNum) {
            newArray.push(numbersArr[i]);
        }
    }
    return newArray;
}
var inputArray = [10, 22, 24, 19, 4, 25];
//var inputTargetNumA = 25;
var inputTargetNumB = 10;

var output = getNumbersLessThan(inputArray, inputTargetNumB); //for A [10, 22, 24, 25]
//getNumbersLessThan(inputArray, inputTargetNumB); // for B[10, 4]
console.log(output);


/*3. You are asked by the head of Human Resources to compile a list of birthdays 
in a given month. Write a function which accepts an array with a structure similar 
to "birthdayCollection", as well as a month. Name this function "birthdaysInMonth"; 
it should return an array of strings with a Month and Day separated by a white space.

o:  a new array with Month and Day for all elements within the birthday Month provided
i:  an array of objects, need to go through each object's elements
*/
var birthdayCollection = [ 
    { year: 1982, day: 10, month: 'February' },
    { year: 1966, day: 22, month: 'March' },
    { year: 2008, day: 19, month: 'December' },
    { year: 1963, day: 3, month: 'March' },
    { year: 2000, day: 7, month: 'February' },
    { year: 1977, day: 18, month: 'February' } 
];

var birthdaysInMonth = function(birthdayObjs, birthdayMonth) {
    var newBirthdayArray = [];
    for (var i = 0; i < birthdayObjs.length; i ++) { 
        if (birthdayObjs[i].month === birthdayMonth) {
            newBirthdayArray.push(birthdayObjs[i].month + " " + birthdayCollection[i].day)
        }
    }
    return newBirthdayArray;
}
var output = birthdaysInMonth(birthdayCollection, "February"); //[ 'February 10', 'February 7', 'February 18' ]
console.log(output);

//4. write a function that takes in two integers and computes the sum between them
var computeSumBetween = (num1, num2) => {  //function that takes in two integrers
    if (num1 > num2) {                     //addressing exception where num1 is greater than two
        return 0;
    }
    let sum = 0;                           //est. var sum to store total while looping thru delta btw nums
    for (let i = num1; i < num2; i++) {
        sum += i;
    }
    return sum;
};

var output = computeSumBetween(2,5);        //calling function and passing in arguments (two integers)
console.log(output);
