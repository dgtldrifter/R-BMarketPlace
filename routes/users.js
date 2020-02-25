const router = require('express').Router();
const SHA256 = require("crypto-js/sha256");
const randomString = require("randomstring");
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const passwordSalt = randomString.generate(32);
  const password = SHA256(req.body.password + passwordSalt);

  const newUser = new User({email, firstName, lastName, passwordSalt, password});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
  const email = req.body.email;

  User.findOne({email: email})
      .then(user => {
          if (!user) { res.sendStatus(403); }
          else if (SHA256(req.body.password + user.passwordSalt).toString() === user.password) { res.sendStatus(200); }
          else { res.sendStatus(403); }
      });
});

module.exports = router;
