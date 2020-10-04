/* global WIKI */

// ------------------------------------
// 42 Account
// ------------------------------------

const FortyTwoStrategy = require('passport-42').Strategy

module.exports = {
  init (passport, conf) {
    passport.use('42',
      new FortyTwoStrategy({
        clientID: conf.clientId,
        clientSecret: conf.clientSecret,
        callbackURL: conf.callbackURL,
        passReqToCallback: true
      }, async (req, accessToken, refreshToken, profile, cb) => {
        try {
          const user = await WIKI.models.users.processProfile({
            providerKey: req.params.strategy,
            profile: {
              ...profile,
              id: id,
              displayName: displayname,
              picture: image_url
            }
          })
          cb(null, user)
        } catch (err) {
          cb(err, null)
        }
      })
    )
  }
}
