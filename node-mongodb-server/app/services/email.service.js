//Mail
const nodemailer = require('nodemailer');
const {google} = require('googleapis')
const config = require('../config/email.config.js')
const OAuth2 = google.auth.OAuth2
const OAuth2_client = new OAuth2(config.clientId, config.clientSecret)
OAuth2_client.setCredentials( {refresh_token: config.refreshToken})

function push_mail(mail_options){
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
}

module.exports = { push_mail }