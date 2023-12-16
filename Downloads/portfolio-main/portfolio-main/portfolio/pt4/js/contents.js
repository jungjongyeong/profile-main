$(function(){


        var swiper = new Swiper('.visualauto' + '.swiper-container', {

        navigation:{
            prevEl : '.btn_prev',
            nextEl : '.btn_next'
        },
        pagination:{
            el:'.paging'
        },
        autoplay:{
            delay:4000,
            disableOnInteraction:false
        },
        loop:true
    });

        var swiper = new Swiper('.my-slider-' + '.swiper-container', {

            navigation:{
                prevEl : '.btn_prev',
                nextEl : '.btn_next'
            },
            pagination:{
                el:'.paging'
            },

            loop:true

        });


        $('.gnb').on('mouseenter keyup', function(){
            $('.sub').show();
        })
        $('header.fix  .gnb').on('mouseenter keyup', function(){
            $('.sub').show();
        })

        $('.sub').on('mouseleave', function(){
            $('.sub').hide()
        })
        $( document ).ready( function() {
               var Offset = $( 'header' ).offset();
               $( window ).scroll( function() {
                 if ( $( document ).scrollTop() > Offset.top ) {
                   $( 'header' ).addClass( 'fix' );
                 }
                 else {
                   $( 'header' ).removeClass( 'fix' );
                 }
               });
         } );


});
