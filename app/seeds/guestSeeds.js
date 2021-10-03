const { Guest } = require("../models");

const guestData = [
  {
    name: "Jalen",
    rsvp: true
  },
  {
    name: "Sarah",
    rsvp: true
  },
  {
    name: "Alex",
    rsvp: true
  },
  {
    name: "Krista",
    rsvp: true
  },
  {
    name: "Peter",
    rsvp: false
  }
];

const seedGuests = () => Guest.bulkCreate(guestData);

module.exports = seedGuests;