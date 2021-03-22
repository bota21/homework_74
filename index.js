const express = require("express");
const products = require("./app/message");
const db = require("./fileDb");
const app = express();

const port = 2100;

db.init();

app.use(express.json());
app.use("/messages", products(db));

app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
