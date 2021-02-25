/**
 * Alyssa Ma
 * Instructions: Without using the native “Array.prototype.every” 
 * method of JavaScript, compose a function titled “myEvery” that will 
 * take in an array of elements and execute a callback function on each 
 * of those elements.
 */

 //This function returns if every element in the array satisfies the testing function
Array.prototype.myEvery = function(callback)
{
    //if there is nothing in the array
    if(this == null)
    {
        throw new TypeError('null');
    }
    //loop through array
    for(let i = 0; i < this.length; i++)
    {
        //if this element doesn't satisfy the given function, return false
        if(callback(this[i]) == false)
        {
            return false;
        }
        //else keep looping through the array until complete
    }
    //every element satisfies the function, therefore this is true
    return true;
}

//testing from MDN
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];
//expected true
console.log(array1.myEvery(isBelowThreshold));

//testing from MDN #2
const isBelowThreshold1 = (currentValue) => currentValue < 40;

const array2 = [1, 30, 39, 29, 40, 13];
//expected false
console.log(array2.myEvery(isBelowThreshold1));
