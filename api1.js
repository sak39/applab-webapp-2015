var url = "http://api.openweathermap.org/data/2.5/weather?q=London";

jQuery.getJSON(url, function(data){
    alert(url);
});

var elem = documet.getElementById("temp_max");


