window.addEventListener("load", function() {
    var svgObject = document.getElementById('mastermap').contentDocument;
    var svg = svgObject.getElementsByTagName('svg')[0];
    $(svg.getElementById('Aquaculture_connections')).hide();
    $(svg.getElementById('Fauna_connections')).hide();
    $(svg.getElementById('Ecosystem_services')).hide();
    $(svg.getElementById('marble_connections')).hide();
    $(svg.getElementById('use_of_energy_connections')).hide();
    $(svg.getElementById('energy_production_connections')).hide();
    $(svg.getElementById('_1_10_grade_connections')).hide();
    $(svg.getElementById('High_school_connections')).hide();
    $(svg.getElementById('further_studies_connections')).hide();
    $(svg.getElementById('Local_industries_connections')).hide();
    $(svg.getElementById('Vacational_housing')).hide();
    $(svg.getElementById('Long_term_housing_connections')).hide();
    $(svg.getElementById('Temporary_housing_connections')).hide();
    $(svg.getElementById('road_connections')).hide();
    $(svg.getElementById('railway_connections')).hide();
    $(svg.getElementById('water_connections')).hide();
    $(svg.getElementById('air_connections')).hide();
    $(svg.getElementById('culture_connections')).hide();
    $(svg.getElementById('recreation_connections')).hide();
    $(svg.getElementById('nature_connections')).hide();
    $(svg.getElementById('Harbour_connections')).hide();
    $(svg.getElementById('forestry_connections')).hide();
    $(svg.getElementById('Flora_connections')).hide();
    $(svg.getElementById('Agriculture_connections')).hide();
    $(svg.getElementById('Infrastructure_connections')).hide();
    $(svg.getElementById('Industry_connections')).hide();
    $(svg.getElementsByClassName("st0")[0]).on("mouseover", function () {
        svg.getElementsByClassName("st0")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st0")[0].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Agriculture_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Agriculture_connections')).hide();
        svg.getElementsByClassName("st0")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/land/agriculture.html","_self")
    });
    $(svg.getElementsByClassName("st0")[1]).on("mouseover", function () {
        svg.getElementsByClassName("st0")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st0")[1].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Infrastructure_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Infrastructure_connections')).hide();
        svg.getElementsByClassName("st0")[1].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/transport/infrastructure.html","_self")
    });
    $(svg.getElementsByClassName("st0")[2]).on("mouseover", function () {
        svg.getElementsByClassName("st0")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st0")[2].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Industry_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Industry_connections')).hide();
        svg.getElementsByClassName("st0")[2].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/education/local_industries.html","_self")
    });
    //aquaculture
    $(svg.getElementsByClassName("st1")[0]).on("mouseover", function () {
        svg.getElementsByClassName("st1")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st1")[0].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Aquaculture_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Aquaculture_connections')).hide();
        svg.getElementsByClassName("st1")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/water/aquaculture/overview.html","_self")
    });
    //harbour
    $(svg.getElementsByClassName("st1")[1]).on("mouseover", function () {
        svg.getElementsByClassName("st1")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st1")[1].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Harbour_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Harbour_connections')).hide();
        svg.getElementsByClassName("st1")[1].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/water/aquaculture/overview.html","_self")
    });
    $(svg.getElementsByClassName("st2")[0]).on("mouseover", function () {
        svg.getElementsByClassName("st2")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st2")[0].style.setProperty("cursor", "pointer");
        $(svg.getElementById('forestry_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('forestry_connections')).hide();
        svg.getElementsByClassName("st2")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/forest/information/forestry_overview.html","_self")
    });
    $(svg.getElementsByClassName("st2")[1]).on("mouseover", function () {
        svg.getElementsByClassName("st2")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st2")[1].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Flora_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Flora_connections')).hide();
        svg.getElementsByClassName("st2")[1].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/forest/information/forestry_overview.html","_self")
    });
    $(svg.getElementsByClassName("st2")[2]).on("mouseover", function () {
        svg.getElementsByClassName("st2")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st2")[2].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Fauna_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Fauna_connections')).hide();
        svg.getElementsByClassName("st2")[2].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/forest/information/forestry_overview.html","_self")
    });
    $(svg.getElementsByClassName("st2")[3]).on("mouseover", function () {
        svg.getElementsByClassName("st2")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st2")[3].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Ecosystem_services')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Ecosystem_services')).hide();
        svg.getElementsByClassName("st2")[3].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/forest/forestry/forestry_overview.html","_self")
    });
    //marble
    $(svg.getElementsByClassName("st3")[0]).on("mouseover", function () {
        svg.getElementsByClassName("st3")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st3")[0].style.setProperty("cursor", "pointer");
        $(svg.getElementById('marble_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('marble_connections')).hide();
        svg.getElementsByClassName("st3")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/mountain/marble.html","_self")
    });
    $(svg.getElementsByClassName("st8")[0]).on("mouseover", function () {
        svg.getElementsByClassName("st8")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st8")[0].style.setProperty("cursor", "pointer");
        $(svg.getElementById('use_of_energy_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('use_of_energy_connections')).hide();
        svg.getElementsByClassName("st8")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/energy.html","_self")
    });
    $(svg.getElementsByClassName("st8")[2]).on("mouseover", function () {
        svg.getElementsByClassName("st8")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st8")[2].style.setProperty("cursor", "pointer");
        $(svg.getElementById('energy_production_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('energy_production_connections')).hide();
        svg.getElementsByClassName("st8")[2].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/energy/overview/energy_categories.html","_self")
    });
    $(svg.getElementsByClassName("st4")[0]).on("mouseover", function () {
        svg.getElementsByClassName("st4")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st4")[0].style.setProperty("cursor", "pointer");
        $(svg.getElementById('_1_10_grade_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('_1_10_grade_connections')).hide();
        svg.getElementsByClassName("st4")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/education/1-10th.html","_self")
    });
    $(svg.getElementsByClassName("st4")[1]).on("mouseover", function () {
        svg.getElementsByClassName("st4")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st4")[1].style.setProperty("cursor", "pointer");
        $(svg.getElementById('High_school_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('High_school_connections')).hide();
        svg.getElementsByClassName("st4")[1].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/education/highschool/overview.html","_self")
    });
    $(svg.getElementsByClassName("st4")[3]).on("mouseover", function () {
        svg.getElementsByClassName("st4")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st4")[3].style.setProperty("cursor", "pointer");
        $(svg.getElementById('further_studies_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('further_studies_connections')).hide();
        svg.getElementsByClassName("st4")[3].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/education/further_studies/further_studies_overview.html","_self")
    });
    $(svg.getElementsByClassName("st4")[4]).on("mouseover", function () {
        svg.getElementsByClassName("st4")[4].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st4")[4].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Local_industries_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Local_industries_connections')).hide();
        svg.getElementsByClassName("st4")[4].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/education/local_industries.html","_self")
    });
    //Vacational
    $(svg.getElementsByClassName("st5")[0]).on("mouseover", function () {
        svg.getElementsByClassName("st5")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st5")[0].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Vacational_housing')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Vacational_housing')).hide();
        svg.getElementsByClassName("st5")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/housing/vacation.html","_self")
    });
    //long term
    $(svg.getElementsByClassName("st5")[1]).on("mouseover", function () {
        svg.getElementsByClassName("st5")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st5")[1].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Long_term_housing_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Long_term_housing_connections')).hide();
        svg.getElementsByClassName("st5")[1].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/housing/long_term.html","_self")
    });
    //housing
    $(svg.getElementsByClassName("st5")[2]).on("mouseover", function () {
        svg.getElementsByClassName("st5")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st5")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st5")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st5")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st5")[2].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("st5")[0].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st5")[1].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st5")[2].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st5")[3].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/housing.html","_self")
    });
    //Temporary
    $(svg.getElementsByClassName("st5")[3]).on("mouseover", function () {
        svg.getElementsByClassName("st5")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st5")[3].style.setProperty("cursor", "pointer");
        $(svg.getElementById('Temporary_housing_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('Temporary_housing_connections')).hide();
        svg.getElementsByClassName("st5")[3].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/housing/input.html","_self")
    });
    //road
    $(svg.getElementsByClassName("st6")[0]).on("mouseover", function () {
        svg.getElementsByClassName("st6")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st6")[0].style.setProperty("cursor", "pointer");
        $(svg.getElementById('road_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('road_connections')).hide();
        svg.getElementsByClassName("st6")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/transport/introduction/current.html","_self")
    });
    $(svg.getElementsByClassName("st6")[1]).on("mouseover", function () {
        svg.getElementsByClassName("st6")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st6")[1].style.setProperty("cursor", "pointer");
        $(svg.getElementById('railway_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('railway_connections')).hide();
        svg.getElementsByClassName("st6")[1].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/transport/railway/extension.html","_self")
    });
    $(svg.getElementsByClassName("st6")[2]).on("mouseover", function () {
        svg.getElementsByClassName("st6")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st6")[2].style.setProperty("cursor", "pointer");
        $(svg.getElementById('water_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('water_connections')).hide();
        svg.getElementsByClassName("st6")[2].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/transport/shipping.html","_self")
    });
    $(svg.getElementsByClassName("st6")[3]).on("mouseover", function () {
        svg.getElementsByClassName("st6")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st6")[3].style.setProperty("cursor", "pointer");
        $(svg.getElementById('air_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('air_connections')).hide();
        svg.getElementsByClassName("st6")[3].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/transport/plane.html","_self")
    });
    //culture
    $(svg.getElementsByClassName("st7")[0]).on("mouseover", function () {
        svg.getElementsByClassName("st7")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st7")[0].style.setProperty("cursor", "pointer");
        $(svg.getElementById('culture_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('culture_connections')).hide();
        svg.getElementsByClassName("st7")[0].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/tourism/culture.html","_self")
    });
    //recreation
    $(svg.getElementsByClassName("st7")[1]).on("mouseover", function () {
        svg.getElementsByClassName("st7")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st7")[1].style.setProperty("cursor", "pointer");
        $(svg.getElementById('recreation_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('recreation_connections')).hide();
        svg.getElementsByClassName("st7")[1].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/tourism/destinations.html","_self")
    });
    //nature
    $(svg.getElementsByClassName("st7")[2]).on("mouseover", function () {
        svg.getElementsByClassName("st7")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st7")[2].style.setProperty("cursor", "pointer");
        $(svg.getElementById('nature_connections')).show();
    }).on("mouseleave", function () {
        $(svg.getElementById('nature_connections')).hide();
        svg.getElementsByClassName("st7")[2].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/tourism/input.html","_self")
    });
    $(svg.getElementsByClassName("st0")[3]).on("mouseover", function () {
        svg.getElementsByClassName("st0")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st0")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st0")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st0")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st0")[3].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("st0")[0].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st0")[1].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st0")[2].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st0")[3].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/land/agriculture.html","_self")
    });
    $(svg.getElementsByClassName("st1")[2]).on("mouseover", function () {
        svg.getElementsByClassName("st1")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st1")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st1")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st1")[2].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("st1")[0].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st1")[1].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st1")[2].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/water/aquaculture/overview.html","_self")
    });
    $(svg.getElementsByClassName("st2")[4]).on("mouseover", function () {
        svg.getElementsByClassName("st2")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st2")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st2")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st2")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st2")[4].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st2")[4].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("st2")[0].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st2")[1].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st2")[2].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st2")[3].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st2")[4].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/forest/information/forestry_overview.html","_self")
    });
    $(svg.getElementsByClassName("st3")[1]).on("mouseover", function () {
        svg.getElementsByClassName("st3")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st3")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st3")[1].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("st3")[0].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st3")[1].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/resources/mountain/marble/info.html","_self")
    });
    $(svg.getElementsByClassName("st8")[1]).on("mouseover", function () {
        svg.getElementsByClassName("st8")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st8")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st8")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st8")[1].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("st8")[0].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st8")[1].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st8")[2].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/energy/overview/nordic_power_balance.html","_self")
    });
    $(svg.getElementsByClassName("st4")[2]).on("mouseover", function () {
        svg.getElementsByClassName("st4")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st4")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st4")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st4")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st4")[4].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st4")[2].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("st4")[0].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st4")[1].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st4")[2].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st4")[3].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st4")[4].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/education/overview.html","_self")
    });
    $(svg.getElementsByClassName("st6")[4]).on("mouseover", function () {
        svg.getElementsByClassName("st6")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st6")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st6")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st6")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st6")[4].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st6")[4].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("st6")[0].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st6")[1].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st6")[2].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st6")[3].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st6")[4].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/transport/introduction/current.html","_self")
    });
    $(svg.getElementsByClassName("st7")[3]).on("mouseover", function () {
        svg.getElementsByClassName("st7")[0].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st7")[1].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st7")[2].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st7")[3].style.setProperty("opacity", "100%");
        svg.getElementsByClassName("st7")[3].style.setProperty("cursor", "pointer");
    }).on("mouseleave", function () {
        svg.getElementsByClassName("st7")[0].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st7")[1].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st7")[2].style.setProperty("opacity", "80%");
        svg.getElementsByClassName("st7")[3].style.setProperty("opacity", "80%");
    }).on("click", function() {
        window.open("/Blog/drivers/tourism/overview.html","_self")
    });
});