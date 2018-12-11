//The copyWithin() method shallow copies part of an array
// to another location in the same array and returns it, without modifying its size.

var arr=[1,23,44,55,66,44,323];

var dup=arr.copyWithin();

console.log("duplicate of arr is created inside dup variable ",dup);

var array1 = [1, 2, 3, 4, 5];

// place at position 0 the element between position 3 and 4
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array [4, 2, 3, 4, 5]

// place at position 1 the elements after position 3
console.log(array1.copyWithin(1, 3));
// expected output: Array [4, 4, 5, 4, 5]
