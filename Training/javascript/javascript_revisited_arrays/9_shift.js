//The shift() method removes the first element from an array and returns that removed element. 
//This method changes the length of the array.

var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1


//The shift method removes the element at the zeroeth index and 
//shifts the values at consecutive indexes down, then returns the removed value. 
//If the length property is 0, undefined is returned.

//shift is intentionally generic; this method can be called or applied to objects 
//resembling arrays. Objects which do not contain a length property reflecting the 
//last in a series of consecutive, zero-based numerical properties 
//may not behave in any meaningful manner.


//The shift() method is often used in condition inside while loop.
//In the following example every iteration will remove the next
//element from an array, until it is empty:

var names = ["Andrew", "Edward", "Paul", "Chris", "John"];
var count = 0;
while ((i = names.shift()) !== undefined) {
    console.log(i);
    count++;
}
console.log(count);
// Andrew, Edward, Paul, Chris, John