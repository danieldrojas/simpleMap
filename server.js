const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const jsonData = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];
app.get("/google-api/map", (req, res) => {
  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_MAP}&callback=initMap&libraries=&v=weekly`;
  res.json(map);
});

var http = require("http");
var options = {
  host: "maps.googleapis.com",
  path: "/maps/api/directions/json?origin=Toronto&destination=Montreal&avoid=highways&mode=bicycling",
};
callback = function (response) {
  // variable that will save the result
  var result = "";

  // every time you have a new piece of the result
  response.on("data", function (chunk) {
    result += chunk;
  });

  // when you get everything back
  response.on("end", function (res) {
    console.log(res);
  });
};

http.request(options, callback).end();

app.listen(port, () => {
  console.log(`Express server running on port: ${port}`);
});
