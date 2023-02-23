// class and objects  oop cenept in JS

//  🌟class contains propert and Methods

// 🌟 define peropty in constructor function

class Customer {
  Constructor(n) {
    this.name = n;
  }

  // define method in constructor function

  buy() {
    console.log(this.name);
  }
}

class GuestCustomer extends Customer {
  hello() {
    console.log("hello");
  }
}

// object

let Customer1 = new Customer("Ali");

console.log(Customer1);
Customer1.buy();
