const { User } = require("../models");

const userData = [
  {
    firstName: "Jalen",
    lastName: "Heckel",
    email: "jalenheckel@gmail.com"
  },
  {
    firstName: "Sarah",
    lastName: "Rohr",
    email: "sarahrohr@gmail.com"
  },
  {
    firstName: "Alex",
    lastName: "Carmody",
    email: "alexcarmody@gmail.com"
  },
  {
    firstName: "Krista",
    lastName: "Bienia",
    email: "kristabienia@gmail.com"
  },
  {
    firstName: "Peter",
    lastName: "Surowski",
    email: "petersurowski@gmail.com"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;