function default_template(data){
    return `
        <h3 style="font-weight: bold">Rendez-vous reservé !</h3> </br> </br></br>
        <p>Date: <span style="font-weight: semibold>${data.date}</span></p> </br> 
        <p>Heure: <span style="font-weight: semibold>${data.heure}</span></p> </br> 
        <p>Durée: <span style="font-weight: semibold>${data.duration}h</span></p> </br>
        <p>Service: <span style="font-weight: semibold>${data.service}</span></p> </br> 
        <p>Employé: <span style="font-weight: semibold>${data.employee}</span></p> </br> 
    `;
}

module.exports = {
    default_template
}