//Question:
//Write a JavaScript function to remove, 'null', '0', '""', 'false', 'undefined' 
//and 'NaN' values from a given array.
//example: 
//Input > console.log(JSFunction([null, 45,0,23,42,NaN,"", undefined, 'test']))
//Output > [45,23,42,'test']

// Write Javascript function here.

//one way of doing
var arr = [null, 45, 0, 23, 42, NaN, "", undefined, 'test'];

var arr2 = [];

function JsFunction(ar) {
    var result = ar.filter((x) => {
        return (x !== null && x !== undefined && !isNaN(x) && x !== "" && x !== 0);
    });
    console.log(result);
}

JsFunction(arr);


//2nd way of doing


function User(ar1) {
    var y = [];
    for (var x = 0; x < ar1.length; x++) {
        if (ar1[x] !== null && ar1[x] !== undefined && !isNaN(ar1[x]) && ar1[x] !== "" && ar1[x] !== 0) {
            y.push(ar1[x]);
        }
    }
    console.log(y);
}

User(arr);

//3rd way

function Test(arr2) {

    var resl=arr2.filter((x)=>{
        return Boolean(x);
    });

    console.log("array 2", resl);

}

Test(arr);