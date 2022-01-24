import request from "postman-request";

const forecast = (latitude, longitude, callback) => {
    const url =
        "http://api.weatherstack.com/current?access_key=d7760b2069ce99d1a5ba1177c3e6d6b2&query=" +
        latitude +
        "," +
        longitude;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect", undefined);
        } else if (response.body.error) {
            callback("Unable to find location", undefined);
            debugger;
        } else {
            const { temperature, feelslike, weather_descriptions } =
                response.body.current;
            weather_descriptions = weather_descriptions[0];
            callback(undefined, { temperature, feelslike, weather_descriptions });
        }
    });
};
export default {
    forecast: forecast,
};
