// pass the employee array in from the app here to generate a card based on employee role, append to html and create html page

function engineerTemplate(member){
    return `
    <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder role icon"> <!--find icons to add for each role-->
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${member.name}</p>
          <p class="subtitle is-6">${member.role}</p>
        </div>
      </div>
  
      <div class="content">
        <ul style="list-style-type: none;">
            <li>ID: ${member.id}</li>
            <li>E-mail: <a href="mailto:${member.email}">${member.email}</a></li>
            <li>Github: <a href="https://www.github.com/${member.github}>${member.github}</a></li>
            </ul> 
      </div>
    </div>
  </div>
   `
};

function internTemplate(member){
    return `
    <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder role icon"> <!--find icons to add for each role-->
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${member.name}</p>
          <p class="subtitle is-6">${member.role}</p>
        </div>
      </div>
  
      <div class="content">
        <ul style="list-style-type: none;">
            <li>ID: ${member.id}</li>
            <li>E-mail: <a href="mailto:${member.email}">${member.email}</a></li>
            <li>School: ${member.school}</a></li>
            </ul> 
      </div>
    </div>
  </div>
   `
};

function managerTemplate(member){
    return `
    <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder role icon"> <!--find icons to add for each role-->
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${member.name}</p>
          <p class="subtitle is-6">${member.role}</p>
        </div>
      </div>
  
      <div class="content">
        <ul style="list-style-type: none;">
            <li>ID: ${member.id}</li>
            <li>E-mail: <a href="mailto:${member.email}">${member.email}</a></li>
            <li>Office Number: ${member.number}</a></li>
            </ul> 
      </div>
    </div>
  </div>
   `
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