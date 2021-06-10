const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/static")));

// }

app.get("/", (req, res) => {
  app.use(express.static(path.join(__dirname, "/public")));
});

app.listen(port, () => {
  console.log(`Express server running on port: ${port}`);
});
