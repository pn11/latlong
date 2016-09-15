function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2016/06/22 16:59:45'), 85],
    [new Date('2016/06/22 17:00:20'), 88],
    [new Date('2016/06/22 17:00:28'), 90],
    [new Date('2016/06/22 17:00:45'), 89],
    [new Date('2016/06/22 17:00:53'), 87],
    [new Date('2016/06/22 17:01:07'), 88],
    [new Date('2016/06/22 17:01:18'), 86],
    [new Date('2016/06/22 17:01:39'), 88],
    [new Date('2016/06/22 17:01:46'), 91],
    [new Date('2016/06/22 17:02:03'), 91],
    [new Date('2016/06/22 17:02:22'), 81],
    [new Date('2016/06/22 17:02:39'), 84],
    [new Date('2016/06/22 17:02:56'), 88],
    [new Date('2016/06/22 17:03:12'), 92],
    [new Date('2016/06/22 17:03:30'), 92],
    [new Date('2016/06/22 17:03:46'), 96],
    [new Date('2016/06/22 17:04:02'), 95],
    [new Date('2016/06/22 17:04:21'), 91],
    [new Date('2016/06/22 17:05:22'), 85],
    [new Date('2016/06/22 17:05:36'), 91],
    [new Date('2016/06/22 17:05:48'), 94],
    [new Date('2016/06/22 17:05:56'), 95],
    [new Date('2016/06/22 17:06:19'), 100],
    [new Date('2016/06/22 17:06:32'), 100],
    [new Date('2016/06/22 17:07:46'), 102],
    [new Date('2016/06/22 17:08:26'), 92],
    [new Date('2016/06/22 17:08:55'), 89],
    [new Date('2016/06/22 17:09:15'), 93],
    [new Date('2016/06/22 17:09:33'), 90],
    [new Date('2016/06/22 17:09:46'), 92],
    [new Date('2016/06/22 17:10:21'), 84],
    [new Date('2016/06/22 17:10:37'), 91],
    [new Date('2016/06/22 17:10:54'), 90],
    [new Date('2016/06/22 17:11:02'), 90],
    [new Date('2016/06/22 17:11:12'), 89],
    [new Date('2016/06/22 17:11:40'), 88],
    [new Date('2016/06/22 17:11:41'), 88],
    [new Date('2016/06/22 17:11:57'), 82],
    [new Date('2016/06/22 17:12:02'), 84],
    [new Date('2016/06/22 17:12:19'), 83],
    [new Date('2016/06/22 17:12:29'), 85],
    [new Date('2016/06/22 17:12:51'), 90],
    [new Date('2016/06/22 17:13:06'), 90],
    [new Date('2016/06/22 17:13:28'), 90],
    [new Date('2016/06/22 17:13:47'), 90],
    [new Date('2016/06/22 17:15:50'), 74],
    [new Date('2016/06/22 17:16:23'), 75],
    [new Date('2016/06/22 17:16:57'), 80],
    [new Date('2016/06/22 17:17:20'), 81],
    [new Date('2016/06/22 17:17:43'), 83],
    [new Date('2016/06/22 17:18:05'), 81],
    [new Date('2016/06/22 17:19:01'), 82],
    [new Date('2016/06/22 17:19:27'), 85],
    [new Date('2016/06/22 17:19:59'), 77],
    [new Date('2016/06/22 17:20:55'), 83],
    [new Date('2016/06/22 17:21:21'), 84],
    [new Date('2016/06/22 17:21:32'), 84],
    [new Date('2016/06/22 17:22:33'), 46],
    [new Date('2016/06/22 17:23:25'), 40],
    [new Date('2016/06/22 17:24:36'), 58],
    [new Date('2016/06/22 17:25:12'), 75],
    [new Date('2016/06/22 17:26:15'), 82],
    [new Date('2016/06/22 17:27:15'), 77],
    [new Date('2016/06/22 17:27:51'), 69],
    [new Date('2016/06/22 17:28:22'), 72],
    [new Date('2016/06/22 17:28:43'), 65],
    [new Date('2016/06/22 17:29:30'), 66],
    [new Date('2016/06/22 17:30:06'), 36],
    [new Date('2016/06/22 17:31:22'), 31],
    [new Date('2016/06/22 17:32:47'), 36],
    [new Date('2016/06/22 17:33:30'), 45],
    [new Date('2016/06/22 17:34:24'), 54],
    [new Date('2016/06/22 17:35:05'), 53],
    [new Date('2016/06/22 17:36:09'), 81],
    [new Date('2016/06/22 17:38:00'), 89],
    [new Date('2016/06/22 17:39:02'), 88],
    [new Date('2016/06/22 17:39:37'), 90],
    [new Date('2016/06/22 17:40:33'), 85],
    [new Date('2016/06/22 17:41:19'), 73],
    [new Date('2016/06/22 17:41:51'), 77],
    [new Date('2016/06/22 17:42:26'), 81],
    [new Date('2016/06/22 17:44:06'), 89],
    [new Date('2016/06/22 17:44:47'), 90],
    [new Date('2016/06/22 17:45:23'), 74],
    [new Date('2016/06/22 17:46:04'), 71],
    [new Date('2016/06/22 17:46:04'), 71],
    [new Date('2016/06/22 17:46:45'), 75],
    [new Date('2016/06/22 17:47:38'), 86],
    [new Date('2016/06/22 17:48:11'), 83],
    [new Date('2016/06/22 17:48:42'), 65],
    [new Date('2016/06/22 17:49:04'), 61],
    [new Date('2016/06/22 17:49:32'), 73],
    [new Date('2016/06/22 17:49:58'), 84],
    [new Date('2016/06/22 17:50:01'), 83],
    [new Date('2016/06/22 17:50:11'), 88],
    [new Date('2016/06/22 17:50:54'), 81],
    [new Date('2016/06/22 17:50:59'), 82],
    [new Date('2016/06/22 17:51:18'), 83],
    [new Date('2016/06/22 17:51:45'), 91],
    [new Date('2016/06/22 17:52:01'), 84],
    [new Date('2016/06/22 17:52:16'), 90],
    [new Date('2016/06/22 17:52:48'), 88],
    [new Date('2016/06/22 17:53:13'), 83],
    [new Date('2016/06/22 17:53:24'), 88],
    [new Date('2016/06/22 17:53:33'), 88],
    [new Date('2016/06/22 17:53:46'), 89],
    [new Date('2016/06/22 17:54:45'), 93],
    [new Date('2016/06/22 17:55:59'), 92],
    [new Date('2016/06/22 17:56:36'), 84],
    [new Date('2016/06/22 17:57:04'), 86],
    [new Date('2016/06/22 17:58:16'), 91],
    [new Date('2016/06/22 17:58:42'), 91],
    [new Date('2016/06/22 17:58:55'), 91],
    [new Date('2016/06/22 17:59:24'), 86],
    [new Date('2016/06/22 17:59:33'), 85],
    [new Date('2016/06/22 17:59:48'), 86],
    [new Date('2016/06/22 18:00:14'), 88],
    [new Date('2016/06/22 18:00:35'), 84],
    [new Date('2016/06/22 18:01:01'), 84],
    [new Date('2016/06/22 18:01:31'), 88],
    [new Date('2016/06/22 18:01:53'), 84],
    [new Date('2016/06/22 18:02:37'), 92],
    [new Date('2016/06/22 18:03:06'), 77],
    [new Date('2016/06/22 18:03:27'), 79],
    [new Date('2016/06/22 18:03:45'), 85],
    [new Date('2016/06/22 18:04:16'), 86],
    [new Date('2016/06/22 18:04:46'), 79],
    [new Date('2016/06/22 18:05:15'), 70],
    [new Date('2016/06/22 18:05:32'), 68],
    [new Date('2016/06/22 18:05:38'), 68],
    [new Date('2016/06/22 18:05:56'), 79],
    [new Date('2016/06/22 18:06:14'), 75],
    [new Date('2016/06/22 18:07:29'), 71],
    [new Date('2016/06/22 18:08:56'), 74],
    [new Date('2016/06/22 18:09:19'), 72],
    [new Date('2016/06/22 18:09:51'), 72],
    [new Date('2016/06/22 18:11:27'), 71],
    [new Date('2016/06/22 18:13:59'), 69],
    [new Date('2016/06/22 18:14:23'), 68],
    [new Date('2016/06/22 18:17:45'), 67],
    [new Date('2016/06/22 18:19:39'), 75],
    [new Date('2016/06/22 18:22:34'), 72],
    [new Date('2016/06/22 18:23:34'), 70],
    [new Date('2016/06/22 18:25:08'), 69],
    [new Date('2016/06/22 18:25:22'), 72],
    [new Date('2016/06/22 18:25:34'), 72],
    [new Date('2016/06/22 18:25:55'), 87],
    [new Date('2016/06/22 18:26:23'), 71],
    [new Date('2016/06/22 18:26:39'), 70],
    [new Date('2016/06/22 18:29:20'), 78],
    [new Date('2016/06/22 18:34:58'), 90],
    [new Date('2016/06/22 18:35:23'), 82],
  ];
  return var_array;
}

// npoint = 152


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
