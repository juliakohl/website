/*!
* Start Bootstrap - New Age v6.0.0 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$('document').ready(function(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://numbersapi.p.rapidapi.com/random/math?fragment=true&json=true",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e7587c4907mshc1a117d6806a06dp14b038jsn25a4c5e15725",
            "x-rapidapi-host": "numbersapi.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        $('#random-fact').text(response.number+": "+response.text);
        console.log(response.text);
    });

    $.getJSON("https://api.countapi.xyz/hit/julia-kohl.de/visits", function(response) {
    $("#visits").text(response.value);
    });
});