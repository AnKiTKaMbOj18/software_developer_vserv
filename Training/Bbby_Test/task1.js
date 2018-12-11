
// function User(x) {

//     var arr = [];
//     var ob = {};

//     function Recursion_User(obj) {
//         for (let x in obj) {
//             if (typeof obj[x] === 'object') {
//                 Recursion_User(obj[x]);
//             } else {
//                 if (typeof obj[x] === 'number' || typeof obj[x] === 'string') {
//                     ob[obj[x]] = x;
//                     arr.push(ob);
//                     // ob = {};
//                 }
//             }
//         }
//     }
//     Recursion_User(x);
//     // console.log(arr);
//     console.log(ob);


// }

// var obj = { a: "abc", b: "def", c: "ghi", d: "jkl", e: "mno", f: { g: "pqr", h: 23 } };

// var d = User(obj);

// Task 4:
// Create the following class hierarchy:
// Person > Employee > Manager
// Please add properties and methods of your choice.

function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

function Employee(name, age, address, mobile) {
    Person.call(this, name, age, address);
    this.mobile = mobile;
}

function Manager(name, age, address, mobile, salary) {
    Employee.call(this, name, age, address, mobile);
    this.salary = salary;
}

Person.prototype.print = function () {
    console.log(this.name);
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

var man = new Manager("ankit", 24, "abc", 987777777, 20);
man.print();
console.log(man);