// Getting some data

var URL = "http://api.open-notify.org/iss-now.json";

var request = require("request");

request(URL, function(err, response, body) {
    if (err) {
        console.log("There was an error!");
    }
    else {
        console.log("Latitude= " + JSON.parse(body).iss_position.latitude.toFixed(2));
        console.log("Longitude= " + JSON.parse(body).iss_position.longitude.toFixed(2));
    }
});
