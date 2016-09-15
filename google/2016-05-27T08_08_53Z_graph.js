function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2016/05/27 17:08:53'), 18],
    [new Date('2016/05/27 17:09:07'), 10],
    [new Date('2016/05/27 17:10:07'), 19],
    [new Date('2016/05/27 17:10:40'), 25],
    [new Date('2016/05/27 17:11:14'), 20],
    [new Date('2016/05/27 17:12:18'), 13],
    [new Date('2016/05/27 17:12:46'), 14],
    [new Date('2016/05/27 17:13:18'), 5],
    [new Date('2016/05/27 17:13:51'), 7],
    [new Date('2016/05/27 17:14:24'), 13],
    [new Date('2016/05/27 17:14:55'), 12],
    [new Date('2016/05/27 17:15:26'), 6],
    [new Date('2016/05/27 17:16:57'), 5],
    [new Date('2016/05/27 17:17:30'), 19],
    [new Date('2016/05/27 17:17:59'), 14],
    [new Date('2016/05/27 17:18:29'), 18],
    [new Date('2016/05/27 17:18:54'), 30],
    [new Date('2016/05/27 17:21:01'), 20],
    [new Date('2016/05/27 17:21:33'), 20],
    [new Date('2016/05/27 17:21:59'), 31],
    [new Date('2016/05/27 17:22:33'), 38],
    [new Date('2016/05/27 17:23:02'), 30],
    [new Date('2016/05/27 17:23:28'), 24],
    [new Date('2016/05/27 17:24:04'), 20],
    [new Date('2016/05/27 17:24:29'), 19],
    [new Date('2016/05/27 17:25:23'), 41],
    [new Date('2016/05/27 17:26:04'), 31],
    [new Date('2016/05/27 17:26:35'), 22],
    [new Date('2016/05/27 17:27:03'), 32],
    [new Date('2016/05/27 17:27:36'), 29],
    [new Date('2016/05/27 17:28:09'), 44],
    [new Date('2016/05/27 17:28:39'), 26],
    [new Date('2016/05/27 17:29:09'), 44],
    [new Date('2016/05/27 17:29:36'), 33],
    [new Date('2016/05/27 17:30:09'), 33],
    [new Date('2016/05/27 17:30:33'), 28],
    [new Date('2016/05/27 17:31:09'), 39],
    [new Date('2016/05/27 17:31:40'), 41],
    [new Date('2016/05/27 17:32:11'), 58],
    [new Date('2016/05/27 17:32:41'), 69],
    [new Date('2016/05/27 17:33:10'), 61],
    [new Date('2016/05/27 17:34:45'), 63],
    [new Date('2016/05/27 17:35:14'), 73],
    [new Date('2016/05/27 17:35:48'), 86],
    [new Date('2016/05/27 17:36:15'), 82],
    [new Date('2016/05/27 17:36:48'), 68],
    [new Date('2016/05/27 17:37:15'), 65],
    [new Date('2016/05/27 17:37:46'), 80],
    [new Date('2016/05/27 17:38:19'), 88],
    [new Date('2016/05/27 17:38:48'), 90],
    [new Date('2016/05/27 17:39:19'), 91],
    [new Date('2016/05/27 17:39:51'), 95],
    [new Date('2016/05/27 17:40:18'), 101],
    [new Date('2016/05/27 17:40:47'), 108],
    [new Date('2016/05/27 17:41:21'), 109],
    [new Date('2016/05/27 17:41:45'), 119],
    [new Date('2016/05/27 17:42:16'), 127],
    [new Date('2016/05/27 17:42:52'), 121],
    [new Date('2016/05/27 17:43:53'), 124],
    [new Date('2016/05/27 17:44:18'), 116],
    [new Date('2016/05/27 17:46:49'), 122],
  ];
  return var_array;
}

// npoint = 61


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

