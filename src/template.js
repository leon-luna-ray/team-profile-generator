// pass the employee arry in from the app here
// one for the full page
function engineerTemplate(teamMember){
    return `Hello from the ${teamMember.role} markup template!` // the manager card html goes here
            // use the methods manager.getName
};

function internTemplate(teamMember){
    return `Hello from the ${teamMember.role} markup template!` // the manager card html goes here
            // use the methods manager.getName
};

function managerTemplate(teamMember){
    return `Hello from the ${teamMember.role} markup template!` // the manager card html goes here
            // use the methods manager.getName
};

// add more here?

function generateMarkup(teamMembers) {
    teamMembers.forEach(buildCard);

    function buildCard(teamMember) {
        if(teamMember.role === 'Engineer') {
            let markup = engineerTemplate(teamMember);
            // need to find out where to send this markup
            console.log(markup);

        } else if (teamMember.role === 'Intern') {
            let markup = internTemplate(teamMember);
                console.log(markup);
        } else if (teamMember.role === 'Manager') {
            let markup = managerTemplate(teamMember);
                console.log(markup);
        };
    };
};

module.exports = generateMarkup;