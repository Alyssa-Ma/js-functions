/**
 * Alyssa Ma
 * Without using the native “Array.prototype.reduce” 
 * method of JavaScript, compose a function titled “myReduce” that will 
 * take in an array of elements and execute a callback function on each 
 * of those elements.
 */

//This function applies a function against an accumulator and each value of the array to reduce it to a single value
Array.prototype.myReduce = function(accumulator)
{
    //store first indice
    let result = this[0];
    //if there is nothing in the array
    if(this == null)
    {
        throw new TypeError('null');
    }
    //loop through array beginning at 1 because of the stored value
    for(let i = 1; i < this.length; i++)
    {
        //apply the function onto the ith element of the array and have the result be accumulated throughout
        result = accumulator(result, this[i]);
    }
    return result;
}

//testing from MDN
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.myReduce(reducer));
// expected output: 10

//testing from w3schools
var numbers = [175, 50, 25];

console.log(numbers.myReduce(myFunc));
//expected output: 100
function myFunc(total, num) {
  return total - num;
}