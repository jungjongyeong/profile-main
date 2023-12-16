// js
 $(function(){
    $('.btn_popup').on('click', function(){
        $('.popup').fadeIn()
    });
    $('.popup .close').on('click', function(){
        $(this).parent('popup').fadeOut();
    });

    //
    $('.btn_side').on('click', function(){
        $('.side_gnb').animate({
            left:0,
            opacity:1
        }, 1);
    })

    $('.side_gnb .close').on('click', function(){
        $(this).parent().animate({
            left:-100+'%',
            opacity:0
        }, 1000);
    })

    $('.btn_side').on('click', function(){
        $('.side_gnb').addClass('active');
    });
    $('.side_gnb .close').on('click', function(){
        $(this).parent().removeClass('active')
    });

    // $('.gnb > ul > li').on('mouseenter keyup', function(){
    //     $(this).children('ul').stop().slideDown(300);
    //     $(this).siblings().children('ul').stop().slideUp(300);
    // });
    // $('.gnb > ul > li').on('mouseleave', function(){
    //     $(this).children('ul').stop().slideUp(300);
    // })
    // $('.gnb').on('mouseenter keyup', function(){
    //     $(this).children('ul').find('ul').show();
    // });
    // $('.gnb').on('mouseleave', function(){
    //     $(this).children('ul').find('ul').hide();
    // });
    //
    // $('.gnb > ul > li:last-child a').on('blur', function(){
    //     $('.gnb').children('ul').find('ul').hide();
    // })

    $('.snb > ul > li').on('mouseenter keyup', function(){
        $(this).addClass('active')
        $(this).children('ul').slideDown();
        $(this).siblings().children('ul').slideUp();
    })
    $('.snb > ul > li').on('mouseleave', function(){
        $(this).removeClass('active')
        $(this).children('ul').slideUp();
    })

// 탭메뉴
$('.tabs li').on('click', function(){
    var idx = $(this).index();
    // console.log(idx);

    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
    $(this).parents('.tab_group').children('.tab_contents').children('div').eq(idx).addClass('active');
    $(this).parents('.tab_group').children('.tab_contents').children('div').eq(idx).siblings().removeClass('active');
})

$('.faq_list li > button').on('click', function(){
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().children('div').stop().slideUp();
    $(this).parent().addClass('on').siblings().removeClass('on')
})

$('.select > button').on('click', function(){
    $(this).next().stop().slideToggle();
    $(this).toggleClass('active');
});
$('.select li button').on('click', function(){
    var txt = $(this).text();
    // console.log(txt);
    $(this).parent().parent().slideUp();
    $(this).parent().parent().prev().removeClass('active').text(txt);
});

$(window).on('scroll', function(){

    var scroll_top = $(this).scrollTop();
    // console.log(scroll_top);

    // if(scroll_top > 125){
    //     $('body').addClass('fix');
    // }else {
    //     $('body').removeClass('fix');
    // }

})


    // console.log(section3)

    if( scroll > section1 && scroll < section2){
        $('.section1').addClass('ani_show')
    }
})










});
