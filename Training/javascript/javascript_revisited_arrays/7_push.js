//The push() method adds one or more elements to the end of an array 
//and returns the new length of the array.

var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

//adding elements to an array

var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4


//Using an object in an array-like fashionSection
//As mentioned above, push is intentionally generic, and we can use that to our advantage. 
//Array.prototype.push can work on an object just fine, as this example shows. 
//Note that we don't create an array to store a collection of objects.
// Instead, we store the collection on the object itself and use call on 
//Array.prototype.push to trick the method into thinking we are dealing with an array, and it just works, 
//thanks to the way JavaScript allows us to establish the execution context however we please.

var obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2