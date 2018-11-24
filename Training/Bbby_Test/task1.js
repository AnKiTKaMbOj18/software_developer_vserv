
function User(x) {

    var arr = [];
    var ob = {};

    function Recursion_User(obj) {
        for (let x in obj) {
            if (typeof obj[x] === 'object') {
                Recursion_User(obj[x]);
            } else {
                if (typeof obj[x] === 'number' || typeof obj[x] === 'string') {
                    ob[obj[x]] = x;
                    arr.push(ob);
                    // ob = {};
                }
            }
        }
    }
    Recursion_User(x);
    // console.log(arr);
    console.log(ob);


}

var obj = { a: "abc", b: "def", c: "ghi", d: "jkl", e: "mno", f: { g: "pqr", h: 23 } };

var d = User(obj);