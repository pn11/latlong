function array0(){
  var var_array = [
    ['Lat', 'Long', 'Time'],
    [34.672836, 135.19368, '2015/11/02 25:07:32'],
    [34.358707, 134.07101, '2015/11/02 28:52:55'],
    [34.354954, 134.07297, '2015/11/02 29:02:54'],
    [34.35478, 134.07303, '2015/11/02 29:12:53'],
    [34.354713, 134.0732, '2015/11/02 29:22:51'],
    [34.35484, 134.07358, '2015/11/02 29:52:58'],
    [34.35728, 134.07326, '2015/11/02 30:02:52'],
    [34.359924, 134.07297, '2015/11/02 30:03:58'],
    [34.455276, 134.32074, '2015/11/02 31:03:56'],
    [34.45568, 134.32213, '2015/11/02 31:13:49'],
  ];
  return var_array;
}

// npoint = 10

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

