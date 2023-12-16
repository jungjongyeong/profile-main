// js
 $(function(){
    // $('.btn_popup').on('click', function(){
    //     $('.popup').fadeIn()
    // });
    // $('.popup .close').on('click', function(){
    //     $(this).parent('popup').fadeOut();
    // });
    //
    // //
    // $('.btn_side').on('click', function(){
    //     $('.side_gnb').animate({
    //         left:0,
    //         opacity:1
    //     }, 1);
    // })
    //
    // $('.side_gnb .close').on('click', function(){
    //     $(this).parent().animate({
    //         left:-100+'%',
    //         opacity:0
    //     }, 1000);
    // })
    //
    // $('.btn_side').on('click', function(){
    //     $('.side_gnb').addClass('active');
    // });
    // $('.side_gnb .close').on('click', function(){
    //     $(this).parent().removeClass('active')
    // });

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
    $('.gnb').on('mouseenter', function(){
        $(this).children('ul').find('ul').show();
        $('.bg_nav').show();
    })
    $('.gnb').on('mouseleave', function(){
        $(this).children('ul').find('ul').hide();
        $('.bg_nav').hide();
    })














});
