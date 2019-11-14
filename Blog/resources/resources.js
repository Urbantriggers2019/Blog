window.addEventListener("load", function() {
    var svgObject = document.getElementById('land').contentDocument;
    var svg = svgObject.getElementsByTagName('svg')[0];
    var i;
    $(svg.getElementsByClassName("st0")).on("mouseover", function() {
        for (i = 0; i < svg.querySelectorAll('.st0').length; i++) {
            svg.querySelectorAll('.st0')[i].style.setProperty("opacity", "100%");
        }
    }).on("mouseleave", function() {
        for (i = 0; i < svg.querySelectorAll('.st0').length; i++) {
            svg.querySelectorAll('.st0')[i].style.setProperty("opacity", "50%");
        }
    });
    $(svg.getElementsByClassName("st1")).on("mouseover", function() {
        for (i = 0; i < svg.querySelectorAll('.st1').length; i++) {
            svg.querySelectorAll('.st1')[i].style.setProperty("opacity", "100%");
        }
    }).on("mouseleave", function() {
        for (i = 0; i < svg.querySelectorAll('.st1').length; i++) {
            svg.querySelectorAll('.st1')[i].style.setProperty("opacity", "50%");
        }
    });
    $(svg.getElementsByClassName("st2")).on("mouseover", function() {
        for (i = 0; i < svg.querySelectorAll('.st2').length; i++) {
            svg.querySelectorAll('.st2')[i].style.setProperty("opacity", "100%");
        }
    }).on("mouseleave", function() {
        for (i = 0; i < svg.querySelectorAll('.st2').length; i++) {
            svg.querySelectorAll('.st2')[i].style.setProperty("opacity", "50%");
        }
    });
    $(svg.getElementsByClassName("st3")).on("mouseover", function() {
        for (i = 0; i < svg.querySelectorAll('.st3').length; i++) {
            svg.querySelectorAll('.st3')[i].style.setProperty("opacity", "100%");
        }
    }).on("mouseleave", function() {
        for (i = 0; i < svg.querySelectorAll('.st3').length; i++) {
            svg.querySelectorAll('.st3')[i].style.setProperty("opacity", "50%");
        }
    });
    $(svg.getElementsByClassName("st4")).on("mouseover", function() {
        for (i = 0; i < svg.querySelectorAll('.st4').length; i++) {
            svg.querySelectorAll('.st4')[i].style.setProperty("opacity", "100%");
        }
    }).on("mouseleave", function() {
        for (i = 0; i < svg.querySelectorAll('.st4').length; i++) {
            svg.querySelectorAll('.st4')[i].style.setProperty("opacity", "50%");
        }
    });
    $(svg.getElementsByClassName("st5")).on("mouseover", function() {
        for (i = 0; i < svg.querySelectorAll('.st5').length; i++) {
            svg.querySelectorAll('.st5')[i].style.setProperty("opacity", "100%");
        }
    }).on("mouseleave", function() {
        for (i = 0; i < svg.querySelectorAll('.st5').length; i++) {
            svg.querySelectorAll('.st5')[i].style.setProperty("opacity", "50%");
        }
    });
    $(svg.getElementsByClassName("st6")).on("mouseover", function() {
        for (i = 0; i < svg.querySelectorAll('.st6').length; i++) {
            svg.querySelectorAll('.st6')[i].style.setProperty("opacity", "100%");
        }
    }).on("mouseleave", function() {
        for (i = 0; i < svg.querySelectorAll('.st6').length; i++) {
            svg.querySelectorAll('.st6')[i].style.setProperty("opacity", "50%");
        }
    });
    $(svg.getElementsByClassName("st7")).on("mouseover", function() {
        for (i = 0; i < svg.querySelectorAll('.st7').length; i++) {
            svg.querySelectorAll('.st7')[i].style.setProperty("opacity", "100%");
        }
    }).on("mouseleave", function() {
        for (i = 0; i < svg.querySelectorAll('.st7').length; i++) {
            svg.querySelectorAll('.st7')[i].style.setProperty("opacity", "50%");
        }
    });
    $(svg.getElementsByClassName("st8")).on("mouseover", function() {
        for (i = 0; i < svg.querySelectorAll('.st8').length; i++) {
            svg.querySelectorAll('.st8')[i].style.setProperty("opacity", "100%");
        }
    }).on("mouseleave", function() {
        for (i = 0; i < svg.querySelectorAll('.st8').length; i++) {
            svg.querySelectorAll('.st8')[i].style.setProperty("opacity", "50%");
        }
    });
    var b;
    for (b = 0; b < 9; b++) {
        for (i = 0; i < svg.querySelectorAll('.st' + b.toString()).length; i++) {
            svg.querySelectorAll('.st' + b.toString())[i].style.setProperty("opacity", "50%");
        }
    }
});