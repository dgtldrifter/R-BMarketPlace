const router = require('express').Router();
const SHA256 = require("crypto-js/sha256");
const jwt = require("jsonwebtoken");
const randomString = require("randomstring");
let User = require('../models/user.model');
const mailer = require('../mailer/mailer');

function validateEmail(email) {
    //Checks if an email address is valid
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePassword(password) {
    //Checks the following requirements:
    // 8 characters
    // 1 number
    // 1 uppercase letter
    // 1 lowercase letter
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(String(password));
}

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const email = req.body.email.toUpperCase();
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const passwordSalt = randomString.generate(32);
    const unencryptedPassword = req.body.password;
    const password = SHA256(unencryptedPassword + passwordSalt);
    var emailToken = randomString.generate(5);
    const tokenTime = Date.now().toString().slice(0, -3); //generating a timestamp to attach to the email token
    //the first 5 characters of the token is the actual token, the rest is timestamp
    emailToken = emailToken + tokenTime;

    if (!firstName) {
        res.status(401);
        res.send("Please fill out the first name.");
    }
    else if (!lastName) {
        res.status(401);
        res.send("Please fill out the last name.");
    }
    else if (!validateEmail(email)) {
        res.status(401);
        res.send("Email address is not valid.");
    }
    else if (!validatePassword(unencryptedPassword)) {
        res.status(400);
        let characters = "✖";
        let upper = "✖";
        let lower = "✖";
        let numbers = "✖";
        if (unencryptedPassword.length > 8)
            characters = "✔";
        if (/\d/.test(unencryptedPassword))
            numbers = "✔";
        if (/[a-z]/.test(unencryptedPassword))
            lower = "✔";
        if (/[A-Z]/.test(unencryptedPassword))
            upper = "✔";
        res.send("The password needs to meet the following requirements: "
            + "\n8 characters long - " + characters
            + "\n1 upper-case - " + upper
            + "\n1 lower-case letter - " + lower
            + "\n1 number - " + numbers);
    }
    else {
        const newUser = new User({ email, firstName, lastName, passwordSalt, password, emailToken });
        newUser.save()
            .then(user => {
                const payload = { user: { id: user.email } };

                jwt.sign(
                    payload,
                    "thisisasecretkey", { expiresIn: 10000 },
                    (err, token) => {
                        if (err) throw err;
                        res.status(200).json({ token });
                    }
                );
                const emailContent = '<h2> Welcome to R&B Marketplace! </h2>' +
                    '<br/><br/> Please verify your email with the following token the next time you login: <br/>' +
                    '<b>' + emailToken.substring(0, 5) + '</b>';
                const subject = "R&B Marketplace Account Confirmation";

                mailer.sendEmail(subject, email, emailContent);
            })
            .catch(err => {
                if (err.toString().includes("E11000")) {
                    res.status(400);
                    res.send("Email address is already registered!");
                }
                else {
                    res.status(400);
                    res.send("Something went wrong during the registration process.");
                    console.log("Error: " + err);
                }
            });
    }
});

router.route("/login").post((req, res) => {
    const email = req.body.email.toUpperCase();

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                res.status(401);
                res.send("Error: Email address is not registered");
            }
            else if (SHA256(req.body.password + user.passwordSalt).toString() === user.password) {

                if (user.active == false) {
                    res.status(401);
                    res.send("unverified");
                }
                const payload = { user: { email: user.email } };
                const fullName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1) + " " + user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);

                jwt.sign(
                    payload,
                    "thisisasecretkey", { expiresIn: 3600 },
                    (err, token) => {
                        if (err) throw err;
                        res.status(200).json({ fullName, token });
                    }
                );
            }
            else {
                res.status(401);
                res.send("Error: The email and password combination does not match!");
            }

        });
});

