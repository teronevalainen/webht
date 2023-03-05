var express = require('express');
var router = express.Router();
const User = require("../models/User");

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
mongoose.set('strictQuery', false);
/* register new user, checking for existing usernames and strong passwords, hashing password and saving it to the database  */
router.post("/register",
  body("email").isEmail(),
  body("username").isLength({ min: 3 }).trim().escape().withMessage("Username is too short"),
  body("password").isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }),
  (req, res) => {

    const valErr = validationResult(req); // check if errors in validation
    if (!valErr.isEmpty()) {
      console.log("?")
      return res.status(400).json({ Errors: [{ msg: "Password is not strong enough" }] })
    }

    User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        return res.json("Timed out for finding documents in collection: users");
      }
      if (!user) {
        let salt = bcrypt.genSaltSync(10);
        const newUser = new User({
          email: req.body.email,
          username: req.body.username,
          password: bcrypt.hashSync(req.body.password, salt)
        }).save((err) => {
          if (err) throw err;
          else {
            return res.json({ "success": true })
          }
        })
      } else {
        return res.status(403).json({ Errors: [{ msg: "Username already in use." }] })
      }

    })
  });

router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) { res.json("Timed out for finding documents in collection: users") };
    if (!user) { return res.status(401).json({ Errors: [{ msg: "Invalid credentials" }] }) }
    else {
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err) throw (err);
        else {
          if (!isMatch) {
            return res.status(401).json({ Errors: [{ msg: "Invalid credentials" }] })
          } else {
            const jwtPayload = {
              username: user.username
            };
            console.log("User logged in");
            jwt.sign(jwtPayload, process.env.SECRET, { expiresIn: 60 }, (err, token) => {
              if (err) throw (err);
              else {
                res.json({ success: true, token })
              }
            })
          }
        }
      });
    }
  })
})




module.exports = router;
