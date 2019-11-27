window.addEventListener("load", function() {
    var svgObject = document.getElementById('mastermap').contentDocument;
    var svg = svgObject.getElementsByTagName('svg')[0];
    $(svg.getElementById('Lines')).hide();
    $(svg.getElementsByClassName("cls-2")[21]).on("mouseover", function(){
        $(svg.getElementById('Lines')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Lines')).hide();
    });
    $(svg.getElementsByClassName("cls-2")[0]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[0].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/land/agriculture.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[1]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[1].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[1].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[2]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[2].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[2].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[3]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[3].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[3].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/water/aquaculture/aquaculture.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[4]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[4].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[4].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[4].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[5]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[5].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[5].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[5].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/forest/forestry.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[6]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[6].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[6].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[6].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[7]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[7].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[7].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[7].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[8]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[8].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[8].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[8].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[9]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[9].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[9].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[9].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[10]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[10].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[10].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[10].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/mountain/marble/marble.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[11]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[11].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[11].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[11].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[12]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[12].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[12].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[12].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[13]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[13].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[13].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[13].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[13]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[13].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[13].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[13].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[14]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[14].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[14].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[14].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[15]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[15].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[15].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[15].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[16]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[16].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[16].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[16].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[17]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[17].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[17].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[17].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[17]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[17].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[17].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[17].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[18]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[18].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[18].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[18].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[19]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[19].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[19].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[19].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[20]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[20].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[20].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[20].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[21]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[21].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[21].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[21].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[22]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[22].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[22].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[22].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/energy/overview/energy_categories.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[23]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[23].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[23].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[23].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/land.html","_self")
    });
    console.log(svg.getElementsByClassName("cls-2")[24]);
    $(svg.getElementsByClassName("cls-2")[24]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[24].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[24].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[24].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/transport.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[25]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[25].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[25].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[25].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/water.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[25]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[25].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[25].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[25].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/water.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[26]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[26].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[26].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[26].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/forest.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[27]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[27].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[27].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[27].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/mountain.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[28]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[28].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[28].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[28].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/energy.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[29]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[29].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[29].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[29].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/education.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[30]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[30].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[30].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[30].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/housing.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[31]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[31].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[31].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[31].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/tourism.html","_self")
    });
    $(svg.getElementsByClassName("cls-2")[32]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[32].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[32].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[32].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[33]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[33].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[33].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[33].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[34]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[34].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[34].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[34].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[35]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[35].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[35].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[35].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
    $(svg.getElementsByClassName("cls-2")[36]).on("mouseover", function () {
        svg.getElementsByClassName("cls-2")[36].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("cls-2")[36].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("cls-2")[36].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("#","_self")
    });
});