router.route("/verify").post((req, res) => {
    const email = req.body.email.toUpperCase();
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                res.status(404);
                res.send("Error: Invalid email!");
            }
            else if (user.active == true) {
                res.status(404);
                res.send("Error: Email is already verified.");
            }
            else if (req.body.emailToken === user.emailToken.substring(0, 5)) {
                if (parseInt(Date.now().toString().slice(0, -3)) - parseInt(user.emailToken.substring(5)) >= 3600) { //token expires in 1 hour
                    res.status(403);
                    res.send("Error: The token has expired!");
                }
                else {
                    user.active = true;
                    user.emailToken = '';
                    user.save();
                    res.status(200);
                    res.send("Successful: Email address verified successfully!");
                }

            }
            else {
                res.status(401);
                res.send("Error: Invalid token!");
            }

        });
});

router.route('/reemail').post((req, res) => {
    const email = req.body.email.toUpperCase();

    var emailToken = randomString.generate(5);
    const tokenTime = Date.now().toString().slice(0, -3); //generating a timestamp to attach to the email token
    //the first 5 characters of the token is the actual token, the rest is timestamp
    emailToken = emailToken + tokenTime;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                res.status(404);
                res.send("Error: Invalid email!");
            }
            else if (parseInt(Date.now().toString().slice(0, -3)) - parseInt(user.emailToken.substring(5)) <= 300) { //token can only be resent every 5 minutes
                res.status(400);
                res.send("Eror: Please wait at least 5 minutes before a token request.");
            }
            else {
                user.emailToken = emailToken;
                user.save();
                const emailContent = '<h2> R&B Marketplace Token </h2>' +
                    '<br/><br/> Please verify your account changes following token: <br/>' +
                    '<b>' + emailToken.substring(0, 5) + '</b>';
                const subject = "R&B Marketplace Account Confirmation/Management";

                mailer.sendEmail(subject, email, emailContent);
                res.status(200);
                res.send("Successfully sent the token to the email address!");
            }
        })
});

router.route('/resetpassword').post((req, res) => {
    const resetEmail = req.body.email;
    const resetToken = req.body.emailToken;
    const resetSalt = randomString.generate(32);
    const resetPassword = SHA256(req.body.newPassword + resetSalt);

    User.findOne({ email: resetEmail })
        .then(user => {
            if (req.body.newPassword.length < 6) {
                res.status(400);
                res.send("Error: The password has to be at least 6 characters.");
            }
            else if (!user) {
                res.status(404);
                res.send("Error: Invalid email!");
            }
            else if (resetToken !== user.emailToken.substring(0, 5)) {
                res.status(403);
                res.send("Error: Invalid token!");
            }
            else if (parseInt(Date.now().toString().slice(0, -3)) - parseInt(user.emailToken.substring(5)) >= 3600) { //token expires in 1 hour
                res.status(403);
                res.send("Eror: The token is expired!");
            }
            else {
                user.passwordSalt = resetSalt;
                user.password = resetPassword;
                user.emailToken = '';
                user.save();
                const emailContent = '<h2> R&B Marketplace </h2>' +
                    '<br/><br/> This email is being sent to notify you that your R&B Marketplace account\'s password was changed. <br/>' +
                    'Time of change: ' + new Date().toString(); + '<br/>';
                const subject = "R&B Marketplace Account Changed";

                mailer.sendEmail(subject, resetEmail, emailContent);
                res.status(200);
                res.send("Successfully reset password!");
            }
        })
});

router.route("/authToken").post((req, res) => {
    let email;
    try {
        const token = req.header("token");
        if (!token) return res.status(401).json({ message: "Auth Error" });

        try {
            const decoded = jwt.verify(token, "thisisasecretkey");
            email = decoded.user.email;
        } catch (e) {
            console.error(e);
            res.status(401).send({ message: "Invalid Token" })
        }

        User.findOne({ email: email })
            .then(user => res.json({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }))
            .catch(err => res.json(err));

    } catch (e) {
        res.send({ message: "Error in fetching user" });
    }
});

module.exports = router;
