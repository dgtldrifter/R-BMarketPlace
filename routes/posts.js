const router = require('express').Router();
let Post     = require('../models/post.model');
let User     = require('../models/user.model');

router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    const name        = req.body.name;
    const email       = req.body.email;
    const image       = req.body.image;
    const categoryid  = req.body.categoryid;
    const saletype    = req.body.saletype;
    const price       = req.body.price;
    const date        = req.body.date;
    const city        = req.body.city;
    const state       = req.body.state;
    const address     = req.body.address;
    const description = req.body.description;


    User.findOne({email: email})
        .then(user => {
            let ownerID = user._id;
            const newPost = new Post({categoryid, saletype, name, price, description, ownerID, date, city, state, address, image});

            newPost.save()
                .then(() => res.json('Post Created!'))
                .catch(err => res.status(500).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getAll').post((req, res) => {
    Post.find()
        .populate('ownerID', 'email firstName lastName -_id')
        .exec(function(error, posts) {
            res.json(posts);
        });
});

module.exports = router;
