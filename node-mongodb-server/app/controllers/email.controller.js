const config = require('../config/email.config.js')
const {default_template} = require('../../emailTemplate.js')
const {push_mail} = require('../services/email.service.js')

exports.standard_mail = (req, res) => {
    try {
        const {email, subject, date, heure, duration, service, employee} = req.body
        push_mail(email, subject, date, heure, duration, service, employee)
        res.send('Standard Send');
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}



