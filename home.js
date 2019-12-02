window.addEventListener("load", function() {
    var svgObject = document.getElementById('land').contentDocument;
    var svg = svgObject.getElementsByTagName('svg')[0];
    $(svg.getElementsByClassName('st0')[0]).on("click", function () {
        window.location.replace("/Blog/fauske/tasks.html");
    }).on("mouseover", function () {
        document.body.style.cursor = "pointer";
    });
    console.log($(svg.getElementById('Text')));
    $(svg.getElementsByTagName('path')[0]).on("mouseover", function () {
        svg.querySelectorAll('#text').style.setProperty("cursor", "pointer");
    });
    $(svg.getElementById('Text')).on("mouseover", function() {
        for (i = 0; i < svg.querySelectorAll('.st0').length; i++) {
            svg.querySelectorAll('.st0')[i].style.setProperty("opacity", "100%");
            svg.querySelectorAll('.st0')[i].style.setProperty("cursor", "pointer");
        }
    });
    $(svg.getElementsByClassName('st0')[0]).on("mouseover", function() {
        svg.querySelectorAll('.st0')[0].style.setProperty("cursor", "pointer");
    })
});