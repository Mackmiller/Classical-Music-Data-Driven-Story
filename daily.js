var daily=[
{"Time": "10:00",
"Index ": 31.3,
" Index": 29.5,
"Index": 29.65},

{"Time": "11:00",
"Index ": 14.49,
" Index": 0,
"Index": 22.89},

{"Time": "12:00",
"Index ": 8.44,
" Index": 18.56,
"Index": 15.99},

{"Time": "13:00",
"Index ": 15.53,
" Index": 25.61,
"Index": 49.65},

{"Time": "14:00",
"Index ": 14.16,
" Index": 19.28,
"Index": 17.89},

{"Time": "15:00",
"Index ": 29.13,
" Index": 23.34,
"Index": 17.94},

{"Time": "16:00",
"Index ": 19.56,
" Index": 30.28,
"Index": 19.85},

{"Time": "17:00",
"Index ": 22.45,
" Index": 26.46,
"Index": 15.96},

{"Time": "18:00",
"Index ": 35.22,
" Index": 29.36,
"Index": 12.83},

{"Time": "19:00",
"Index ": 23.02,
" Index": 17.63,
"Index": 25.9},

{"Time": "20:00",
"Index ": 19.88,
" Index": 21.62,
"Index": 15.93},

{"Time": "21:00",
"Index ": 26.54,
" Index": 17.66,
"Index": 13.31},

{"Time": "22:00",
"Index ": 21.25,
" Index": 20.03,
"Index": 18.46},

{"Time": "23:00",
"Index ": 14.2,
" Index": 26.77,
"Index": 28.83},

{"Time": "12:00",
"Index ": 36.16,
" Index": 17.04,
"Index": 26.65},

{"Time": "1:00",
"Index ": 23.35,
" Index": 29.34,
"Index": 29.5},

{"Time": "2:00",
"Index ": 15,
" Index": 48.48,
"Index": 34.52},

{"Time": "3:00",
"Index ": 27.87,
" Index": 26.27,
"Index": 42.25},

{"Time": "4:00",
"Index ": 21.18,
" Index": 39.93,
"Index": 20.07},

{"Time": "5:00",
"Index ": 35.86,
" Index": 13.52,
"Index": 47.57},

{"Time": "6:00",
"Index ": 24.62,
" Index": 58.03,
"Index": 11.67},

{"Time": "7:00",
"Index ": 19.12,
" Index": 18.02,
"Index": 36.23}
];



var svg = dimple.newSvg("#chartContainer4","100%", "100%");

	var myChart = new dimple.chart(svg, daily);
    //myChart.setBounds(80, 40, "75%", "60%");
	/*var x = =myChart.addMeasureAxis("x", "Time");*/
  var x = myChart.addTimeAxis("x", "Time", "%H:%M", "%H:%M");
	x.showGridlines = true;
  /*x.timeField = "Time";*/
  var y1 =myChart.addMeasureAxis("y", "Index ");
  var y2 =myChart.addMeasureAxis(y1, " Index");
  var y3 =myChart.addMeasureAxis(y1, "Index");
  y1.title = "Popularity Index";
	/*y1.showGridlines=true;*/
  var s = myChart.addSeries("J.S. Bach", dimple.plot.line,[x,y1]);
  var s2 = myChart.addSeries("L. Beethoven", dimple.plot.line,[x,y2]);
  var s3 = myChart.addSeries("W.A. Mozart", dimple.plot.line,[x,y3]);
	//s.lineWeight=4;

//  myChart.addLegend(60, 10, 500, 20, "right");
  myChart.defaultColors = [
     new dimple.color("#3091B0", "#3091B0", 1),
     new dimple.color("#57575F", "#57575F", 1), // red
     new dimple.color("#CA3542", "#CA3542", 1)
 ];

 myChart.setMargins("30%", "100px", "30%", "20px");
x.timeInterval = 4;
myChart.addLegend(500, 10, 500, 20, "center");
 	//s.lineMarkers=true;
   myChart.draw(1500);

   window.onresize = function () {
                         myChart.draw(0, true);
                       };
