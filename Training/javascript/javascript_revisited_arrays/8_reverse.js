//The reverse() method reverses an array in place. The first array element becomes the last, 
//and the last array element becomes the first.

//Array.reverse()

var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse();
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */
console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']


//The reverse method transposes the elements of the calling array object
// in place, mutating the array, and returning a reference to the array.