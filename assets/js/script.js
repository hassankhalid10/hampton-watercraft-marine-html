$(document).ready(function () {

    // ============================================================
    // HAMPTON WATERCRAFT & MARINE — HOME PAGE JS
    // ============================================================

    // --- New Arrivals carousel (Owl Carousel) ---
    if ($('.hwmArrivalsCarousel').length) {
        var arrivals = $('.hwmArrivalsCarousel').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 64,
            smartSpeed: 600,
            responsive: {
                0: { items: 1.05, margin: 20 },
                576: { items: 2, margin: 32 },
                992: { items: 3.3, margin: 64 }
            }
        });

        $('.hwmArrivalsPrev').on('click', function () {
            arrivals.trigger('prev.owl.carousel');
        });

        $('.hwmArrivalsNext').on('click', function () {
            arrivals.trigger('next.owl.carousel');
        });
    }

    // --- Mercury Award gallery carousel (Owl Carousel) ---
    if ($('.hwmAwardCarousel').length) {
        $('.hwmAwardCarousel').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            smartSpeed: 700,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0:    { items: 1,   margin: 16 },
                576:  { items: 1,   margin: 16 },
                992:  { items: 2,   margin: 24 },
                1400: { items: 2,   margin: 24 }
            }
        });
    }

});
