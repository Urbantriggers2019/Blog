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

    $(".inner_main_menu > ul > li").on("mouseover", function() {
        clearTimeout(timer);
        $(this).find(".submenu").addClass("open");
    }).on("mouseleave", function() {
        timer = setTimeout(
            $(this).find(".submenu, .subsubmenu").removeClass("open")
            , 500);
    });

    $(".submenu li").on("mouseover", function() {
        clearTimeout(timer);
        $(".submenu li").find(".subsubmenu").removeClass("open");
        $(this).find(".subsubmenu").addClass("open");
    });
    resizeSmall();
    resizeBig();

    var clicked = false;
    $(window).scroll(function () {
        $(".main_menu").css("padding-top", Math.max(100 - 0.6 * window.scrollY, 0) + "px");
        $(".main_menu").css("height", Math.max(70 - 0.05 * window.scrollY, 0) + "px");
        $(".subnavbar").css("margin-top", Math.max(70 - 0.05 * window.scrollY, 0) + "px");
        $(".inner_main_menu > ul").css("margin-top", Math.max(16 - 0.02 * window.scrollY, 0) + "px");
        $(".inner_main_menu .fauske, .about_us, .overview, .connections, .projects, .vision").css("font-size", Math.max(35 - 0.037 * window.scrollY, 0) + "px");
        $(".about_us").css("left", Math.max(11 + 0.016 * window.scrollY, 0) + "%");
        $(".overview").css("left", Math.max(25 + 0.026 * window.scrollY, 0) + "%");
        $(".connections").css("right", Math.max(23 + 0.026 * window.scrollY, 0) + "%");
        $(".projects").css("right", Math.max(10 + 0.013 * window.scrollY, 0) + "%");
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