$(function () {
    var page = $('.right').fullpage({
        navigation: true,
        menu: '.menu',
        anchors: ['section3', 'section4']
    })

    // 움직임 효과
    const follower = $(".cursor-follower");

    $(window).mousemove(function (e) {
        follower.css({
            left: e.pageX + 30, top: e.pageY + 20
        });
    });

    $(".prt_main > li > a .screen.anipri").hover(function () {
        follower.addClass("anipri");

    }, function () {
        follower.removeClass("anipri")
    })
    $(".prt_main > li > a .screen.aniteam").hover(function () {
        follower.addClass("aniteam");

    }, function () {
        follower.removeClass("aniteam")
    })
    $(".prt_main > li > a .screen.ani1").hover(function () {
        follower.addClass("ani1");

    }, function () {
        follower.removeClass("ani1")
    })
    $(".prt_main > li > a .screen.ani2").hover(function () {
        follower.addClass("ani2");

    }, function () {
        follower.removeClass("ani2")
    })
    $(".prt_main > li > a .screen.ani3").hover(function () {
        follower.addClass("ani3");

    }, function () {
        follower.removeClass("ani3")
    })
    $(".prt_main > li > a .screen.ani4").hover(function () {
        follower.addClass("ani4");

    }, function () {
        follower.removeClass("ani4")
    })
    $(".prt_main > li > a .screen.ani5").hover(function () {
        follower.addClass("ani5");

    }, function () {
        follower.removeClass("ani5")
    })
    $(".prt_main > li > a .screen.ani6").hover(function () {
        follower.addClass("ani6");

    }, function () {
        follower.removeClass("ani6")
    })
    $(".prt_main > li > a .screen.ani7").hover(function () {
        follower.addClass("ani7");

    }, function () {
        follower.removeClass("ani7")
    })
    $(".menu > ul > li > a").on('click', function () {
        $(this).addClass('active')
    })

})
