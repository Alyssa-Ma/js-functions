// Name: Steven Chan

//Function Description: lastIndexOf compares searchElement to elements
// of the Array using strict equality (the same method used by the ===,
// or triple-equals, operator).

//callback function accepts the following arguments

Array.prototype.myLastIndexOf = function(valueLookingFor) {

    for(let i = 0; i < this.length; i++) { //loop through start to end
        if(valueLookingFor == this[i]) {   //if value being looked for is found
            var index = i;                 //we will update index var to the current index
        }
    }
    return index;
};

// Testing #1
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.myLastIndexOf('Dodo'));

console.log(animals.myLastIndexOf("Tiger"));