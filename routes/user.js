var express = require('express');
var User = require('../services/user');
var router = express.Router();

router.get('/users', function(req, res) {
    User.list(function(users) {
        res.json(users);
    }, function(err) {
        res.status(400).json(err);
    });
});

router.post('/users', function(req, res) {
    User.save(req.body.name, function(user) {
        res.status(201).json(user);
    }, function(err) {
        res.status(400).json(err);
    });
});

module.exports = router;