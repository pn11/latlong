function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2015/11/03 07:17:40'), 0],
    [new Date('2015/11/03 07:28:01'), 7],
    [new Date('2015/11/03 07:28:34'), 3],
    [new Date('2015/11/03 07:29:04'), 3],
    [new Date('2015/11/03 07:29:34'), 9],
    [new Date('2015/11/03 07:30:03'), 4],
    [new Date('2015/11/03 07:30:34'), 4],
    [new Date('2015/11/03 07:31:04'), 2],
    [new Date('2015/11/03 07:31:34'), 5],
    [new Date('2015/11/03 07:32:04'), 8],
    [new Date('2015/11/03 07:32:34'), 6],
    [new Date('2015/11/03 07:33:03'), 7],
    [new Date('2015/11/03 07:33:34'), 3],
    [new Date('2015/11/03 07:34:34'), 3],
    [new Date('2015/11/03 07:35:07'), 0],
    [new Date('2015/11/03 07:38:43'), -5],
    [new Date('2015/11/03 07:39:35'), -3],
    [new Date('2015/11/03 07:42:31'), -2],
    [new Date('2015/11/03 07:44:24'), 2],
    [new Date('2015/11/03 07:46:25'), 7],
    [new Date('2015/11/03 07:47:23'), 5],
    [new Date('2015/11/03 07:52:31'), 1],
    [new Date('2015/11/03 07:54:24'), 0],
    [new Date('2015/11/03 07:55:26'), 0],
    [new Date('2015/11/03 07:58:26'), 1],
    [new Date('2015/11/03 07:59:25'), 2],
    [new Date('2015/11/03 08:05:25'), -1],
    [new Date('2015/11/03 08:06:33'), 5],
    [new Date('2015/11/03 08:08:31'), -3],
    [new Date('2015/11/03 08:09:03'), -2],
    [new Date('2015/11/03 08:09:32'), -7],
    [new Date('2015/11/03 08:10:07'), -4],
    [new Date('2015/11/03 08:10:26'), -10],
    [new Date('2015/11/03 08:11:00'), 3],
    [new Date('2015/11/03 08:11:30'), 2],
    [new Date('2015/11/03 08:12:04'), -3],
    [new Date('2015/11/03 08:12:29'), -6],
    [new Date('2015/11/03 08:12:58'), -7],
    [new Date('2015/11/03 08:13:30'), -10],
    [new Date('2015/11/03 08:14:00'), -6],
    [new Date('2015/11/03 08:14:30'), -8],
    [new Date('2015/11/03 08:15:00'), -4],
    [new Date('2015/11/03 08:15:29'), -3],
    [new Date('2015/11/03 08:16:00'), -2],
    [new Date('2015/11/03 08:16:30'), -2],
    [new Date('2015/11/03 08:17:01'), -3],
    [new Date('2015/11/03 08:17:31'), -1],
    [new Date('2015/11/03 08:18:01'), -1],
    [new Date('2015/11/03 08:18:31'), 0],
    [new Date('2015/11/03 08:19:01'), 3],
    [new Date('2015/11/03 08:19:31'), -1],
    [new Date('2015/11/03 08:20:03'), 0],
    [new Date('2015/11/03 08:20:31'), -1],
    [new Date('2015/11/03 08:21:01'), -12],
    [new Date('2015/11/03 08:21:33'), -8],
    [new Date('2015/11/03 08:22:01'), -1],
    [new Date('2015/11/03 08:22:31'), -2],
    [new Date('2015/11/03 08:23:01'), 0],
    [new Date('2015/11/03 08:23:31'), -8],
    [new Date('2015/11/03 08:24:01'), -6],
    [new Date('2015/11/03 08:24:31'), 5],
    [new Date('2015/11/03 08:25:02'), 12],
    [new Date('2015/11/03 08:25:31'), -1],
    [new Date('2015/11/03 08:26:32'), 5],
    [new Date('2015/11/03 08:27:07'), 21],
    [new Date('2015/11/03 08:27:35'), 6],
    [new Date('2015/11/03 08:28:10'), 2],
    [new Date('2015/11/03 08:28:37'), 8],
    [new Date('2015/11/03 08:29:07'), 8],
    [new Date('2015/11/03 08:29:38'), 4],
    [new Date('2015/11/03 08:30:09'), 1],
    [new Date('2015/11/03 08:30:36'), -3],
    [new Date('2015/11/03 08:31:09'), 4],
    [new Date('2015/11/03 08:32:20'), 1],
    [new Date('2015/11/03 08:32:47'), 1],
    [new Date('2015/11/03 08:33:25'), 8],
    [new Date('2015/11/03 08:35:52'), 5],
    [new Date('2015/11/03 08:36:28'), 21],
    [new Date('2015/11/03 08:38:01'), 30],
    [new Date('2015/11/03 08:38:28'), 23],
    [new Date('2015/11/03 08:39:01'), 9],
    [new Date('2015/11/03 08:39:47'), 2],
    [new Date('2015/11/03 08:40:18'), -10],
    [new Date('2015/11/03 08:40:49'), 27],
    [new Date('2015/11/03 08:41:29'), -2],
    [new Date('2015/11/03 08:41:58'), -4],
    [new Date('2015/11/03 08:42:36'), 0],
    [new Date('2015/11/03 08:43:00'), 1],
    [new Date('2015/11/03 08:43:30'), 1],
    [new Date('2015/11/03 08:44:00'), 3],
    [new Date('2015/11/03 08:44:30'), -1],
    [new Date('2015/11/03 08:45:00'), 3],
    [new Date('2015/11/03 08:45:27'), -3],
    [new Date('2015/11/03 08:46:02'), 3],
    [new Date('2015/11/03 08:46:31'), -1],
    [new Date('2015/11/03 08:47:35'), 3],
    [new Date('2015/11/03 08:49:09'), 5],
    [new Date('2015/11/03 08:49:51'), 5],
    [new Date('2015/11/03 08:51:04'), 28],
    [new Date('2015/11/03 08:51:30'), 35],
    [new Date('2015/11/03 08:52:00'), 40],
    [new Date('2015/11/03 08:52:32'), 54],
    [new Date('2015/11/03 08:52:59'), 61],
    [new Date('2015/11/03 08:53:30'), 68],
    [new Date('2015/11/03 08:54:30'), 75],
    [new Date('2015/11/03 08:55:30'), 87],
    [new Date('2015/11/03 08:56:00'), 95],
    [new Date('2015/11/03 08:56:27'), 102],
    [new Date('2015/11/03 08:57:00'), 109],
    [new Date('2015/11/03 08:57:30'), 112],
    [new Date('2015/11/03 09:00:21'), 122],
    [new Date('2015/11/03 09:01:12'), 112],
    [new Date('2015/11/03 09:01:57'), 108],
    [new Date('2015/11/03 09:02:27'), 104],
    [new Date('2015/11/03 09:04:57'), 11],
    [new Date('2015/11/03 09:05:44'), 3],
    [new Date('2015/11/03 09:06:14'), 4],
    [new Date('2015/11/03 09:06:41'), 6],
    [new Date('2015/11/03 09:08:01'), 20],
    [new Date('2015/11/03 09:08:29'), 27],
    [new Date('2015/11/03 09:08:58'), 34],
    [new Date('2015/11/03 09:09:29'), 30],
    [new Date('2015/11/03 09:09:59'), 4],
    [new Date('2015/11/03 09:10:30'), 4],
    [new Date('2015/11/03 09:11:01'), 5],
    [new Date('2015/11/03 09:11:34'), 1],
    [new Date('2015/11/03 09:12:42'), 2],
    [new Date('2015/11/03 09:13:04'), -14],
    [new Date('2015/11/03 09:14:49'), -6],
    [new Date('2015/11/03 09:15:24'), -1],
    [new Date('2015/11/03 09:18:29'), 30],
    [new Date('2015/11/03 09:19:05'), 29],
    [new Date('2015/11/03 09:19:37'), 45],
    [new Date('2015/11/03 09:20:06'), 46],
    [new Date('2015/11/03 09:20:37'), 47],
    [new Date('2015/11/03 09:21:10'), 60],
    [new Date('2015/11/03 09:21:41'), 65],
    [new Date('2015/11/03 09:22:49'), 70],
    [new Date('2015/11/03 09:23:13'), 78],
    [new Date('2015/11/03 09:23:45'), 83],
    [new Date('2015/11/03 09:24:19'), 88],
    [new Date('2015/11/03 09:24:53'), 95],
    [new Date('2015/11/03 09:25:15'), 94],
    [new Date('2015/11/03 09:26:26'), 113],
    [new Date('2015/11/03 09:27:06'), 101],
    [new Date('2015/11/03 09:27:18'), 99],
    [new Date('2015/11/03 09:29:44'), 100],
    [new Date('2015/11/03 09:30:22'), 82],
    [new Date('2015/11/03 09:30:53'), 74],
    [new Date('2015/11/03 09:31:22'), 58],
    [new Date('2015/11/03 09:31:55'), 35],
    [new Date('2015/11/03 09:33:17'), 2],
    [new Date('2015/11/03 09:34:15'), -2],
    [new Date('2015/11/03 09:34:48'), 3],
    [new Date('2015/11/03 09:35:21'), 13],
    [new Date('2015/11/03 09:35:55'), 13],
    [new Date('2015/11/03 09:36:17'), 15],
    [new Date('2015/11/03 09:36:52'), 30],
    [new Date('2015/11/03 09:37:12'), 26],
    [new Date('2015/11/03 09:37:42'), 18],
    [new Date('2015/11/03 09:38:20'), 0],
    [new Date('2015/11/03 09:38:51'), 3],
    [new Date('2015/11/03 09:39:22'), 6],
    [new Date('2015/11/03 09:39:56'), 9],
    [new Date('2015/11/03 09:40:22'), 18],
    [new Date('2015/11/03 09:40:55'), 16],
    [new Date('2015/11/03 09:41:48'), 8],
    [new Date('2015/11/03 09:42:20'), 4],
    [new Date('2015/11/03 09:42:51'), -21],
    [new Date('2015/11/03 09:43:22'), 2],
    [new Date('2015/11/03 09:44:28'), -3],
    [new Date('2015/11/03 09:44:53'), -2],
    [new Date('2015/11/03 09:45:27'), 0],
    [new Date('2015/11/03 09:47:58'), -2],
    [new Date('2015/11/03 09:50:28'), -3],
    [new Date('2015/11/03 09:51:14'), -4],
  ];
  return var_array;
}

// npoint = 176


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

function writeHTML(){
  document.getElementById("graph").innerHTML='<h2>Graph</h2><div id="dashboard_ele" style="width: 0px; height: 0px"></div><div id="graph_ele" style="width: 800px; height: 600px"></div><div id="control_ele" style="width: 800px; height: 100px"></div>';
}

