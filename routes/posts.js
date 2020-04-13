const router = require('express').Router();
let Post     = require('../models/post.model');
let User     = require('../models/user.model');

router.route('/').post((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/getAPIKey').post((req, res) => {
    res.status(200).send(process.env.IMGUR_ID);
});
router.route('/create').post((req, res) => {
    const categoryid  = req.body.categoryid;
    const saletype    = req.body.saletype;
    const name        = req.body.name;
    const price       = req.body.price;
    const description = req.body.description;
    const date        = req.body.date;
    const city        = req.body.city;
    const location    = req.body.location;
    const address     = req.body.address;
    const image       = req.body.image;
    const email       = req.body.email;

    User.findOne({ email: email })
        .then(user => {
            let ownerId = user._id;
            const newPost = new Post({ categoryid, saletype, name, price, description, ownerId, date, city, location, address, image });

            newPost.save()
                .then(() => res.json('Post Created!'))
                .catch(err => res.status(500).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getAll').post((req, res) => {
    Post.find()
        .populate('ownerId', 'firstName lastName email -_id')
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/filterPosts').post((req, res) => {
   let category = req.body.categoryid;
   let saleType = req.body.saletype;

    Post.find({categoryid: category, saletype: saleType})
        .populate('ownerId', 'firstName lastName email -_id')
        .then(posts => {

            if(posts.length == 0){
                return res.status(404).json('FAIL')
            }
            else{
                return res.status(200).json(posts)
            }
            
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// route that updates post by id
router.route('/updatePost').post((req, res) => {
    let id = req.body.id;

    Post.find({id: id})
        .populate('')
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route that deletes post by id
router.route('/deletePost').post((req, res) => {
    let id = req.body.id;

    Post.find({id: id})
        .populate('')
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route that filters posts by ownerId
router.route('/ownerPosts').post((req, res) => {
    const email = req.body.email;

    Post.find({email: email}) 
        .populate('')
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

function isEmpty(obj) {
    return !Object.keys(obj).length > 0;
  }
