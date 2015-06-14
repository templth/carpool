var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: [ { latitude: String, longitude: String} ],
    details: [ { firstName: String, lastName: String } ]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;