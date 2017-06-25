const User = require('../app/models/users.js');
const LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
    done(null, user.userid);
    });

    passport.deserializeUser(function(id, done) {
        User.findUser(id, 1, function(err, user){
            if (err !== null)
            {
                console.log(err);
            }
            else
            {
                done(null, user[0]);
            }
        });
});

passport.use('local-login', new LocalStrategy(  {
        usernameField : 'em',
        passwordField : 'password',
        passReqToCallback : true
    },
    function (req, email, password, done) {

        User.getUser(email, password, 1, function(err, users){
                if (err) { 
                    console.log(err);
                    return done(err); }
                if(users.length == 0) {
                    
                    return done(null, false, { message: 'Incorrect username and password' });
                }
                console.log('2');
                console.log(users[0]);
                return done(null, users[0]);

            });
    }
))
}

