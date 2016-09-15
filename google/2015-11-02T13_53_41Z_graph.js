function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2015/11/02 22:53:41'), 52],
    [new Date('2015/11/02 22:53:53'), 61],
    [new Date('2015/11/02 22:54:07'), 68],
    [new Date('2015/11/02 22:54:47'), 68],
    [new Date('2015/11/02 22:55:11'), 63],
    [new Date('2015/11/02 22:55:39'), 50],
    [new Date('2015/11/02 22:56:05'), 33],
    [new Date('2015/11/02 22:56:20'), 30],
    [new Date('2015/11/02 22:56:32'), 32],
    [new Date('2015/11/02 22:56:51'), 22],
    [new Date('2015/11/02 22:57:02'), 28],
    [new Date('2015/11/02 22:57:17'), 30],
    [new Date('2015/11/02 22:57:33'), 33],
    [new Date('2015/11/02 22:57:47'), 28],
    [new Date('2015/11/02 22:58:02'), 31],
    [new Date('2015/11/02 22:58:20'), 23],
    [new Date('2015/11/02 22:58:33'), 24],
    [new Date('2015/11/02 22:59:04'), 21],
    [new Date('2015/11/02 22:59:49'), 29],
    [new Date('2015/11/02 23:00:22'), 20],
    [new Date('2015/11/02 23:00:43'), 8],
    [new Date('2015/11/02 23:01:11'), 12],
    [new Date('2015/11/02 23:01:28'), 15],
    [new Date('2015/11/02 23:01:43'), 27],
    [new Date('2015/11/02 23:01:56'), 28],
    [new Date('2015/11/02 23:02:14'), 29],
    [new Date('2015/11/02 23:02:32'), 32],
    [new Date('2015/11/02 23:02:59'), 29],
    [new Date('2015/11/02 23:04:27'), 52],
    [new Date('2015/11/02 23:05:04'), 44],
    [new Date('2015/11/02 23:05:23'), 37],
    [new Date('2015/11/02 23:05:47'), 30],
    [new Date('2015/11/02 23:06:02'), 20],
    [new Date('2015/11/02 23:06:19'), 16],
    [new Date('2015/11/02 23:06:36'), 13],
    [new Date('2015/11/02 23:06:49'), 13],
    [new Date('2015/11/02 23:07:04'), 16],
    [new Date('2015/11/02 23:07:52'), 16],
    [new Date('2015/11/02 23:08:10'), 15],
    [new Date('2015/11/02 23:08:35'), 18],
    [new Date('2015/11/02 23:08:52'), 14],
    [new Date('2015/11/02 23:09:06'), 13],
    [new Date('2015/11/02 23:09:22'), 4],
    [new Date('2015/11/02 23:09:38'), 3],
    [new Date('2015/11/02 23:09:49'), 1],
    [new Date('2015/11/02 23:10:08'), 0],
    [new Date('2015/11/02 23:10:19'), -2],
    [new Date('2015/11/02 23:10:36'), -7],
    [new Date('2015/11/02 23:10:52'), -2],
    [new Date('2015/11/02 23:11:07'), -1],
    [new Date('2015/11/02 23:11:22'), 0],
    [new Date('2015/11/02 23:11:37'), 2],
    [new Date('2015/11/02 23:12:10'), 4],
    [new Date('2015/11/02 23:12:23'), 8],
    [new Date('2015/11/02 23:13:27'), 1],
    [new Date('2015/11/02 23:13:43'), 4],
    [new Date('2015/11/02 23:14:02'), 13],
    [new Date('2015/11/02 23:14:13'), 10],
    [new Date('2015/11/02 23:14:35'), 8],
    [new Date('2015/11/02 23:14:48'), 10],
    [new Date('2015/11/02 23:14:59'), 6],
    [new Date('2015/11/02 23:15:18'), 10],
    [new Date('2015/11/02 23:16:06'), 22],
    [new Date('2015/11/02 23:16:30'), 12],
    [new Date('2015/11/02 23:16:57'), 30],
    [new Date('2015/11/02 23:17:12'), 15],
    [new Date('2015/11/02 23:17:25'), 24],
    [new Date('2015/11/02 23:17:42'), 25],
    [new Date('2015/11/02 23:17:52'), 19],
    [new Date('2015/11/02 23:18:10'), 11],
    [new Date('2015/11/02 23:18:27'), 11],
    [new Date('2015/11/02 23:19:09'), -5],
    [new Date('2015/11/02 23:19:31'), -2],
    [new Date('2015/11/02 23:19:52'), 6],
    [new Date('2015/11/02 23:20:02'), 1],
    [new Date('2015/11/02 23:20:18'), -2],
    [new Date('2015/11/02 23:20:31'), 10],
    [new Date('2015/11/02 23:20:47'), 16],
    [new Date('2015/11/02 23:21:03'), 7],
    [new Date('2015/11/02 23:21:23'), 9],
    [new Date('2015/11/02 23:21:35'), 7],
    [new Date('2015/11/02 23:21:52'), 8],
    [new Date('2015/11/02 23:22:26'), -8],
    [new Date('2015/11/02 23:22:29'), -8],
    [new Date('2015/11/02 23:22:55'), -5],
    [new Date('2015/11/02 23:23:05'), -8],
    [new Date('2015/11/02 23:23:26'), 4],
    [new Date('2015/11/02 23:23:36'), 7],
    [new Date('2015/11/02 23:23:49'), -8],
    [new Date('2015/11/02 23:24:10'), -5],
    [new Date('2015/11/02 23:24:28'), -13],
    [new Date('2015/11/02 23:24:35'), -20],
    [new Date('2015/11/02 23:25:00'), 37],
    [new Date('2015/11/02 23:25:20'), 17],
    [new Date('2015/11/02 23:25:32'), 9],
    [new Date('2015/11/02 23:25:47'), 2],
    [new Date('2015/11/02 23:26:07'), 1],
    [new Date('2015/11/02 23:26:14'), 2],
    [new Date('2015/11/02 23:26:30'), 10],
    [new Date('2015/11/02 23:26:51'), 10],
    [new Date('2015/11/02 23:27:07'), 11],
    [new Date('2015/11/02 23:28:26'), 2],
    [new Date('2015/11/02 23:28:41'), 0],
    [new Date('2015/11/02 23:30:07'), 1],
    [new Date('2015/11/02 23:30:42'), 5],
    [new Date('2015/11/02 23:32:30'), 1],
    [new Date('2015/11/02 23:33:12'), -5],
    [new Date('2015/11/02 23:45:14'), -46],
  ];
  return var_array;
}

// npoint = 108


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

