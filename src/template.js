// pass the employee array in from the app here to generate a card based on employee role, append to html and create html page

function engineerTemplate(member){
    return `
    <div class="column">
    <div class="card engineer-card">
        <div class="card-content employee-name">
            <h2 class="title">${member.name}</h2>
            <h3 class="subtitle"><i class="fas fa-laptop-code"></i> ${member.role}</h3>
        </div>
        <div class="card-content contact-info">
            <ul class="employee-details">
                <li>ID: ${member.id}</li>
                <li>E-Mail: <a href="mailto:${member.email}">${member.email}</a></li>
                <li>Github: <a href="https://www.github.com/${member.github}" target="_blank">${member.github}</a></li>
            </ul>
        </div>
    </div>
  </div><!--column/engineer card-->

   `
};

function internTemplate(member){
  return `
  <div class="column">
  <div class="card intern-card">
      <div class="card-content employee-name">
          <h2 class="title">${member.name}</h2>
          <h3 class="subtitle"><i class="fas fa-user-graduate"></i> ${member.role}</h3>
      </div>
      <div class="card-content contact-info">
          <ul class="employee-details">
              <li>ID: ${member.id}</li>
              <li>E-Mail: <a href="mailto:${member.email}">${member.email}</a></li>
              <li>School: ${member.school}</li>
          </ul>
      </div>
  </div>
</div><!--column/engineer card-->

 `
};

function managerTemplate(member){
    return `
    <div class="column">
      <div class="card manager-card">
          <div class="card-content employee-name">
              <h2 class="title">${member.name}</h2>
              <h3 class="subtitle"><i class="fas fa-briefcase"></i> ${member.role}</h3>
          </div>
          <div class="card-content contact-info">
              <ul class="employee-details">
                  <li>ID: ${member.id}</li>
                  <li>E-Mail: <a href="mailto:${member.email}">${member.email}</a></li>
                  <li>Office Number: ${member.officeNumber}</li>
              </ul>
          </div>
      </div>
    </div><!--column/manager card-->

   `
};

function generateMarkup(team) {
    let employeeCards = [];
    team.forEach(member => {
        if (member.role === 'Engineer') {
            let engineerCard = engineerTemplate(member);
            employeeCards.push(engineerCard);
        } else if (member.role === 'Intern') {
            let internCard = internTemplate(member);
            employeeCards.push(internCard);
        } else if (member.role === 'Manager') {
            let managerCard = managerTemplate(member);
            employeeCards.push(managerCard);
        };
    });
    // Take the array and remove commas with join.
    employeeCards = employeeCards.join('');
    const data = handleMarkup(employeeCards);
    return data;
 };

    function handleMarkup(cards) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
            <title>My Team</title>
        </head>
        <body>
            <header class="hero is-primary">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title is-1 page-title center">My Team</h1>
                    </div>
                </div>
            </header> <!--header-->

            <main class="container">
            <div class="columns">
              ${cards}
            </div><!--columns/employee cards-->
        </main> <!--container-->
        </body>
        </html>
        `
    }; //handleMakrup


module.exports = generateMarkup;