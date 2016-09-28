function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2012/07/08 16:03:04'), 74.250000, 0.0],
    [new Date('2012/07/08 16:03:09'), 74.250000, 0.0],
    [new Date('2012/07/08 16:03:14'), 74.250000, 0.0],
    [new Date('2012/07/08 16:03:19'), 74.250000, 0.0],
    [new Date('2012/07/08 16:03:24'), 94.070000, 0.026089192624765185],
    [new Date('2012/07/08 16:03:29'), 93.659996, 0.02864948380771909],
    [new Date('2012/07/08 16:03:34'), 93.659996, 0.02864948380771909],
    [new Date('2012/07/08 16:03:39'), 93.659996, 0.02864948380771909],
    [new Date('2012/07/08 16:03:44'), 93.659996, 0.02864948380771909],
    [new Date('2012/07/08 16:04:25'), 93.939995, 0.033740002055992424],
    [new Date('2012/07/08 16:04:30'), 71.000000, 0.05248089451932949],
    [new Date('2012/07/08 16:16:50'), 93.519997, 0.09008149163647061],
    [new Date('2012/07/08 16:20:15'), 116.639999, 0.09097287061185592],
    [new Date('2012/07/08 16:20:20'), 111.059998, 0.10591631353689514],
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

