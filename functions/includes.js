/**
 * Alyssa Ma
 * Without using the native “Array.prototype.includes” 
 * method of JavaScript, compose a function titled “myIncludes” 
 * that will take in an array of elements and indicate whether or not a target element 
 * is contained within the input array. This returns a boolean.
 */

//This function determines whether an array contains a value 
Array.prototype.myIncludes = function(element)
{
    //if there is nothing in the array
    if(this == null)
    {
        throw new TypeError('null');
    }
    //loop through array
    for(let i = 0; i < this.length; i++)
    {
        //if the array contains the element, return true
        if(this[i] == element)
        {
            return true;
        }
        //else keep looping through the array until complete
    }
    //element was not found in the array, return false
    return false;
}

//testing from MDN
const array1 = [1, 2, 3];

console.log(array1.myIncludes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.myIncludes('cat'));
// expected output: true

console.log(pets.myIncludes('at'));
// expected output: false