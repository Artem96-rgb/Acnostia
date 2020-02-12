
// ---------------------slick slider--------------------
$('.slick-top').slick({
    arrows: false,
    dots: true,
    vertical: true,
});





// ---------------------burger--------------------

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// ---------------------map--------------------
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}



// ---------------------isotope--------------------

$(".work__pictures").isotope({
    // options
    itemSelector: ".ret__item",
    layoutMode: "fitRows"
});

$(".work__portfolio-menu .work__portfolio-link").click(function () {
    $(".work__portfolio-menu .work__portfolio-link").removeClass("active")
    $(this).addClass("active");

    let selector = $(this).attr("data-filter")
    $(".work__pictures").isotope({
        filter: selector
    });

    return false
});

// ------------------переход между сылками--------------------------


$(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
