window.addEventListener("load", function() {
    var svgObject = document.getElementById('land').contentDocument;
    var svg = svgObject.getElementsByTagName('svg')[0];
    $(svg.getElementsByClassName("cls-1")[0]).on("mouseover", function () {
        svg.getElementsByClassName("cls-1")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-1")[0].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-1")[0].style.setProperty("opacity", "80%");
    }).on("click", function () {
        window.open("/Blog/projects/scenarios/marble_park/input.html", "_self")
    });
    $(svg.getElementsByClassName("cls-26")[0]).on("mouseover", function () {
        svg.getElementsByClassName("cls-26")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-26")[0].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-26")[0].style.setProperty("opacity", "80%");
    }).on("click", function () {
        window.open("/Blog/projects/scenarios/link/input.html", "_self")
    });
    $(svg.getElementsByClassName("cls-80")[0]).on("mouseover", function () {
        svg.getElementsByClassName("cls-80")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-80")[0].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-80")[0].style.setProperty("opacity", "80%");
    }).on("click", function () {
        window.open("/Blog/projects/scenarios/food_festival/input.html", "_self")
    });
    $(svg.getElementsByClassName("cls-140")[0]).on("mouseover", function () {
        svg.getElementsByClassName("cls-140")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-140")[0].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-140")[0].style.setProperty("opacity", "80%");
    }).on("click", function () {
        window.open("/Blog/projects/scenarios/roots/roots_overview.html", "_self")
    });
});