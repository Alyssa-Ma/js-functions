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
    //if there is nothing in the array
    if(this == null)
    {
        throw new TypeError('null');
    }
}