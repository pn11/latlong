function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2011/10/17 22:15:34'), 96, 0.0, 0.0],
    [new Date('2011/10/17 22:16:10'), 101, 0.16352901052025975, 16.352901052025974],
    [new Date('2011/10/17 22:16:43'), 89, 0.3077758781901393, 15.73602192762322],
    [new Date('2011/10/17 22:17:16'), 119, 0.37353969238222334, 7.174234275500078],
    [new Date('2011/10/17 22:17:28'), 110, 0.3854715855401859, 3.5795679473887625],
    [new Date('2011/10/17 22:17:47'), 120, 0.39931016094525384, 2.622045866223402],
    [new Date('2011/10/17 22:18:21'), 143, 0.4217376076707613, 2.3746708297596117],
    [new Date('2011/10/17 22:18:54'), 152, 0.4352179147178539, 1.4705789505919233],
    [new Date('2011/10/17 22:20:35'), 99, 0.5922287323354394, 5.596425182408987],
    [new Date('2011/10/17 22:21:08'), 83, 0.8142027413300861, 24.215346435779647],
    [new Date('2011/10/17 22:21:36'), 73, 0.9058673399286844, 11.785448391248355],
    [new Date('2011/10/17 22:22:08'), 84, 1.0391541393845867, 14.994764938788997],
    [new Date('2011/10/17 22:22:36'), 89, 1.1553194786928158, 14.935543625343753],
    [new Date('2011/10/17 22:23:01'), 82, 1.1656142831723584, 1.482451845054117],
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
    var chart_velocity = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'graph_velocity',
        view: {'columns': [0,3]}
    });
    chart_velocity.setOption('vAxis.title', 'Velocity (km/h)');
    var control = new google.visualization.ControlWrapper({
        controlType: 'ChartRangeFilter',
        containerId: 'control_ele',
        options: control_option,
    });
    dashboard.bind(control, [chart, chart_distance, chart_velocity]);
    dashboard.draw(data);
  }
}

draw_ele();

function writeHTMLGraph(){
  document.getElementById("graph").innerHTML='<h2>Graph</h2><div id="dashboard_ele" style="width: 0px; height: 0px"></div><div id="graph_ele" style="width: 800px; height: 200px"></div><div id="graph_distance" style="width: 800px; height: 200px"></div><div id="graph_velocity" style="width: 800px; height: 200px"></div><div id="control_ele" style="width: 800px; height: 100px"></div>';
}

