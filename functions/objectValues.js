/*
Joanne Fung
Object.values()

Without using the native “Object.values()” method of JavaScript, 
compose a function titled “grabValues” that will take in an object 
and return all of the values of the key:value pairs of that object.

Object.values() returns an array whose elements are the enumerable 
property values found on the object. The ordering of the properties 
is the same as that given by looping over the property values of the 
object manually.

Object.values() returns An array containing the given object's own 
enumerable property values.
*/

Object.grabValues = function(obj) {
    let valuesArr = []; // declare array
    for(const keys in obj) {    // grab keys from object
        valuesArr.push(obj[keys]);  // grabs value using keys in objects and push into array
    }
    return valuesArr;   // returns array
}


// TESTING
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.grabValues(object1));
  // expected output: Array ["somestring", 42, false]