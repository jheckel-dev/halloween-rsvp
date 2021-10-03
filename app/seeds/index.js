const seedGuests = require("./guestSeeds");
const seedCostumes = require("./costumeSeeds");
const seedSongs = require("./songSeeds");
const seedSnacks = require("./snackSeeds");
const seedUsers = require("./userSeeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedGuests();
  console.log("\n----- GUESTS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedSongs();
  console.log("\n----- SONGS SEEDED -----\n");

  await seedSnacks();
  console.log("\n----- SNACKS SEEDED -----\n");

  await seedCostumes();
  console.log('\n----- COSTUMES SEEDED -----\n');

  process.exit(0);
};

seedAll();