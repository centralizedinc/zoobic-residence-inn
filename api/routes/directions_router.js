var axios = require("axios");
var qs = require("querystring");
var sender_helper = require("../utils/sender_helper.js");

var async = require("async");

var quickReply = [
  {
    content_type: "text",
    title: "Back to Main",
    payload: "RESET"
  }
];

exports.getDirections = function(sender, coordinates, callback) {
  var url =
    "http://maps.googleapis.com/maps/api/directions/json?origin=" +
    coordinates[0] +
    "&destination=" +
    coordinates[1] +
    "&sensor=false";

  axios.get(url).then(response => {
    if (response.data.error) {
      console.log("Error: ", response.data.error);
    }
    console.log(response.data);
    var directions = response.data;

    var step_by_step = [];
    var messages = [];

    if (
      directions === undefined ||
      directions === null ||
      directions.routes[0] === undefined ||
      (directions.routes[0] === null) |
        (directions.routes[0].legs[0] === undefined) ||
      directions.routes[0].legs[0] === null
    ) {
      var messages = [];
      messages.push({
        text: "Location is too far.",
        quick_replies: quickReply
      });

      sender_helper.sendSeriesMessages(sender, messages, status => {
        callback();
      });
    }

    //calculate distance
    sender_helper.typing(sender);
    var from = coordinates[0].split(",");
    var to = coordinates[1].split(",");
    var dist = distance(from[0], from[1], to[0], to[1], "K");

    var zoom = 15;
    if (dist < 1) {
      zoom = 17;
    } else if (dist >= 5 && dist < 7) {
      zoom = 14;
    } else if (dist >= 7 && dist < 10) {
      zoom = 13;
    } else if (dist >= 10 && dist < 20) {
      zoom = 12;
    } else if (dist >= 20 && dist < 40) {
      zoom = 11;
    } else if (dist >= 40) {
      zoom = 10;
    }

    var locationMap =
      "https://maps.googleapis.com/maps/api/staticmap?size=640x640&scale=2&markers=color:blue%7C" +
      coordinates[0] +
      "&markers=icon:https://png.icons8.com/metro/1600/finish-flag.png" +
      coordinates[1] +
      "&path=enc%3A" +
      directions.routes[0].overview_polyline.points +
      "&keys=" +
      process.env.GOOGLE_API_TOKEN;

    console.log("########## locationMap: " + locationMap);
    messages.push({
      attachment: {
        type: "image",
        payload: {
          url: locationMap
        }
      }
    });

    for (var i = 0; i < directions.routes[0].legs[0].steps.length - 1; i++) {
      var format = directions.routes[0].legs[0].steps[i].html_instructions;
      var symbol = "";
      var direction = format.toUpperCase();
      if (direction.indexOf("LEFT") !== -1) {
        symbol = "⬅";
      } else if (direction.indexOf("RIGHT") !== -1) {
        symbol = "➡";
      } else if (direction.indexOf("NORTHWEST") !== -1) {
        symbol = "↖";
      } else if (direction.indexOf("NORTHEAST") !== -1) {
        symbol = "↗";
      } else if (direction.indexOf("SOUTHWEST") !== -1) {
        symbol = "↙";
      } else if (direction.indexOf("SOUTHEAST") !== -1) {
        symbol = "↘";
      } else if (direction.indexOf("ROUNDABOUT") !== -1) {
        symbol = "🔄";
      } else if (direction.indexOf("RAMP") !== -1) {
        symbol = "🔼";
      } else if (direction.indexOf("CONTINUE") !== -1) {
        symbol = "⬆";
      } else {
        symbol = "⚠";
      }
      console.log(
        "distance: " +
          symbol +
          " " +
          directions.routes[0].legs[0].steps[i].distance.text +
          "-" +
          format
            .replace(/<b>/g, "")
            .replace(/<\/b>/g, "")
            .replace(/<div style=\"font-size:0.9em\">/g, " (")
            .replace(/<\/div>/g, ")")
      );
      step_by_step.push(
        symbol +
          " " +
          format
            .replace(/<b>/g, "")
            .replace(/<\/b>/g, "")
            .replace(/<div style=\"font-size:0.9em\">/g, " (")
            .replace(/<\/div>/g, ")")
      );
      messages.push({
        text:
          symbol +
          " " +
          format
            .replace(/<b>/g, "")
            .replace(/<\/b>/g, "")
            .replace(/<div style=\"font-size:0.9em\">/g, " (")
            .replace(/<\/div>/g, ")")
      });
    }

    var last_step =
      directions.routes[0].legs[0].steps[
        directions.routes[0].legs[0].steps.length - 1
      ].html_instructions;
    var last_step_formatted =
      "🏁 " +
      last_step
        .replace(/<b>/g, "")
        .replace(/<\/b>/g, "")
        .replace(/<div style=\"font-size:0.9em\">/g, " (")
        .replace(/<\/div>/g, ")");

    messages.push({ text: last_step_formatted, quick_replies: quickReply });

    sender_helper.sendSeriesMessages(sender, messages, status => {
      callback();
    });
  });
};

function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = (Math.PI * lat1) / 180;
  var radlat2 = (Math.PI * lat2) / 180;
  var theta = lon1 - lon2;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit == "K") {
    dist = dist * 1.609344;
  }
  if (unit == "N") {
    dist = dist * 0.8684;
  }
  return dist;
}
