/*
Write a function, transformAndRepeat that takes a string, a transformer function, 
and a number, and returns the result of invoking the transformer function with the string, repeated number times.
See the tests for additional examples.
My personal notes:
i = string, a helper function, and number, n.
o = a string, repeated n times
a = 
e = the string may be all caps or mix of upper/lower case, it may contain more than one word.
the first "letter" may not be a letter at all, but a #. does that matter?
the helper function (or functions) must be capable of performing different operations
    1. converting all chars to lowercase
    2. only repeating 1st char
    3. need to append/concatenate char to end of a string
*/
function intersection (array1, array2) {




console.log(transformAndRepeat('HELLO', lowerCase, 3)); // --> 'hellohellohello'
console.log(transformAndRepeat('doggo', firstLetter, 6)); // --> 'dddddd'
console.log(transformAndRepeat('hi', exclaim, 4)); // --> 'hi! hi! hi! hi! 