$( function(){
    $(window).on('scroll', function(){
        var scroll = $(window).height() + $(window).scrollTop();
        var offset1 = $('.index_right').offset().top;
        var offset2 = $('.index_right').offset().top;
        var offset3 = $('.about').offset().top;
        var offset4 = $('.port').offset().top;
        var offset5 = $('.contact').offset().top;
        // console.log(offset4)
        if( scroll < offset1 && scroll < offset2 ){
        }else if( scroll > offset2 && scroll < offset3 ){
            $('.ani1').addClass('ani');
            $('.ani2').removeClass('ani');
        }
        else if( scroll > offset3 && scroll < offset4 ){
            $('.ani2').addClass('ani');
            $('.ani1').removeClass('ani');
            $('.ani3').removeClass('ani');
        }else if( scroll > offset4 && scroll < offset5 ){
            $('.ani3').addClass('ani');
            $('.ani1').removeClass('ani');
            $('.ani2').removeClass('ani');
            $('.ani4').removeClass('ani');
        }else if( scroll > offset5){
            $('.ani4').addClass('ani');
            $('.ani1').removeClass('ani');
            $('.ani3').removeClass('ani');
        }
    });
    $('.prt_main > li > a').on('mouseenter', function(){
        $(this).addClass('active')
    })
    $('.prt_main > li > a').on('mouseleave', function(){
        $(this).removeClass('active')
    });


    $('.menu .ani1').on('click', function(){
        $('html').stop().animate({
            scrollTop:0
        }, 400)
    })
    $('.menu .ani2').on('click', function(){
        $('html').stop().animate({
            scrollTop:880 + 'px'
        }, 400)
    })
    $('.menu .ani3').on('click', function(){
        $('html').stop().animate({
            scrollTop:1500 + 'px'
        }, 400)
    })
    $('.menu .ani4').on('click', function(){
        $('html').stop().animate({
            scrollTop:2400 + 'px'
        }, 400)
    })

})
