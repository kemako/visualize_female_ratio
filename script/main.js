var valueFemaleRatioHash = {};
var timeFemaleRatioHash = {};
var rankFemaleRatioHash = {};

var valueFemaleRatioEngHash = {};
var timeFemaleRatioEngHash = {};
var rankFemaleRatioEngHash = {};

var valueFemaleRatioITHash = {};
var timeFemaleRatioITHash = {};
var rankFemaleRatioITHash = {};

var valueFemaleRatioSciHash = {};
var timeFemaleRatioSciHash = {};
var rankFemaleRatioSciHash = {};

var valueFemaleRatioAgriHash = {};
var timeFemaleRatioAgriHash = {};
var rankFemaleRatioAgriHash = {};

var valueMasculinityHash = {};
var rankMasculinityHash = {};
var valuePdiHash = {};
var rankPdiHash = {};

var valueTeacherTerHash = {};
var rankTeacherTerHash = {};

var valueInternetHash = {};
var rankInternetHash = {};

var valueWageHash = {};
var rankWageHash = {};

var valuePubHash = {};

var latCoorHash = {};
var lonCoorHash = {};


var selectedCountryName=["","",""];
var delete_detail=-1;
var MAX_DETAIL=3;
var radius=5;

function OffHighlightGraph_changeDetail(selectedCountry) {
  if(valueFemaleRatioHash[selectedCountry] && valueMasculinityHash[selectedCountry]  ) {
    // Use D3 to select element, change color back to normal
    d3.select("#mas-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
      fill: "#1e90ff",
      r: radius
    })
    .style("opacity", "0.6");

    // Select text by id and then remove
    d3.selectAll("#mas" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
  }

  if(valueFemaleRatioHash[selectedCountry] && valuePdiHash[selectedCountry] ) {
    // Use D3 to select element, change color back to normal
    d3.select("#pdi-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
      fill: "#3cb371",
      r: radius
    })
    .style("opacity", "0.6");

    // Select text by id and then remove
    d3.selectAll("#pdi" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
  }

  if(valueFemaleRatioHash[selectedCountry] && valueTeacherTerHash[selectedCountry] ) {
    // Use D3 to select element, change color back to normal
    d3.select("#ter-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
      fill: "#ba55d3",
      r: radius
    })
    .style("opacity", "0.6");

    // Select text by id and then remove
    d3.selectAll("#ter" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
  }

  if(valueFemaleRatioHash[selectedCountry] && valueInternetHash[selectedCountry] ) {
    // Use D3 to select element, change color back to normal
    d3.select("#int-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
      fill: "#ffd700",
      r: radius
    })
    .style("opacity", "0.6");

    // Select text by id and then remove
    d3.selectAll("#int" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
  }

  if(valueFemaleRatioHash[selectedCountry] && valueWageHash[selectedCountry] ) {
    // Use D3 to select element, change color back to normal
    d3.select("#wag-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
      fill: "#ff7f50",
      r: radius
    })
    .style("opacity", "0.6");

    // Select text by id and then remove
    d3.selectAll("#wag" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
  }

  if(valuePubHash[selectedCountry] && valueWageHash[selectedCountry] ) {
    // Use D3 to select element, change color back to normal
    d3.select("#pub-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
      fill: "gray",
      r: radius
    })
    .style("opacity", "0.6");

    // Select text by id and then remove
    d3.selectAll("#pub" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
  }

}


function hideDetail(selectedButton) {

    var id = selectedButton.id.replace('close-button-detail_','');
    var selectedCountry=selectedCountryName[id];
    OffHighlightGraph_changeDetail(selectedCountry);
    selectedCountryName[id]="";
    if(delete_detail==-1 || delete_detail>id){
      delete_detail=id;
    }
    var button = document.getElementById(selectedButton.id);
    button.style.visibility="hidden";
    var x = document.getElementById("detail_"+id);
    x.style.border = "none";
    x.innerHTML = "";
}

var mascnt = 0;
function changeMasVis() {
    mascnt++;
    var mas = document.getElementsByClassName("mas");
    var mas_graph = d3.select("#mas-graph");
    if(mascnt % 2 == 0) {
      mas_graph.style("visibility", "visible");
      for (var i=0;i<mas.length;i++) {
        mas[i].style.display = "block";
      }
    } else {
      mas_graph.style("visibility", "hidden");
      for (var i=0;i<mas.length;i++) {
        mas[i].style.display = "none";
      }
    }
}

var slider = d3.select("#myRange").style("display", "none");

var pdicnt = 0;
function changePdiVis() {
    pdicnt++;
    var pdi = document.getElementsByClassName("pdi");
    var pdi_graph = d3.select("#pdi-graph");
    if(pdicnt % 2 == 0) {
      pdi_graph.style("visibility", "visible");
      for (var i=0;i<pdi.length;i++) {
        pdi[i].style.display = "block";
      }
    } else {
      pdi_graph.style("visibility", "hidden");
      for (var i=0;i<pdi.length;i++) {
        pdi[i].style.display = "none";
      }
    }
}

var teachercnt = 0;
function changeTeacherVis() {
    teachercnt++;
    var ter = document.getElementsByClassName("ter");
    var ter_graph = d3.select("#ter-graph");
    if(teachercnt % 2 == 0) {
      ter_graph.style("visibility", "visible");
      for (var i=0;i<ter.length;i++) {
        ter[i].style.display = "block";
      }
    } else {
      ter_graph.style("visibility", "hidden");
      for (var i=0;i<ter.length;i++) {
        ter[i].style.display = "none";
      }
    }
}
var intcnt = 0;
function changeIntVis() {
    intcnt++;
    var int = document.getElementsByClassName("int");
    var int_graph = d3.select("#int-graph");
    if(intcnt % 2 == 0) {
      int_graph.style("visibility", "visible");
      for (var i=0;i<int.length;i++) {
        int[i].style.display = "block";
      }
    } else {
      int_graph.style("visibility", "hidden");
      for (var i=0;i<int.length;i++) {
        int[i].style.display = "none";
      }
    }
}

