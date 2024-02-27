function default_template(date, heure, duration, service, employee){
    return `
        <h3 style="font-weight: bold">Merci pour votre réservation !</h3> </br> </br></br>
        <p>Date: <span style="font-weight: semibold>${date}</span></p> </br> 
        <p>Heure: <span style="font-weight: semibold>${heure}</span></p> </br> 
        <p>Durée: <span style="font-weight: semibold>${duration}h</span></p> </br>
        <p>Service: <span style="font-weight: semibold>${service}</span></p> </br> 
        <p>Employé: <span style="font-weight: semibold>${employee}</span></p> </br> 
    `;
}

module.exports = {
    default_template
}