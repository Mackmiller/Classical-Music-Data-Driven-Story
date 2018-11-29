var benchmark=[

{"Year": "1982",
"Percent": 39},

{"Year": "1992",
"Percent": 41},

{"Year": "2002",
"Percent": 39.4},

{"Year": "2008",
"Percent": 34.6},

{"Year": "2012",
"Percent": 33.4}
];



	var svg = dimple.newSvg("body",950, 230);
	var myChart = new dimple.chart(svg, benchmark);
    //myChart.setBounds(80, 40, "75%", "60%");
  myChart.addCategoryAxis("x", ["Year", "Channel"]);
	x.showGridlines = true;
  x.timeField = "Year";
  var y =myChart.addMeasureAxis("y", "Percent");
  y.title = "Percent";
  y.overrideMax = 50;
	/*y1.showGridlines=true;*/
  var s = myChart.addSeries(null, dimple.plot.bar);
	//s.lineWeight=4;

  //myChart.addLegend(60, 10, 500, 20, "right");
  myChart.defaultColors = [
     new dimple.color("#000000", "#000000", 1), // red
 ];

myChart.setMargins("650px", "10px", "10px", "20px");
x.timePeriod = d3.timeYear;
    x.timeInterval = 4;
		d3.selectAll("path.domain")[0][0].style.stroke = "red";

    //y.tickFormat = "%";
	//s.lineMarkers=true;
    myChart.draw();
