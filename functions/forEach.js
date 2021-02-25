// Name: Steven Chan

//Function Description: forEach is meant to execute a provided function once for each element within an array
// calls a function once for each element in an array, in order
// the function does not execute for array elements without values

//Syntax
//array.forEach(function(currentValue, index, arr), thisValue);

//array1.forEach(element => console.log(element)); //element is the parameter and the arrow function leads to the function
//parameter is the function it is executing

//callback is invoked with three arguments: 
// the value of the element
// the index of the element
// the array object being traversed

Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) { // for loop through each element in the array
        callback(this[i], i, this);        // (value, index, array), the three argmuments we invoke callback with
    }
    return;                                //undefined
};

// Testing #1
const arr = [1,2,3,4,5];
const print = (x) => console.log(x); //console log whatever it is given
arr.myEach(print);
