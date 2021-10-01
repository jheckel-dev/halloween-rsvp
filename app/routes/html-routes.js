const exphbs = require("express-handlebars");
const db = require("../models/index.js");
const isAuthenticated = require("../config/midware/authentication");

module.exports = app => {
    //when page renders
    app.get("/", (req,res) => {
    //when logged in the page directs to the guest page
    if (req.user) {
        res.redirect("/guests")
    }
    // or loads a log-in page for those not logged in.
    res.render("login")
   })

   //login route
   app.get("/login", function (req, res) {
    //if logged in send to guest list
    if (req.user) {
           res.redirect("/guests");
       }
       //not logged in? send log in page
       res.render("login");
   });

   //signup route
   app.get("/register", (req, res) => {
     //render signup page
     res.render("register")
   })

   //attendee route
   app.get("/attendee", isAuthenticated, function (req,res) {
      //check if user is authentic attendee if not route wont work
      //if autheticated attendee page render.
    res.render("attendees");
   });


}

