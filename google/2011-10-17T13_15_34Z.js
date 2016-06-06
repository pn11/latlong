function array0(){
  var var_array = [
    ['Lat', 'Long', 'Time'],
    [34.80425, 135.45524, '2011/10/17 22:15:34'],
    [34.80564, 135.45466, '2011/10/17 22:16:10'],
    [34.80651, 135.45349, '2011/10/17 22:16:43'],
    [34.80681, 135.45287, '2011/10/17 22:17:16'],
    [34.8068, 135.45274, '2011/10/17 22:17:28'],
    [34.8069, 135.45265, '2011/10/17 22:17:47'],
    [34.8067, 135.45268, '2011/10/17 22:18:21'],
    [34.80682, 135.45266, '2011/10/17 22:18:54'],
    [34.80819, 135.45307, '2011/10/17 22:20:35'],
    [34.81014, 135.45358, '2011/10/17 22:21:08'],
    [34.81055, 135.45271, '2011/10/17 22:21:36'],
    [34.81042, 135.45126, '2011/10/17 22:22:08'],
    [34.81019, 135.45002, '2011/10/17 22:22:36'],
    [34.81021, 135.45013, '2011/10/17 22:23:01'],
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

