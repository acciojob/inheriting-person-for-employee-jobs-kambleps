// complete this js code
// Define the Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add the greet method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Define the Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // call the Person constructor with `this` as the context
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add the jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;