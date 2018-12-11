//Array.prototype.sort();

// The sort() method sorts the elements of an array in place and returns the array.
// The default sort order is built upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.
//The time and space complexity of the sort cannot be guaranteed as it is implementation dependent.


var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21];
array1.sort();
console.log(array1);
// expected output: Array [1, 21, 30, 4]

//To compare numbers instead of strings, the compare function can
// simply subtract b from a. The following function will sort the array
//ascending (if it doesn't contain Infinity and NaN):

function compareNumbers(a, b) {
    return a - b;
}

//The sort method can be conveniently used with function expressions:

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
    console.log(`numbers ${a} and ${b} are:`);
    return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

//Objects can be sorted given the value of one of their properties.

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
    return a.value - b.value;
});
