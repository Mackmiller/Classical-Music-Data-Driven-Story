var monthly=[
  {"Month": "January",
   "Bach 2004": 9.89,
   "Beethoven 2004": 11.95,
   "Mozart 2004": 13.42,
   "Bach 2017": 4.48,
   "Beethoven 2017": 5.71,
   "Mozart 2017": 6.24},

   {"Month": "February",
    "Bach 2004": 12.86,
    "Beethoven 2004": 13.63,
    "Mozart 2004": 15.13,
    "Bach 2017": 4.79,
    "Beethoven 2017": 5.91,
    "Mozart 2017": 6.27},

    {"Month": "March",
     "Bach 2004": 11.8,
     "Beethoven 2004": 14.83,
     "Mozart 2004": 14.09,
     "Bach 2017": 5.02,
     "Beethoven 2017": 6,
     "Mozart 2017": 6.18},

     {"Month": "April",
      "Bach 2004": 10.5,
      "Beethoven 2004": 12.61,
      "Mozart 2004": 14.73,
      "Bach 2017": 4.57,
      "Beethoven 2017": 5.6,
      "Mozart 2017": 5.51},

      {"Month": "May",
       "Bach 2004": 11.55,
       "Beethoven 2004": 12.01,
       "Mozart 2004": 11.86,
       "Bach 2017": 4.1,
       "Beethoven 2017": 5.05,
       "Mozart 2017": 5.12},

       {"Month": "June",
        "Bach 2004": 8.18,
        "Beethoven 2004": 7.67,
        "Mozart 2004": 8.55,
        "Bach 2017": 3.68,
        "Beethoven 2017": 3.97,
        "Mozart 2017": 3.98},

        {"Month": "July",
         "Bach 2004": 8.06,
         "Beethoven 2004": 7.72,
         "Mozart 2004": 8.17,
         "Bach 2017": 3.3,
         "Beethoven 2017": 3.87,
         "Mozart 2017": 3.83},

         {"Month": "August",
          "Bach 2004": 7.05,
          "Beethoven 2004": 7.33,
          "Mozart 2004": 8.41,
          "Bach 2017": 3.46,
          "Beethoven 2017": 4.08,
          "Mozart 2017": 3.76},

          {"Month": "September",
           "Bach 2004": 10.29,
           "Beethoven 2004": 9.98,
           "Mozart 2004": 10.52,
           "Bach 2017": 4.04,
           "Beethoven 2017": 4.74,
           "Mozart 2017": 4.43},

           {"Month": "October",
            "Bach 2004": 11.05,
            "Beethoven 2004": 11.29,
            "Mozart 2004": 12.41,
            "Bach 2017": 4.52,
            "Beethoven 2017": 5.35,
            "Mozart 2017": 5.43},

            {"Month": "November",
             "Bach 2004": 11.11,
             "Beethoven 2004": 12.71,
             "Mozart 2004": 13.22,
             "Bach 2017": 4.15,
             "Beethoven 2017": 5.12,
             "Mozart 2017": 5.25},

             {"Month": "December",
              "Bach 2004": 10.78,
              "Beethoven 2004": 13.34,
              "Mozart 2004": 11.81,
              "Bach 2017": 4.12,
              "Beethoven 2017": 5.06,
              "Mozart 2017": 4.81},

];



	var svg = dimple.newSvg("body",900, 430);
	var myChart = new dimple.chart(svg, monthly);
    //myChart.setBounds(80, 40, "75%", "60%");
	var x = myChart.addTimeAxis("x", "Month","%B","%b");
	x.showGridlines = true;
  x.timeField = "Month";
  var y1 =myChart.addMeasureAxis("y", "Bach 2004");
  var y2 =myChart.addMeasureAxis(y1, "Beethoven 2004");
  var y3 =myChart.addMeasureAxis(y1, "Mozart 2004");
  var y4 =myChart.addMeasureAxis(y1, "Bach 2017");
  var y5 =myChart.addMeasureAxis(y1, "Beethoven 2017");
  var y6 =myChart.addMeasureAxis(y1, "Mozart 2017");
  y1.title = "Popularity Index";
	/*y1.showGridlines=true;*/
  var s = myChart.addSeries(" Bach 2004", dimple.plot.line,[x,y1]);
  var s2 = myChart.addSeries(" Beethoven 2004", dimple.plot.line,[x,y2]);
  var s3 = myChart.addSeries("A. Mozart 2004", dimple.plot.line,[x,y3]);
  var s4 = myChart.addSeries("J.S. Bach 2017", dimple.plot.line,[x,y4]);
  var s5 = myChart.addSeries("L. Beethoven 2017", dimple.plot.line,[x,y5]);
  var s6 = myChart.addSeries("series6", dimple.plot.line,[x,y6]);
	//s.lineWeight=4;

  //myChart.addLegend(60, 10, 500, 20, "right");
  myChart.defaultColors = [

         new dimple.color("#3091B0", "#3091B0", 1), // blue
         new dimple.color("#57575F", "#57575F", 1), // red
         new dimple.color("#CA3542", "#CA3542", 1), // green
         new dimple.color("#3091B0", "#3091B0", .5), // purple
         new dimple.color("#57575F", "#57575F", .5), // orange
         new dimple.color("#CA3542", "#CA3542", .5), // yellow

 ];

myChart.setMargins("450px", "10px", "0px", "20px");

	//s.lineMarkers=true;
    myChart.draw();
