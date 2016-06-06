function array0(){
  var var_array = [
    ['Lat', 'Long', 'Time'],
    [34.718086, 135.23224, '2015/10/25 19:07:15'],
    [34.71808, 135.23225, '2015/10/25 19:07:29'],
    [34.718033, 135.2323, '2015/10/25 19:07:42'],
    [34.717674, 135.23291, '2015/10/25 19:08:03'],
    [34.71705, 135.23314, '2015/10/25 19:08:22'],
    [34.716866, 135.23375, '2015/10/25 19:08:39'],
    [34.717106, 135.23454, '2015/10/25 19:08:55'],
    [34.717308, 135.23544, '2015/10/25 19:09:10'],
    [34.717453, 135.23584, '2015/10/25 19:09:21'],
    [34.717686, 135.23674, '2015/10/25 19:09:36'],
    [34.717823, 135.2376, '2015/10/25 19:09:54'],
    [34.71784, 135.23805, '2015/10/25 19:10:09'],
    [34.717384, 135.23825, '2015/10/25 19:10:23'],
    [34.71754, 135.23907, '2015/10/25 19:10:39'],
    [34.7179, 135.2401, '2015/10/25 19:10:55'],
    [34.71784, 135.24042, '2015/10/25 19:11:11'],
    [34.717815, 135.24052, '2015/10/25 19:11:24'],
    [34.71794, 135.241, '2015/10/25 19:11:37'],
    [34.718117, 135.24146, '2015/10/25 19:11:57'],
    [34.717987, 135.24188, '2015/10/25 19:12:12'],
    [34.717674, 135.24228, '2015/10/25 19:12:27'],
    [34.718014, 135.24315, '2015/10/25 19:12:44'],
    [34.718163, 135.24376, '2015/10/25 19:12:57'],
    [34.718258, 135.24402, '2015/10/25 19:13:09'],
    [34.7177, 135.24425, '2015/10/25 19:13:27'],
    [34.717144, 135.24449, '2015/10/25 19:13:42'],
    [34.71668, 135.24475, '2015/10/25 19:13:57'],
    [34.716778, 135.24538, '2015/10/25 19:14:12'],
    [34.7171, 135.24649, '2015/10/25 19:14:27'],
    [34.71737, 135.24724, '2015/10/25 19:14:41'],
    [34.71746, 135.24806, '2015/10/25 19:14:58'],
    [34.71688, 135.24828, '2015/10/25 19:15:12'],
    [34.716145, 135.24841, '2015/10/25 19:15:27'],
    [34.71544, 135.24861, '2015/10/25 19:15:47'],
    [34.715492, 135.24889, '2015/10/25 19:15:56'],
    [34.715755, 135.24965, '2015/10/25 19:16:09'],
    [34.71612, 135.25087, '2015/10/25 19:16:27'],
    [34.71636, 135.25168, '2015/10/25 19:16:39'],
    [34.716694, 135.25276, '2015/10/25 19:16:56'],
    [34.716904, 135.25348, '2015/10/25 19:17:09'],
    [34.716892, 135.25357, '2015/10/25 19:17:27'],
    [34.716724, 135.25363, '2015/10/25 19:17:44'],
    [34.716484, 135.25394, '2015/10/25 19:18:37'],
    [34.715687, 135.25436, '2015/10/25 19:19:02'],
    [34.715275, 135.25455, '2015/10/25 19:19:30'],
    [34.715244, 135.25455, '2015/10/25 19:19:39'],
    [34.715134, 135.25488, '2015/10/25 19:19:55'],
    [34.71507, 135.25494, '2015/10/25 19:20:12'],
  ];
  return var_array;
}

// npoint = 48

function getNarray(){
  return 0
}

function draw0(){
  google.charts.setOnLoadCallback(drawChart0);
  function drawChart0() {
    var map = new google.visualization.Map(document.getElementById('map_div0'));
    var data = google.visualization.arrayToDataTable(array0());
    var options = getOptions();
    map.draw(data, options);
  }
}
draw0();

function writeHTML(){
  document.getElementById("map").innerHTML='<h2>Part 0</h2><div id="map_div0" style="width: 800px; height: 600px"></div>';
}

