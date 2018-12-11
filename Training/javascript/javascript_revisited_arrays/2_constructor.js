//array.prototype 
//Array.prototype is itself an Array

var x=Array.isArray(Array.prototype);
console.log(x);

//array.prototype.constructor
var arr=[12,2,2,3,3,3,4];

function Test(y){
    this.y=y;
}

var t=new Test(arr);
console.log(t.y);
console.log(t.constructor);