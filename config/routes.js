const axios = require("axios");
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");
const { authenticate } = require("./middlewares");
const jsw = require("jsonwebtoken");
const jwtSecret = require("../_secrets/keys").jwtKey;

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

const generateToken = user => {
  const payload = {
    ...user
  };
  const secret = jwtSecret;
  const options = {
    expiresIn: "1h"
  };
  return jsw.sign(payload, secret, options);
};

function register(req, res) {
  // implement user registration
  let { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 12);
  password = hash;
  username = username.toLowerCase();
  db("users")
    .insert({ username, password })
    .then(count =>
      res.status(201).json({
        message: "successfully registered",
        count: count[0],
        user: { username, password }
      })
    )
    .catch(error => res.status(500).json(error));
}

function login(req, res) {
  // implement user login
  const { username, password } = req.body;
  db("users")
    .where({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: "Login successful", token, user });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    })
    .catch(error => res.status(500).json({ message: "Server error", error }));
}

function getJokes(req, res) {
  axios
    .get(
      "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
