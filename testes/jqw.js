$(document).ready(function () {
    $.ajax({
        url: "/api/getWeather"
        , data: {
            zipcode:78550000;
        }
        , success: function (result) {
            $("#weather").html(result);
        }
    });
});
