$( function(){

        var page = $('.index').fullpage({
        })


    $('.main_top').on('mouseenter keyup', function(){
        $('.gnb').show();
    })
    $('.gnb').on('mouseleave', function(){
        $('.gnb').hide()
    })




})
