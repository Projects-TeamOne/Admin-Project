const express  = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html")
    
});

app.post("/" , (req, res) => {
    const query = req.body.cityName;
    const apiKey = "f54610e80312c25df461ddab1475f7d2";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
   
    https.get(url, (response) => {
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon
            const imgURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>");
            res.write("<p> The weather is currently " + weatherDesc + "</p>")
            res.write("<img src=" + imgURL + ">")
            res.send();
        });
    });
});



app.listen(3000, () => console.log("Server is running on port 3000."));