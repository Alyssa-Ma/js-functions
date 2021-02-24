/**
 * Alyssa Ma
 * Instructions: Without using the native “Array.prototype.every” 
 * method of JavaScript, compose a function titled “myEvery” that will 
 * take in an array of elements and execute a callback function on each 
 * of those elements.
 */

Array.prototype.myEvery = function(callback, elements)
{
    //if there is nothing in the array
    if(this == null)
    {
        throw new TypeError('null');
    }
    //loop through array
    for(let i = 0; i <= this.length; i++)
    {
        //if this element doesn't match the given callback, return false
        if(this[i] != callback)
        {
            return false;
        }
        //else keep looping through the array until complete
    }
    //every element matches the callback, therefore this is true
    return true;
}

//testing from MDN
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];
//expected true
console.log(array1.every(isBelowThreshold));
