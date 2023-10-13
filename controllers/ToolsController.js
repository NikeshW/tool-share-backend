const express = require("express");

const controller = express.Router();

const toolsData = require("../tools.json");

// get all tools
controller.get("/", (req, res) => {
  res.json(toolsData);
});

// get one tool
controller.get("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const toolId = Number(id);

    if (isNaN(toolId)) {
      throw "id must be a number";
    } else {
      const tool = toolsData.find((tool) => Number(tool.id) === toolId);
      res.send(tool);
    }
  } catch (error) {
    res.send(error);
  }
});
module.exports = controller;
