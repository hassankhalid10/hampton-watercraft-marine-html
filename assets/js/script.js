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
            margin: 24,
            smartSpeed: 600,
            responsive: {
                0: { items: 1.1 },
                576: { items: 2 },
                992: { items: 3 }
            }
        });

        $('.hwmArrivalsPrev').on('click', function () {
            arrivals.trigger('prev.owl.carousel');
        });

        $('.hwmArrivalsNext').on('click', function () {
            arrivals.trigger('next.owl.carousel');
        });
    }

});
