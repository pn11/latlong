function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2016/03/21 13:41:57'), 45],
    [new Date('2016/03/21 13:42:03'), 44],
    [new Date('2016/03/21 13:42:06'), 44],
    [new Date('2016/03/21 13:42:14'), 42],
    [new Date('2016/03/21 13:42:22'), 42],
    [new Date('2016/03/21 13:42:42'), 33],
    [new Date('2016/03/21 13:42:56'), 36],
    [new Date('2016/03/21 13:43:07'), 36],
    [new Date('2016/03/21 13:43:19'), 35],
    [new Date('2016/03/21 13:43:28'), 35],
    [new Date('2016/03/21 13:43:33'), 32],
    [new Date('2016/03/21 13:43:54'), 39],
    [new Date('2016/03/21 13:44:02'), 34],
    [new Date('2016/03/21 13:44:11'), 34],
    [new Date('2016/03/21 13:44:35'), 35],
    [new Date('2016/03/21 13:44:47'), 37],
    [new Date('2016/03/21 13:45:02'), 39],
    [new Date('2016/03/21 13:45:15'), 38],
    [new Date('2016/03/21 13:45:26'), 39],
    [new Date('2016/03/21 13:45:40'), 41],
    [new Date('2016/03/21 13:45:57'), 44],
    [new Date('2016/03/21 13:45:59'), 44],
    [new Date('2016/03/21 13:46:17'), 45],
    [new Date('2016/03/21 13:46:31'), 48],
    [new Date('2016/03/21 13:46:43'), 42],
    [new Date('2016/03/21 13:47:41'), 41],
    [new Date('2016/03/21 13:48:31'), 42],
    [new Date('2016/03/21 13:48:53'), 41],
    [new Date('2016/03/21 13:49:20'), 49],
    [new Date('2016/03/21 13:49:44'), 42],
    [new Date('2016/03/21 13:49:58'), 37],
    [new Date('2016/03/21 13:50:01'), 38],
    [new Date('2016/03/21 13:50:10'), 40],
    [new Date('2016/03/21 13:50:24'), 36],
    [new Date('2016/03/21 13:50:34'), 37],
    [new Date('2016/03/21 13:50:44'), 37],
    [new Date('2016/03/21 13:50:55'), 35],
    [new Date('2016/03/21 13:51:04'), 40],
    [new Date('2016/03/21 13:51:07'), 40],
    [new Date('2016/03/21 13:51:12'), 39],
    [new Date('2016/03/21 13:51:22'), 34],
    [new Date('2016/03/21 13:51:29'), 33],
    [new Date('2016/03/21 13:51:40'), 35],
    [new Date('2016/03/21 13:51:54'), 32],
    [new Date('2016/03/21 13:52:08'), 36],
    [new Date('2016/03/21 13:52:22'), 36],
    [new Date('2016/03/21 13:52:36'), 31],
    [new Date('2016/03/21 13:52:55'), 37],
    [new Date('2016/03/21 13:53:04'), 39],
    [new Date('2016/03/21 13:53:18'), 38],
    [new Date('2016/03/21 13:53:35'), 40],
    [new Date('2016/03/21 13:53:46'), 41],
    [new Date('2016/03/21 13:54:01'), 39],
    [new Date('2016/03/21 13:54:15'), 38],
    [new Date('2016/03/21 13:54:37'), 36],
    [new Date('2016/03/21 13:54:52'), 36],
    [new Date('2016/03/21 13:54:55'), 34],
    [new Date('2016/03/21 13:55:00'), 35],
    [new Date('2016/03/21 13:55:08'), 32],
    [new Date('2016/03/21 13:55:19'), 37],
    [new Date('2016/03/21 13:55:34'), 37],
    [new Date('2016/03/21 13:55:43'), 36],
    [new Date('2016/03/21 13:55:55'), 36],
    [new Date('2016/03/21 13:56:14'), 43],
    [new Date('2016/03/21 13:56:20'), 38],
    [new Date('2016/03/21 13:56:30'), 38],
    [new Date('2016/03/21 13:56:39'), 35],
    [new Date('2016/03/21 13:56:55'), 31],
    [new Date('2016/03/21 13:57:08'), 29],
    [new Date('2016/03/21 13:57:21'), 27],
    [new Date('2016/03/21 13:57:32'), 27],
    [new Date('2016/03/21 13:57:51'), 25],
    [new Date('2016/03/21 13:58:04'), 26],
    [new Date('2016/03/21 13:58:37'), 25],
    [new Date('2016/03/21 13:58:43'), 21],
    [new Date('2016/03/21 13:58:59'), 20],
    [new Date('2016/03/21 13:59:25'), 21],
    [new Date('2016/03/21 13:59:43'), 20],
    [new Date('2016/03/21 13:59:51'), 19],
    [new Date('2016/03/21 13:59:56'), 17],
    [new Date('2016/03/21 14:00:11'), 19],
    [new Date('2016/03/21 14:00:26'), 23],
    [new Date('2016/03/21 14:00:43'), 19],
    [new Date('2016/03/21 14:00:56'), 16],
    [new Date('2016/03/21 14:00:59'), 16],
    [new Date('2016/03/21 14:01:09'), 19],
    [new Date('2016/03/21 14:01:20'), 19],
    [new Date('2016/03/21 14:01:31'), 19],
    [new Date('2016/03/21 14:01:35'), 19],
    [new Date('2016/03/21 14:01:43'), 23],
    [new Date('2016/03/21 14:01:55'), 26],
    [new Date('2016/03/21 14:02:12'), 32],
    [new Date('2016/03/21 14:02:31'), 35],
    [new Date('2016/03/21 14:02:48'), 34],
    [new Date('2016/03/21 14:02:49'), 34],
    [new Date('2016/03/21 14:02:58'), 36],
    [new Date('2016/03/21 14:03:09'), 38],
    [new Date('2016/03/21 14:03:19'), 39],
    [new Date('2016/03/21 14:03:29'), 39],
    [new Date('2016/03/21 14:03:41'), 44],
    [new Date('2016/03/21 14:03:50'), 45],
    [new Date('2016/03/21 14:04:05'), 46],
    [new Date('2016/03/21 14:04:32'), 54],
    [new Date('2016/03/21 14:04:47'), 42],
    [new Date('2016/03/21 14:06:09'), 62],
    [new Date('2016/03/21 14:06:53'), 61],
    [new Date('2016/03/21 14:07:04'), 66],
    [new Date('2016/03/21 14:07:38'), 67],
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

function writeHTMLGraph(){
  document.getElementById("graph").innerHTML='<h2>Graph</h2><div id="dashboard_ele" style="width: 0px; height: 0px"></div><div id="graph_ele" style="width: 800px; height: 600px"></div><div id="control_ele" style="width: 800px; height: 100px"></div>';
}

