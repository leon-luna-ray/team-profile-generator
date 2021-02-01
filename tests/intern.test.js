// Import the intern class
const Intern = require('../lib/intern.js');

// Test intern class
describe('Intern', () => {
    // Test name method
   describe('getName', () => {
       it('return the intern name', () => {

           const name = 'intern name';
           const result = new Intern(name, 'id', 'email', 'school');

           expect(result.getName()).toEqual(name);
        });
    }); //getName

    // Test id method
    describe('getId', () => {
        it('return the intern id', () => {
 
            const id = 'intern id';
            const result = new Intern('name', id, 'email', 'school');
 
            expect(result.getId()).toEqual(id);
         });
     }); //getId

     // Test email method
     describe('getEmail', () => {
        it('return the intern e-mail', () => {
 
            const email = 'intern e-mail';
            const result = new Intern('name', 'id', email, 'school');
 
            expect(result.getEmail()).toEqual(email);
         });
     }); //getEmail

    // Test school method
     describe('getSchool', () => {
        it('return the intern school name', () => {
 
            const school = 'intern school';
            const result = new Intern('name', 'id', 'email', school);
 
            expect(result.getSchool()).toEqual(school);
         });
     }); //getschool

     // Test role method
     describe('getRole', () => {
        it('return the intern role', () => {
 
            const role = 'Intern';
            const result = new Intern('name', 'id', 'email', 'school');
 
            expect(result.getRole()).toEqual(role);
         });
     }); //getRole
});//intern