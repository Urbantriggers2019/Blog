window.addEventListener("load", function() {
    var svgObject = document.getElementById('mastermap').contentDocument;
    var svg = svgObject.getElementsByTagName('svg')[0];
    console.log(svg);
    $(svg.getElementById('Lines')).hide();
    $(svg.getElementsByClassName("cls-2")[21]).on("mouseover", function(){
        console.log("firing");
        $(svg.getElementById('Lines')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Lines')).hide();
    });
});