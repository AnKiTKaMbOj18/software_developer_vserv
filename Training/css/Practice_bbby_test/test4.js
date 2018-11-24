//javascript recursion

var obj = {
    a: 1,
    b: {
        c: 2,
        d: 'hello',
        f: {
            h: 20,
            m: {
                yu: "kiki",
                u: 78
            }
        }
    },
    e: 100
}

function demo() {

}

demo.prototype.print = function (obj) {
    //  console.log(obj);   
    var arr = [];
    var ob = {};

    function user(obj) {
        for (let x in obj) {
            if (typeof (obj[x]) === 'object' && !(obj[x] instanceof Array)) {
                user(obj[x]);
            } else {
                if (typeof (obj[x]) === 'number') {
                    ob[x] = obj[x];
                    arr.push(ob);
                    ob = {};
                }
            }
        }
    }
    user(obj);
    console.log(arr);
}

var d = new demo();

d.print(obj);