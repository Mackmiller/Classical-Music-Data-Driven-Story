var monthly=[
  {"Month": "January",
   "Index": 9.89,
   " Index": 11.95,
   "Index ": 13.42,
   "    Index": 4.48,
   "  Index": 5.71,
   "   Index": 6.24},

   {"Month": "February",
    "Index": 12.86,
    " Index": 13.63,
    "Index ": 15.13,
    "    Index": 4.79,
    "  Index": 5.91,
    "   Index": 6.27},

    {"Month": "March",
     "Index": 11.8,
     " Index": 14.83,
     "Index ": 14.09,
     "    Index": 5.02,
     "  Index": 6,
     "   Index": 6.18},

     {"Month": "April",
      "Index": 10.5,
      " Index": 12.61,
      "Index ": 14.73,
      "    Index": 4.57,
      "  Index": 5.6,
      "   Index": 5.51},

      {"Month": "May",
       "Index": 11.55,
       " Index": 12.01,
       "Index ": 11.86,
       "    Index": 4.1,
       "  Index": 5.05,
       "   Index": 5.12},

       {"Month": "June",
        "Index": 8.18,
        " Index": 7.67,
        "Index ": 8.55,
        "    Index": 3.68,
        "  Index": 3.97,
        "   Index": 3.98},

        {"Month": "July",
         "Index": 8.06,
         " Index": 7.72,
         "Index ": 8.17,
         "    Index": 3.3,
         "  Index": 3.87,
         "   Index": 3.83},

         {"Month": "August",
          "Index": 7.05,
          " Index": 7.33,
          "Index ": 8.41,
          "    Index": 3.46,
          "  Index": 4.08,
          "   Index": 3.76},

          {"Month": "September",
           "Index": 10.29,
           " Index": 9.98,
           "Index ": 10.52,
           "    Index": 4.04,
           "  Index": 4.74,
           "   Index": 4.43},

           {"Month": "October",
            "Index": 11.05,
            " Index": 11.29,
            "Index ": 12.41,
            "    Index": 4.52,
            "  Index": 5.35,
            "   Index": 5.43},

            {"Month": "November",
             "Index": 11.11,
             " Index": 12.71,
             "Index ": 13.22,
             "    Index": 4.15,
             "  Index": 5.12,
             "   Index": 5.25},

             {"Month": "December",
              "Index": 10.78,
              " Index": 13.34,
              "Index ": 11.81,
              "    Index": 4.12,
              "  Index": 5.06,
              "   Index": 4.81},

];



	var svg = dimple.newSvg("#chartContainer3","100%", "100%");

	var myChart = new dimple.chart(svg, monthly);
    //myChart.setBounds(80, 40, "75%", "60%");
	var x = myChart.addTimeAxis("x", "Month","%B","%b");
	x.showGridlines = true;
  x.timeField = "Month";
  var y1 =myChart.addMeasureAxis("y", "Index");
  var y2 =myChart.addMeasureAxis(y1, " Index");
  var y3 =myChart.addMeasureAxis(y1, "Index ");
  var y4 =myChart.addMeasureAxis(y1, "    Index");
  var y5 =myChart.addMeasureAxis(y1, "  Index");
  var y6 =myChart.addMeasureAxis(y1, "   Index");
  y1.title = "Popularity Index";
	/*y1.showGridlines=true;*/
  var s = myChart.addSeries("Bach 2004", dimple.plot.line,[x,y1]);
  var s2 = myChart.addSeries("Beethoven 2004", dimple.plot.line,[x,y2]);
  var s3 = myChart.addSeries("Mozart 2004", dimple.plot.line,[x,y3]);
  var s4 = myChart.addSeries("Bach 2017", dimple.plot.line,[x,y4]);
  var s5 = myChart.addSeries("Beethoven 2017", dimple.plot.line,[x,y5]);
  var s6 = myChart.addSeries("Mozart 2017", dimple.plot.line,[x,y6]);
	//s.lineWeight=4;

  myChart.addLegend(500, 10, 500, 20, "center");
  myChart.defaultColors = [
    new dimple.color("#3091B0", "#3091B0", .5), // purple
    new dimple.color("#57575F", "#57575F", .5), // orange
    new dimple.color("#CA3542", "#CA3542", .5), // yellow

         new dimple.color("#3091B0", "#3091B0", 1), // blue
         new dimple.color("#57575F", "#57575F", 1), // red
         new dimple.color("#CA3542", "#CA3542", 1), // green

 ];

 myChart.setMargins("30%", "10px", "30%", "20px");


 	//s.lineMarkers=true;
   myChart.draw(1500);

   window.onresize = function () {
                         myChart.draw(0, true);
                       };
