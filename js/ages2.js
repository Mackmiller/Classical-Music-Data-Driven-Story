var ages2=[

{"Age": "18-24",
"Percent": 32.7},

{"Age": "25-34",
"Percent": 36},

{"Age": "35-44",
"Percent": 37.2},

{"Age": "45-54",
"Percent": 36.1},

{"Age": "55-64",
"Percent": 36.9},

{"Age": "65-74",
"Percent": 33.4},

{"Age": "75+",
"Percent": 21.3}
];



	var svg = dimple.newSvg("body",525, 230);
	var myChart = new dimple.chart(svg, ages2);
    //myChart.setBounds(80, 40, "75%", "60%");
    var x = myChart.addCategoryAxis("x", ["Age"]);
  	x.showGridlines = true;

    x.addOrderRule(["18-24", "25-34", "35-44", "45-54"]);

  var y =myChart.addMeasureAxis("y", "Percent");
  y.title = "Percent";
  x.title = "Age: 2008"
	y.hidden = true;
	/*y1.showGridlines=true;*/
  var s = myChart.addSeries(null, dimple.plot.bar);
	//s.lineWeight=4;

  //myChart.addLegend(60, 10, 500, 20, "right");
  myChart.defaultColors = [
     new dimple.color("#000000", "#000000", 1), // red
 ];

myChart.setMargins("170px", "10px", "130px", "60px");
x.timePeriod = d3.timeAge;
    x.timeInterval = 4;
    y.overrideMax = 50;
    //y.tickFormat = "%";
	//s.lineMarkers=true;
    myChart.draw();

		s.shapes.each(function (d) {
	 var rec = d3.select(this);
	 svg.append("text")
		 .attr("x", parseFloat(rec.attr("x")) + parseFloat(rec.attr("width") / 2))
		 .attr("y", parseFloat(rec.attr("y")) - 5)
		 .style("text-anchor", "middle")
		 .style("font-family", "sans-serif")
		 .style("font-size", "9px")
		 .text(y._getFormat()(d.y));
 });
