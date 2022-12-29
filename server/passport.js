const passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.NODE_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NODE_GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        // console.log(profile);
        console.log(profile);
        done(null, profile);
        // save mongodb -----------------------------------------
        // const user = {
        //     username: profile.displayName,
        //     avatar: profile.photos[0],

        // }
    }
));

// serialize
passport.serializeUser((user, done) => {
    done(null, user);
})

// deserialize
passport.deserializeUser((user, done) => {
    done(null, user);
})