const createTeam = (team) => {
  // will get manager info for card
  const createManager = (manager) => {
    return `
      <div class='card'>
        <div class='card-header'>
        <h2>${manager.getName()}</h2>
        <h3>Manager</h3>
        <img src='./assets/images/icons8-coffee-cup-32.png'>
        </div>  
        <p class='id'>ID: ${manager.getId()}</p>
        <p class='email'>Email: <a href='mailto: ${manager.getEmail()}'>${manager.getEmail()}</a></p>
        <p class='officenumber'>Office Number: ${manager.getOfficeNumber()}</p>
      </div>
        `;
  };
  // will get engineer info for card
  const createEngineer = (engineer) => {
    return `
      <div class='card'>
        <div class='card-header'>
        <h2>${engineer.getName()}</h2>
        <h3>Engineer</h3>
        <img src='./assets/images/icons8-glasses-32.png'>
        </div>
        <p class='id'>ID: ${engineer.getId()}</p>
        <p class='email'>Email: <a href='mailto: ${engineer.getEmail()}'>${engineer.getEmail()}</a></p>
        <p class='github'>GitHub: <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a></p>
      </div>
        `;
  };
  // will get intern info for card
  const createIntern = (intern) => {
    return `
      <div class='card'>
        <div class='card-header'>
        <h2>${intern.getName()}</h2>
        <h3>Intern</h3>
        <img src='./assets/images/icons8-internship-30.png'>
        </div>
        <p class='id'>ID: ${intern.getId()}</p>
        <p class='email'>Email: <a href='mailto: ${intern.getEmail()}'>${intern.getEmail()}</a></p>
        <p class='school'>School: ${intern.getSchool()}</p>
      </div>
        `;
  };
  const data = [];
  data.push(
    team
      .filter((e) => e.getRole() == "Manager")
      .map((manager) => createManager(manager))
  );
  data.push(
    team
      .filter((e) => e.getRole() == "Engineer")
      .map((engineer) => createEngineer(engineer))
  );
  data.push(
    team
      .filter((e) => e.getRole() == "Intern")
      .map((intern) => createIntern(intern))
  );

  return data.join("");
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Profile Team Generator</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
        <div class='header'>
          <h1>My Team</h1>
        </div>
        <div class="employees">${createTeam(team)}</div>
        </body>
    </html>`;
};
