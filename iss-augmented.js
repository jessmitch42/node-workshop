var prompt = require("prompt");
var request = require("request");

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  };

// calculating distance stuff:
function calculateDistance(lat1, lat2, lon2, lon1) {
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    console.log(d);
}

// find long and lat of input=Montreal
var urlIss = "http://api.open-notify.org/iss-now.json";

request(urlIss, function(err, response, body) {
    if (err) {
        console.log("There was an error!");
    }
    else {
        var issLat = JSON.parse(body).iss_position.latitude;
        var issLong = JSON.parse(body).iss_position.longitude;
        
        prompt.get("location", function(err, result) {
            if (err) {
                console.log("Oops! There was an error!");
            }
            else {
                var url2 = ("https://maps.googleapis.com/maps/api/geocode/json?address=" + result.location);
                request(url2, function(err, response, body) {
                    if (err) {
                        console.log("Oops! Error!");
                    }   
                    else {
                        var userLat = JSON.parse(body).results[0].geometry.location.lat;
                        var userLong = JSON.parse(body).results[0].geometry.location.lng;
                    
                        calculateDistance(issLat, userLat, issLong, userLong);
                    }
                });
            }
        });
    }
});