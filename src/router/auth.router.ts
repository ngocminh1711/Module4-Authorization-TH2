import passport from "../middleware/passport";
import express from "express";

const authRouter = express.Router();

authRouter.get('/login/google', passport.authenticate('google', {scope: ['profile', 'email']}));
// Retrieve user data using the access token received

authRouter.get(

    "/google/callback",

    passport.authenticate('google'),

    (req, res) => {

        res.send("You are authenticated")

    })

export default authRouter;