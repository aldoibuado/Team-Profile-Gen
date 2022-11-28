const createTeam = team => {
    const createManager = manager => {
        return `
        <p>${manager.getName()}</p>`

    }
    const data = []
    data.push(team.filter(e=> e.getRole() == 'Manager').map(manager => createManager(manager)))

   return data.join('')
}

module.exports = team =>{
    return `
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="">
        </head>
        <body>
        <div>${createTeam(team)}</div>
           
            
        </body>
    </html>`
};
