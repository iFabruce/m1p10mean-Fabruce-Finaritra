const config = require('../config/email.config.js')
const {default_template} = require('../../emailTemplate.js')
const {push_mail} = require('../services/email.service.js')

exports.standard_mail = (req, res) => {
    try {
        const {name,  recipient,  subject} = req.body
        const mail_options = {
            from: `${name} <${config.user}>`,
            to: recipient,
            subject,
            html: default_template(req.body)
        }
        push_mail(mail_options)
        res.send('Standard Send');
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}



