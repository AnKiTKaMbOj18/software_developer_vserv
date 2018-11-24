//closure: A closure is the combination of a function and the lexical environment 
//within which that function was declared. 


//closure Basic program

function myFun() {
    var name = "ankit";
    function displayName() {
        console.log(name);
    }
    displayName();
}

myFun();

//closure same examaple  with different way
function func() {
    var name = "ankit kamboj";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

func()();

//closure exmaple more

function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

console.log(makeAdder(5)(2));
console.log(makeAdder(10)(2));