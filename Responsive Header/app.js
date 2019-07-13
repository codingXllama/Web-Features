// Creating the Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {

        // $('nav').addClass('black');
        $("header").css("background-color", "#333");

    } else {
        $("header").css("background-color", "transparent");
    }




})