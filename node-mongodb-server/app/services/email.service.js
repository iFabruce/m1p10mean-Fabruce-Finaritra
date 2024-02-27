//Mail
const nodemailer = require('nodemailer');
const {google} = require('googleapis')
const config = require('../config/email.config.js')
const OAuth2 = google.auth.OAuth2
const OAuth2_client = new OAuth2(config.clientId, config.clientSecret)
OAuth2_client.setCredentials( {refresh_token: config.refreshToken})
// const {default_template} = require('../../emailTemplate.js')

function push_mail(email, subject, date, heure, duration, service, employee){
    try {
        const mail_options = {
            from: config.user,
            to: email,
            subject,
            html: 
            `
            <h3 style="font-weight: bold">Merci pour votre réservation !</h3> </br> </br></br>
            <p>Date: <span style="font-weight: semibold">${date}</span></p> </br> 
            <p>Heure: <span style="font-weight: semibold">${heure}</span></p> </br> 
            <p>Durée: <span style="font-weight: semibold">${duration}h</span></p> </br>
            <p>Service: <span style="font-weight: semibold">${service}</span></p> </br> 
            <p>Employé: <span style="font-weight: semibold">${employee}</span></p> </br> 
            `
        }

        const accessToken = OAuth2_client.getAccessToken()
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: config.user,
                clientId: config.clientId,
                clientSecret: config.clientSecret,
                refreshToken: config.refreshToken,
                accessToken: accessToken
            }
        })
        transport.sendMail(mail_options, function(error, result){
            if(error){
                console.log(('Error: ', error))
            }else{
                console.log(('Success: ', result))
            }
            transport.close()
        })
        return true;
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
   
}

module.exports = { push_mail }