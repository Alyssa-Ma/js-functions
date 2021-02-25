/*
Joanne Fung
Object.keys()

Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object
and return all of the keys of the key:value pairs of that object.

Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object.
The ordering of the properties is the same as that given by looping over the properties of the object manually.

Object.keys() returns An array of strings that represent all the enumerable properties of the given object.
*/
Object.grabKeys = function(obj) {
    let keysArr = [];   // declare new array
    for(const keys in obj) {    // grab keys from object
        keysArr.push(keys); // push keys into array
    }
    return keysArr; //returns array
}


// TESTING
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.grabKeys(object1));
  // expected output: Array ["a", "b", "c"]