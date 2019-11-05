$(document).ready(function () {
    function resizeSmall() {
        if ($(this).width() > 640) {
            $(".inner_main_menu").css("display", "inline");
            $(".menu_container").css("display", "none");
        } else {
            $(".inner_main_menu").css("display", "none");
            $(".menu_container").css("display", "inline");
        }
    }
    function resizeBig() {
        if ($(this).width() > 1120) {
            $(".inner_main_menu").css("display", "inline");
            $(".menu_container").css("display", "none");
        } else {
            $(".inner_main_menu").css("display", "none");
            $(".menu_container").css("display", "inline");
        }
    }
    $('.logo').hide();
    var timer;
    $(".project").on("mouseover", function() {
        clearTimeout(timer);
        $(".project > .submenu").addClass("open");
    }).on("mouseleave", function() {
        timer = setTimeout(
            $(".project > .submenu").removeClass("open")
            , 1000);
    });
    $(".research").on("mouseover", function() {
        clearTimeout(timer);
        $(".research > .submenu").addClass("open");
    }).on("mouseleave", function() {
        timer = setTimeout(
            $(".research > .submenu").removeClass("open")
            , 1000);
    });
    $(".references").on("mouseover", function() {
        clearTimeout(timer);
        $(".references > .submenu").addClass("open");
    }).on("mouseleave", function() {
        timer = setTimeout(
            $(".references > .submenu").removeClass("open")
            , 1000);
    });
    resizeSmall();
    resizeBig();
    var clicked = false;
    $(window).scroll(function () {
        $(".main_menu").css("margin-top", Math.max(50 - 0.4 * window.scrollY, 0) + "px");
        $("ul.main_menu").css("margin-top", Math.max( 20 - 0.02 * window.scrollY, 0) + "px");
        $(".inner_main_menu .news, .research, .project, .references").css("font-size", Math.max(35 - 0.02 * window.scrollY, 0) + "px");
        $(".research").css("left", Math.max(15 + 0.026 * window.scrollY, 0) + "%");
        $(".project").css("right", Math.max(20 + 0.026 * window.scrollY, 0) + "%");
        $(".bar1, .bar2, .bar3").css("width", Math.max(60 - 0.06 * window.scrollY, 0) + "px");
        $(".bar1, .bar2, .bar3").css("height", Math.max(10 - 0.01 * window.scrollY, 0) + "px");
        if (clicked == false){
            $(".bar1").css("margin-top", Math.max(30 - 0.04 * window.scrollY, 0) + "px");
            $(".bar2").css("margin-top", Math.max(50 - 0.065 * window.scrollY, 0) + "px");
            $(".bar3").css("margin-top", Math.max(70 - 0.09 * window.scrollY, 0) + "px");
        } else {
            $(".bar1").css("margin-top", Math.max(50 - 0.065 * window.scrollY, 0) + "px");
            $(".bar2").css("margin-top", Math.max(50 - 0.065 * window.scrollY, 0) + "px");
            $(".bar3").css("margin-top", Math.max(50 - 0.065 * window.scrollY, 0) + "px");
        }
        if ($(this).scrollTop() > 0) {
            $('.text').fadeOut(150);
            $('.logo').fadeIn(150);
            resizeSmall();
        } else {
            $('.text').fadeIn(150);
            $('.logo').fadeOut(150);
            resizeBig();
        }
    });
    $(window).resize(function () {
        if ($(this).scrollTop() > 0) {
            resizeSmall();
        } else {
            resizeBig();
        }
    });
    $(".menu_container").click(function () {
        if ($(".bar1").css("transform") == "none"){
            $(".bar1").css({
                "transform": "rotate(45deg)",
                "margin-top": Math.max(50 - 0.065 * window.scrollY, 0) + "px",
                "transition-duration": "0.1s"});
            $(".bar3").css({
                "transform": "rotate(-45deg)",
                "margin-top": Math.max(50 - 0.065 * window.scrollY, 0) + "px",
                "transition-duration": "0.1s"});
            $(".bar2").css({"display": "none"})
            clicked = true;
        } else {
            $(".bar1").css("transform", "");
            $(".bar1").css("margin-top",  Math.max(30 - 0.04 * window.scrollY, 0) + "px");
            $(".bar3").css("transform", "");
            $(".bar3").css("margin-top", Math.max(70 - 0.09 * window.scrollY, 0) + "px");
            $(".bar2").css({"display": "block"})
            clicked = false;
        }
    });
});