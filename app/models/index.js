const Costume = require("./costume");
const User = require("./user");
const Snack = require("./snack");
const Song = require("./song");
const Guest = require("./guest")

Guest.hasOne(Costume, Snack, Song, {
    foreignKey: 'guestid'
});


Costume.belongsTo(Guest, {
    foreignKey: 'costumeid'
});

Song.belongsTo(Guest, {
    foreignKey: 'songid'
});

Snack.belongsTo(Guest, {
    foreignKey: 'snackid'
});

module.exports = { Guest, Costume, User, Snack, Song };