const { Snack } = require("../models");

const snackData = [
  {
    snackid: 1,
    guest: "Jalen",
    food: "cheesecake"
  },
  {
    snackid: 2,
    guest: "Sarah",
    food: "cupcakes"
  },
  {
    snackid: 3,
    guest: "Alex",
    food: "sodas"
  },
  {
    snackid: 4,
    guest: "Krista",
    food: "chips and salsa"
  }
];

const seedSnacks = () => Snack.bulkCreate(snackData);

module.exports = seedSnacks;