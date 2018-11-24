//Promise: The Promise object represents the eventual completion (or failure) of an asynchronous operation, 
//and its resulting value.

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('foo');
    }, 300);
  });
  
  promise1.then(function(value) {
    console.log(value);
    // expected output: "foo"
  });
  
  console.log(promise1);
  // expected output: [object Promise]
  
  