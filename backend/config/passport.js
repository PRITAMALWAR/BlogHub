const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        let user = await User.findOne({
          $or: [
            { googleId: profile.id },
            { email }
          ],
        });

        // Existing user
        if (user) {
          // Link Google account if user registered normally
          if (!user.googleId) {
            user.googleId = profile.id;

            if (!user.picture) {
              user.picture = profile.photos?.[0]?.value;
            }

            await user.save();
          }

          return done(null, user);
        }

        // New Google user
        user = await User.create({
          username: profile.displayName,
          email,
          googleId: profile.id,
          picture: profile.photos?.[0]?.value,
        });

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Session Support
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);

    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;