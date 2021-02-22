const generateCards = teamData => {
 
    const manager = teamData.manager.map(function(job) {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Manager<h4>
            <ul class= "list-group list-group-flush">
            <li class= "list-group-item">ID: ${job.id}<li>
            <li class= "list-group-item"> Email: <a href="mailto:${job.email}">${job.email}</a></li>
            <li class= "list-group-item"> Office Number: ${job.office}</li>
        </div>
        `
        return managerHtml
    })
    const engineer = teamData.engineer.map(function(job) {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Engineer<h4>
            <ul class="list-group list-group-flush">
            <li class= "list-group-item">ID: ${job.id}</li>
            <li class= "list-group-item"> <a href="mailto:${job.email}">${job.email}</a></li>
            <li class= "list-group-item">Github: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></li>
        </div>
        `
        return engineerHtml
    })

    const intern = teamData.intern.map(function(job) {
        let interHtml = `
        <div class="card" style="width: 18rem;">
        <h2>${job.name}</h2>
        <h4>Intern<h4>
        <ul class="list-group list-group-flush">
        <li class= "list-group-item">ID: ${job.id}</li>
        <li class= "list-group-item"> <a href="mailto:${job.email}">${job.email}</a></li>
        <li class= "list-group-item"> School: ${job.school}</li>
        </div>
        `
        return interHtml
    })
    return [manager,engineer,intern]
}

module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>My Team</title>
            <style>
        body { margin-bottom: 2em; }
        card { margin-bottom: 2em; }
    </style>
        </head>
        <body>
        <div class="jumbotron text-center">
            <h1 class="text-center">My Team</h1>
            <div class="container">
            <div class="row">
            <div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header">
        
            ${generateCards(templateData)}
            
        </body>
        </html>    
        `
}



