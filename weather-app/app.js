import geo from "./utils/geocode.js";
import fore from "./utils/forcast.js";

const place = process.argv[2];
if (place)
    geo.geoCode(place, (error, { latitude, longitude, place_name } = {}) => {
        if (error) {
            console.log("Error " + error);
            //console.log("Data", data);
        } else {
            fore.forecast(
                latitude,
                longitude,
                (error, { temperature, feelslike, weather_descriptions } = {}) => {
                    if (error) console.log("error", error);
                    else {
                        console.log(
                            "City: " +
                                place_name +
                                ". Latitude: " +
                                latitude +
                                " Longitude: " +
                                longitude +
                                "."
                        );
                        console.log(
                            "It's " +
                                temperature +
                                " degrees, feels like " +
                                feelslike +
                                ". " +
                                weather_descriptions
                        );
                    }
                }
            );
        }
    });
else console.log("City not provied!");
