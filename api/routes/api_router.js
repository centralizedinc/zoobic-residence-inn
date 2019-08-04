'use strict'

var axios = require('axios');
var express = require('express');
var async = require("async");

var api_router = express.Router();

// Models
var ReservationModel = require("../models/ReservationModel.js")

api_router.route("/hotels/details/:id").get((req, res) => {
  var details_endpoint =
    "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +
    req.params.id +
    "&fields=photos,name,rating,formatted_phone_number,formatted_address&key=" +
    process.env.GOOGLE_API_TOKEN;

  axios
    .get(details_endpoint)
    .then(details => {
      console.log(JSON.stringify(details.data));
      res.json(details);
      //   var photo_id = details.data.result.photos[0].photo_reference;
      //   var photo_endpoint =
      //     "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
      //     photo_id +
      //     "&key=" +
      //     process.env.GOOGLE_API_TOKEN;
      //   hotel.image_url = photo_endpoint;
      //   hotels.push(hotel);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(200);
    });
});

api_router.route("/hotels/:coordinates").get((req, res) => {
  var hotels = [];
  var coordinates = req.params.coordinates;
  var base_url = "";
  var places_endpoint =
    "https://maps.googleapis.com/maps/api/place/radarsearch/json?location=" +
    coordinates +
    "&type=lodging&radius=5000&rankby=distance&fields=photos,formatted_address,name,rating,opening_hours&key=" +
    process.env.GOOGLE_API_TOKEN;
  axios.get(places_endpoint).then(places => {
    var locations = places.data.results.slice(0, 5);

    async.forEach(
      locations,
      (place, callback) => {
        var hotel = {};
        var place_id = place.place_id;
        var details_endpoint =
          "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +
          place_id +
          "&fields=photos,name,rating,formatted_phone_number,formatted_address&key=" +
          process.env.GOOGLE_API_TOKEN;

        axios
          .get(details_endpoint)
          .then(details => {
            hotel.title = details.data.result.name;
            hotel.subtitle = details.data.result.formatted_address;
            hotel.buttons = [
              {
                type: "web_url",
                url:
                  "https://zoobic-residence-inn.herokuapp.com/#/view/hotel?id=" +
                  place_id,
                title: "View Details",
                webview_height_ratio: "full",
                messenger_extensions: true
              }, //     type: "postback", //   {
              //     title: "View Details",
              //     payload: "VIEW_HOTE_DETAILS_#" + details.data.place_id
              //   },
              //   {
              //     type: "postback",
              //     title: "Book Now",
              //     payload: "GET_DIRECTIONS_#"
              //   },
              {
                type: "web_url",
                url: "https://zoobic-residence-inn.herokuapp.com/#/book?id=" + place_id,
                title: "Book Now",
                webview_height_ratio: "full",
                messenger_extensions: true
              },
              {
                type: "postback",
                title: "Get Directions",
                payload: "GET_DIRECTIONS_#"
              }
            ];

            var photo_id = details.data.result.photos[0].photo_reference;
            var photo_endpoint =
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
              photo_id +
              "&key=" +
              process.env.GOOGLE_API_TOKEN;

            hotel.image_url = photo_endpoint;

            hotels.push(hotel);
            callback();
          })
          .catch(error => {
            console.error(error);
          });
      },
      err => {
        res.json({ hotels });
      }
    );
  });
});

api_router.route("/reservation")
.get((req, res) => {
  ReservationModel.find({}, (datas) => {
    res.json(datas)
  });
})
.post((req, res) => {
  var reservation = new ReservationModel(req.body);
  reservation.save(err => {
    res.json({
      success: true
    })
  })
});

module.exports = api_router;