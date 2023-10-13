const express = require("express");

const controller = express.Router();

const usersData = require("../users.json");

// get all students
controller.get("/", (req, res) => {
  res.json(usersData);
});

// get one user
controller.get("/:id", (req, res) => {
    try {
      const { id } = req.params;
  
      const userId = Number(id);
  
      console.log(userId); // NaN
  
      if (isNaN(userId)) {
       
        throw "id must be a number";
      }
    
      else {
        const user = usersData.find(
          (user) => Number(user.id) === userId
        );
  
        res.json(user);
      }
    } catch (error) {
      res.send(error);
    }
  });

module.exports = controller;
