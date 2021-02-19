Array.prototype.myIndexOf = function(item){
    let len = this.length;  //gets curr len
    this[len] = item;       //placed item at curr len
    this.length = len++;    //increases the len of the array

    return len;
}