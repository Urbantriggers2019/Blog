window.addEventListener("load", function() {
    var svgObject = document.getElementById('mastermap').contentDocument;
    var svg = svgObject.getElementsByTagName('svg')[0];
    $(svg.getElementById('Lines')).hide();
    $(svg.getElementsByClassName("cls-3")[21]).on("mouseover", function(){
        $(svg.getElementById('Lines')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Lines')).hide();
    });
    $(svg.getElementsByClassName("cls-3")[0]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[0].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/land/agriculture.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[1]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[1].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[1].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[2]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[2].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[2].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[3]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[3].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[3].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/water/aquaculture/aquaculture.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[4]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[4].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[4].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[4].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[5]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[5].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[5].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[5].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/forest/forestry.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[6]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[6].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[6].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[6].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[7]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[7].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[7].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[7].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[8]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[8].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[8].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[8].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[9]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[9].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[9].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[9].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[10]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[10].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[10].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[10].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/mountain/marble/marble.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[11]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[11].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[11].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[11].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[12]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[12].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[12].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[12].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[13]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[13].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[13].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[13].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[13]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[13].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[13].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[13].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[14]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[14].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[14].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[14].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[15]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[15].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[15].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[15].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[16]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[16].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[16].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[16].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[17]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[17].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[17].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[17].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[17]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[17].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[17].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[17].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[18]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[18].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[18].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[18].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[19]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[19].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[19].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[19].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[20]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[20].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[20].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[20].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[21]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[21].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[21].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[21].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[22]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[22].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[22].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[22].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/energy/overview/energy_categories.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[23]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[23].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[23].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[23].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/land.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[24]).on("mouseover", function () {
        console.log("firing")
    });
    $(svg.getElementsByClassName("cls-3")[24]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[24].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[24].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[24].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/tourism.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[25]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[25].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[25].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[25].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/water.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[25]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[25].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[25].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[25].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/water.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[26]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[26].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[26].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[26].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/forest.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[27]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[27].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[27].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[27].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/mountain.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[28]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[28].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[28].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[28].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/energy.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[29]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[29].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[29].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[29].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/education.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[30]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[30].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[30].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[30].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/housing.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[31]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[31].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[31].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[31].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/tourism.html","_self")
    });
    $(svg.getElementsByClassName("cls-3")[32]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[32].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[32].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[32].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[33]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[33].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[33].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[33].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[34]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[34].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[34].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[34].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[35]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[35].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[35].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[35].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-3")[36]).on("mouseover", function () {
        svg.getElementsByClassName("cls-3")[36].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-3")[36].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-3")[36].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
});