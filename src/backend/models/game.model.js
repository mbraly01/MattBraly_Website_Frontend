const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    username: { type: String, required: true},
    clocks: { type: Object, required: false}
});

const Game = mongoose.model('game', gameSchema);

module.exports = game;
