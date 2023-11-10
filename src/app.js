const express = require("express");
const app = express();

const usersRoute = require('../routes/users');
const fruitsRoute = require('../routes/fruits');

app.use(express.json());
app.use(express.urlencoded());

app.use('/users', usersRoute);
app.use('/fruits', fruitsRoute);

module.exports = app;