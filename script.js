$(document).ready (function (){
    // ............................ scrollbar sart......................
    let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function(){
        let progressHeight  = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
    }
    // ............................ scrollbar end......................
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

    // ...................................mixitup start..............................
    var mixer = mixitup('.project');
    // ...................................mixitup end..............................

    
});

