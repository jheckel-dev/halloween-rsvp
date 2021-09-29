<<<<<<< HEAD
module.exports = (req, res, next) => {
    if (req.user) { return next(); }

    return res.redirect('/')
}

=======
const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.///) {
  sequelize = new Sequelize(process.env.///);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,///
    process.env.DB_USER,///
    process.env.DB_PASSWORD,///
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306 ///
    }
  );
}

module.exports = sequelize;
>>>>>>> af57947c5bca112ea332457924c28ecf4fcbf77b
