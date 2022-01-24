const path = require("path");
const express = require("express");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDir = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDir));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Adam Kafia",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About me",
        name: "Adam Kafia",
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        help: "This is a help message",
    });
});

app.get("/weather", (req, res) => {
    res.send({
        forecast: "Rainy day",
        location: "Tunis",
    });
});

app.listen(3000, () => {
    console.log("Server is upp on port 3000.");
});