var wagcnt = 0;
function changeWagVis() {
    wagcnt++;
    var wag = document.getElementsByClassName("wag");
    var wag_graph = d3.select("#wag-graph");
    if(wagcnt % 2 == 0) {
      wag_graph.style("visibility", "visible");
      for (var i=0;i<wag.length;i++) {
        wag[i].style.display = "block";
      }
    } else {
      wag_graph.style("visibility", "hidden");
      for (var i=0;i<wag.length;i++) {
        wag[i].style.display = "none";
      }
    }
}
var pubcnt = 0;
function changePubVis() {
    pubcnt++;
    var pub = document.getElementsByClassName("pub");
    var pub_graph = d3.select("#pub-graph");
    if(pubcnt % 2 == 0) {
      pub_graph.style("visibility", "visible");
      for (var i=0;i<pub.length;i++) {
        pub[i].style.display = "block";
      }
    } else {
      pub_graph.style("visibility", "hidden");
      for (var i=0;i<pub.length;i++) {
        pub[i].style.display = "none";
      }
    }
}
d3.csv("data/world_coordinate.csv", function(err, coordinate_data) {
  d3.csv("analyze/6-dimensions.csv", function(err, dim6_data) {
    d3.csv("analyze/female_ratio_engineering.csv", function(err, female_ratio_data) {
        d3.csv("analyze/female_ratio_information.csv", function(err, female_ratio_it_data) {
          d3.csv("analyze/female_ratio_science.csv", function(err, female_ratio_sci_data) {
            d3.csv("analyze/female_ratio_agriculture.csv", function(err, female_ratio_agri_data) {
            d3.csv("analyze/female_ratio_teacher_tertiary.csv", function(err, female_ratio_teacher_tertiary_data) {
            d3.csv("analyze/internet_female.csv", function(err, internet_female_data) {
            d3.csv("analyze/gender_wage.csv", function(err, gender_wage_data) {
            d3.csv("analyze/public_education.csv", function(err, pub_data) {
              d3.json("https://s3-us-west-2.amazonaws.com/vida-public/geo/world-topo-min.json", function(error, world) {
                  var female_ratio_config = {"data0":"Country","data1":"Value","data2":"Time","data3":"rank",
                              "label0":"label 0","label1":"label 1","color0":"#ffddf5","color1":"#ff024a",
                              "width":700,"height":700}

                  var dim6_config = {"data0":"country","data1":"mas","data2":"pdi","data3":"mas_rank","data4":"pdi_rank",
                              "label0":"label 0","label1":"label 1","color":"#0066CC"}

                  var coor_config = {"data0":"name_ens","data1":"lat", "data2":"lon",
                              "label0":"label 0","label1":"label 1","color":"#0066CC"}

                  var width = female_ratio_config.width
                  var height = female_ratio_config.height;

                  var COLOR_COUNTS = 9;

                  function Interpolate(start, end, steps, count) {
                      var s = start,
                          e = end,
                          final = s + (((e - s) / steps) * count);
                      return Math.floor(final);
                  }

                  function Color(_r, _g, _b) {
                      var r, g, b;
                      var setColors = function(_r, _g, _b) {
                          r = _r;
                          g = _g;
                          b = _b;
                      };
                      setColors(_r, _g, _b);
                      this.getColors = function() {
                          var colors = {
                              r: r,
                              g: g,
                              b: b
                          };
                          return colors;
                      };
                  }
                  function hexToRgb(hex) {
                      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                      return result ? {
                          r: parseInt(result[1], 16),
                          g: parseInt(result[2], 16),
                          b: parseInt(result[3], 16)
                      } : null;
                  }


                  var COLOR_FIRST = female_ratio_config.color0, COLOR_LAST = female_ratio_config.color1;

                  var rgb = hexToRgb(COLOR_FIRST);
                  var COLOR_START = new Color(rgb.r, rgb.g, rgb.b);

                  rgb = hexToRgb(COLOR_LAST);
                  var COLOR_END = new Color(rgb.r, rgb.g, rgb.b);

                  var startColors = COLOR_START.getColors(),
                      endColors = COLOR_END.getColors();

                  var colors = [];
                  for (var i = 0; i < COLOR_COUNTS; i++) {
                    var r = Interpolate(startColors.r, endColors.r, COLOR_COUNTS, i);
                    var g = Interpolate(startColors.g, endColors.g, COLOR_COUNTS, i);
                    var b = Interpolate(startColors.b, endColors.b, COLOR_COUNTS, i);
                    colors.push(new Color(r, g, b));
                  }

                  var FEMALE_RATIO_CTR = female_ratio_config.data0;
                  var FEMALE_RATIO_VALUE = female_ratio_config.data1;
                  var FEMALE_RATIO_TIME = female_ratio_config.data2;
                  var FEMALE_RATIO_RANK = female_ratio_config.data3;

                  var DIM6_CTR = dim6_config.data0;
                  var DIM6_MAS = dim6_config.data1;
                  var DIM6_PDI = dim6_config.data2;
                  var DIM6_MAS_RANK = dim6_config.data3;
                  var DIM6_PDI_RANK = dim6_config.data4;

                  var COOR_CTR = coor_config.data0;
                  var COOR_LAT = coor_config.data1;
                  var COOR_LON = coor_config.data2;

                  var TEACHER_TER_CTR = "Country";
                  var TEACHER_TER_VALUE = "Value";
                  var TEACHER_TER_RANK = "rank";

                  var INT_CTR = "Economy name";
                  var INT_VALUE = "Female";
                  var INT_RANK = "rank";

                  var WAGE_CTR = "Country";
                  var WAGE_VALUE = "Value";
                  var WAGE_RANK = "rank";

                  var PUB_CTR = "Country";
                  var PUB_VALUE = "Total";

                  var scale = (width + 1) / 2 / Math.PI;
                  var projection = d3.geo.mercator()
                      .scale(scale)
                      .translate([width / 2, height / 2])
                      .center([0, 0])
                      .precision(.1);

                  var svg = d3.select("#map").append("svg")
                      .attr("width", width)
                      .attr("height", height);

                  var path = d3.geo.path()
                      .projection(projection);

                  var graticule = d3.geo.graticule();

                  svg.append("path")
                      .datum(graticule)
                      .attr("class", "graticule")
                      .attr("d", path);

                      var widthGraph = 150;
                      var heightGraph = 150;
                      var offsetGraph = 40;

                      var MasculinityScale = d3.scale.linear().domain([0, 100])
                                          .range([0, widthGraph]);

                      var PdiScale = d3.scale.linear().domain([0, 100])
                                          .range([0, widthGraph]);

                      var TeacherScale = d3.scale.linear().domain([0, 100])
                                          .range([0, widthGraph]);

                      var IntScale = d3.scale.linear().domain([0, 100])
                                          .range([0, widthGraph]);

                      var WagScale = d3.scale.linear().domain([0, 50])
                                          .range([0, widthGraph]);

                      var PubScale = d3.scale.linear().domain([0, 30])
                                          .range([0, widthGraph]);

                      var FemaleRatioScale = d3.scale.linear().domain([0, 100])
                                          .range([heightGraph, 0]);

                      var MasculinityAxis = d3.svg.axis().scale(MasculinityScale).orient("bottom")
                                        .ticks(5, d3.format(",d"));

                      var PdiAxis = d3.svg.axis().scale(PdiScale).orient("bottom")
                                        .ticks(5, d3.format(",d"));

                      var TeacherAxis = d3.svg.axis().scale(TeacherScale).orient("bottom")
                                        .ticks(5, d3.format(",d"));

                      var IntAxis = d3.svg.axis().scale(IntScale).orient("bottom")
                                        .ticks(5, d3.format(",d"));

                      var WagAxis = d3.svg.axis().scale(WagScale).orient("bottom")
                                        .ticks(5, d3.format(",d"));

                      var PubAxis = d3.svg.axis().scale(PubScale).orient("bottom")
                                        .ticks(5, d3.format(",d"));

                      var FemaleRatioAxis = d3.svg.axis().scale(FemaleRatioScale).orient("left");

                      var masGraph = d3.select("#mas-graph").append("svg")
                          .attr("width", widthGraph + 2*offsetGraph)
                          .attr("height", heightGraph + 2*offsetGraph);

                      var pdiGraph = d3.select("#pdi-graph").append("svg")
                          .attr("width", widthGraph + 2*offsetGraph)
                          .attr("height", heightGraph + 2*offsetGraph);

                      var terGraph = d3.select("#ter-graph").append("svg")
                          .attr("width", widthGraph + 2*offsetGraph)
                          .attr("height", heightGraph + 2*offsetGraph);

                      var intGraph = d3.select("#int-graph").append("svg")
                          .attr("width", widthGraph + 2*offsetGraph)
                          .attr("height", heightGraph + 2*offsetGraph);

                      var wagGraph = d3.select("#wag-graph").append("svg")
                          .attr("width", widthGraph + 2*offsetGraph)
                          .attr("height", heightGraph + 2*offsetGraph);

                      var pubGraph = d3.select("#pub-graph").append("svg")
                          .attr("width", widthGraph + 2*offsetGraph)
                          .attr("height", heightGraph + 2*offsetGraph);

                      function log10(val) {
                        return Math.log(val);
                      }
                      //set onclick

                      var Radio_Engineering = document.getElementById("Engineering");
                      Radio_Engineering.addEventListener("click",RadioOnclick );

                      var Radio_IT = document.getElementById("IT");
                      Radio_IT.addEventListener("click",RadioOnclick );

                      var Radio_Science = document.getElementById("Science");
                      Radio_Science.addEventListener("click",RadioOnclick );

                      var Radio_Agriculture = document.getElementById("Agriculture");
                      Radio_Agriculture.addEventListener("click",RadioOnclick );

                      var selectedField="Engineering";
                      function RadioOnclick(){
                        var fieldForm =  document.forms[0].elements["field"];
                        for(var i = 0; i < fieldForm.length; i++)
                        {
                          if(fieldForm[i].checked)
                          {
                            selectedField = fieldForm[i].value;

                            break;
                          }
                        }
                        console.log(selectedField);
                        changeField(selectedField);
                      }
                      InitButton();
                      function InitButton()
	                     {
	                        Radio_Engineering.checked=true;
                          Radio_IT.checked=false;
                          Radio_Science.checked=false;
                          Radio_Agriculture.checked=false;

                          document.getElementById("cmn-toggle-1").checked=true;
                          document.getElementById("cmn-toggle-2").checked=true;
                          document.getElementById("cmn-toggle-3").checked=true;
                          document.getElementById("cmn-toggle-4").checked=true;
                          document.getElementById("cmn-toggle-5").checked=true;
                          document.getElementById("cmn-toggle-6").checked=true;



                        }


                      female_ratio_data.forEach(function(d) {
                        valueFemaleRatioHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_VALUE];
                        timeFemaleRatioHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_TIME];
                        rankFemaleRatioHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_RANK];
                        valueFemaleRatioEngHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_VALUE];
                        timeFemaleRatioEngHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_TIME];
                        rankFemaleRatioEngHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_RANK];
                      });
                      female_ratio_it_data.forEach(function(d) {
                        valueFemaleRatioITHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_VALUE];
                        timeFemaleRatioITHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_TIME];
                        rankFemaleRatioITHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_RANK];
                      });

                      female_ratio_sci_data.forEach(function(d) {
                        valueFemaleRatioSciHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_VALUE];
                        timeFemaleRatioSciHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_TIME];
                        rankFemaleRatioSciHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_RANK];
                      });

                      female_ratio_agri_data.forEach(function(d) {
                        valueFemaleRatioAgriHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_VALUE];
                        timeFemaleRatioAgriHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_TIME];
                        rankFemaleRatioAgriHash[d[FEMALE_RATIO_CTR]] = +d[FEMALE_RATIO_RANK];
                      });

                      dim6_data.forEach(function(d) {
                        valueMasculinityHash[d[DIM6_CTR]] = +d[DIM6_MAS];
                        rankMasculinityHash[d[DIM6_CTR]] = +d[DIM6_MAS_RANK];
                        valuePdiHash[d[DIM6_CTR]] = +d[DIM6_PDI];
                        rankPdiHash[d[DIM6_CTR]] = +d[DIM6_PDI_RANK];
                      });

                      coordinate_data.forEach(function(d) {
                        latCoorHash[d[COOR_CTR]] = +d[COOR_LAT];
                        lonCoorHash[d[COOR_CTR]] = +d[COOR_LON];
                      });

                      female_ratio_teacher_tertiary_data.forEach(function(d) {
                        valueTeacherTerHash[d[TEACHER_TER_CTR]] = +d[TEACHER_TER_VALUE];
                        rankTeacherTerHash[d[TEACHER_TER_CTR]] = +d[TEACHER_TER_RANK];
                      });

                      internet_female_data.forEach(function(d) {
                        valueInternetHash[d[INT_CTR]] = +d[INT_VALUE];
                        rankInternetHash[d[INT_CTR]] = +d[INT_RANK];
                      });

                      gender_wage_data.forEach(function(d) {
                        valueWageHash[d[WAGE_CTR]] = +d[WAGE_VALUE];
                        rankWageHash[d[WAGE_CTR]] = +d[WAGE_RANK];
                      });

                      pub_data.forEach(function(d) {
                        valuePubHash[d[PUB_CTR]] = +d[PUB_VALUE];
                      });

                      function countryColor(d){
                        if (valueFemaleRatioHash[d.properties.name]) {
                          var c = quantize((valueFemaleRatioHash[d.properties.name]));
                          var color = colors[c].getColors();
                          return "rgb(" + color.r + "," + color.g +
                              "," + color.b + ")";
                        } else {
                          return "#ccc";
                        }
                      }



                      function fixGraph(class_name){
                        var class_id=class_name.replace("Graph-circle","");
                          var ele=d3.selectAll("."+class_name);

                          ele.attr('display', "block");
                        if(class_id==="mas"){

                          ele.attr('display', function(d){
                             if(!valueMasculinityHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                               return 'none';
                             }
                           });


                         }
                         else if(class_id==="pdi"){

                           ele.attr('display', function(d){
                              if(!valuePdiHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                return 'none';
                              }
                            });

                          }
                          else if(class_id==="ter"){

                            ele.attr('display', function(d){
                               if(!valueTeacherTerHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                 return 'none';
                               }
                             });


                           }
                          else if(class_id==="int"){

                            ele.attr('display', function(d){
                               if(!valueInternetHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                 return 'none';
                               }
                             });
                           }

                           else if(class_id==="wag"){

                             ele.attr('display', function(d){
                                if(!valueWageHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                  return 'none';
                                }
                              });
                            }

                           else if(class_id==="pub"){

                             ele.attr('display', function(d){
                                if(!valuePubHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                  return 'none';
                                }
                              });
                            }

                            ele.transition()
                            .duration(1000)
                             .delay(function(d){ return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]); })
                            .ease("circle-change")
                              .attr('cy', function(d) {
                              if(valueFemaleRatioHash[d.properties.name]) {
                                return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]);
                              }
                            });
                           //Todo

                          for(var i =0; i<MAX_DETAIL;i++){
                            var selectedCountry = selectedCountryName[i];
                            if(class_id==="mas")    d3.selectAll("#mas"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();
                            if(class_id==="pdi") d3.selectAll("#pdi"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();
                            if(class_id==="ter") d3.selectAll("#ter"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();
                            if(class_id==="int") d3.selectAll("#int"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();
                            if(class_id==="wag") d3.selectAll("#wag"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();
                            if(class_id==="pub") d3.selectAll("#pub"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();
                            if(selectedCountry!='' && valueFemaleRatioHash[selectedCountry] ){
                              if(class_id==="mas" && valueMasculinityHash[selectedCountry]){
                                //console.log(  d3.select("#"+class_id+selectedCountry.replace(/[^a-zA-Z]/g, "")));
                                //d3.selectAll("#mas"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();

                                masGraph.append("text").attr({
                                   id: "mas" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                                    x: function() { return MasculinityScale(valueMasculinityHash[selectedCountry]); },
                                    y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; }
                                })
                                .text(function() {
                                  return selectedCountry;  // Value of the text
                                });
                              }
                              else if(class_id==="pdi" && valuePdiHash[selectedCountry]){
                                //d3.selectAll("#pdi"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();

                                pdiGraph.append("text").attr({
                                   id: "pdi" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                                    x: function() { return PdiScale(valuePdiHash[selectedCountry]); },
                                    y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; },

                                })
                                .text(function() {
                                  return selectedCountry;  // Value of the text
                                });
                              }
                                else if(class_id==="ter" && valueTeacherTerHash[selectedCountry]){
                                //  d3.selectAll("#ter"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();

                                  terGraph.append("text").attr({
                                     id: "ter" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                                      x: function() { return TeacherScale(valueTeacherTerHash[selectedCountry]); },
                                      y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; },
                                  })
                                  .text(function() {
                                    return selectedCountry;  // Value of the text
                                  });
                              }
                                else if(class_id==="int" && valueInternetHash[selectedCountry]){
                                  //d3.selectAll("#int"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();

                                  intGraph.append("text").attr({
                                     id: "int" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                                      x: function() { return IntScale(valueInternetHash[selectedCountry]); },
                                      y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; },
                                  })
                                  .text(function() {
                                    return selectedCountry;  // Value of the text
                                  });
                              }
                              else if(class_id==="wag" && valueWageHash[selectedCountry]){
                                d3.selectAll("#wag"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();

                                wagGraph.append("text").attr({
                                   id: "wag" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                                    x: function() { return WagScale(valueWageHash[selectedCountry]); },
                                    y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; },
                                })
                                .text(function() {
                                  return selectedCountry;  // Value of the text
                                });
                            }

                              else if(class_id==="pub" && valueWageHash[selectedCountry]){
                                d3.selectAll("#pub"+selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();

                                pubGraph.append("text").attr({
                                   id: "pub" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                                    x: function() { return PubScale(valuePubHash[selectedCountry]); },
                                    y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; },
                                })
                                .text(function() {
                                  return selectedCountry;  // Value of the text
                                });
                              }

                            }
                          }


                      }

                      function changeField(selectedField){
                        var rank_data;
                            if(selectedField==="IT"){
                              console.log("changeField IT");
                              valueFemaleRatioHash=valueFemaleRatioITHash;
                              timeFemaleRatioHash=timeFemaleRatioITHash;
                              rankFemaleRatioHash=rankFemaleRatioITHash;
                              rank_data=female_ratio_it_data;

                            }
                            else if(selectedField==="Engineering"){
                              console.log("changeField Engineering");
                              valueFemaleRatioHash=valueFemaleRatioEngHash;
                              timeFemaleRatioHash=timeFemaleRatioEngHash;
                              rankFemaleRatioHash=rankFemaleRatioEngHash;
                              rank_data=female_ratio_data;
                            }
                            else if(selectedField==="Science"){
                              console.log("changeField Science");
                              valueFemaleRatioHash=valueFemaleRatioSciHash;
                              timeFemaleRatioHash=timeFemaleRatioSciHash;
                              rankFemaleRatioHash=rankFemaleRatioSciHash;
                              rank_data=female_ratio_sci_data;
                            }
                            else if(selectedField==="Agriculture"){
                              console.log("changeField Agriculture");
                              valueFemaleRatioHash=valueFemaleRatioAgriHash;
                              timeFemaleRatioHash=timeFemaleRatioAgriHash;
                              rankFemaleRatioHash=rankFemaleRatioAgriHash;
                              rank_data=female_ratio_agri_data;
                            }

                            d3.select("#rank").selectAll("*").remove();

                            d3.select("#rank").append("svg")
                                .attr("width", "200")
                                .attr("height", "100%")
                                .selectAll("text")
                                .data(rank_data.sort(function(x, y){
                                    return x.rank- y.rank;
                                }).filter(function(d,i) { return (d.rank<=10 || d.rank>=rank_data.length-9);}))
                                .enter()
                                .append("text")
                                .text(function (d, i) {

                                    return "No."+(parseInt(d.rank)) + " ：" + d.Country;
                                })
                                .attr("class", "rank_ctr")
                                .attr("y", function (d, i) {
                                    return (i * 25) + 20;
                                })
                                .attr("x", 10)
                                .attr("fill", "black")
                                .attr("stroke", "none")
                                .on("mouseover", function (d,i) {
                                  d3.selectAll("#"+d.Country.replace(/[^a-zA-Z]/g, "")).attr("stroke","red");
                                    HighlightGraph(d.Country);
                                })
                                .on("mouseout", function (d,i) {
                                  d3.selectAll("#"+d.Country.replace(/[^a-zA-Z]/g, "")).attr("stroke","none");
                                    OffHighlightGraph(d.Country);
                                })
                                .on("click", function (d,i) {
                                    showDetail(d.Country);
                                });

                            var ele=d3.selectAll(".country");

                            ele.style("fill",function(d) {

                                return countryColor(d);
                            });

                            fixDetail();
                            fixGraph("pdiGraph-circle");
                            fixGraph("masGraph-circle");
                            fixGraph("terGraph-circle");
                            fixGraph("intGraph-circle");
                            fixGraph("wagGraph-circle");
                            fixGraph("pubGraph-circle");

                            //Change Menu option data
                            d3.select("#Menu").selectAll("option")
                              .data(countries)
                              .exit()
                              .remove();//remove all options

                             d3.select("#Menu").selectAll("option")
                             .data(countries.filter(function(d) { return valueMasculinityHash[d.properties.name] || valueFemaleRatioHash[d.properties.name] || valuePdiHash[d.properties.name] || valueTeacherTerHash[d.properties.name] || valueInternetHash[d.properties.name]|| valueWageHash[d.properties.name]|| valuePubHash[d.properties.name]}))
                                 .enter()
                                 .append("option")
                                 .attr("value", function(d){
                                       return d.properties.name;
                                 })
                                .text(function(d){
                                     return d.properties.name;
                                 });



                      }

                      function fixDetail(){
                        for(var i=0;i<3;i++){
                          if(selectedCountryName[i]!=""){
                            var x = document.getElementById("detail_"+i);

                            x.innerHTML = "<h2>"+selectedCountryName[i]+"</h2>";
                            x.innerHTML += "<table align='center'><tr><td align='left'>Female ratio : </td><td align='right'>"+valueFemaleRatioHash[selectedCountryName[i]]+
                            "</td></tr><tr><td align='left'>Ranking No. : </td><td align='right'>"+rankFemaleRatioHash[selectedCountryName[i]]+
                            "</td></tr></table>"
                            var pieWidth = 100;
                            var pieHeight = 100;

                            var svg = d3.select('#detail_'+i).append('svg').attr({
                                width: pieWidth,
                                height: pieHeight
                            });

                            var pie = d3.layout.pie().sort(null).value(function(d) {
                                return d;
                            });

                            var arc = d3.svg.arc().innerRadius(10).outerRadius(pieWidth / 2);

                            var dataPie = [valueFemaleRatioHash[selectedCountryName[i]], 100-valueFemaleRatioHash[selectedCountryName[i]]]
                            var colors = ["deeppink", "#4169e1"]

                            svg.selectAll('path').data(pie(dataPie)).enter().append('path').style({
                                fill: function(d, i) {
                                    return colors[i];
                                }
                            }).attr({
                                d: arc,
                                transform: 'translate(' + pieWidth / 2 + ', ' + pieHeight / 2 + ')'
                            })
                            .transition()   // トランジション開始
                            .duration(1000) // 1秒間でアニメーションさせる
                            .attrTween("d", function(d){    // 指定した範囲で値を変化させアニメーションさせる
                                var interpolate = d3.interpolate(
                                    { startAngle : 0, endAngle : 0 },   // 各円グラフの開始角度
                                    { startAngle : d.startAngle, endAngle : d.endAngle }    // 各円グラフの終了角度
                                );
                                return function(t){
                                    return arc(interpolate(t)); // 時間に応じて処理
                                }
                            })
                          }
                        }
                      }


                      function changeDetail(selectedCountry) {
                        // Check to see if the counter has been initialized
                        HighlightGraph(selectedCountry);
                        if ( typeof changeDetail.counter == 'undefined' ) {
                          // It has not... perform the initialization
                          changeDetail.counter = 0;
                        }

                          if(delete_detail!=-1){
                              changeDetail.counter=delete_detail;
                              delete_detail=-1;
                          }

                          var button = document.getElementById("close-button-detail_"+changeDetail.counter);
                          button.style.visibility="visible";
                          if(selectedCountryName[changeDetail.counter]!=""){
                            var offSelectedCountry = selectedCountryName[changeDetail.counter];
                            selectedCountryName[changeDetail.counter]=selectedCountry;
                            if( !selectedCountryName.includes(offSelectedCountry)){
                              OffHighlightGraph_changeDetail(offSelectedCountry);
                            }

                          }
                          else{
                            selectedCountryName[changeDetail.counter]=selectedCountry;
                          }

                          console.log(selectedCountryName);

                          var x = document.getElementById("detail_"+changeDetail.counter);

                          x.style.border = "solid 3px hotpink";


                          x.innerHTML = "<h2>"+selectedCountry+"</h2>";
                          x.innerHTML += "<table align='center'><tr><td align='left'>Female ratio : </td><td align='right'>"+valueFemaleRatioHash[selectedCountry]+
                          "</td><td align='right'></td></tr><tr><td align='left'>Ranking No.: </td><td align='right'>"+rankFemaleRatioHash[selectedCountry]+
                          "</td><td align='right'></td></tr></table>"
                          var pieWidth = 100;
                          var pieHeight = 100;

                          var svg = d3.select('#detail_'+changeDetail.counter).append('svg').attr({
                              width: pieWidth,
                              height: pieHeight
                          });

                          var pie = d3.layout.pie().sort(null).value(function(d) {
                              return d;
                          });

                          var arc = d3.svg.arc().innerRadius(10).outerRadius(pieWidth / 2);

                          var dataPie = [valueFemaleRatioHash[selectedCountry], 100-valueFemaleRatioHash[selectedCountry]];
                          var colors = ["deeppink", "#4169e1"];



                          svg.selectAll('path').data(pie(dataPie)).enter().append('path').style({
                              fill: function(d, i) {
                                  return colors[i];
                              }
                          }).attr({
                              d: arc,
                              transform: 'translate(' + pieWidth / 2 + ', ' + pieHeight / 2 + ')'
                          })

                          .transition()   // トランジション開始
                          .duration(1000) // 1秒間でアニメーションさせる
                          .attrTween("d", function(d){    // 指定した範囲で値を変化させアニメーションさせる
                              var interpolate = d3.interpolate(
                                  { startAngle : 0, endAngle : 0 },   // 各円グラフの開始角度
                                  { startAngle : d.startAngle, endAngle : d.endAngle }    // 各円グラフの終了角度
                              );
                              return function(t){
                                  return arc(interpolate(t)); // 時間に応じて処理
                              }
                          })

                          changeDetail.counter=changeDetail.counter+1;

                          changeDetail.counter%=(MAX_DETAIL);

                        }

                  var quantize = d3.scale.quantize()
                      .domain([0, 1.0])
                      .range(d3.range(COLOR_COUNTS).map(function(i) { return i }));

                  quantize.domain([d3.min(female_ratio_data, function(d){
                      return (+d[FEMALE_RATIO_VALUE]) }),
                    d3.max(female_ratio_data, function(d){
                      return (+d[FEMALE_RATIO_VALUE]) })]);


                    var countries = topojson.feature(world, world.objects.countries).features;

                    countries.sort(function(x, y){
                        return d3.ascending(x.properties.name, y.properties.name);
                    });


                    svg.append("path")
                       .datum(graticule)
                       .attr("class", "choropleth")
                       .attr("d", path);

                    var g = svg.append("g");

                    g.append("path")
                     .datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
                     .attr("class", "equator")
                     .attr("d", path);

                    var country = g.selectAll(".country").data(countries);

                    function showDetail(selectedCountry){
                      //reset
                      console.log(d3.selectAll(".country"));
                      d3.selectAll(".country")
                        .attr("stroke","none")
                        .style("opacity","1.0");

                      console.log(selectedCountry);
                      //low opacity on selectedcountry
                      d3.selectAll("#"+selectedCountry.replace(/[^a-zA-Z]/g, "")).attr("stroke","red");


                      changeDetail(selectedCountry);

                    }

                    country.enter().insert("path")
                        .attr("class", "country")
                        .attr("d",path)
                        .attr("id", function(d,i) { return d.properties.name.replace(/[^a-zA-Z]/g, ""); })
                        .attr("title", function(d) { return d.properties.name; })
                        .attr("stroke-width",2)
                        .style("fill", function(d) {

                            return countryColor(d);
                        })

                        .on("mousemove", function(d) {
                            HighlightGraph(d.properties.name);
                            var html = "";

                            html += "<div class=\"tooltip_kv\">";
                            html += "<span class=\"tooltip_country\">";
                            html += d.properties.name;
                            html += "</span>";
                            if(timeFemaleRatioHash[d.properties.name]){
                              html += "<br>";
                              html += "<span class=\"tooltip_key\">";
                              html += "Female Ratio";
                              html += "</span>";
                              html += "<span class=\"tooltip_value\">";
                              html += (valueFemaleRatioHash[d.properties.name] ? valueFemaleRatioHash[d.properties.name] : "");
                              html += "</span>";
                              html += "<br>";

                            }

                            html += "</div>";

                            $("#tooltip-container").html(html);
                            $(this).attr("fill-opacity", "0.8");
                            $("#tooltip-container").show();

                            var coordinates = d3.mouse(this);

                            var map_width = $('.choropleth')[0].getBoundingClientRect().width;

                            if (d3.event.pageX < map_width / 2) {
                              d3.select("#tooltip-container")
                                .style("top", (d3.event.layerY + 15) + "px")
                                .style("left", (d3.event.layerX + 15) + "px");
                            } else {
                              var tooltip_width = $("#tooltip-container").width();
                              d3.select("#tooltip-container")
                                .style("top", (d3.event.layerY + 15) + "px")
                                .style("left", (d3.event.layerX - tooltip_width - 30) + "px");
                            }
                        })
                        .on("click", function(d) {
                            showDetail(d.properties.name);
                        })
                        .on("mouseout", function(d) {
                                $(this).attr("fill-opacity", "1.0");
                                $("#tooltip-container").hide();
                                OffHighlightGraph(d.properties.name);
                            });

                    g.append("path")
                        .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
                        .attr("class", "boundary")
                        .attr("d", path);

                    svg.attr("height", female_ratio_config.height * 2.2 / 3);

                    //ranking

                    //d3.select("#rank").selectAll("*").remove();

                    d3.select("#rank").append("svg")
                        .attr("width", "100%")
                        .attr("height", "100%")
                        .selectAll("text")
                        .data(female_ratio_data.sort(function(x, y){
                            return x.rank- y.rank;
                        }).filter(function(d,i) { return (d.rank<=10 || d.rank>=female_ratio_data.length-9);}))
                        .enter()
                        .append("text")
                        .text(function (d, i) {

                            return "No."+(parseInt(d.rank)) + " ：" + d.Country;
                        })
                        .attr("class", "rank_ctr")
                        .attr("y", function (d, i) {
                            return (i * 35) + 20;
                        })
                        .attr("x", 10)
                        .attr("fill", "black")
                        .attr("stroke", "none")
                        .on("mouseover", function (d,i) {

                          d3.selectAll("#"+d.Country.replace(/[^a-zA-Z]/g, "")).attr("stroke","red");
                            HighlightGraph(d.Country);
                        })
                        .on("mouseout", function (d,i) {
                          d3.selectAll("#"+d.Country.replace(/[^a-zA-Z]/g, "")).attr("stroke","none");
                            OffHighlightGraph(d.Country);
                        })
                        .on("click", function (d,i) {
                            showDetail(d.Country);
                        });




                    // masは男らしさ(Masculinityの指標を円で表す)
                    var mas = g.selectAll(".mas").data(countries);

                    mas.enter().append('circle')
                          .attr("class", "mas")
                          .attr('cx', function(d) {
                            if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                              return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[0];
                            }
                           })
                          .attr('cy', projection([0,70])[1])
                          .attr('r', function(d) {
                              if(valueMasculinityHash[d.properties.name]){
                                return valueMasculinityHash[d.properties.name]/10;
                              }
                            })
                          .attr("stroke-width",2)
                          .attr('stroke', '#0000cd')
                          .attr('fill', '#1e90ff') // 塗りつぶし
                          .style('opacity', "0.6")
                          .transition()
                          .duration(1000)
                          .ease("bounce")
                            .attr('cy', function(d) {
                              if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                                return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[1];
                              }
                            })
                    var pdi = g.selectAll(".pdi").data(countries);

                    pdi.enter().append('circle')
                          .attr("class", "pdi")
                          .attr('cx', function(d) {
                            if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                              return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[0];
                            }
                           })
                          .attr('cy', projection([0,70])[1])
                          .attr('r', function(d) {
                              if(valuePdiHash[d.properties.name]){
                                return valuePdiHash[d.properties.name]/10;
                              }
                            })
                          .attr("stroke-width",2)
                          .attr('stroke', '#006400')
                          .attr('fill', '#3cb371') // 塗りつぶし
                          .style('opacity', "0.6")
                          .transition()
                          .duration(1000)
                          .ease("bounce")
                            .attr('cy', function(d) {
                              if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                                return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[1];
                              }
                            });
                    // terは大学教師の女性率
                    var ter = g.selectAll(".ter").data(countries);

                    ter.enter().append('circle')
                          .attr("class", "ter")
                          .attr('cx', function(d) {
                            if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                              return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[0];
                            }
                           })
                          .attr('cy', projection([0,70])[1])
                          .attr('r', function(d) {
                              if(valueTeacherTerHash[d.properties.name]){
                                return valueTeacherTerHash[d.properties.name]/4;
                              }
                            })
                          .attr("stroke-width",2)
                          .attr('stroke', '#800080')
                          .attr('fill', '#ba55d3') // 塗りつぶし
                          .style('opacity', "0.6")
                          .transition()
                          .duration(1000)
                          .ease("bounce")
                            .attr('cy', function(d) {
                              if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                                return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[1];
                              }
                            });

                    // intはusing internet(female)
                    var int = g.selectAll(".int").data(countries);

                    int.enter().append('circle')
                          .attr("class", "int")
                          .attr('cx', function(d) {
                            if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                              return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[0];
                            }
                           })
                          .attr('cy', projection([0,70])[1])
                          .attr('r', function(d) {
                              if(valueInternetHash[d.properties.name]){
                                return valueInternetHash[d.properties.name]/10;
                              }
                            })
                          .attr("stroke-width",2)
                          .attr('stroke', '#daa520')
                          .attr('fill', '#ffd700') // 塗りつぶし
                          .style('opacity', "0.6")
                          .transition()
                          .duration(1000)
                          .ease("bounce")
                            .attr('cy', function(d) {
                              if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                                return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[1];
                              }
                            });

                          // wagはgender wage gap
                    var wag = g.selectAll(".wag").data(countries);

                    wag.enter().append('circle')
                        .attr("class", "wag")
                        .attr('cx', function(d) {
                            if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                              return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[0];
                            }
                          })
                        .attr('cy', function(d) {
                                  if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                                    return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[1];
                                  }
                          })
                        .attr('r', function(d) {
                                    if(valueWageHash[d.properties.name]){
                                      return valueWageHash[d.properties.name]/2;
                                    }
                                  })
                          .attr("stroke-width",2)
                          .attr('stroke', '#ff4500')
                          .attr('fill', '#ff7f50') // 塗りつぶし
                          .style('opacity', "0.6")

                    var pub = g.selectAll(".pub").data(countries);

                    pub.enter().append('circle')
                        .attr("class", "pub")
                        .attr('cx', function(d) {
                            if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                              return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[0];
                            }
                          })
                        .attr('cy', function(d) {
                                  if(latCoorHash[d.properties.name] && lonCoorHash[d.properties.name]) {
                                    return projection([lonCoorHash[d.properties.name], latCoorHash[d.properties.name]])[1];
                                  }
                          })
                        .attr('r', function(d) {
                                    if(valueWageHash[d.properties.name]){
                                      return valueWageHash[d.properties.name]/2;
                                    }
                                  })
                          .attr("stroke-width",2)
                          .attr('stroke', 'dimgray')
                          .attr('fill', 'gray') // 塗りつぶし
                          .style('opacity', "0.6")
                    //zoom
                    var zoom = d3.behavior.zoom().on('zoom', function(){
                      projection.scale(scale * d3.event.scale);
                      country.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
                      g.selectAll(".boundary").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
                      .attr('stroke-width', function(d) {
                          return (2/(d3.event.scale));
                      });

                      mas.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
                          .attr('r', function(d) {
                              if(valueMasculinityHash[d.properties.name]){
                                return (valueMasculinityHash[d.properties.name]/(d3.event.scale*5));
                              }
                          })
                          .attr('stroke-width', function(d) {
                              return (2/(d3.event.scale));
                          });
                      pdi.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
                          .attr('stroke-width', function(d) {
                              return (2/(d3.event.scale));
                          })
                          .attr('r', function(d) {
                              if(valuePdiHash[d.properties.name]){
                                return (valuePdiHash[d.properties.name]/(d3.event.scale*5));
                              }
                          });
                      ter.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
                          .attr('stroke-width', function(d) {
                              return (2/(d3.event.scale));
                          })
                          .attr('r', function(d) {
                              if(valueTeacherTerHash[d.properties.name]){
                                return (valueTeacherTerHash[d.properties.name]/(d3.event.scale*4));
                              }
                          });
                      int.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
                          .attr('stroke-width', function(d) {
                              return (2/(d3.event.scale));
                          })
                          .attr('r', function(d) {
                              if(valueInternetHash[d.properties.name]){
                                return (valueInternetHash[d.properties.name]/(d3.event.scale*5));
                              }
                          });
                      wag.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
                          .attr('stroke-width', function(d) {
                              return (2/(d3.event.scale));
                          })
                          .attr('r', function(d) {
                              if(valueWageHash[d.properties.name]){
                                return (valueWageHash[d.properties.name]/(d3.event.scale));
                              }
                          });
                      pub.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
                          .attr('stroke-width', function(d) {
                              return (2/(d3.event.scale));
                          })
                          .attr('r', function(d) {
                              if(valuePubHash[d.properties.name]){
                                return (valuePubHash[d.properties.name]/(d3.event.scale));
                              }
                          });
                    });
                    svg.call(zoom);

                    //drag
                    drag = d3.behavior.drag().on('drag', function(){
                       var tl = projection.translate();
                       projection.translate([tl[0] + d3.event.dx, tl[1] + d3.event.dy]);
                       country.attr({
                         "cx" : d3.event.x,
                         "cy" : d3.event.y
                       });
                    });
                    svg.call(drag);

                    // Create a dropdown
                      var Menu = d3.select("#Menu")

                      Menu
                      .append("select")
                      .selectAll("option")

                          .data(countries.filter(function(d) { return valueMasculinityHash[d.properties.name] || valueFemaleRatioHash[d.properties.name] || valuePdiHash[d.properties.name] || valueTeacherTerHash[d.properties.name] || valueInternetHash[d.properties.name]|| valueWageHash[d.properties.name]}))

                          .enter()
                          .append("option")
                          .attr("value", function(d){
                                return d.properties.name;
                          })
                          .text(function(d){
                              return d.properties.name;
                          });

                    // Run update function when dropdown selection changes
                  	Menu.on('change', function(){

                    	// Find which country was selected from the dropdown
                      var selectedCountry = d3.select(this)
                                    .select("select")
                                    .property("value");

                                // Run update function with the selected country

                                showDetail(selectedCountry);
                      });


                      // 地図の下の相関関係を表すグラフ
                      masGraph.append("g")
                          .attr("class", "MasculinityAxis")
                          .attr("fill", "none")
                          .attr("stroke", "black")
                          .attr("transform", "translate(40, " + (heightGraph + 10) + ")")
                          .call(MasculinityAxis);

                     masGraph.append("g")
                        .attr("class", "FemaleRatioAxis")
                        .attr("fill", "none")
                        .attr("stroke", "black")
                        .attr("transform", "translate(40, 10)")
                        .call(FemaleRatioAxis);

                     masGraph.selectAll("g").selectAll("text")
                        .attr("fill", "black")
                        .attr("stroke", "none");

                     //x軸の説明
                     masGraph.append("text")
                        .attr("class", "MasculinityLabel")
                        .attr("text-anchor", "end")
                        .attr("x", widthGraph)
                        .attr("y", heightGraph + 5)
                        .text("Masculinity");

                     //y軸の説明
                     masGraph.append("text")
                        .attr("class", "FemaleRatioLabel")
                        .attr("text-anchor", "end")
                        .attr("y", 55)
                        .attr("transform", "rotate(-90)")
                        .text("Female Ratio(%)");

                     var masGraphDetail = masGraph.append("g")
                          .attr("class", "circles")
                          .selectAll(".circle")
                          .data(countries);

                     var radius = 5;

                     masGraphDetail.enter().append('circle')
                           .attr("class", "masGraph-circle")
                           .attr("id", function(d) {return "mas-graph-" + d.properties.name.replace(/[^a-zA-Z]/g, "")})
                           .attr('cx', function(d) {
                             if(valueMasculinityHash[d.properties.name]) {
                               return offsetGraph;
                             }
                            })
                           .attr('cy', function(d) {
                             if(valueFemaleRatioHash[d.properties.name]) {
                               return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]);
                             }
                            })
                           .attr('r', radius)
                           .attr('fill', '#1e90ff') // 塗りつぶし
                           .style('opacity', "0.6")
                           .attr('display', function(d){
                              if(!valueMasculinityHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                return 'none';
                              }
                            })
                           .on("mouseover", handleMouseOver)
                           .on("mouseout", handleMouseOut)
                           .transition()
                           .duration(1000)
                            .delay(function(d){ return MasculinityScale(valueMasculinityHash[d.properties.name]); })
                           .ease("circle-out")
                             .attr('cx', function(d) {
                               if(valueMasculinityHash[d.properties.name]) {
              //                   return offsetGraph + valueMasculinityHash[d.properties.name]/100*widthGraph;
                                 return offsetGraph + MasculinityScale(valueMasculinityHash[d.properties.name]);
                               }
                             });

                    function handleMouseOver(d, i) {  // Add interactivity
                      // Use D3 to select element, change color and size
                      d3.select(this).attr({
                        fill: "orange",
                        r: radius * 2
                      })
                      .style("opacity", "0.6");

                      // Specify where to put label of text
                      masGraph.append("text").attr({
                         id: "mas" + d.properties.name.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                          x: function() { return MasculinityScale(valueMasculinityHash[d.properties.name]); },
                          y: function() { return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]) - 10; }
                      })
                      .text(function() {
                        return d.properties.name;  // Value of the text
                      });
                      d3.selectAll("#"+d.properties.name.replace(/[^a-zA-Z]/g, "")).attr("stroke","red");
                    }

                    function handleMouseOut(d, i) {
                      // Use D3 to select element, change color back to normal
                      var selectedCountry=d.properties.name;
                      if(valueFemaleRatioHash[selectedCountry] && valueMasculinityHash[selectedCountry] && !selectedCountryName.includes(selectedCountry) ) {
                      d3.select(this).attr({
                        fill: "#1e90ff",
                        r: radius
                      })
                      .style("opacity", "0.6");

                      // Select text by id and then remove
                      d3.select("#mas" + d.properties.name.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                      d3.selectAll("#"+d.properties.name.replace(/[^a-zA-Z]/g, "")).attr("stroke","none");
                    }

                    //pdiのグラフ

                    pdiGraph.append("g")
                          .attr("class", "PdiAxis")
                          .attr("fill", "none")
                          .attr("stroke", "black")
                          .attr("transform", "translate(40, " + (heightGraph + 10) + ")")
                          .call(PdiAxis);

                     pdiGraph.append("g")
                        .attr("class", "FemaleRatioAxis")
                        .attr("fill", "none") .attr("stroke", "black") .attr("transform", "translate(40, 10)") .call(FemaleRatioAxis);
                     pdiGraph.selectAll("g").selectAll("text")
                        .attr("fill", "black")
                        .attr("stroke", "none");

                     //x軸の説明
                     pdiGraph.append("text")
                        .attr("class", "PdiLabel")
                        .attr("text-anchor", "end")
                        .attr("x", widthGraph)
                        .attr("y", heightGraph + 5)
                        .text("PDI");

                     //y軸の説明
                     pdiGraph.append("text")
                        .attr("class", "FemaleRatioLabel")
                        .attr("text-anchor", "end")
                        .attr("y", 55)
                        .attr("transform", "rotate(-90)")
                        .text("Female Ratio(%)");

                     var pdiGraphDetail = pdiGraph.append("g")
                          .attr("class", "circles")
                          .selectAll(".circle")
                          .data(countries);

                     var radius = 5;

                     pdiGraphDetail.enter().append('circle')
                           .attr("class", "pdiGraph-circle")
                           .attr("id", function(d) {return "pdi-graph-" + d.properties.name.replace(/[^a-zA-Z]/g, "")})
                           .attr('cx', function(d) {
                             if(valuePdiHash[d.properties.name]) {
                               return offsetGraph/2;
                             }
                            })
                           .attr('cy', function(d) {
                             if(valueFemaleRatioHash[d.properties.name]) {
                               return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]);
                             }
                            })
                           .attr('r', radius)
                           .attr('fill', '#3cb371') // 塗りつぶし
                           .style('opacity', "0.6")
                           .attr('display', function(d){
                              if(!valuePdiHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                return 'none';
                              }
                            })
                           .on("mouseover", handleMouseOverPdi)
                           .on("mouseout", handleMouseOutPdi)
                           .transition()
                           .duration(1000)
                            .delay(function(d){ return PdiScale(valuePdiHash[d.properties.name]); })
                           .ease("circle-out")
                             .attr('cx', function(d) {
                               if(valuePdiHash[d.properties.name]) {
                                 return offsetGraph/2 + PdiScale(valuePdiHash[d.properties.name]);
                               }
                             });

                    function handleMouseOverPdi(d, i) {  // Add interactivity

                      // Use D3 to select element, change color and size
                      d3.select(this).attr({
                        fill: "orange",
                        r: radius * 2
                      })
                      .style("opacity", "0.6");

                      // Specify where to put label of text
                      pdiGraph.append("text").attr({
                         id: "pdi" + d.properties.name.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                          x: function() { return PdiScale(valuePdiHash[d.properties.name]); },
                          y: function() { return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]) - 10; }
                      })
                      .text(function() {
                        return d.properties.name;  // Value of the text
                      });

                      d3.selectAll("#"+d.properties.name.replace(/[^a-zA-Z]/g, "")).attr("stroke","red");
                    }

                    function handleMouseOutPdi(d, i) {
                      // Use D3 to select element, change color back to normal
                      var selectedCountry=d.properties.name;
                      if(valueFemaleRatioHash[selectedCountry] && valuePdiHash[selectedCountry] && !selectedCountryName.includes(selectedCountry) ) {
                        d3.select(this).attr({
                          fill: "#3cb371",
                          r: radius
                        })
                        .style("opacity", "0.6");

                        // Select text by id and then remove
                        d3.select("#pdi" + d.properties.name.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                      d3.selectAll("#"+d.properties.name.replace(/[^a-zA-Z]/g, "")).attr("stroke","none");
                    }

                    terGraph.append("g")
                          .attr("class", "TeacherAxis")
                          .attr("fill", "none")
                          .attr("stroke", "black")
                          .attr("transform", "translate(40, " + (heightGraph + 10) + ")")
                          .call(TeacherAxis);

                     terGraph.append("g")
                        .attr("class", "FemaleRatioAxis")
                        .attr("fill", "none")
                        .attr("stroke", "black")
                        .attr("transform", "translate(40, 10)")
                        .call(FemaleRatioAxis);

                     terGraph.selectAll("g").selectAll("text")
                        .attr("fill", "black")
                        .attr("stroke", "none");

                     //x軸の説明
                     terGraph.append("text")
                        .attr("class", "TeacherLabel")
                        .attr("text-anchor", "end")
                        .attr("x", widthGraph + 18)
                        .attr("y", heightGraph + 5)
                        .text("Teacher");

                     //y軸の説明
                     terGraph.append("text")
                        .attr("class", "FemaleRatioLabel")
                        .attr("text-anchor", "end")
                        .attr("y", 55)
                        .attr("transform", "rotate(-90)")
                        .text("Female Ratio(%)");

                     var terGraphDetail = terGraph.append("g")
                          .attr("class", "circles")
                          .selectAll(".circle")
                          .data(countries);

                     var radius = 5;

                     terGraphDetail.enter().append('circle')
                           .attr("class", "terGraph-circle")
                           .attr("id", function(d) {return "ter-graph-" + d.properties.name.replace(/[^a-zA-Z]/g, "")})
                           .attr('cx', function(d) {
                             if(valueTeacherTerHash[d.properties.name]) {
            //                   return offsetGraph + valueMasculinityHash[d.properties.name]/100*widthGraph;
                               return offsetGraph;
                             }
                            })
                           .attr('cy', function(d) {
                             if(valueFemaleRatioHash[d.properties.name]) {
                               return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]);
                             }
                            })
                           .attr('r', radius)
                           .attr('fill', '#ba55d3') // 塗りつぶし
                           .style('opacity', "0.6")
                           .attr('display', function(d){
                              if(!valueTeacherTerHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                return 'none';
                              }
                            })
                           .on("mouseover", handleMouseOverTer)
                           .on("mouseout", handleMouseOutTer)
                           .transition()
                           .duration(1000)
                            .delay(function(d){ return TeacherScale(valueTeacherTerHash[d.properties.name]); })
                           .ease("circle-out")
                             .attr('cx', function(d) {
                               if(valueTeacherTerHash[d.properties.name]) {
                                 return offsetGraph + TeacherScale(valueTeacherTerHash[d.properties.name]);
                               }
                             });

                    function handleMouseOverTer(d, i) {  // Add interactivity
                      // Use D3 to select element, change color and size
                      d3.select(this).attr({
                        fill: "orange",
                        r: radius * 2
                      })
                      .style("opacity", "0.6");

                      // Specify where to put label of text
                      terGraph.append("text").attr({
                         id: "ter" + d.properties.name.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                          x: function() { return TeacherScale(valueTeacherTerHash[d.properties.name]); },
                          y: function() { return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]) - 10; }
                      })
                      .text(function() {
                        return d.properties.name;  // Value of the text
                      });
                      d3.selectAll("#"+d.properties.name.replace(/[^a-zA-Z]/g, "")).attr("stroke","red");
                    }

                    function handleMouseOutTer(d, i) {
                      // Use D3 to select element, change color back to normal
                      var selectedCountry=d.properties.name;
                      if(valueFemaleRatioHash[selectedCountry] && valueTeacherTerHash[selectedCountry] && !selectedCountryName.includes(selectedCountry) ) {
                      d3.select(this).attr({
                        fill: "#ba55d3",
                        r: radius
                      })
                      .style("opacity", "0.6");

                      // Select text by id and then remove
                      d3.select("#ter" + d.properties.name.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                      d3.selectAll("#"+d.properties.name.replace(/[^a-zA-Z]/g, "")).attr("stroke","none");
                    }

                    intGraph.append("g")
                          .attr("class", "IntAxis")
                          .attr("fill", "none")
                          .attr("stroke", "black")
                          .attr("transform", "translate(40, " + (heightGraph + 10) + ")")
                          .call(IntAxis);

                     intGraph.append("g")
                        .attr("class", "FemaleRatioAxis")
                        .attr("fill", "none")
                        .attr("stroke", "black")
                        .attr("transform", "translate(40, 10)")
                        .call(FemaleRatioAxis);

                     intGraph.selectAll("g").selectAll("text")
                        .attr("fill", "black")
                        .attr("stroke", "none");

                     //x軸の説明
                     intGraph.append("text")
                        .attr("class", "InternetLabel")
                        .attr("text-anchor", "end")
                        .attr("x", widthGraph)
                        .attr("y", heightGraph + 5)
                        .text("Internet(%)");

                     //y軸の説明
                     intGraph.append("text")
                        .attr("class", "FemaleRatioLabel")
                        .attr("text-anchor", "end")
                        .attr("y", 55)
                        .attr("transform", "rotate(-90)")
                        .text("Female Ratio(%)");

                     var intGraphDetail = intGraph.append("g")
                          .attr("class", "circles")
                          .selectAll(".circle")
                          .data(countries);

                     var radius = 5;

                     intGraphDetail.enter().append('circle')
                           .attr("class", "intGraph-circle")
                           .attr("id", function(d) {return "int-graph-" + d.properties.name.replace(/[^a-zA-Z]/g, "")})
                           .attr('cx', function(d) {
                             if(valueInternetHash[d.properties.name]) {
            //                   return offsetGraph + valueMasculinityHash[d.properties.name]/100*widthGraph;
                               return offsetGraph;
                             }
                            })
                           .attr('cy', function(d) {
                             if(valueFemaleRatioHash[d.properties.name]) {
                               return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]);
                             }
                            })
                           .attr('r', radius)
                           .attr('fill', '#ffd700') // 塗りつぶし
                           .style('opacity', "0.6")
                           .attr('display', function(d){
                              if(!valueInternetHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                return 'none';
                              }
                            })
                           .on("mouseover", handleMouseOverInt)
                           .on("mouseout", handleMouseOutInt)
                           .transition()
                           .duration(1000)
                            .delay(function(d){ return IntScale(valueInternetHash[d.properties.name]); })
                           .ease("circle-out")
                             .attr('cx', function(d) {
                             if(valueInternetHash[d.properties.name]) {
                                 return offsetGraph + IntScale(valueInternetHash[d.properties.name]);
                               }
                             });

                    function handleMouseOverInt(d, i) {  // Add interactivity
                      // Use D3 to select element, change color and size
                      d3.select(this).attr({
                        fill: "orange",
                        r: radius * 2
                      })
                      .style("opacity", "0.6");

                      // Specify where to put label of text
                      intGraph.append("text").attr({
                         id: "int" + d.properties.name.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                          x: function() { return IntScale(valueInternetHash[d.properties.name]); },
                          y: function() { return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]) - 10; }
                      })
                      .text(function() {
                        return d.properties.name;  // Value of the text
                      });
                      d3.selectAll("#"+d.properties.name.replace(/[^a-zA-Z]/g, "")).attr("stroke","red");
                    }

                    function handleMouseOutInt(d, i) {
                      // Use D3 to select element, change color back to normal
                      var selectedCountry=d.properties.name;
                      if(valueFemaleRatioHash[selectedCountry] && valueInternetHash[selectedCountry] && !selectedCountryName.includes(selectedCountry) ) {
                      d3.select(this).attr({
                        fill: "#ffd700",
                        r: radius
                      })
                      .style("opacity", "0.6");

                      // Select text by id and then remove
                      d3.select("#int" + d.properties.name.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                      d3.selectAll("#"+d.properties.name.replace(/[^a-zA-Z]/g, "")).attr("stroke","none");
                    }
                    ///wagGraph
                    wagGraph.append("g")
                          .attr("class", "WagAxis")
                          .attr("fill", "none")
                          .attr("stroke", "black")
                          .attr("transform", "translate(40, " + (heightGraph + 10) + ")")
                          .call(WagAxis);

                     wagGraph.append("g")
                        .attr("class", "FemaleRatioAxis")
                        .attr("fill", "none")
                        .attr("stroke", "black")
                        .attr("transform", "translate(40, 10)")
                        .call(FemaleRatioAxis);

                     wagGraph.selectAll("g").selectAll("text")
                        .attr("fill", "black")
                        .attr("stroke", "none");

                     //x軸の説明
                     wagGraph.append("text")
                        .attr("class", "WageLabel")
                        .attr("text-anchor", "end")
                        .attr("x", widthGraph)
                        .attr("y", heightGraph + 5)
                        .text("Wage gap(%)");

                     //y軸の説明
                     wagGraph.append("text")
                        .attr("class", "FemaleRatioLabel")
                        .attr("text-anchor", "end")
                        .attr("y", 55)
                        .attr("transform", "rotate(-90)")
                        .text("Female Ratio(%)");

                     var wagGraphDetail = wagGraph.append("g")
                          .attr("class", "circles")
                          .selectAll(".circle")
                          .data(countries);

                     var radius = 5;

                     wagGraphDetail.enter().append('circle')
                           .attr("class", "wagGraph-circle")
                           .attr("id", function(d) {return "wag-graph-" + d.properties.name.replace(/[^a-zA-Z]/g, "")})
                           .attr('cx', function(d) {
                             if(valueWageHash[d.properties.name]) {
            //                   return offsetGraph + valueMasculinityHash[d.properties.name]/100*widthGraph;
                               return offsetGraph;
                             }
                            })
                           .attr('cy', function(d) {
                             if(valueFemaleRatioHash[d.properties.name]) {
                               return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]);
                             }
                            })
                           .attr('r', radius)
                           .attr('fill', '#ff7f50') // 塗りつぶし
                           .style('opacity', "0.6")
                           .attr('display', function(d){
                              if(!valueWageHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                return 'none';
                              }
                            })
                           .on("mouseover", handleMouseOverWag)
                           .on("mouseout", handleMouseOutWag)
                           .transition()
                           .duration(1000)
                            .delay(function(d){ return WagScale(valueWageHash[d.properties.name]); })
                           .ease("circle-out")
                             .attr('cx', function(d) {
                               if(valueWageHash[d.properties.name]) {
                                 return offsetGraph + WagScale(valueWageHash[d.properties.name]);
                               }
                             });

                    function handleMouseOverWag(d, i) {  // Add interactivity
                      // Use D3 to select element, change color and size
                      d3.select(this).attr({
                        fill: "orange",
                        r: radius * 2
                      })
                      .style("opacity", "0.6");

                      // Specify where to put label of text
                      wagGraph.append("text").attr({
                         id: "wag" + d.properties.name.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                          x: function() { return WagScale(valueWageHash[d.properties.name]); },
                          y: function() { return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]) - 10; }
                      })
                      .text(function() {
                        return d.properties.name;  // Value of the text
                      });
                      d3.selectAll("#"+d.properties.name.replace(/[^a-zA-Z]/g, "")).attr("stroke","red");
                    }

                    function handleMouseOutWag(d, i) {
                      // Use D3 to select element, change color back to normal
                      var selectedCountry=d.properties.name;
                      if(valueFemaleRatioHash[selectedCountry] && valueWageHash[selectedCountry] && !selectedCountryName.includes(selectedCountry) ) {
                      d3.select(this).attr({
                        fill: "#ff7f50",
                        r: radius
                      })
                      .style("opacity", "0.6");

                      // Select text by id and then remove
                      d3.select("#wag" + d.properties.name.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                      d3.selectAll("#"+d.properties.name.replace(/[^a-zA-Z]/g, "")).attr("stroke","none");
                    }

                    ///pubGraph
                    pubGraph.append("g")
                          .attr("class", "PubAxis")
                          .attr("fill", "none")
                          .attr("stroke", "black")
                          .attr("transform", "translate(40, " + (heightGraph + 10) + ")")
                          .call(PubAxis);

                     pubGraph.append("g")
                        .attr("class", "FemaleRatioAxis")
                        .attr("fill", "none")
                        .attr("stroke", "black")
                        .attr("transform", "translate(40, 10)")
                        .call(FemaleRatioAxis);

                     pubGraph.selectAll("g").selectAll("text")
                        .attr("fill", "black")
                        .attr("stroke", "none");

                     //x軸の説明
                     pubGraph.append("text")
                        .attr("class", "PubLabel")
                        .attr("text-anchor", "end")
                        .attr("x", widthGraph+35)
                        .attr("y", heightGraph + 5)
                        .text("Public expenditure(%)");

                     //y軸の説明
                     pubGraph.append("text")
                        .attr("class", "FemaleRatioLabel")
                        .attr("text-anchor", "end")
                        .attr("y", 55)
                        .attr("transform", "rotate(-90)")
                        .text("Female Ratio(%)");

                     var pubGraphDetail = pubGraph.append("g")
                          .attr("class", "circles")
                          .selectAll(".circle")
                          .data(countries);

                     var radius = 5;

                     pubGraphDetail.enter().append('circle')
                           .attr("class", "pubGraph-circle")
                           .attr("id", function(d) {return "pub-graph-" + d.properties.name.replace(/[^a-zA-Z]/g, "")})
                           .attr('cx', function(d) {
                             if(valuePubHash[d.properties.name]) {
            //                   return offsetGraph + valueMasculinityHash[d.properties.name]/100*widthGraph;
                               return offsetGraph;
                             }
                            })
                           .attr('cy', function(d) {
                             if(valueFemaleRatioHash[d.properties.name]) {
                               return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]);
                             }
                            })
                           .attr('r', radius)
                           .attr('fill', 'gray') // 塗りつぶし
                           .style('opacity', "0.6")
                           .attr('display', function(d){
                              if(!valuePubHash[d.properties.name] || !valueFemaleRatioHash[d.properties.name]){
                                return 'none';
                              }
                            })
                           .on("mouseover", handleMouseOverPub)
                           .on("mouseout", handleMouseOutPub)
                           .transition()
                           .duration(1000)
                            .delay(function(d){ return PubScale(valuePubHash[d.properties.name]); })
                           .ease("circle-out")
                             .attr('cx', function(d) {
                               if(valuePubHash[d.properties.name]) {
                                 return offsetGraph + PubScale(valuePubHash[d.properties.name]);
                               }
                             });

                    function handleMouseOverPub(d, i) {  // Add interactivity
                      // Use D3 to select element, change color and size
                      d3.select(this).attr({
                        fill: "orange",
                        r: radius * 2
                      })
                      .style("opacity", "0.6");

                      // Specify where to put label of text
                      pubGraph.append("text").attr({
                         id: "pub" + d.properties.name.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                          x: function() { return PubScale(valuePubHash[d.properties.name]); },
                          y: function() { return FemaleRatioScale(valueFemaleRatioHash[d.properties.name]) - 10; }
                      })
                      .text(function() {
                        return d.properties.name;  // Value of the text
                      });
                    }

                    function handleMouseOutPub(d, i) {
                      // Use D3 to select element, change color back to normal
                      var selectedCountry=d.properties.name;
                      if(valueFemaleRatioHash[selectedCountry] && valuePubHash[selectedCountry] && !selectedCountryName.includes(selectedCountry) ) {
                      d3.select(this).attr({
                        fill: "gray",
                        r: radius
                      })
                      .style("opacity", "0.6");

                      // Select text by id and then remove
                      d3.select("#pub" + d.properties.name.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                    }

                    /////
                    function HighlightGraph(selectedCountry){
                      var radius = 5;
                      if(valueFemaleRatioHash[selectedCountry] && valueMasculinityHash[selectedCountry]) {
                          // Use D3 to select element, change color and size
                          d3.select("#mas-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                            fill: "orange",
                            r: radius * 2
                          })
                          .style("opacity", "0.6");

                          // Specify where to put label of text


                            masGraph.append("text").attr({
                              id: "mas" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                                x: function() { return MasculinityScale(valueMasculinityHash[selectedCountry]); },
                                y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; }
                            })
                            .text(function() {
                              return selectedCountry;  // Value of the text
                            });

                      }

                      if(valueFemaleRatioHash[selectedCountry] && valuePdiHash[selectedCountry]) {

                          d3.select("#pdi-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                            fill: "orange",
                            r: radius * 2
                          })
                          .style("opacity", "0.6");

                          // Specify where to put label of text
                          pdiGraph.append("text").attr({
                             id: "pdi" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                              x: function() { return PdiScale(valuePdiHash[selectedCountry]); },
                              y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; }
                          })
                          .text(function() {
                            return selectedCountry;  // Value of the text
                          });
                      }
                      if(valueFemaleRatioHash[selectedCountry] && valueTeacherTerHash[selectedCountry]) {

                          d3.select("#ter-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                            fill: "orange",
                            r: radius * 2
                          })
                          .style("opacity", "0.6");

                          // Specify where to put label of text
                          terGraph.append("text").attr({
                             id: "ter" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                              x: function() { return TeacherScale(valueTeacherTerHash[selectedCountry]); },
                              y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; }
                          })
                          .text(function() {
                            return selectedCountry;  // Value of the text
                          });
                      }
                      if(valueFemaleRatioHash[selectedCountry] && valueInternetHash[selectedCountry]) {

                          d3.select("#int-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                            fill: "orange",
                            r: radius * 2
                          })
                          .style("opacity", "0.6");

                          // Specify where to put label of text
                          intGraph.append("text").attr({
                             id: "int" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                              x: function() { return IntScale(valueInternetHash[selectedCountry]); },
                              y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; }
                          })
                          .text(function() {
                            return selectedCountry;  // Value of the text
                          });
                      }
                      if(valueFemaleRatioHash[selectedCountry] && valueWageHash[selectedCountry]) {

                          d3.select("#wag-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                            fill: "orange",
                            r: radius * 2
                          })
                          .style("opacity", "0.6");

                          // Specify where to put label of text
                          wagGraph.append("text").attr({
                             id: "wag" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                              x: function() { return WagScale(valueWageHash[selectedCountry]); },
                              y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; }
                          })
                          .text(function() {
                            return selectedCountry;  // Value of the text
                          });
                      }
                      if(valueFemaleRatioHash[selectedCountry] && valuePubHash[selectedCountry]) {

                          d3.select("#pub-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                            fill: "orange",
                            r: radius * 2
                          })
                          .style("opacity", "0.6");

                          // Specify where to put label of text
                          pubGraph.append("text").attr({
                             id: "pub" + selectedCountry.replace(/[^a-zA-Z]/g, ""),  // Create an id for text so we can select it later for removing on mouseout
                              x: function() { return PubScale(valuePubHash[selectedCountry]); },
                              y: function() { return FemaleRatioScale(valueFemaleRatioHash[selectedCountry]) - 10; }
                          })
                          .text(function() {
                            return selectedCountry;  // Value of the text
                          });
                      }
                    }


                    function OffHighlightGraph(selectedCountry) {
                      if(valueFemaleRatioHash[selectedCountry] && valueMasculinityHash[selectedCountry] && !selectedCountryName.includes(selectedCountry) ) {
                        // Use D3 to select element, change color back to normal
                        d3.select("#mas-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                          fill: "#1e90ff",
                          r: radius
                        })
                        .style("opacity", "0.6");

                        // Select text by id and then remove
                        d3.selectAll("#mas" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }

                      if(valueFemaleRatioHash[selectedCountry] && valuePdiHash[selectedCountry] && !selectedCountryName.includes(selectedCountry)) {
                        // Use D3 to select element, change color back to normal
                        d3.select("#pdi-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                          fill: "#3cb371",
                          r: radius
                        })
                        .style("opacity", "0.6");

                        // Select text by id and then remove
                        d3.selectAll("#pdi" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                      if(valueFemaleRatioHash[selectedCountry] && valueTeacherTerHash[selectedCountry] && !selectedCountryName.includes(selectedCountry)) {
                        // Use D3 to select element, change color back to normal
                        d3.select("#ter-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                          fill: "#ba55d3",
                          r: radius
                        })
                        .style("opacity", "0.6");

                        // Select text by id and then remove
                        d3.selectAll("#ter" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                      if(valueFemaleRatioHash[selectedCountry] && valueInternetHash[selectedCountry] && !selectedCountryName.includes(selectedCountry)) {
                        // Use D3 to select element, change color back to normal
                        d3.select("#int-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                          fill: "#ffd700",
                          r: radius
                        })
                        .style("opacity", "0.6");

                        // Select text by id and then remove
                        d3.selectAll("#int" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                      if(valueFemaleRatioHash[selectedCountry] && valueWageHash[selectedCountry] && !selectedCountryName.includes(selectedCountry)) {
                        // Use D3 to select element, change color back to normal
                        d3.select("#wag-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                          fill: "#ff7f50",
                          r: radius
                        })
                        .style("opacity", "0.6");

                        // Select text by id and then remove
                        d3.selectAll("#wag" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                      if(valueFemaleRatioHash[selectedCountry] && valuePubHash[selectedCountry] && !selectedCountryName.includes(selectedCountry)) {
                        // Use D3 to select element, change color back to normal
                        d3.select("#pub-graph-" + selectedCountry.replace(/[^a-zA-Z]/g, "")).attr({
                          fill: "gray",
                          r: radius
                        })
                        .style("opacity", "0.6");

                        // Select text by id and then remove
                        d3.selectAll("#pub" + selectedCountry.replace(/[^a-zA-Z]/g, "")).remove();  // Remove text location
                      }
                    }
                    d3.select(self.frameElement).style("height", (height * 2.3 / 3) + "px");

                  });
          });
          });
          });
          });
          });
        });
      });
    });
  });
});
