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
    // Required paramters
    this.name = name;
    this.id = id;
    this.email = email;

    this.getName = () => {};
    this.getId = () => {};
    this.getEmail = () => {};
    this.getRole = () => {
        // return employee?
    };

    // Build HTML here
    this.buildHtml = () => {
        //Tests
        console.log(this.name);
        console.log(this.role)
        console.log(this.id);
    };
};

// My idea was to create more contructors by copy/pasting the one above and changing/adding additional properties and methods per the readme.

// Manager constructor, instructor showed us this starter code but I'm not sure why it's so different from the contructor above yet.
function Manager(name, id, role) {
    this.role = role;
    // aded this per the readme
    this.offieNumber = officeNumber;
    // I belive this is taking info from the employee constructor...
    Employee.call(this, name, id);
}

// Create new manager instance and build HTML
const manager = new Manager('a', 'b', 'c');
manager.buildHtml();