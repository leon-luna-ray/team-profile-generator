// Import the engineer class
const engineer = require('../lib/engineer.js');

// Test engineer class
describe('Engineer', () => {
    // Test name method
   describe('getName', () => {
       it('return the engineer name', () => {

           const name = 'engineer name';
           const result = new Engineer(name, 'id', 'email');

           expect(result.getName()).toEqual(name);
        });
    }); //getName

    // Test id method
    describe('getId', () => {
        it('return the engineer id', () => {
 
            const id = 'engineer id';
            const result = new engineer('name', id, 'email');
 
            expect(result.getId()).toEqual(id);
         });
     }); //getId

     // Test email method
     describe('getEmail', () => {
        it('return the engineer e-mail', () => {
 
            const email = 'engineer e-mail';
            const result = new engineer('name', 'id', email);
 
            expect(result.getEmail()).toEqual(email);
         });
     }); //getEmail

     // Test role method
     describe('getRole', () => {
         // Positive test
        it('return the engineer role', () => {
 
            const role = 'engineer';
            const result = new engineer('name', 'id', 'email');
 
            expect(result.getRole()).toEqual(role);
         });
     }); //getRole
});//engineer