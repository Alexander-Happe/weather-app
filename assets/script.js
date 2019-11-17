$(document).ready(function() {
    var lat
    var lon 
  $(".submitBttn").on("click", function(){
      console.log("working")
        var userInput = $(".userInput").val().trim()
        console.log(userInput)
        var apiKey = "&appid=807697c8abaab370e791d61bef0eb5b3"
        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + apiKey;
        console.log(queryUrl)
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            console.log(response)
            $(".dump").html("<h1>" + response.name + " Weather Details</h1>");
            $(".dump").text("Wind Speed: " + response.wind.speed);
            $(".dump").text("Humidity: " + response.main.humidity);
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempF);

            lat = response.coord.lat
            lon = response.coord.lon
            queryUrl = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=807697c8abaab370e791d61bef0eb5b3&lat=" + lat + "&lon=" + lon
            $.ajax({
                url: queryUrl,
                method: "GET"
            }).then(function(response){
                UVI = response[0].value
                $(".dump").text("UV index: " + UVI)
            })
        })
    })
});