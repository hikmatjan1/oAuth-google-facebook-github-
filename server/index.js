const express = require('express');
const cookieSession = require('cookie-session');
const cors = require('cors');
require('dotenv').config();
const passport = require('passport');
const app = express();
require('./passport');
const authRoutes = require('./routes/auth');

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH",
    credentials: true
}));
app.use(express.json());

// cookie session
app.use(cookieSession({
    name: "session",
    keys: ['hikmatjan'],
    maxAge: 24 * 60 * 60 * 100,
    // secure: true
}))

// passport
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

// port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(port + " is working");
}) 