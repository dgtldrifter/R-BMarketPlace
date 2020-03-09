const router = require('express').Router();
const SHA256 = require("crypto-js/sha256");
const jwt = require("jsonwebtoken");
const randomString = require("randomstring");
let User = require('../models/user.model');

router.use()

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email           = req.body.email;
  const firstName       = req.body.firstName;
  const lastName        = req.body.lastName;
  const passwordSalt    = randomString.generate(32);
  const password        = SHA256(req.body.password + passwordSalt);

  const newUser = new User({email, firstName, lastName, passwordSalt, password});
  newUser.save()
      .then(user => {
          const payload = {user: {id: user.email}};

          jwt.sign(
              payload,
              randomString.generate(32), {expiresIn: 10000},
              (err, token) => {
                  if (err) throw err;
                  res.status(200).json({token});
              }
          );
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
  const email = req.body.email;

  User.findOne({email: email})
      .then(user => {
          if (!user) { res.sendStatus(401); }
          else if (SHA256(req.body.password + user.passwordSalt).toString() === user.password) {
              const payload = {user: {email: user.email}};

              jwt.sign(
                  payload,
                  randomString.generate(32), {expiresIn: 3600},
                  (err, token) => {
                      if (err) throw err;
                      res.status(200).json({token});
                  }
              );
          }
          else { res.sendStatus(401); }
      });
});

router.route('/authToken').get((req, res) => {

});

module.exports = router;
