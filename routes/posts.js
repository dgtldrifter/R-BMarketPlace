const router = require('express').Router();
let Post     = require('../models/post.model');
let User     = require('../models/user.model');

router.route('/').post((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    const categoryid  = req.body.categoryid;
    const saletype    = req.body.saletype;
    const name        = req.body.name;
    const price       = req.body.price;
    const description = req.body.description;
    const ownerId     = req.body.ownerId;
    const date        = req.body.date;
    const city        = req.body.city;
    const location    = req.body.location;
    const address     = req.body.address;
    const image       = req.body.image;

    const newPost = new Post({categoryid, saletype, name, price, description, ownerId, date, city, location, address, image});

    newPost.save()
        .then(post => res.json('Post Created!'))
        .catch(err => res.status(500).json('Error: ' + err));
    
    /*
    User.findOne({email: email})
        .then(user => {
            //let ownerId = user._id;
            const newPost = new Post({categoryid, saletype, name, price, description, ownerId, date, city, state, address, image});

            newPost.save()
                .then(() => res.json('Post Created!'))
                .catch(err => res.status(500).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    */
});

router.route('/getAll').post((req, res) => {
    Post.find()
        .populate('ownerId', 'email firstName lastName -_id')
        .exec(function(error, posts) {
            res.json(posts);
        });
});

module.exports = router;
