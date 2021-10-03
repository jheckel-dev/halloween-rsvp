const { User } = require("../models");

const userData = [
  {
    firstName: "Jalen",
    lastName: "Heckel",
    email: "jalenheckel@gmail.com",
    userid: 1
  },
  {
    firstName: "Sarah",
    lastName: "Rohr",
    email: "sarahrohr@gmail.com",
    userid: 2,
  },
  {
    firstName: "Alex",
    lastName: "Carmody",
    email: "alexcarmody@gmail.com",
    userid: 3
  },
  {
    firstName: "Krista",
    lastName: "Bienia",
    email: "kristabienia@gmail.com",
    userid: 4
  },
  {
    firstName: "Peter",
    lastName: "Surowski",
    email: "petersurowski@gmail.com",
    userid: 5
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;