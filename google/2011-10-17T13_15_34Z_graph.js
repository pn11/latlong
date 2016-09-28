function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2011/10/17 22:15:34'), 96, 0.0],
    [new Date('2011/10/17 22:16:10'), 101, 0.16352901052025975],
    [new Date('2011/10/17 22:16:43'), 89, 0.3077758781901393],
    [new Date('2011/10/17 22:17:16'), 119, 0.37353969238222334],
    [new Date('2011/10/17 22:17:28'), 110, 0.3854715855401859],
    [new Date('2011/10/17 22:17:47'), 120, 0.39931016094525384],
    [new Date('2011/10/17 22:18:21'), 143, 0.4217376076707613],
    [new Date('2011/10/17 22:18:54'), 152, 0.4352179147178539],
    [new Date('2011/10/17 22:20:35'), 99, 0.5922287323354394],
    [new Date('2011/10/17 22:21:08'), 83, 0.8142027413300861],
    [new Date('2011/10/17 22:21:36'), 73, 0.9058673399286844],
    [new Date('2011/10/17 22:22:08'), 84, 1.0391541393845867],
    [new Date('2011/10/17 22:22:36'), 89, 1.1553194786928158],
    [new Date('2011/10/17 22:23:01'), 82, 1.1656142831723584],
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
        view: {'columns': [0,1]}
    });
    chart.setOption('vAxis.title', 'Elevation (m)');
    var chart_distance = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'graph_distance',
        view: {'columns': [0,2]}
    });
    chart_distance.setOption('vAxis.title', 'Distance (km)');
    var control = new google.visualization.ControlWrapper({
        controlType: 'ChartRangeFilter',
        containerId: 'control_ele',
        options: control_option,
    });
    dashboard.bind(control, [chart, chart_distance]);
    dashboard.draw(data);
  }
}

draw_ele();

function writeHTMLGraph(){
  document.getElementById("graph").innerHTML='<h2>Graph</h2><div id="dashboard_ele" style="width: 0px; height: 0px"></div><div id="graph_ele" style="width: 800px; height: 200px"></div><div id="graph_distance" style="width: 800px; height: 200px"></div><div id="control_ele" style="width: 800px; height: 100px"></div>';
}

