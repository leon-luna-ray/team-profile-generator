// Import the engineer class
const Engineer = require('../lib/engineer.js');

// Test engineer class
describe('Engineer', () => {
    // Test name method
   describe('getName', () => {
       it('return the engineer name', () => {

           const name = 'engineer name';
           const result = new Engineer(name, 'id', 'email', 'github');

           expect(result.getName()).toEqual(name);
        });
    }); //getName

    // Test id method
    describe('getId', () => {
        it('return the engineer id', () => {
 
            const id = 'engineer id';
            const result = new Engineer('name', id, 'email', 'github');
 
            expect(result.getId()).toEqual(id);
         });
     }); //getId

     // Test email method
     describe('getEmail', () => {
        it('return the engineer e-mail', () => {
 
            const email = 'engineer e-mail';
            const result = new Engineer('name', 'id', email, 'github');
 
            expect(result.getEmail()).toEqual(email);
         });
     }); //getEmail

    // Test github method
     describe('getGithub', () => {
        it('return the engineer github user name', () => {
 
            const github = 'engineer github';
            const result = new Engineer('name', 'id', 'email', github);
 
            expect(result.getGithub()).toEqual(github);
         });
     }); //getGithub

     // Test role method
     describe('getRole', () => {
        it('return the engineer role', () => {
 
            const role = 'Engineer';
            const result = new Engineer('name', 'id', 'email', 'github');
 
            expect(result.getRole()).toEqual(role);
         });
     }); //getRole
});//engineer