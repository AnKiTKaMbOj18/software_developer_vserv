//rest parameter
var company=function(product,...items){
    console.log(product,items);
}
company(1,"Tea","coffee","water","milk");

var shop=[1,2,3,4];
 var arr=Math.max(...shop);
 var arr2=[...shop];
 console.log(arr);
 console.log(arr2);