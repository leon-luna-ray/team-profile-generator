// Import the employee class
const Employee = require('../lib/employee.js');

// Need to find out if this is what is needed for the tests.
describe('Employee', () => {
   describe('getName', () => {
       it('should return the employee name', () => {
           const name = Employee.name;

           const result = new Employee(name, id, email);

           expect(result.name).toEqual(name);
       });
   });
});