$(document).ready (function (){
    // .............................sticky top start.......................................
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        var sticky = $('.sticky-top');

        if (scrolling >= 100) {
            sticky.addClass('nab-bg');
        } else{
            sticky.removeClass('nab-bg');
        }
    })
    // .................................sticky top end...................................

    // ..................................venobox start...................................
    $('.venobox').venobox({
        framewidth: '550px',
        frameheight: '450px',
        border: '10px',
    });
    // ..................................venobox end...................................

    
});

