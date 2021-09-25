// requiring passport package for authentication process
const passport = require("passport");

// passport uses Strategies for their authentication process. Requiring the specific package for local authentication for our DB
const LocalStrategy = require('passport-local').Strategy

// requiring the entirety of our models folder for data entries
const db = require('../models')


// creating the actual function for user authentication
// base idea for passport, don't think itll work for our project, clean up before submission
// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         User.findOne({ username: username }, function( err, user){
//             if (err) { return done(err); }
//             if (!user) { return done(null, false); }
//             if (!user.verifyPassword(password)) { return done(null, false); }
//         });
//     }
// ));

// next attempt at authorization method
// 'User' will need to be replaced with whatever variable we use for the guests?
passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    function(email, password, done){
        db.user.findone({
            where: { email: email }
        }).then(dbUser => {
            if (!dbUser) {
                return done(null, false, { message: "Invalid Login Credentials."});
            }
            else if (!dbUser.validPassword(password)) {
                return done(null, false, { message: 'Invalid Login Credentials'});
             }
             return done(null, dbUser);
        });
    }

));

passport.serializeUser((user, cb) => {
    cb(null, user);
});
passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

module.exports = passport;