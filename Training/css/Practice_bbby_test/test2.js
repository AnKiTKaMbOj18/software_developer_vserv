//callback function: A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.

//basic example of callback

function greeting(name) {
    console.log("hello ", name);
}

function welcome(callback) {
    var name = "ram kumar singh";
    callback(name);
}

welcome(greeting);

//one more example of callback

function hello() {
    console.log("hello im here to stay for some time");
}

const test = ((callback) => callback());

test(hello);