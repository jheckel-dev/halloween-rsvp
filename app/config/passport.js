const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    function(email, password, done){
        db.user.findone({
            where: { email: email }
        }).then(dbUser => {
            if (!dbUser) {
                return done(null, false, { message: 'Incorrect Credentials'});
            }
            else if (!dbUser.validPassword(password)) {
                return done(null, false, { message: "Invalid Credentials"});
            }
            return done(null, dbUser);
        });
    }
));

passport.serializeUser((user, cb) => {
    db(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

module.export = passport;