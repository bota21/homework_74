const express = require("express");
const router = express.Router();

const createRouter = db => {
  router.get("/", (req, res) => {
    const messages = db.getItems();    
    res.send(messages);
  });
  router.post("/", (req, res) => {
    const date = new Date();
    const product = {...req.body, date};
    db.addItem(product);
    res.send(product);
  });
  return router;
};


module.exports = createRouter;
