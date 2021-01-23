// Define the three classes or constructor fucntions fo rthe three types of employees manager, engineer, intern

//Get info from the client about each employee to be added, ask for name and other info of the manager, ask client if they want to add another employee or exit, repeat until exit.

// greet and ask manager name
// build employee of type manager using a constructor (by passing all the info into the constructor)
// generate htmo with info of the employy (running build command)

// ask client if they want to add more itners or engineers or exit
// if the want ot exit finis the app
// if they want to build a new empoyer add one to html using the constructor for the approriate type


function Employee(name, id) {
    this.name = name;
    this.id = id;
    this.buildHtml = () => {
        console.log(this.name);
        console.log(this.role)
        console.log(this.id);
    };
};

function Manager(name, id, role) {
    this.role = role;
    Employee.call(this, name, id);
}

const manager = new Manager('a', 'b', 'c');
manager.buildHtml();