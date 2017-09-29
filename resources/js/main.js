$(document).ready(function () {

    $('.js__section_features').waypoint(function (direction) {

        if (direction === 'down') {
            console.log(direction);
            $('.navbar').addClass('sticky');
        }
        else {
            console.log(direction);
            $('.navbar').removeClass('sticky');
        }
    }, {
            offset: '40%'

        });

});