$(function() {

    // MODAL OVERLAY

    $('.box').on('click',function() {
        // get all the box's html and store it
        var html = $(this).html();
        // put it in the modal container
        $('.overlayContent').html(html);
        // select and show the overlay styles
        $('.overlay').fadeIn(500);

    // SET BACKGROUND IMAGE

        // find the image and store it
        var full = $(this).find('img.background').attr('data');
        // add the image to the background url in the css
        $('.overlay').css('background-image', 'url(' + full + ')');
    });

    // event listener for close link:

    $('a.close').on('click',function() {
        $('.overlay').fadeOut(500);
    });

    // event listener for escape key:

    $(document).on('keyup', function() {
        if(event.keyCode === 27) {
            $('.overlay').fadeOut(500);
        }
    });

});