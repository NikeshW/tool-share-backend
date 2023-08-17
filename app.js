const express = require("express");

const app = express();



// handle a get request
app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.get("/test", (request, response) => {
  response.json({
    test: "success",
    time: "1pm",
  });
});

module.exports = app;