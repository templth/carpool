var User = require('../models/user');

exports.save = function(name, callback, errback) {
    User.create({ name: name }, function(err, user) {
        if (err) {
            errback(err);
            return;
        }
        callback(user);
    });
};

exports.list = function(callback, errback) {
    User.find(function(err, users) {
        if (err) {
            errback(err);
            return;
        }
        callback(users);
    });
};