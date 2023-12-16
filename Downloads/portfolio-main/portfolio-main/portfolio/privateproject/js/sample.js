$( function(){
    $('.iframe button').on('click', function(){
        var txt = $(this).text();
        if( txt == 'pc'){
            $('iframe').css('width','1600')
            $('iframe').css('height','656')
        }else if( txt == 'tablet'){
            $('iframe').css('width','1000')
            $('iframe').css('height','656')
        }else if( txt == 'phone'){
            $('iframe').css('width','600')
            $('iframe').css('height','656')
        }
    });
    $('.group_1').on('click', function(){
        $('.popup_start').fadeIn()
        $('.fade1').fadeOut()
        $('.fade2').fadeOut()
        $('.fade3').fadeOut()
        $('.fade4').fadeOut()
    });
    $('.group_2').on('click', function(){
        $('.fade1').fadeIn()
        $('.popup_start').fadeOut()
        $('.fade2').fadeOut()
        $('.fade3').fadeOut()
        $('.fade4').fadeOut()
    });
    $('.group_3').on('click', function(){
        $('.fade2').fadeIn()
        $('.fade1').fadeOut()
        $('.popup_start').fadeOut()
        $('.fade3').fadeOut()
        $('.fade4').fadeOut()
    });
    $('.group_4').on('click', function(){
        $('.fade3').fadeIn()
        $('.fade1').fadeOut()
        $('.fade2').fadeOut()
        $('.fade4').fadeOut()
        $('.popup_start').fadeOut()
    });
    $('.group_5').on('click', function(){
        $('.fade4').fadeIn()
        $('.fade1').fadeOut()
        $('.fade2').fadeOut()
        $('.fade3').fadeOut()
        $('.popup_start').fadeOut()
    });




    $('.p_list').on('click', function(){
        $(this).stop().toggleClass('ani')
        $('.list_img').stop().fadeToggle()
    });


})
