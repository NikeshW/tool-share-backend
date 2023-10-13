const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const usersController = require('./controllers/UserController')

const toolsController = require('./controllers/ToolsController')

app.use('/users', usersController)
app.use('/tools', toolsController)

app.get("/", (request, response) => {
  response.send("Welcome to Tool Share!");
});

app.get("/test", (request, response) => {
  response.json({
    test: "success",
    time: "1pm",
  });
});

module.exports = app;