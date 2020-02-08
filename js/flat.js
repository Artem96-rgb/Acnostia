

$('.slick-top').slick({
    arrows: false,
    dots: true,
    vertical: true,
});




// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8
//     });
// }


$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}