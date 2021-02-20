Array.prototype.myPush = function(item){
    let len = this.length;  //gets curr len
    this.length = len++;    //increases the len of the array
    this[len-1] = item;       //placed item at curr len

    return len;
}

let arr = [1, 2, 3, 4];
console.log(arr);
arr.myIndexOf(5);
console.log(arr);