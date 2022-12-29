const router = require('express').Router();
const passport = require('passport');

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "Successfull",
            user: req.user
        })
    }
})

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure"
    })
})

// logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(process.env.NODE_CLIENT_URL);
})

router.get("/google", passport.authenticate('google', { scope: ['profile'] }));

router.get("/google/callback", passport.authenticate('google', {
    successRedirect: process.env.NODE_CLIENT_URL,
    failureRedirect: "/login/failed"
}));

module.exports = router;