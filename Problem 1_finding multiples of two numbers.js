/*Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

a: we are only dealing with whole numbers, the instructions say "up to"; 
therefore it is not inclusive of 1000. the instructions say multiples of 
3 OR 5.
i: we are taking in two numbers, 3 and 5 as arguments
o: sum of the multiples of both 3 and 5, which we will then need to sum together
e: none
we will multiply 3 and five by every number UP TO 1000 
and as we do we will need to add it to a running total or sum
*/
function multiples(num1, num2) {
    var num1Sum = 0;
    var num2Sum = 0;
    for (var i = 1; i < 1000; i ++) {
        num1Sum += num1 * i;
        num2Sum += num2 * i;
    }
    return (num1Sum + num2Sum).toLocaleString();
}
var output = multiples(3,5);
console.log(output);