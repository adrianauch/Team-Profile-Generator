// All code for testing goes here:

// Initail Test to make sure an object is created.
test("creates a new employee object"),
  () => {
    const employee1 = new Employee("Benny,", 1, "b@gmail.com");

    expect(employee.name).toBe("Benny");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("b@gmail.com");
  };
