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
        if ($(this).width() > 1264) {
            $(".inner_main_menu").css("display", "inline");
            $(".menu_container").css("display", "none");
            $(".snippet_container").css("width", "80%");
            $(".snippet_container").css("left", "10%");

            //Navigation arrows
            $(".left_hover").on("mouseover", function() {
                $(".left_button").css("display", "block");
                $(".arrow_1").css("display", "block");
            }).on("mouseleave", function() {
                if ($(document).width() > 1264) {
                    $(".left_button").css("display", "none");
                    $(".arrow_1").css("display", "none");
                }
            });
            $(".right_hover").on("mouseover", function() {
                $(".right_button").css("display", "block");
                $(".arrow_2").css("display", "block");
            }).on("mouseleave", function() {
                if ($(document).width() > 1264) {
                    $(".right_button").css("display", "none");
                    $(".arrow_2").css("display", "none");4
                }
            });
            $(".left_hover").css("width", "10%");
            $(".right_hover").css("width", "10%");
            $(".left_button").css("width", "60px");
            $(".left_button").css("height", "60px");
            $(".left_button").css("left", "2.5%");
            $(".right_button").css("width", "60px");
            $(".right_button").css("height", "60px");
            $(".right_button").css("right", "2.5%");
            $(".left_button").css("display", "none");
            $(".arrow_1").css("display", "none");
            $(".right_button").css("display", "none");
            $(".arrow_2").css("display", "none");
            $(".left_button").on("mouseover", function() {
                if ($(document).width() > 1264) {
                    $(".left_button").css("display", "block");
                    $(".arrow_1").css("display", "block");
                    $(".arrow_1").css("border-bottom", "5px solid #D5D5D5");
                    $(".arrow_1").css("border-right", "5px solid #D5D5D5");
                }
            }).on("mouseleave", function() {
                if ($(document).width() > 1264) {
                    $(".arrow_1").css("border-bottom", "5px solid white");
                    $(".arrow_1").css("border-right", "5px solid white");
                }
            });
            $(".right_button").on("mouseover", function() {
                if ($(document).width() > 1264) {
                    $(".right_button").css("display", "block");
                    $(".arrow_2").css("display", "block");
                    $(".arrow_2").css("border-bottom", "5px solid #D5D5D5");
                    $(".arrow_2").css("border-right", "5px solid #D5D5D5");
                }
            }).on("mouseleave", function() {
                if ($(document).width() > 1264) {
                    $(".arrow_2").css("border-bottom", "5px solid white");
                    $(".arrow_2").css("border-right", "5px solid white");
                }
            });
            $(".arrow_1").css("left", "22px");
            $(".arrow_2").css("left", "10px");
            $(".arrow_1").css("width", "24px");
            $(".arrow_1").css("height", "24px");
            $(".arrow_2").css("width", "24px");
            $(".arrow_2").css("height", "24px");
            $(".arrow_1").css("border-bottom", "5px solid white");
            $(".arrow_1").css("border-right", "5px solid white");
            $(".arrow_2").css("border-bottom", "5px solid white");
            $(".arrow_2").css("border-right", "5px solid white");
            $(".arrow_1").css("top", "15px");
            $(".arrow_2").css("top", "15px");
        } else {
            //Navigation arrows
            $(".left_button").css("display", "block");
            $(".arrow_1").css("display", "block");
            $(".right_button").css("display", "block");
            $(".arrow_2").css("display", "block");
            $(".left_hover").css("width", "60px");
            $(".right_hover").css("width", "60px");
            $(".left_button").css("width", "30px");
            $(".left_button").css("height", "30px");
            $(".left_button").css("left", "10px");
            $(".right_button").css("width", "30px");
            $(".right_button").css("height", "30px");
            $(".right_button").css("right", "10px");
            $(".arrow_1").css("left", "10px");
            $(".arrow_2").css("left", "5px");
            $(".arrow_1").css("width", "12px");
            $(".arrow_1").css("height", "12px");
            $(".arrow_2").css("width", "12px");
            $(".arrow_2").css("height", "12px");
            $(".left_button").on("mouseover", function() {
                $(".arrow_1").css("border-bottom", "2px solid #D5D5D5");
                $(".arrow_1").css("border-right", "2px solid #D5D5D5");
            }).on("mouseleave", function() {
                $(".arrow_1").css("border-bottom", "2px solid white");
                $(".arrow_1").css("border-right", "2px solid white");
            });
            $(".right_button").on("mouseover", function() {
                $(".arrow_2").css("border-bottom", "2px solid #D5D5D5");
                $(".arrow_2").css("border-right", "2px solid #D5D5D5");
            }).on("mouseleave", function() {
                $(".arrow_2").css("border-bottom", "2px solid white");
                $(".arrow_2").css("border-right", "2px solid white");
            });
            $(".snippet_container").css("width", "calc(100% - 120px)");
            $(".snippet_container").css("left", "60px");
            $(".inner_main_menu").css("display", "none");
            $(".menu_container").css("display", "inline");
            $(".arrow_1").css("border-bottom", "2px solid white");
            $(".arrow_1").css("border-right", "2px solid white");
            $(".arrow_2").css("border-bottom", "2px solid white");
            $(".arrow_2").css("border-right", "2px solid white");
            $(".arrow_1").css("top", "8px");
            $(".arrow_2").css("top", "8px");
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
        if(scrollY < 240){
            $(".main_menu").css("padding-top", Math.max(100 - 0.6 * window.scrollY, 0) + "px");
            $(".main_menu").css("height", Math.max(70 - 0.05 * window.scrollY, 0) + "px");
            $(".subnavbar").css("margin-top", Math.max(70 - 0.05 * window.scrollY, 0) + "px");
            $(".inner_main_menu > ul").css("margin-top", Math.max(16 - 0.02 * window.scrollY, 0) + "px");
            $(".inner_main_menu > ul > li").css("margin-top", Math.min(0 - 0.03 * window.scrollY, 0) + "px");
            $(".inner_main_menu .fauske, .resources, .forces, .projects, .vision, .about_us").css("font-size", Math.max(35 - 0.037 * window.scrollY, 0) + "px");
            $(".resources").css("left", Math.max(11 + 0.016 * window.scrollY, 0) + "%");
            $(".forces").css("left", Math.max(26 + 0.026 * window.scrollY, 0) + "%");
            $(".projects").css("right", Math.max(23 + 0.026 * window.scrollY, 0) + "%");
            $(".vision").css("right", Math.max(14 + 0.013 * window.scrollY, 0) + "%");
            $(".bar1, .bar2, .bar3").css("width", Math.max(60 - 0.1 * window.scrollY, 0) + "px");
            $(".bar1, .bar2, .bar3").css("height", Math.max(10 - 0.02 * window.scrollY, 0) + "px");
            if (clicked == false){
                $(".bar1").css("margin-top", Math.max(0 + 0.06 * window.scrollY, 0) + "px");
                $(".bar2").css("margin-top", Math.max(20 + 0.025 * window.scrollY, 0) + "px");
                $(".bar3").css("margin-top", Math.max(40 - 0.01 * window.scrollY, 0) + "px");
            } else {
                $(".bar1").css("margin-top", Math.max(20 + 0.025 * window.scrollY, 0) + "px");
                $(".bar2").css("margin-top", Math.max(20 + 0.025 * window.scrollY, 0) + "px");
                $(".bar3").css("margin-top", Math.max(20 + 0.025 * window.scrollY, 0) + "px");
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
        }
    });
    $(window).resize(function () {
        if ($(this).scrollTop() > 0) {
            resizeSmall();
        } else {
            resizeBig();
        }
    });
    click();
});

function click(){
    $(".menu_container").click(function () {
        if ($(".bar1").css("transform") == "none"){
            $(".mob_main_menu").css({"display": "block"});
            $(".bar1").css({
                "transform": "rotate(45deg)",
                "margin-top": Math.max(20 + 0.025 * window.scrollY, 0) + "px",
                "transition-duration": "0.1s"});
            $(".bar3").css({
                "transform": "rotate(-45deg)",
                "margin-top": Math.max(20 + 0.025 * window.scrollY, 0) + "px",
                "transition-duration": "0.1s"});
            $(".bar2").css({"display": "none"});
            clicked = true;
        } else {
            $(".mob_main_menu").css({"display": "none"});
            $(".bar1").css("transform", "");
            $(".bar1").css("margin-top",  Math.max(0 + 0.06 * window.scrollY, 0) + "px");
            $(".bar3").css("transform", "");
            $(".bar3").css("margin-top", Math.max(40 - 0.01 * window.scrollY, 0) + "px");
            $(".bar2").css({"display": "block"});
            clicked = false;
        }
    });
}