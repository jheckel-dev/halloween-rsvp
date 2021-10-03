const { Song } = require("../models");

const songData = [
  {
    songid: 1,
    guest: "Jalen",
    title: "Party in the USA",
    artist: "Miley Cyrus"
  },
  {
    songid: 2,
    guest: "Sarah",
    title: "YMCA",
    artist: "Village People"
  },
  {
    songid: 3,
    guest: "Alex",
    title: "Single Ladies",
    artist: "Beyonce"
  },
  {
    songid: 4,
    guest: "Krista",
    title: "Work",
    artist: "Britney Spears"
  }
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;