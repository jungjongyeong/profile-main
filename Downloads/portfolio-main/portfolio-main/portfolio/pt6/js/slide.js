$( function(){



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

        $('.gnb').on('mouseenter keyup', function(){
            $('.sub').show();
        })
        $('.gnb').on('mouseleave', function(){
            $('.sub').hide()
        })
    })
