//==========================================================
//------------------------Problem01-------------------------
//==========================================================

/*
Write a function that accepts an array of numbers and returns the average of the numbers in the array.
*/
function numsArr(arr) {
    var sum = arr.reduce (function(accum, curr) {
        return accum += curr;
    });
    return sum/arr.length;
}



//==========================================================
//------------------------Problem02-------------------------
//==========================================================

/*
Write a function, exclaim, that takes in an array of strings representing a sentence and 
modifies the array so that the last element in the array is a "!".
*/
// need to add '!' on to the array using slice or splice, a method
//that will enable us to return the entire new array.
// does it need to be returned as a combined string? or just mod array?


//==========================================================
//------------------------Problem03-------------------------
//==========================================================

/*
Write a function, totalSpent that accepts an object with key/value pairs where the keys 
are budget categories and the values are all numbers, and returns the total spent across
all budget categories.
*/
//i = var obj = {
//    budget item: amount
//    key:  value
//};
// set var sum = 0;
//for in statement to loop thru all key: values
//  with sum += to add value at obj[key]
// return sum


//==========================================================
//------------------------Problem04-------------------------
//==========================================================

/*
Write a function, getFirstName, that takes an object and returns the value associated 
with the key ‘firstName’.
*/

function getFirstName (obj) {
    return obj['firstName'];
}

//==========================================================
//------------------------Problem05-------------------------
//==========================================================

/*
Write a function, addNickname, that accepts an object and a string and adds the string 
as a property on the object, where the key is “nickname” and the value is the string that was passed in.
*/
function addNickName (obj, str) {
// add obj["nickname"] as new key with value as string
    obj["nickname"] = str;
    return obj;
}

//==========================================================
//------------------------Problem06-------------------------
//==========================================================

/*
/*Write a function, letterCount, that accepts a lowercase string and a 
lowercase letter, and returns the count of that letter in the string.
*/
function letterCount(str, char) {
    //set new var for count
    var charCount = 0;
    //loop through string
    for (var i = 0; i < str.length; i++) {
        var ltr = str[i];
        if (ltr === char) {
            charCount += 1;
        }
    }
    return charCount;
}

//console.log(letterCount("paper plates", "p")); //3
//console.log(letterCount("abracadabra", "d")); //1
console.log(letterCount("hello", "l"));//2

//==========================================================
//------------------------Problem07-------------------------
//==========================================================

/*
Write a function, minuteConversion, that accepts a whole number of 
minutes and returns a string with a human readable string of hours 
and minutes.

If the number of minutes is more than 60, the minutes should be converted
 to hours. For both hours and minutes, the correct plural/singular form 
 should be used, and if the value of hours or minutes is zero, the word 
 should be omitted entirely. See the test cases for more details.
*/
// inputs:  number (in minutes)
//output: string with hrs and minutes
    //  : strings should reflect correct sing vs plural state (minute(s) (hour(s)
    //  : "if the value of hours or minutes is zero, the word 
    //     should be omitted entirely." -- ?? does this mean returning an ''?
//assumption: will need to convert >60 minutes to hours

//console.log(minuteConversion(35));
//console.log(minuteConversion(120));
console.log(minuteConversion(121));

//==========================================================
//------------------------Problem08-------------------------
//==========================================================

/*
Write a function, sum, which accepts any amount of numbers as individual arguments 
and returns the result of adding all of the numbers together.
*/
//input:  an undefined number of individual numbers as arguments
//output: the sum of those numbers

// how do we explore, search, sort through all arguments passed in
// can we collect/store them in an array
// then sum all values in array
