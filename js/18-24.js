

var general=[
  {"Year": "2002-01-01",
   "Index": 35.9,
   "Index1": 39.6,
   "Index2": 42.2,
   "Index3": 46,
   "Index4": 40.6},

 {"Year": "2008-02-01",
   "Index": 32.7,
   "Index1": 36,
   "Index2": 37.2,
   "Index3": 36.1,
   "Index4": 36.9},

 { "Year": "2012-03-01",
   "Index": 30.2,
   "Index1": 32.6,
   "Index2": 32.4,
   "Index3": 34.4,
   "Index4": 38}]


  var svg = dimple.newSvg("body",1000, 430);
  var myChart = new dimple.chart(svg, general);
    //myChart.setBounds(80, 40, "75%", "60%");
  var x = myChart.addTimeAxis("x", "Year","%Y-%m-%d","%Y");
  x.showGridlines = true;
  x.timeField = "Year";
  var y1 =myChart.addMeasureAxis("y", "Index");
  var y2 =myChart.addMeasureAxis(y1, "Index1");
  var y3 =myChart.addMeasureAxis(y1, "Index2");
  var y4 =myChart.addMeasureAxis(y1, "Index3");
  var y5 =myChart.addMeasureAxis(y1, "Index4");
  y.title = "Popularity Index";
  /*y1.showGridlines=true;*/
  var s = myChart.addSeries("Bach 2004", dimple.plot.line,[x,y1]);
  var s2 = myChart.addSeries("Beethoven 2004", dimple.plot.line,[x,y2]);
  var s3 = myChart.addSeries("Mozart 2004", dimple.plot.line,[x,y3]);
  var s4 = myChart.addSeries("M 2004", dimple.plot.line,[x,y4]);
  var s5 = myChart.addSeries("V 2004", dimple.plot.line,[x,y5]);
  //s.lineWeight=4;

  myChart.addLegend(0, 0, 700, 0, "right");
  /*myChart.defaultColors = [
     new dimple.color("#000000", "#000000", 1), // red
 ];*/

/*myChart.setMargins("575px", "10px", "0px", "20px");*/

  //s.lineMarkers=true;
    myChart.draw();
