
// ----------------------------------slick slider----------------------------------------
$(document).ready(function () {
    $('.slick-header').slick({
        dots: true

    });
});



var myFullpage = new fullpage('#fullpage', {
    autoScrolling: false,
    anchors: ['slick', 'serv', 'about'],
    menu: '#nav',
});