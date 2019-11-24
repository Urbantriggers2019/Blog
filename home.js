window.addEventListener("load", function() {
    var svgObject = document.getElementsByClassName('start').contentDocument;
    console.log(svgObject);
    var svg = svgObject.getElementsByTagName('svg')[0];
    $(svg.getElementsByTagName("image")).on("click", function() {
        console.log("firing");
        $(this).hide();
    });
});