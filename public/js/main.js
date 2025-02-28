(function ($) {

    $(document).ready(function () {

        // sticky header ----------
        function sticky_header() {
            var wind = $(window);
            var sticky = $('.header_area');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 50) {
                    sticky.removeClass('header_fixed');
                } else {
                    sticky.addClass('header_fixed');
                }
            });
        }
        sticky_header();


        //  Back to top button ----------
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });


        // animation for Back to top button ----------
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });


        // Hamburger-menu ----------
        $(document).on('click', function (event) {
            // Check if the click is outside the ofcanvas menu and the hamburger menu
            if (!$(event.target).closest('.ofcavas-menu, .hamburger-menu').length) {
                $('.hamburger-menu .line-top, .hamburger-menu .line-center, .hamburger-menu .line-bottom, .ofcavas-menu').removeClass('current');
            }
        });

        // Toggle the ofcavas menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .hamburger-menu .line-center, .hamburger-menu .line-bottom, .ofcavas-menu').toggleClass('current');
        });

        // Hide the ofcavas menu when a link is clicked
        $('.ofcanvas_body a').on('click', function () {
            $('.hamburger-menu .line-top, .hamburger-menu .line-center, .hamburger-menu .line-bottom, .ofcavas-menu').removeClass('current');
        });

        // AOS animation ----------
        AOS.init({
            duration: 700,
            offset: 0,
        });        
    });
})(jQuery);



$(document).ready(function () {
    const targetDate = new Date("January 31, 2025 20:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining >= 0) {
            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update the countdown values
            $("#days").text(days < 10 ? "0" + days : days);
            $("#hours").text(hours < 10 ? "0" + hours : hours);
            $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
            $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);
        } else {
            // If the countdown is over
            $("#days, #hours, #minutes, #seconds").text("00");
            clearInterval(timerInterval);
        }
    }

    // Call updateCountdown every second
    const timerInterval = setInterval(updateCountdown, 1000);

    // Initial update
    updateCountdown();
});
