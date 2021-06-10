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

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  console.log("this is request: ", req.url);
  // let map;
  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: 35.2784, lng: -93.1338 },
  //     zoom: 8,
  //   });
  // }

  // const src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY_MAPS_GOOGLE}&libraries=geometry,places,localContext&callback=initMap`;
  // console.log(src);
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Express server running on port: ${port}`);
});
