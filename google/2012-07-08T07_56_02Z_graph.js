function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2012/07/08 16:56:02'), 46.289997],
    [new Date('2012/07/08 16:56:07'), 46.289997],
    [new Date('2012/07/08 16:56:12'), 46.289997],
    [new Date('2012/07/08 16:56:17'), 46.289997],
    [new Date('2012/07/08 16:56:22'), 46.289997],
    [new Date('2012/07/08 16:56:27'), 46.289997],
    [new Date('2012/07/08 16:56:32'), 46.289997],
    [new Date('2012/07/08 16:56:37'), 46.289997],
    [new Date('2012/07/08 16:56:42'), 46.289997],
    [new Date('2012/07/08 16:56:47'), 46.289997],
    [new Date('2012/07/08 16:56:52'), 46.289997],
    [new Date('2012/07/08 16:56:57'), 46.289997],
    [new Date('2012/07/08 16:57:02'), 46.289997],
    [new Date('2012/07/08 16:57:07'), 46.289997],
    [new Date('2012/07/08 16:57:12'), 46.289997],
  ];
  return var_array;
}

// npoint = 15


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

