// Define the three classes or constructor fucntions fo rthe three types of employees manager, engineer, intern

//Get info from the client about each employee to be added, ask for name and other info of the manager, ask client if they want to add another employee or exit, repeat until exit.

// greet and ask manager name
// build employee of type manager using a constructor (by passing all the info into the constructor)
// generate html with info of the employee (running build command)

// ask client if they want to add more itners or engineers or exit
// if the want to exit finish the app
// if they want to build a new empoyer add one to html using the constructor for the approriate type

// Employee class
class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    };

    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
    getRole() {return 'Employee'};
};

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGithub() {return this.github};
    getRole() {return 'Engineer'};
};


// Build the other two here