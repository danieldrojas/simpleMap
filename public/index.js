let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap;

var url = "http://localhost:3001/google-api/map";
var xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    try {
      console.log(this);
    } catch (err) {
      console.log(err.message);
      return;
    }
  }
};
xmlhttp.open("GET", url);
xmlhttp.send();
