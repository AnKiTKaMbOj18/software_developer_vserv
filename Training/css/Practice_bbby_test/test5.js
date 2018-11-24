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
    console.log("age: ", this.age, " add: ", this.address, " m.no: ", this.mobile, " salary: ", this.salary);

}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

var demo = new Manager("ankit", 23, "jammu", 1234567890, 12000);

demo.print();