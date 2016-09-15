function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2011/10/17 22:15:34'), 96],
    [new Date('2011/10/17 22:16:10'), 101],
    [new Date('2011/10/17 22:16:43'), 89],
    [new Date('2011/10/17 22:17:16'), 119],
    [new Date('2011/10/17 22:17:28'), 110],
    [new Date('2011/10/17 22:17:47'), 120],
    [new Date('2011/10/17 22:18:21'), 143],
    [new Date('2011/10/17 22:18:54'), 152],
    [new Date('2011/10/17 22:20:35'), 99],
    [new Date('2011/10/17 22:21:08'), 83],
    [new Date('2011/10/17 22:21:36'), 73],
    [new Date('2011/10/17 22:22:08'), 84],
    [new Date('2011/10/17 22:22:36'), 89],
    [new Date('2011/10/17 22:23:01'), 82],
  ];
  return var_array;
}

// npoint = 14


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

