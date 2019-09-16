
$(document).ready(function() {
  
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('There was an error');
    }
  
  function weather(lat, long){
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    $.getJSON(URL,function(data){
      console.log(data);
      updateinfo(data);
    });
  }
  
  function updateinfo(data){
    var CityName = data.name;
    var number = Math.round(data.main.temp);
    var description = data.weather[0].description;
    var icon = data.weather[0].icon;
    $("#CityName").html(CityName);
    $("#number").html(number);
    $("#description").html(description);
    $("#icon").attr('src',icon);
    if (description.indexOf('ain') != -1){
      $("#clothingdescrip2").html("And don't forget to grab an umbrella!");
    } else {
      $("#clothingdescrip2").html("");
    }
    if (number <= -20){
      $("#clothingdescrip").html("It's freezing outside. Maybe just stay inside today. Otherwise, bundle up with everything you have.");
    } else if (number <= -10){
      $("#clothingdescrip").html("It's really cold outside. Grab your biggest winter coat, some gloves, a scarf, and a hat.");
    } else if (number <= 0){
      $("#clothingdescrip").html("It's pretty cold outside. Definitely wear your biggest winter coat.");
    } else if (number <= 10){
      $("#clothingdescrip").html("It's cold outside. Wear a warm coat.");
    } else if (number <= 15){
      $("#clothingdescrip").html("It's cool outside. Wear a light jacket or a sweater.");
    } else if (number <= 20){
      $("#clothingdescrip").html("It's kind of warm outside. Some jeans and a long sleeve shirt would be appropriate.");
    } else if (number <= 25){
      $("#clothingdescrip").html("It's warm outside. Shorts and a shirt, or maybe jeans and a t-shirt.");
    } else if (number <= 30){
      $("#clothingdescrip").html("It's hot today. It's shorts and a t-shirt kind of weather.");
    } else if (number <= 45){
      $("#clothingdescrip").html("Wow it's steamy. It's shorts and a tank top kind of weather");
    } else {
      $("#clothingdescrip").html("It's burning outside. Maybe just stay inside today.");
    }
  }
});
