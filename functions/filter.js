Array.prototype.myFilter = function(callback){
    let arr = [];   //create new arr and set it to original's length
    arr.length = this.length;

    let index = 0
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this) === true){    //if the callback is true then we add it to arr
            arr[index] = this[i];
            index++;
        }
    }
    arr.length = index; //adjust length
    return arr;
}

//test
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.myFilter(word => word.length > 6);

console.log(result);