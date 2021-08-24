// Require in employee
const Employee = require("Profiles / Employee.js");

// Class for Manager- office number will be added in additon to name, emaill, id
class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  //   Testing for intern
  //   managerInfo() {
  //     console.log(`name ${this.name}`);
  //     console.log(`id ${this.id}`);
  //     console.log(`email ${this.email}`);
  //     console.log(`Office Number ${this.officeNum}`);
  //   }
  getOfficeNum() {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}
// Testing for Intern
// const manager1 = new Manager("Adrian", 1, "adrian@adrian.com", 10);

// manager1.managerInfo();

// export
module.export = Manager;
