var ages=[

{"Age": "18-24",
"Percent": 35.9},

{"Age": "25-34",
"Percent": 39.6},

{"Age": "35-44",
"Percent": 42.2},

{"Age": "45-54",
"Percent": 46},

{"Age": "55-64",
"Percent": 40.6},

{"Age": "65-74",
"Percent": 35.3},

{"Age": "75+",
"Percent": 23.2}
];



	var svg = dimple.newSvg("body",525, 230);

	var myChart = new dimple.chart(svg, ages);
    //myChart.setBounds(80, 40, "75%", "60%");
    var x = myChart.addCategoryAxis("x", ["Age"]);
    x.showGridlines = true;

    x.addOrderRule(["18-24", "25-34", "35-44", "45-54"]);
  var y =myChart.addMeasureAxis("y", "Percent");
  y.title = "Percent";
     x.title = "Age: 2004"
	/*y1.showGridlines=true;*/
  var s = myChart.addSeries(null, dimple.plot.bar);
	//s.lineWeight=4;

  //myChart.addLegend(60, 10, 500, 20, "right");
  myChart.defaultColors = [
     new dimple.color("#000000", "#000000", 1), // red
 ];

myChart.setMargins("300px", "10px", "0px", "60px");
x.timePeriod = d3.timeAge;
    x.timeInterval = 4;
y.hidden = true;


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
