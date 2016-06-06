function array0(){
  var var_array = [
    ['Lat', 'Long', 'Time'],
    [34.805584, 135.455292, '2012/07/08 16:03:04'],
    [34.805584, 135.455292, '2012/07/08 16:03:09'],
    [34.805584, 135.455292, '2012/07/08 16:03:14'],
    [34.805584, 135.455292, '2012/07/08 16:03:19'],
    [34.805355, 135.455353, '2012/07/08 16:03:24'],
    [34.805332, 135.455353, '2012/07/08 16:03:29'],
    [34.805332, 135.455353, '2012/07/08 16:03:34'],
    [34.805332, 135.455353, '2012/07/08 16:03:39'],
    [34.805332, 135.455353, '2012/07/08 16:03:44'],
    [34.805370, 135.455322, '2012/07/08 16:04:25'],
    [34.805294, 135.455139, '2012/07/08 16:04:30'],
    [34.805489, 135.455475, '2012/07/08 16:16:50'],
    [34.805481, 135.455475, '2012/07/08 16:20:15'],
    [34.805370, 135.455383, '2012/07/08 16:20:20'],
  ];
  return var_array;
}

// npoint = 14

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

