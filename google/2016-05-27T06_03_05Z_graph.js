function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2016/05/27 15:03:05'), 57],
    [new Date('2016/05/27 15:03:24'), 60],
    [new Date('2016/05/27 15:05:42'), 63],
    [new Date('2016/05/27 15:06:20'), 60],
    [new Date('2016/05/27 15:06:45'), 65],
    [new Date('2016/05/27 15:07:51'), 34],
    [new Date('2016/05/27 15:08:29'), 33],
    [new Date('2016/05/27 15:08:47'), 44],
    [new Date('2016/05/27 15:09:22'), 42],
    [new Date('2016/05/27 15:09:49'), 37],
    [new Date('2016/05/27 15:10:18'), 35],
    [new Date('2016/05/27 15:10:54'), 39],
    [new Date('2016/05/27 15:11:29'), 47],
    [new Date('2016/05/27 15:11:54'), 43],
    [new Date('2016/05/27 15:12:28'), 45],
    [new Date('2016/05/27 15:14:05'), 30],
    [new Date('2016/05/27 15:14:33'), 27],
    [new Date('2016/05/27 15:15:08'), 16],
    [new Date('2016/05/27 15:15:38'), 6],
    [new Date('2016/05/27 15:16:05'), 23],
    [new Date('2016/05/27 15:16:39'), 19],
    [new Date('2016/05/27 15:17:08'), 19],
    [new Date('2016/05/27 15:17:42'), 27],
    [new Date('2016/05/27 15:18:08'), 30],
    [new Date('2016/05/27 15:18:42'), 31],
    [new Date('2016/05/27 15:19:06'), 19],
    [new Date('2016/05/27 15:19:43'), 31],
    [new Date('2016/05/27 15:20:10'), 24],
    [new Date('2016/05/27 15:20:36'), 29],
    [new Date('2016/05/27 15:21:11'), 24],
    [new Date('2016/05/27 15:22:40'), 38],
    [new Date('2016/05/27 15:23:03'), 42],
    [new Date('2016/05/27 15:23:37'), 37],
    [new Date('2016/05/27 15:24:34'), 30],
    [new Date('2016/05/27 15:25:08'), 19],
    [new Date('2016/05/27 15:25:38'), 25],
    [new Date('2016/05/27 15:26:47'), 112],
  ];
  return var_array;
}

// npoint = 37


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

