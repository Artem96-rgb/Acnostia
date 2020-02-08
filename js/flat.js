
// ----------------------------------slick slider----------------------------------------
// $(document).ready(function () {
//     $('.slick-header').slick({
//         dots: true

//     });
// });



// var myFullpage = new fullpage('#fullpage', {
//     autoScrolling: false,
//     anchors: ['slick', 'serv', 'about'],
//     menu: '#nav',
// });



function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}