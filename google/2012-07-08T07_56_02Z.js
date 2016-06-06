function array0(){
  var var_array = [
    ['Lat', 'Long', 'Time'],
    [34.805756, 135.454437, '2012/07/08 16:56:02'],
    [34.805756, 135.454437, '2012/07/08 16:56:07'],
    [34.805756, 135.454437, '2012/07/08 16:56:12'],
    [34.805756, 135.454437, '2012/07/08 16:56:17'],
    [34.805756, 135.454437, '2012/07/08 16:56:22'],
    [34.805756, 135.454437, '2012/07/08 16:56:27'],
    [34.805756, 135.454437, '2012/07/08 16:56:32'],
    [34.805756, 135.454437, '2012/07/08 16:56:37'],
    [34.805756, 135.454437, '2012/07/08 16:56:42'],
    [34.805756, 135.454437, '2012/07/08 16:56:47'],
    [34.805756, 135.454437, '2012/07/08 16:56:52'],
    [34.805756, 135.454437, '2012/07/08 16:56:57'],
    [34.805756, 135.454437, '2012/07/08 16:57:02'],
    [34.805756, 135.454437, '2012/07/08 16:57:07'],
    [34.805756, 135.454437, '2012/07/08 16:57:12'],
  ];
  return var_array;
}

// npoint = 15

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

