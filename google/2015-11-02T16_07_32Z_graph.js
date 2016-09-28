function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2015/11/03 01:07:32'), 21, 0.0],
    [new Date('2015/11/03 04:52:55'), -5, 108.72707311557495],
    [new Date('2015/11/03 05:02:54'), 67, 109.1819323839535],
    [new Date('2015/11/03 05:12:53'), -36, 109.20206748869066],
    [new Date('2015/11/03 05:22:51'), 21, 109.21937572023718],
    [new Date('2015/11/03 05:52:58'), 1, 109.25704313433621],
    [new Date('2015/11/03 06:02:52'), 15, 109.5301915613238],
    [new Date('2015/11/03 06:03:58'), 31, 109.82566112523939],
    [new Date('2015/11/03 07:03:56'), -20, 134.9300330717431],
    [new Date('2015/11/03 07:13:49'), -15, 135.0652867977026],
  ];
  return var_array;
}

// npoint = 10


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

