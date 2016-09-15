function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2015/11/03 01:07:32'), 21],
    [new Date('2015/11/03 04:52:55'), -5],
    [new Date('2015/11/03 05:02:54'), 67],
    [new Date('2015/11/03 05:12:53'), -36],
    [new Date('2015/11/03 05:22:51'), 21],
    [new Date('2015/11/03 05:52:58'), 1],
    [new Date('2015/11/03 06:02:52'), 15],
    [new Date('2015/11/03 06:03:58'), 31],
    [new Date('2015/11/03 07:03:56'), -20],
    [new Date('2015/11/03 07:13:49'), -15],
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

