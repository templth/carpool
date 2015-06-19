var express = require('express');
var User = require('./models/user');
var router = express.Router();
var path = require('path');
// Backend routes =========================================================

//User routes
/* GET /users */
router.list('/users', function(req, res) {
    User.find(function(err, users) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(users);
    });
});

/* POST /users */
router.create('/users', function(req, res) {
    var user = {
        name: req.body.name,
        email: req.body.email
    };
    User.create(user, function(err, user) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.status(201).json(user);
    });
});


/* GET /users/:id */
router.read('/users/name', function(req, res) {
    var name = req.params.name;
    User.findOne({name: name}, function(err, user) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(user);
    });
});

router.update('/users', function(req, res) {
    var user = {
        name: req.body.name,
        email: req.body.email
    };
    User.findOneAndUpdate(user, function(err, user) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.status(201).json(user);
    });
});

router.del('/users/name', function(req, res) {
    var name = req.params.name;
    User.findOneAndRemove({name: name}, function(err, user) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.status(201).json(user);
    });

});


 // frontend routes =========================================================
 // route to handle all angular requests
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html")); 
});
module.exports = router;