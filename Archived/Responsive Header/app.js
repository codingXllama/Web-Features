// Creating the Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {

        // $('nav').addClass('black');
        $("header").css("background-color", "rgba(87, 87, 87, 0.3)");

    } else {
        $("header").css("background-color", "transparent");
    }




})