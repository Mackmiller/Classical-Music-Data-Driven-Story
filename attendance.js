var total=[

{"Year": "2002",
"Millions": 497.0},

{"Year": "2008",
"Millions": 408.1},

{"Year": "2012",
"Millions": 373.4}]



	var svg = dimple.newSvg("body",950, 230);
	var myChart = new dimple.chart(svg, total);
    //myChart.setBounds(80, 40, "75%", "60%");
  myChart.addCategoryAxis("x", ["Year"]);
	x.showGridlines = true;
  x.timeField = "Year";
  var y =myChart.addMeasureAxis("y", "Millions");
  y.title = "Attendances in millions";
/*  y.overrideMax = 50;
	/*y1.showGridlines=true;*/
  var s = myChart.addSeries(null, dimple.plot.bar);
	//s.lineWeight=4;

  //myChart.addLegend(60, 10, 500, 20, "right");
  myChart.defaultColors = [
     new dimple.color("#000000", "#000000", 1), // red
 ];

myChart.setMargins("650px", "10px", "10px", "20px");
x.timePeriod = d3.timeYear;
    y.timeInterval = 4;

    //y.tickFormat = "%";
	//s.lineMarkers=true;
    myChart.draw();
