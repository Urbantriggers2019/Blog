window.addEventListener("load", function() {
    console.log("firing");
    var svgObject = document.getElementById('land').contentDocument;
    var svg = svgObject.getElementsByTagName('svg')[0];
    console.log($(svg.getElementsByClassName('cls-2')[0]));
    $(svg.getElementsByClassName('cls-2')[0]).on("click", function () {
        window.location.replace("/Blog/fauske/wealth_of_fauske.html");
    }).on("mouseover", function () {
        document.body.style.cursor = "pointer";
    });
});