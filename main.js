//api documentation for weather api: https://openweathermap.org/api
$(document).ready(function(){

  var apiKey = 'd10abde90c7cee0d8822efcb05100358';
  var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';



  $('#weather-button').on('click', function(){
    $('.weatherresults').empty();
    var inputValue = $('#city-input').val().toLowerCase().split(" ").join("+");
    weatherApiUrl += inputValue;
    
    var resultsDiv = $('div');
    resultsDiv.addClass('weatherresults');
    $.ajax({
      type: 'GET',
      url: weatherApiUrl,
      success: function(response){
      console.log(response)

        var div = $('<div>');
        div.addClass('row');

        var blankDiv = $('<div class="col-md-4">');
        div.append(blankDiv);

        var infoDiv = $('<div>');
        infoDiv.addClass('well text-center center-block col-md-4');

        var temperature = $('<p>');
        temperature.text("The Temp is " + response.main.temp);
        temperature.css('font-size', '50px');

        var wind = $('<p>');
        wind.text("The wind is " + response.wind.speed);
        wind.css('font-size', '50px');

        var humidity = $('<p>');
        humidity.text("The humidity is " + response.main.humidity);
        humidity.css('font-size', '50px');

        var description = $('<p>');
        description.text(response.weather.description);
        description.css('font-size', '50px');

        var temp_min = $('<p>');
        temp_min.text("The Temp Min " + response.main.temp_min);
        temp_min.css('font-size', '50px');

        var temp_max = $('<p>');
        temp_max.text("The Temp Max: " + response.main.temp_max);
        temp_max.css('font-size', '50px');

		    //$('#weather-results').append(temperature);
        //$('#weather-results').append("The wind is: " + wind);
        //$('#weather-results').append(humidity);
       	//$('#weather-results').append(description);
       	//$('#weather-results').append(temp_min);
        //$('#weather-results').append(temp_max);

        infoDiv.append(temperature).append(wind).append(humidity).append(description).append(temp_min).append(temp_max);
        div.append(infoDiv);

        $('div').eq(0).append(div);
      }
    });
  });

})