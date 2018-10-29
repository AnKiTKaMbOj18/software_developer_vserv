function asyn(message){
    return new Promise(function(resolve,rejcet){
        setTimeout(function(){
            console.log(message);
            resolve();
        },5000);
    });
}
function findUser(){
   return asyn('Find user here');
}
function validate(){
    return asyn('validate user here');
}
function doStuff(){
    return asyn('doStuff here');
}
asyn('Open Db Connection')
.then(findUser)
.then(validate)
.then(doStuff)
.then(function(){})
