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
            handleMarkup(engineerCard);
        } else if (member.role === 'Intern') {
            let internCard = internTemplate(member);
            console.log(internCard);
        } else if (member.role === 'Manager') {
            let managerCard = managerTemplate(member);
            console.log(managerCard);
        };
    });

    function handleMarkup(card) {
        // Need to find a way to append each card to this template then create and push to the HTML file.
        let markup = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
            <title>Team Page</title>
        </head>
        <body>
            <div class="employee-grid">
                ${card}
            </div>
        </body>
        </html>
        `
        console.log(markup)
    }; //handleMakrup`
};

module.exports = generateMarkup;