function array0(){
  var var_array = [
    ['Lat', 'Long', 'Time'],
    [34.718086, 135.23224, '2016/05/27 15:03:05'],
    [34.71808, 135.23224, '2016/05/27 15:03:24'],
    [34.717396, 135.23074, '2016/05/27 15:05:42'],
    [34.716564, 135.22972, '2016/05/27 15:06:20'],
    [34.715996, 135.22993, '2016/05/27 15:06:45'],
    [34.71387, 135.22806, '2016/05/27 15:07:51'],
    [34.712906, 135.22464, '2016/05/27 15:08:29'],
    [34.71227, 135.22353, '2016/05/27 15:08:47'],
    [34.71125, 135.22185, '2016/05/27 15:09:22'],
    [34.711254, 135.22182, '2016/05/27 15:09:49'],
    [34.71043, 135.22034, '2016/05/27 15:10:18'],
    [34.709366, 135.21835, '2016/05/27 15:10:54'],
    [34.70801, 135.21669, '2016/05/27 15:11:29'],
    [34.7074, 135.21606, '2016/05/27 15:11:54'],
    [34.706505, 135.21548, '2016/05/27 15:12:28'],
    [34.70483, 135.2125, '2016/05/27 15:14:05'],
    [34.704517, 135.21149, '2016/05/27 15:14:33'],
    [34.70424, 135.21, '2016/05/27 15:15:08'],
    [34.704075, 135.20898, '2016/05/27 15:15:38'],
    [34.70393, 135.20845, '2016/05/27 15:16:05'],
    [34.70331, 135.20673, '2016/05/27 15:16:39'],
    [34.702652, 135.20569, '2016/05/27 15:17:08'],
    [34.701664, 135.20409, '2016/05/27 15:17:42'],
    [34.701183, 135.2035, '2016/05/27 15:18:08'],
    [34.70069, 135.20276, '2016/05/27 15:18:42'],
    [34.69966, 135.20137, '2016/05/27 15:19:06'],
    [34.699173, 135.20052, '2016/05/27 15:19:43'],
    [34.698254, 135.1991, '2016/05/27 15:20:10'],
    [34.69735, 135.19817, '2016/05/27 15:20:36'],
    [34.695763, 135.19644, '2016/05/27 15:21:11'],
    [34.69531, 135.1949, '2016/05/27 15:22:40'],
    [34.69468, 135.19429, '2016/05/27 15:23:03'],
    [34.694695, 135.19406, '2016/05/27 15:23:37'],
    [34.69314, 135.19461, '2016/05/27 15:24:34'],
    [34.69227, 135.19528, '2016/05/27 15:25:08'],
    [34.69175, 135.19588, '2016/05/27 15:25:38'],
    [34.691864, 135.19612, '2016/05/27 15:26:47'],
  ];
  return var_array;
}

// npoint = 37

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

