//The Array.from() 
//method creates a new, shallow-copied Array instance from an array-like or iterable object.

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


//array.of
//Array.of(7)
console.log(Array.of(7));
console.log(Array.of(1,2,3));
//Array(7)
console.log(Array(7));

//diff between Array(7) and Array.of(7) is  :
//Array(7) creates empty array of length 7 i.e [ , , , , , , ];
//Array.of(7) creates array of single element 7 i.e[7]