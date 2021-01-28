// Define the three classes or constructor fucntions fo rthe three types of employees manager, engineer, intern

//Get info from the client about each employee to be added, ask for name and other info of the manager, ask client if they want to add another employee or exit, repeat until exit.

// greet and ask manager name
// build employee of type manager using a constructor (by passing all the info into the constructor)
// generate html with info of the employee (running build command)

// ask client if they want to add more itners or engineers or exit
// if the want to exit finish the app
// if they want to build a new empoyer add one to html using the constructor for the approriate type

// Employee constructor
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    this.getName = () => {};
    this.getId = () => {};
    this.getEmail = () => {};
    this.getRole = () => {
        return 'employee'
    };

    // Build HTML here
    this.buildHtml = () => {
        //Tests
        console.log(this.name);
        console.log(this.role)
        console.log(this.id);
    };
};

// Engineer constructor
function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;

    this.getName = () => {};
    this.getId = () => {};
    this.getEmail = () => {};
    this.getGithub = () => {};
    this.getRole = () => {
        return 'engineer'
    };

    // Build HTML here
    this.buildHtml = () => {
        //Tests
        console.log(this.name);
        console.log(this.role)
        console.log(this.id);
    };
};

// Intern constructor
function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;

    this.getName = () => {};
    this.getId = () => {};
    this.getEmail = () => {};
    this.getSchool = () => {};
    this.getRole = () => {
        return 'Intern'
    };

    // Build HTML here
    this.buildHtml = () => {
        //Tests
        console.log(this.name);
        console.log(this.role)
        console.log(this.id);
    };
};

function Manager(name, id, email, number) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = number;

    this.getName = () => {};
    this.getId = () => {};
    this.getEmail = () => {};
    this.getOfficeNumber = () => {};
    this.getRole = () => {
        return 'Manager'
    };

    Employee.call(this, name, id);

    // Build HTML here
    this.buildHtml = () => {
        //Tests
        console.log(this.name);
        console.log(this.role)
        console.log(this.id);
    };
};

// Create new manager instance and build HTML
const manager = new Manager('a', 'b', 'c', 'd');
manager.buildHtml();