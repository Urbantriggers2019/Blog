window.addEventListener("load", function() {
    var svgObject = document.getElementById('land').contentDocument;
    var svg = svgObject.getElementsByTagName('svg')[0];
    $(svg.getElementsByClassName("cls-1")[0]).on("mouseover", function () {
        svg.getElementsByClassName("cls-1")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-1")[0].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-1")[0].style.setProperty("opacity", "80%");
    }).on("click", function () {
        window.open("/Blog/projects/scenarios/marble_park.html", "_self")
    });
    $(svg.getElementsByClassName("cls-28")[0]).on("mouseover", function () {
        svg.getElementsByClassName("cls-28")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-28")[0].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-28")[0].style.setProperty("opacity", "80%");
    }).on("click", function () {
        window.open("/Blog/projects/scenarios/link.html", "_self")
    });
    $(svg.getElementsByClassName("cls-82")[0]).on("mouseover", function () {
        svg.getElementsByClassName("cls-82")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-82")[0].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-82")[0].style.setProperty("opacity", "80%");
    }).on("click", function () {
        window.open("/Blog/projects/scenarios/food_festival/map.html", "_self")
    });
    $(svg.getElementsByClassName("cls-142")[0]).on("mouseover", function () {
        svg.getElementsByClassName("cls-142")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-142")[0].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-142")[0].style.setProperty("opacity", "80%");
    }).on("click", function () {
        window.open("/Blog/projects/scenarios/roots.html", "_self")
    });
});