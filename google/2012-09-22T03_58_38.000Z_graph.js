function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2012/09/22 12:58:38'), 44],
    [new Date('2012/09/22 12:59:11'), 45],
    [new Date('2012/09/22 12:59:11'), 45],
    [new Date('2012/09/22 12:59:25'), 45],
    [new Date('2012/09/22 13:01:23'), 45],
    [new Date('2012/09/22 13:01:23'), 45],
    [new Date('2012/09/22 13:02:54'), 47],
    [new Date('2012/09/22 13:03:02'), 49],
    [new Date('2012/09/22 13:03:14'), 49],
    [new Date('2012/09/22 13:03:14'), 49],
    [new Date('2012/09/22 13:03:19'), 49],
    [new Date('2012/09/22 13:04:16'), 50],
    [new Date('2012/09/22 13:04:28'), 51],
    [new Date('2012/09/22 13:04:31'), 51],
    [new Date('2012/09/22 13:04:39'), 51],
    [new Date('2012/09/22 13:04:41'), 50],
    [new Date('2012/09/22 13:04:42'), 50],
    [new Date('2012/09/22 13:04:44'), 50],
    [new Date('2012/09/22 13:04:46'), 50],
    [new Date('2012/09/22 13:04:48'), 49],
    [new Date('2012/09/22 13:04:49'), 50],
    [new Date('2012/09/22 13:04:50'), 50],
    [new Date('2012/09/22 13:04:51'), 50],
    [new Date('2012/09/22 13:04:52'), 50],
    [new Date('2012/09/22 13:04:03'), 50],
    [new Date('2012/09/22 13:04:54'), 51],
    [new Date('2012/09/22 13:04:55'), 50],
    [new Date('2012/09/22 13:04:56'), 50],
    [new Date('2012/09/22 13:04:57'), 51],
    [new Date('2012/09/22 13:04:58'), 53],
    [new Date('2012/09/22 13:04:59'), 53],
    [new Date('2012/09/22 13:05:00'), 54],
    [new Date('2012/09/22 13:05:01'), 54],
    [new Date('2012/09/22 13:05:02'), 54],
    [new Date('2012/08/13 13:08:07'), 54],
    [new Date('2012/08/13 13:08:08'), 54],
    [new Date('2012/09/22 13:05:05'), 54],
    [new Date('2012/09/22 13:05:06'), 54],
    [new Date('2012/09/22 13:05:07'), 54],
    [new Date('2012/09/22 13:05:08'), 54],
    [new Date('2012/09/22 13:05:09'), 53],
    [new Date('2012/09/22 13:05:10'), 55],
    [new Date('2012/09/22 13:05:11'), 55],
    [new Date('2012/09/22 13:05:12'), 55],
    [new Date('2012/09/22 13:05:13'), 56],
    [new Date('2012/09/22 13:05:14'), 56],
    [new Date('2012/09/22 13:05:15'), 57],
    [new Date('2012/09/22 13:05:17'), 57],
    [new Date('2012/09/22 13:05:19'), 56],
    [new Date('2012/09/22 13:05:22'), 57],
    [new Date('2012/09/22 13:05:24'), 58],
    [new Date('2012/09/22 13:05:26'), 59],
    [new Date('2012/09/22 13:05:27'), 59],
    [new Date('2012/09/22 13:05:28'), 59],
    [new Date('2012/09/22 13:05:29'), 59],
    [new Date('2012/09/22 13:05:30'), 60],
    [new Date('2012/09/22 13:05:31'), 60],
    [new Date('2012/09/22 13:05:32'), 60],
    [new Date('2012/09/22 13:05:33'), 61],
    [new Date('2012/09/22 13:05:34'), 60],
    [new Date('2012/09/22 13:05:35'), 61],
    [new Date('2012/09/22 13:05:36'), 61],
    [new Date('2012/09/22 13:05:37'), 62],
    [new Date('2012/09/22 13:05:38'), 62],
    [new Date('2012/09/22 13:05:39'), 62],
    [new Date('2012/09/22 13:05:40'), 62],
    [new Date('2012/09/22 13:05:41'), 62],
    [new Date('2012/09/22 13:05:42'), 63],
    [new Date('2012/09/22 13:05:43'), 64],
    [new Date('2012/09/22 13:05:44'), 64],
    [new Date('2012/09/22 13:05:45'), 65],
    [new Date('2012/09/22 13:05:46'), 65],
    [new Date('2012/09/22 13:05:47'), 66],
    [new Date('2012/09/22 13:05:48'), 66],
    [new Date('2012/09/22 13:05:49'), 67],
    [new Date('2012/09/22 13:08:23'), 67],
    [new Date('2012/09/22 13:05:51'), 68],
    [new Date('2012/09/22 13:05:52'), 68],
    [new Date('2012/09/22 13:05:53'), 69],
    [new Date('2012/09/22 13:05:54'), 69],
    [new Date('2012/09/22 13:05:55'), 68],
    [new Date('2012/09/22 13:05:56'), 68],
    [new Date('2012/09/22 13:05:57'), 68],
    [new Date('2012/09/22 13:05:58'), 68],
    [new Date('2012/09/22 13:05:59'), 68],
    [new Date('2012/09/22 13:06:00'), 68],
    [new Date('2012/09/22 13:06:01'), 69],
    [new Date('2012/09/22 13:06:02'), 69],
    [new Date('2012/09/22 13:06:03'), 72],
    [new Date('2012/09/22 13:06:04'), 73],
    [new Date('2012/09/22 13:06:05'), 73],
    [new Date('2012/09/22 13:06:06'), 74],
    [new Date('2012/09/22 13:06:07'), 74],
    [new Date('2012/09/22 13:06:08'), 74],
    [new Date('2012/09/22 13:06:09'), 75],
    [new Date('2012/09/22 13:06:10'), 77],
    [new Date('2012/09/22 13:06:11'), 79],
    [new Date('2012/09/22 13:06:12'), 79],
    [new Date('2012/08/13 13:08:44'), 80],
    [new Date('2012/09/22 13:06:14'), 80],
    [new Date('2012/09/22 13:06:15'), 81],
    [new Date('2012/09/22 13:06:16'), 82],
    [new Date('2012/09/22 13:06:17'), 82],
    [new Date('2012/09/22 13:06:18'), 83],
    [new Date('2012/09/22 13:06:19'), 83],
    [new Date('2012/09/22 13:06:20'), 84],
    [new Date('2012/09/22 13:06:21'), 84],
    [new Date('2012/09/22 13:06:22'), 85],
    [new Date('2012/09/22 13:06:24'), 86],
    [new Date('2012/09/22 13:06:25'), 86],
    [new Date('2012/09/22 13:06:26'), 86],
    [new Date('2012/09/22 13:06:27'), 88],
    [new Date('2012/09/22 13:06:28'), 90],
    [new Date('2012/09/22 13:06:29'), 90],
    [new Date('2012/09/22 13:06:30'), 91],
    [new Date('2012/09/22 13:06:31'), 91],
    [new Date('2012/09/22 13:06:32'), 93],
    [new Date('2012/09/22 13:06:33'), 94],
    [new Date('2012/09/22 13:06:34'), 94],
    [new Date('2012/09/22 13:06:35'), 94],
    [new Date('2012/09/22 13:06:36'), 94],
    [new Date('2012/09/22 13:06:37'), 95],
    [new Date('2012/09/22 13:06:38'), 95],
    [new Date('2012/09/22 13:06:39'), 96],
    [new Date('2012/09/22 13:06:40'), 97],
    [new Date('2012/09/22 13:06:41'), 97],
    [new Date('2012/09/22 13:06:42'), 97],
    [new Date('2012/09/22 13:06:43'), 98],
    [new Date('2012/09/22 13:06:44'), 98],
    [new Date('2012/09/22 13:06:45'), 98],
    [new Date('2012/09/22 13:06:46'), 99],
    [new Date('2012/08/13 13:09:32'), 99],
    [new Date('2012/09/22 13:06:48'), 100],
    [new Date('2012/09/22 13:06:49'), 100],
    [new Date('2012/09/22 13:06:50'), 101],
    [new Date('2012/09/22 13:06:51'), 102],
    [new Date('2012/09/22 13:06:52'), 103],
    [new Date('2012/09/22 13:06:53'), 103],
    [new Date('2012/09/22 13:06:54'), 104],
    [new Date('2012/09/22 13:06:55'), 104],
    [new Date('2012/09/22 13:06:56'), 105],
    [new Date('2012/08/13 13:09:50'), 105],
    [new Date('2012/09/22 13:06:58'), 105],
    [new Date('2012/09/22 13:06:59'), 106],
    [new Date('2012/09/22 13:07:00'), 106],
    [new Date('2012/09/22 13:07:01'), 106],
    [new Date('2012/09/22 13:07:02'), 107],
    [new Date('2012/09/22 13:07:03'), 107],
    [new Date('2012/09/22 13:07:04'), 107],
    [new Date('2012/09/22 13:07:05'), 107],
    [new Date('2012/09/22 13:07:06'), 107],
    [new Date('2012/09/22 13:07:07'), 107],
    [new Date('2012/09/22 13:07:08'), 108],
    [new Date('2012/09/22 13:07:09'), 109],
    [new Date('2012/09/22 13:07:10'), 110],
    [new Date('2012/09/22 13:07:11'), 110],
    [new Date('2012/09/22 13:07:12'), 110],
    [new Date('2012/09/22 13:07:13'), 111],
    [new Date('2012/09/22 13:07:14'), 111],
    [new Date('2012/09/22 13:07:15'), 112],
    [new Date('2012/09/22 13:07:16'), 112],
    [new Date('2012/09/22 13:07:17'), 113],
    [new Date('2012/08/13 13:10:38'), 113],
    [new Date('2012/09/22 13:07:19'), 114],
    [new Date('2012/09/22 13:07:20'), 114],
    [new Date('2012/09/22 13:07:21'), 115],
    [new Date('2012/09/22 13:07:22'), 114],
    [new Date('2012/09/22 13:07:23'), 114],
    [new Date('2012/09/22 13:07:24'), 114],
    [new Date('2012/08/13 13:10:52'), 114],
    [new Date('2012/09/22 13:07:26'), 115],
    [new Date('2012/09/22 13:07:27'), 115],
    [new Date('2012/09/22 13:07:28'), 115],
    [new Date('2012/09/22 13:07:29'), 116],
    [new Date('2012/09/22 13:07:30'), 115],
    [new Date('2012/09/22 13:07:31'), 116],
    [new Date('2012/09/22 13:07:32'), 115],
    [new Date('2012/09/22 13:07:33'), 116],
    [new Date('2012/09/22 13:07:34'), 117],
    [new Date('2012/09/22 13:07:35'), 117],
    [new Date('2012/09/22 13:07:36'), 117],
    [new Date('2012/09/22 13:07:37'), 117],
    [new Date('2012/09/22 13:07:38'), 118],
    [new Date('2012/09/22 13:07:39'), 118],
    [new Date('2012/09/22 13:07:40'), 119],
    [new Date('2012/09/22 13:07:41'), 119],
    [new Date('2012/09/22 13:07:42'), 119],
    [new Date('2012/09/22 13:07:43'), 119],
    [new Date('2012/09/22 13:07:44'), 119],
    [new Date('2012/09/22 13:07:45'), 119],
    [new Date('2012/09/22 13:07:46'), 119],
    [new Date('2012/09/22 13:07:47'), 119],
    [new Date('2012/09/22 13:07:48'), 119],
    [new Date('2012/09/22 13:07:49'), 119],
    [new Date('2012/09/22 13:07:50'), 119],
    [new Date('2012/09/22 13:07:51'), 119],
    [new Date('2012/09/22 13:07:52'), 119],
    [new Date('2012/09/22 13:07:53'), 119],
    [new Date('2012/09/22 13:07:54'), 119],
    [new Date('2012/09/22 13:07:55'), 119],
    [new Date('2012/09/22 13:07:56'), 119],
    [new Date('2012/09/22 13:07:57'), 120],
    [new Date('2012/09/22 13:07:58'), 120],
    [new Date('2012/09/22 13:07:59'), 120],
    [new Date('2012/09/22 13:08:00'), 120],
    [new Date('2012/09/22 13:08:01'), 120],
    [new Date('2012/09/22 13:08:02'), 120],
    [new Date('2012/09/22 13:08:03'), 121],
    [new Date('2012/09/22 13:11:52'), 120],
    [new Date('2012/09/22 13:08:06'), 120],
    [new Date('2012/09/22 13:08:08'), 120],
    [new Date('2012/09/22 13:08:10'), 120],
    [new Date('2012/09/22 13:08:13'), 120],
    [new Date('2012/08/13 13:11:57'), 124],
    [new Date('2012/09/22 13:17:50'), 110],
    [new Date('2012/09/22 13:17:54'), 117],
    [new Date('2012/09/22 13:17:54'), 117],
    [new Date('2012/09/22 13:17:57'), 118],
    [new Date('2012/09/22 13:21:08'), 118],
    [new Date('2012/09/22 13:21:12'), 118],
    [new Date('2012/09/22 13:21:24'), 120],
    [new Date('2012/09/22 13:12:12'), 120],
    [new Date('2012/09/22 13:21:29'), 119],
    [new Date('2012/09/22 13:21:31'), 119],
    [new Date('2012/09/22 13:21:32'), 118],
    [new Date('2012/09/22 13:21:33'), 118],
    [new Date('2012/09/22 13:21:34'), 118],
    [new Date('2012/09/22 13:21:35'), 118],
    [new Date('2012/09/22 13:21:36'), 117],
    [new Date('2012/09/22 13:21:37'), 118],
    [new Date('2012/09/22 13:21:38'), 117],
    [new Date('2012/09/22 13:21:39'), 116],
    [new Date('2012/09/22 13:21:40'), 116],
    [new Date('2012/09/22 13:21:41'), 116],
    [new Date('2012/09/22 13:21:42'), 116],
    [new Date('2012/09/22 13:21:43'), 116],
    [new Date('2012/09/22 13:21:44'), 116],
    [new Date('2012/09/22 13:21:45'), 116],
    [new Date('2012/09/22 13:21:47'), 116],
    [new Date('2012/09/22 13:21:49'), 116],
    [new Date('2012/09/22 13:22:10'), 115],
    [new Date('2012/09/22 13:22:12'), 115],
    [new Date('2012/09/22 13:22:13'), 115],
    [new Date('2012/09/22 13:22:14'), 115],
    [new Date('2012/09/22 13:22:15'), 115],
    [new Date('2012/08/13 13:12:49'), 115],
    [new Date('2012/09/22 13:22:17'), 115],
    [new Date('2012/09/22 13:22:18'), 115],
    [new Date('2012/09/22 13:22:19'), 116],
    [new Date('2012/09/22 13:22:20'), 115],
    [new Date('2012/09/22 13:22:22'), 115],
    [new Date('2012/09/22 13:22:24'), 116],
    [new Date('2012/09/22 13:22:27'), 116],
    [new Date('2012/09/22 13:24:21'), 116],
  ];
  return var_array;
}

// npoint = 254


function draw_ele(){
  google.charts.setOnLoadCallback(drawChart_ele);
  function drawChart_ele() {
    var dashboard = new google.visualization.Dashboard(
        document.getElementById('dashboard_ele')
    );
    var chart_option = getGraphOptions();
    var control_option = getControlOptions();
    var data = array_ele();
    var chart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'graph_ele',
        options: chart_option,
    });
    var control = new google.visualization.ControlWrapper({
        controlType: 'ChartRangeFilter',
        containerId: 'control_ele',
        options: control_option,
    });
    dashboard.bind(control, chart);
    dashboard.draw(data);
  }
}

draw_ele();

function writeHTMLGraph(){
  document.getElementById("graph").innerHTML='<h2>Graph</h2><div id="dashboard_ele" style="width: 0px; height: 0px"></div><div id="graph_ele" style="width: 800px; height: 600px"></div><div id="control_ele" style="width: 800px; height: 100px"></div>';
}

