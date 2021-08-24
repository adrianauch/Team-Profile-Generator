// Constructor function for employee - this is teh parents class
class Employee {
  // every card will have a na,e, id and email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // Console log to double check constructor:
  //   employeeInfo() {
  //     console.log(`name ${this.name}`);
  //     console.log(`id ${this.id}`);
  //     console.log(`email ${this.email}`);
  //   }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// Testing function w/ console log.
// const employee1 = new Employee("Adrian", 25, "adrian@adrian.com");
// const employee2 = new Employee("Benny", 25, "Benny@adrian.com");

// employee1.employeeInfo();
// employee2.employeeInfo();

// To export
module.exports = Employee;
