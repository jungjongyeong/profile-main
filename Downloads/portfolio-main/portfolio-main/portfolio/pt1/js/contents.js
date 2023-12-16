$(function(){
    var swiper = new Swiper('.swiper-container', {
        navigation:{
            prevEl : '.btn_prev',
            nextEl : '.btn_next'
        },
        pagination:{
            el:'.paging'
        },
        autoplay:{
            delay:2000,
            disableOnInteraction:false
        },
        loop:true
    });


    $('.btn_pause').on('click', function(){
        swiper.autoplay.stop();
        $(this).hide();
        $(this).next().show();
    })
    $('.btn_play').on('click', function(){
        swiper.autoplay.start();
        $(this).hide();
        $(this).prev().show();
    })
    $('.gnb > ul, .bg_nav').on('mouseenter keyup', function(){
        $(this).find('ul').show()
        $('.bg_nav').show();
    })
    $('.bg_nav').on('mouseleave', function(){
        $('.gnb').children('ul').find('ul').hide()
        $(this).hide();
    })

    $('.util li:first-child a').on('focus', function(){
        $('.gnb').children('ul').find('ul').hide();
        $('bg_nav').hide();
    });

// tabs
$('.tabs li').on('click', function(){
    var idx = $(this).index();
    $(this).addClass('active').siblings('li').removeClass('active');
    $(this).parents('.tab_group').children('.tab_contents').children('div').eq(idx).addClass('active').siblings('div').removeClass('active');
});

// contents //
    
});
