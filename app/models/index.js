const Costume = require("./costume");
const User = require("./user");
const Snack = require("./snack");
const Song = require("./song");
const Guest = require("./guest")


Costume.belongsTo(Guest, {
    foreignKey: 'guest'
})

Song.belongsTo(Guest, {
    foreignKey: 'guest'
})

Snack.belongsTo(Guest, {
    foreignKey: 'guest'
})

module.exports = { Costume, User, Snack, Song };