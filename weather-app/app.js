import geo from "./utils/geocode.js";
import fore from "./utils/forcast.js";

const place = process.argv[2];
if (place)
    geo.geoCode(place, (error, loc) => {
        if (error) {
            console.log("Error " + error);
            //console.log("Data", data);
        } else {
            const { latitude, longitude, place_name } = loc;
            fore.forecast(latitude, longitude, (error, data) => {
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
                    const { temperature, feelslike, weather_descriptions } = data;
                    console.log(
                        "It's " +
                            temperature +
                            " degrees, feels like " +
                            feelslike +
                            ". " +
                            weather_descriptions
                    );
                }
            });
        }
    });
else console.log("City not provied!");
