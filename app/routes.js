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
    User.create(user, function(err, user) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.status(201).location('/users/'+user.name).json(user);
    });
});


/* GET /users/:id */
router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    User.findOne({name: name}, function(err, user) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(user);
    });
});

router.put('/users/:name', function(req, res) {
    var user = {
        name: req.body.name,
        email: req.body.email
    };
    User.findOneAndUpdate(user, function(err, user) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(user);
    });
});

router.delete('/users/:name', function(req, res) {
    var name = req.params.name;
    User.findOneAndRemove({name: name}, function(err, user) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.end();
    });

});


 // frontend routes =========================================================
 // route to handle all angular requests
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html")); 
});
module.exports = router;