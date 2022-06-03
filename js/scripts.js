$(document).ready(function(){

    $('.slide-one').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            850:{
                items:2
            },
            1400:{
                items:4
            }
        }
    });
    $(".slide-two").owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
           800:{
                items:2
            },

            1000:{
                items:3
            }
        }
    });
});


