
// ----------------------------------slick slider----------------------------------------
// $(document).ready(function () {
//     $('.slick-header').slick({
//         dots: true

//     });
// });



new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true
});





function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}