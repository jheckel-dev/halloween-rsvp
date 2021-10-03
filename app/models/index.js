const Costume = require("./costume");
const User = require("./user");
const Snack = require("./snack");
const Song = require("./song");
const Guest = require("./guest")

Guest.hasOne(Costume, {
    foreignKey: 'guestid'
});

Guest.hasOne(User, {
    foreignKey: 'guestid'
});

Guest.hasOne(Snack, {
    foreignKey: 'guestid'
});

Guest.hasOne(Song, {
    foreignKey: 'guestid'
});

module.exports = { Guest, Costume, User, Snack, Song };