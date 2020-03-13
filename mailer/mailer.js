require('dotenv').config();
const mailer = require('nodemailer');

var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = {
    sendEmail(subject, to, html) {
        let from = "R&B Marketplace"
        return new Promise((resolve, reject) => {
            transporter.sendMail({ from, subject, to, html }, (err, info) => {
                if (err) reject(err);
                resolve(info);
            });
        });
    }
}