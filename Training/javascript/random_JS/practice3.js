// const dayss = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// for (let day of dayss) {
//     day = day.charAt(0).toUpperCase() + day.substr(1);
//     console.log(day);
// }


const arr = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// var longest = arr.reduce(function (a, b) {
//      return a.length > b.length ? a : b; });
// console.log(longest.toUpperCase());

var srt=arr.sort((a,b)=>{
    return a.length-b.length;
});
// var result=srt[0].toUpperCase();
// console.log(result);

// console.log(srt);

// var res=arr.map((x)=>{
//     return x[0].toUpperCase() + x.substring(1);
// });
// console.log(res);

var longest=arr[0],smallest=arr[0];
var lgth=0;

for(var i=0;i<arr.length;i++){
    if(arr[i].length<lgth){
        var lgth=arr[i].length;
        longest=arr[i];
    }
}
console.log(longest);

