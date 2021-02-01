// Import the employee class
const Employee = require('../lib/employee.js');

// Test employee class
describe('Employee', () => {
    // Test name method
   describe('getName', () => {
       it('should return the employee name', () => {

           const name = 'Employee name';
           const result = new Employee(name, 'id', 'email');

           expect(result.getName()).toEqual(name);
        });
    }); //getName

    // Test id method
    describe('getId', () => {
        it('should return the employee id', () => {
 
            const id = 'Employee id';
            const result = new Employee('name', id, 'email');
 
            expect(result.getId()).toEqual(id);
         });
     }); //getId

     // Test email method
     describe('getEmail', () => {
        it('should return the employee e-mail', () => {
 
            const email = 'Employee e-mail';
            const result = new Employee('name', 'id', email);
 
            expect(result.getEmail()).toEqual(email);
         });
     }); //getEmail

     // Test role method
     describe('getRole', () => {
        it('should return the employee role', () => {
 
            const role = 'Employee';
            const result = new Employee('name', 'id', 'email');
 
            expect(result.getRole()).toEqual(role);
         });
     }); //getRole
});//Employee