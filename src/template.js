// pass the employee arry in from the app here
// one for the full page
function engineerTemplate(member){
    return `
    <div class="card column employee-card">
        <header class="card-header">
            <p class="card-header-title">${member.name}</p>
        </header>

        <div class="content">
            <ul>
            <li>Role: ${member.role}</li>
            <li>ID: ${member.id}</li>
            <li>E-mail: <a href="mailto:${member.email}">${member.email}</a></li>
            <li>Github: <a href="https://www.github.com/${member.github}">${member.github}</a></li>
            </ul> 
        </div>
    </div>
   `
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

    let markup = `
    
    `
};

module.exports = generateMarkup;