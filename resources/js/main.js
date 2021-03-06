$(document).ready(function () {

    /* for the sticky navigation */

    $('.js__section_features').waypoint(function (direction) {

        if (direction === 'down') {
            console.log(direction);
            $('.navbar').addClass('sticky');
        }
        else {
            console.log(direction);
            $('.navbar').removeClass('sticky');
        }
    }, { offset: '40%' });

    /* scroll to section navigation */

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /* animations */

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, { offset: '50%' });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, { offset: '50%' });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated zoomIn');
    }, { offset: '50%' });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, { offset: '50%' });

    setTimeout(function () {
        $('.js--wp-5').addClass('animated pulse');
    }, 14500);

    $('.mobile-nav-icon').on('click', function (event) {
        event.preventDefault();
        if ($('.mobile-nav-icon i').hasClass('ion-navicon-round')) {
            $('.mobile-nav-icon i').removeClass('ion-navicon-round');
            $('.mobile-nav-icon i').addClass('ion-close');
            $('.navbar-list .list-inline').removeClass('mobile-list');
        }
        else {
            $('.mobile-nav-icon i').addClass('ion-navicon-round');
            $('.mobile-nav-icon i').removeClass('ion-close');
            $('.navbar-list .list-inline').addClass('mobile-list');
        }
        
    })

}); 