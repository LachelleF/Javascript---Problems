/*
Write a function, transformAndRepeat that takes a string, a transformer function, 
and a number, and returns the result of invoking the transformer function with the
 string, repeated number times.

My personal notes:
i = string, a helper function, and number, n.
o = a string, repeated n times
a = the helper function (or functions) need to support performing different operations on given string
e = the string may be all caps or mix of upper/lower case, it may contain more than one word.
    the first "letter" may not be a letter at all, but a #. does that matter?

tranformation requirements:
    1. convert all chars to lowercase
    2. only repeating 1st char
    3. append/concatenate char to end of passed-in string, then repeat
*/
function transformAndRepeat (str, transformReq, num) {

/*two actions for potential helper function(s)
    1.  3 transform types
        observation 1:  because each scenario applies repitition in different ways (e.g. to first char, to end of string, to all chars of string),
                        plan to first apply transformation requirement to string, then apply repetition.
        observation 2:  should consider writing code such that additional transform types can easily be added later?
        efficiency:     b/c each transform type is unique, what approach performs more optimally? 
                        approach1:  use if ... else. as in, if (str action === lowercase), //do something 
                        approach2:  do seperate helper functions for each transform req/scenario
                        approach-n: ... or some other better approach?
    2. repeat num times  
        a. Initially wondered whether .push or other method allows me to repeat the same action to a given data type/string num times.
        b. After researching found array.fill(value,start,end) that I thought I'd try

}
*/
console.log(transformAndRepeat('HELLO', lowerCase, 3)); // --> 'hellohellohello'
console.log(transformAndRepeat('doggo', firstLetter, 6)); // --> 'dddddd'
console.log(transformAndRepeat('hi', exclaim, 4)); // --> 'hi! hi! hi! hi! 