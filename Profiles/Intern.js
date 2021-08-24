// Require in employee
const Employee = require("Profiles / Employee.js");

// Class for Intern- school will be added in additon to name, emaill, id
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = this.school;
  }
  //   Testing for intern
  //   internInfo() {
  //     console.log(`name ${this.name}`);
  //     console.log(`id ${this.id}`);
  //     console.log(`email ${this.email}`);
  //     console.log(`school ${this.school}`);
  //   }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
// Testing for Intern
// const intern1 = new Intern("Adrian", 1, "adrian@adrian.com", "CU");

// intern1.internInfo();

// export
module.exports = Intern;
