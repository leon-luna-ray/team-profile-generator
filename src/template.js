// pass the employee arry in from the app here
// one for the full page
function managerTemplate(manager){
    return `` // the manager card html goes here
            // use the methods manager.getName
};

function managerTemplate(manager){
    return `` // the manager card html goes here
            // use the methods manager.getName
};

function managerTemplate(manager){
    return `` // the manager card html goes here
            // use the methods manager.getName
};

function managerTemplate(manager){
    return `
    ` // the manager card html goes here
            // use the methods manager.getName
};

function mainTemplate(teamArray) {
    console.log(teamArray);
    teamArray.forEach(buildCard);

    function buildCard(data) {
        if(data.role === 'Engineer') {
            // need to figure out how to get this loop working
            let markup = engineerTemplate();

            //test
            console.log(`inside the buildCard function to check name: ${data.name}`)
            
        } else if (this.role === 'Intern') {
            let markup = internTemplate();
        } else if (this.role === 'Manager') {
            buildManager();
        } else if (this.role === 'Build Team') {
            buildTeam();
        }
    
    }
};

module.exports = mainTemplate;