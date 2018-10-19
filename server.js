const express = require('express');
const cors = require('cors');
const session = require('express-session');

const sessionConfig = {
  secret: 'for the greater good',
  name: 'token',
  resave: false,
  saveUnitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60,
    httpOnly: true
  }
}

const configureRoutes = require('./config/routes');

const server = express();
const corsOptions = {
  // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
  // ensure that your client's URL/Port can achieve a Handshake
  // then pass this object to the cors() function
};

server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

configureRoutes(server);

module.exports = {
  server,
};
