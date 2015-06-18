var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: [ { latitude: String, longitude: String} ],
    details: [ { firstName: String, lastName: String } ],
    updated_at: [ { type: Date, default: Date.now } ],
});

var User = mongoose.model('User', UserSchema);

module.exports = User;