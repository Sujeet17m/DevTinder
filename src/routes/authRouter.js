const express = require('express');

const authRouter = express.Router();

// Example route for user login
authRouter.post('/login' ,usetAuth, (req, res) => {
    res.send("User login endpoint");

})

module.exports = authRouter;