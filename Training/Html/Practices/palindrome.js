var rev= "";
var word = (str) => {
        var strn=str.toLowerCase().trim();
        var text= strn.split("").reverse().join("");
        console.log(text);
        if(text===strn){
            console.log("palindrome");
        }else{
            console.log("not palindrome");
        }
};
console.log(word("Mom"));