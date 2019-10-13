require("dotenv").config();
const axios = require("axios")
let cli = process.argv[2];
let input = process.argv[3];
const moment = require('moment')

switch (cli) {
    case 'concert-this':
        concertThis(input);
        break;
}


function concertThis(artist) {
    axios
        .get(
            "https://rest.bandsintown.com/artists/" +
            artist +
            "/events?app_id=codingbootcamp"
        )
        .then(function(response) {
            // console.log(response)
            console.log("Venue name:", response.data[0].venue.name);
            console.log("Venue location:", response.data[0].venue.city);
            // Format event date
            var eventDate = moment(response.data[0].datetime).format("MM/DD/YYYY");
            console.log("Event date:", eventDate);
        })
        .catch(function(error) {
            console.log(error);
        });
}