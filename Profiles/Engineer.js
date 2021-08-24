// Import from the employee.js to pull name, id and email
const Employee = require("Profiles / Employee.js");

// class for Engineer- added github user name.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  //   Testing for enginer
  //   engineerinfo() {
  //     console.log(`name ${this.name}`);
  //     console.log(`id ${this.id}`);
  //     console.log(`email ${this.email}`);
  //     console.log(`github ${this.github}`);
  //   }
  //  return github input
  getGit() {
    return this.github;
  }
  //   Role to specify engineer
  getRole() {
    return "Engineer";
  }
}
// Testing for engineer
// const engineer1 = new Engineer("Adrian", 1, "adrian@adrian.com", "adrianauch");

// engineer1.engineerinfo();

// export
module.exports = Engineer;
