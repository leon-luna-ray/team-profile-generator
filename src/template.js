// pass the employee arry in from the app here
// one for the full page
function engineerTemplate(member){
    // return `
    // <h2>${member.name}</h2>
    // Role: ${member.role}
    // E-Mail: ${member.email}
    // Github: ${member.github}
    // `
    return `Hello from the ${member.role} markup template!`
};

function internTemplate(member){
    return `Hello from the ${member.role} markup template!` // the manager card html goes here
            // use the methods manager.getName
};

function managerTemplate(member){
    return `Hello from the ${member.role} markup template!` // the manager card html goes here
            // use the methods manager.getName
};


function generateMarkup(team) {
    team.forEach(member => {
        if (member.role === 'Engineer') {
            let engineerCard = engineerTemplate(member);
            console.log(engineerCard);
        } else if (member.role === 'Intern') {
            let internCard = internTemplate(member);
            console.log(internCard);
        } else if (member.role === 'Manager') {
            let managerCard = managerTemplate(member);
            console.log(managerCard);
        };
    });


};

module.exports = generateMarkup;