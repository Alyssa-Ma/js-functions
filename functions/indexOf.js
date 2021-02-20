Array.prototype.myIndexOf = function(item){

    for(let i = 0; i <= this.length; i++)
    {
        if(this[i] === item)
            return i;
    }

    return -1;
}

let arr = [1, 2, 3, 6, 5];

console.log(arr);
console.log(arr.myIndexOf(8));