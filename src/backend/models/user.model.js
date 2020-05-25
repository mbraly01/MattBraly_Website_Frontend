const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    gameCode: { 
        type: String,
        required: true},
}, {
    timestampes: true,
});

const User = mongoose.model('User', userSchema);

module.exports= User;