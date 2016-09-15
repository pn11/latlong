function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2016/03/20 13:01:49'), 28],
    [new Date('2016/03/20 13:01:59'), 28],
    [new Date('2016/03/20 13:02:14'), 28],
    [new Date('2016/03/20 13:02:27'), 26],
    [new Date('2016/03/20 13:02:44'), 24],
    [new Date('2016/03/20 13:02:58'), 28],
    [new Date('2016/03/20 13:03:15'), 26],
    [new Date('2016/03/20 13:03:28'), 26],
    [new Date('2016/03/20 13:03:52'), 24],
    [new Date('2016/03/20 13:04:11'), 25],
    [new Date('2016/03/20 13:04:26'), 22],
    [new Date('2016/03/20 13:04:34'), 24],
    [new Date('2016/03/20 13:04:39'), 24],
    [new Date('2016/03/20 13:04:52'), 27],
    [new Date('2016/03/20 13:05:09'), 22],
    [new Date('2016/03/20 13:05:17'), 17],
    [new Date('2016/03/20 13:05:25'), 22],
    [new Date('2016/03/20 13:05:36'), 25],
    [new Date('2016/03/20 13:05:55'), 25],
    [new Date('2016/03/20 13:06:04'), 23],
    [new Date('2016/03/20 13:06:18'), 23],
    [new Date('2016/03/20 13:06:35'), 27],
    [new Date('2016/03/20 13:06:55'), 27],
    [new Date('2016/03/20 13:07:14'), 25],
    [new Date('2016/03/20 13:07:25'), 26],
    [new Date('2016/03/20 13:07:35'), 26],
    [new Date('2016/03/20 13:07:47'), 26],
    [new Date('2016/03/20 13:08:01'), 29],
    [new Date('2016/03/20 13:08:14'), 23],
    [new Date('2016/03/20 13:08:29'), 23],
    [new Date('2016/03/20 13:08:43'), 23],
    [new Date('2016/03/20 13:08:55'), 27],
    [new Date('2016/03/20 13:09:10'), 29],
    [new Date('2016/03/20 13:09:25'), 27],
    [new Date('2016/03/20 13:09:39'), 25],
    [new Date('2016/03/20 13:09:51'), 22],
    [new Date('2016/03/20 13:10:09'), 22],
    [new Date('2016/03/20 13:10:20'), 22],
    [new Date('2016/03/20 13:10:31'), 23],
    [new Date('2016/03/20 13:10:52'), 22],
    [new Date('2016/03/20 13:11:03'), 23],
    [new Date('2016/03/20 13:11:17'), 24],
    [new Date('2016/03/20 13:11:34'), 21],
    [new Date('2016/03/20 13:12:04'), 25],
    [new Date('2016/03/20 13:12:21'), 24],
    [new Date('2016/03/20 13:12:42'), 28],
    [new Date('2016/03/20 13:12:58'), 30],
    [new Date('2016/03/20 13:13:16'), 30],
    [new Date('2016/03/20 13:13:30'), 34],
    [new Date('2016/03/20 13:13:46'), 34],
    [new Date('2016/03/20 13:14:08'), 38],
    [new Date('2016/03/20 13:14:23'), 35],
    [new Date('2016/03/20 13:14:30'), 29],
    [new Date('2016/03/20 13:14:47'), 34],
    [new Date('2016/03/20 13:14:53'), 36],
    [new Date('2016/03/20 13:15:04'), 34],
    [new Date('2016/03/20 13:15:17'), 40],
    [new Date('2016/03/20 13:15:22'), 39],
    [new Date('2016/03/20 13:15:37'), 40],
    [new Date('2016/03/20 13:15:47'), 38],
    [new Date('2016/03/20 13:15:57'), 40],
    [new Date('2016/03/20 13:16:20'), 38],
    [new Date('2016/03/20 13:16:35'), 33],
    [new Date('2016/03/20 13:16:48'), 33],
    [new Date('2016/03/20 13:17:00'), 27],
    [new Date('2016/03/20 13:17:12'), 24],
    [new Date('2016/03/20 13:17:26'), 32],
    [new Date('2016/03/20 13:17:39'), 36],
    [new Date('2016/03/20 13:23:09'), 26],
    [new Date('2016/03/20 13:23:33'), 33],
    [new Date('2016/03/20 13:23:39'), 35],
    [new Date('2016/03/20 13:23:50'), 35],
    [new Date('2016/03/20 13:24:12'), 41],
    [new Date('2016/03/20 13:24:28'), 44],
    [new Date('2016/03/20 13:24:38'), 39],
    [new Date('2016/03/20 13:24:56'), 47],
    [new Date('2016/03/20 13:25:03'), 48],
    [new Date('2016/03/20 13:25:54'), 42],
    [new Date('2016/03/20 13:26:11'), 50],
    [new Date('2016/03/20 13:26:17'), 50],
    [new Date('2016/03/20 13:26:28'), 50],
    [new Date('2016/03/20 13:26:37'), 53],
    [new Date('2016/03/20 13:26:56'), 55],
    [new Date('2016/03/20 13:27:25'), 75],
    [new Date('2016/03/20 13:27:46'), 60],
    [new Date('2016/03/20 13:27:55'), 57],
    [new Date('2016/03/20 13:28:06'), 62],
    [new Date('2016/03/20 13:28:16'), 66],
    [new Date('2016/03/20 13:55:31'), 57],
    [new Date('2016/03/20 14:01:19'), 59],
    [new Date('2016/03/20 14:07:44'), 58],
    [new Date('2016/03/20 14:08:45'), 77],
    [new Date('2016/03/20 14:10:53'), 77],
    [new Date('2016/03/20 14:13:38'), 70],
  ];
  return var_array;
}

// npoint = 94


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

