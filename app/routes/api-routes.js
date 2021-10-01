const db = require("../models/index");
const passport = require("../config/passport");

module.exports = (app) => {
  //login user, send back userdata or throw up an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
  });

  //register the account
  app.post("/api/signup", (req, res) => {
    //make a new acount
    db.User.create(req.body)
      .then(() => {
        //redirect to api/login for authetication
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        //throw a flag on the error
        res.status(401).json(err);
      });
  });

  //log in user route
  app.get("/logout", (req,res) => {
      //log out and go home
      req.logout();
      res.redirect("/");
  });

  //new respondez s'il vous plait
  app.post("/api/newGuest/:name", (req,res) => {
      //create new guest for party
      //set name with param and user id with current user
      db.Guests.create({
          name: req.param.name,
          id_user: req.user.id,
      }).then((response) => {
          res.send(response);
      });
  });

  //route of getting all guests that are attending
  app.get("/api/allGuests", (req,res) => {
      db.Guests.findAll({
          where: {
              id_user: req.user.id,
          },
      }).then((guests) => {
          res.json(guests);
      });
  });

  //route to get costumes for a guest
app.get("/api/costume/:id_guest", (req,res) => {
    db.Costume.findAll({
        where: {
            id_guest: req.params.id_guest,
        },
    }).then(function (response) {
        res.json(response);
    });
});
  //route to get snack for guest 

  //route to get song for guest

  //route to landing 

};

