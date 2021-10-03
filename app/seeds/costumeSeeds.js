const { Costume } = require("../models");

const costumeData = [
  {
    costumeid: 1,
    guest: "Jalen",
    costume: "pumpkin"
  },
  {
    costumeid: 2,
    guest: "Sarah",
    costume: "pirate"
  },
  {
    costumeid: 3,
    guest: "Alex",
    costume: "cat"
  },
  {
    costumeid: 4,
    guest: "Krista",
    costume: "dinosaur"
  }
];

const seedCostumes = () => Costume.bulkCreate(costumeData);

module.exports = seedCostumes;