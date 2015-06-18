var express = require('express');
var User = require('./models/user');
var router = express.Router();
var path = require('path');
// Backend routes =========================================================

//User routes
/* GET /users */
router.get('/users', function(req, res) {
    User.find(function(err, users) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(users);
    });
});

/* POST /users */
router.post('/users', function(req, res) {
    var user = {
        name: req.body.name,
        email: req.body.email
    };
    console.log(req.body);
    User.create(user, function(err, user) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.status(201).json(user);
    });
});


//TODO: GET /users/:id

 // frontend routes =========================================================
 // route to handle all angular requests
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html")); 
});
module.exports = router;