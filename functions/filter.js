Array.prototype.myFilter = function(callback){
    let arr = [];
    arr.length = this.length;

    let index = 0
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this) === true){
            arr[index] = this[i];
            index++;
        }
    }
    arr.length = index;
    return arr;
}


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.myFilter(word => word.length > 6);

console.log(result);