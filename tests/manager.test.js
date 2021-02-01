// Import the manager class
const Manager = require('../lib/manager.js');

// Test manager class
describe('Manager', () => {
    // Test name method
   describe('getName', () => {
       it('return the manager name', () => {

           const name = 'manager name';
           const result = new Manager(name, 'id', 'email', 'officeNumber');

           expect(result.getName()).toEqual(name);
        });
    }); //getName

    // Test id method
    describe('getId', () => {
        it('return the manager id', () => {
 
            const id = 'manager id';
            const result = new Manager('name', id, 'email', 'officeNumber');
 
            expect(result.getId()).toEqual(id);
         });
     }); //getId

     // Test email method
     describe('getEmail', () => {
        it('return the manager e-mail', () => {
 
            const email = 'manager e-mail';
            const result = new Manager('name', 'id', email, 'officeNumber');
 
            expect(result.getEmail()).toEqual(email);
         });
     }); //getEmail

    // Test getNumber method
     describe('getNumber', () => {
        it('return the manager office number', () => {
 
            const officeNumber = 'manager office number';
            const result = new Manager('name', 'id', 'email', officeNumber);
 
            expect(result.getNumber()).toEqual(officeNumber);
         });
     }); //getNumber

     // Test role method
     describe('getRole', () => {
        it('return the manager role', () => {
 
            const role = 'Manager';
            const result = new Manager('name', 'id', 'email', 'officeNumber');
 
            expect(result.getRole()).toEqual(role);
         });
     }); //getRole
});//manager