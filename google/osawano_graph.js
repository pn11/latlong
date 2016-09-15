function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('0.0'), 81.5],
    [new Date('0.0'), 81.5],
    [new Date('0.0'), 81.7],
    [new Date('0.0'), 81.1],
    [new Date('0.0'), 81.1],
    [new Date('0.0'), 81.6],
    [new Date('0.0'), 80.9],
    [new Date('0.0'), 80.9],
    [new Date('0.0'), 80.6],
    [new Date('0.0'), 80.4],
    [new Date('0.0'), 80.6],
    [new Date('0.0'), 80.6],
    [new Date('0.0'), 80.9],
    [new Date('0.0'), 80.9],
    [new Date('0.0'), 80.6],
    [new Date('0.0'), 81.0],
    [new Date('0.0'), 81.1],
    [new Date('0.0'), 81.2],
    [new Date('0.0'), 81.1],
    [new Date('0.0'), 81.2],
    [new Date('0.0'), 81.2],
    [new Date('0.0'), 81.2],
    [new Date('0.0'), 81.2],
    [new Date('0.0'), 81.2],
    [new Date('0.0'), 81.4],
    [new Date('0.0'), 81.4],
    [new Date('0.0'), 81.6],
    [new Date('0.0'), 81.0],
    [new Date('0.0'), 81.6],
    [new Date('0.0'), 88.1],
    [new Date('0.0'), 91.1],
    [new Date('0.0'), 95.9],
    [new Date('0.0'), 99.0],
    [new Date('0.0'), 100.1],
    [new Date('0.0'), 96.2],
    [new Date('0.0'), 99.5],
    [new Date('0.0'), 100.6],
    [new Date('0.0'), 104.1],
    [new Date('0.0'), 104.0],
    [new Date('0.0'), 104.0],
    [new Date('0.0'), 104.0],
    [new Date('0.0'), 104.0],
    [new Date('0.0'), 104.2],
    [new Date('0.0'), 104.2],
    [new Date('0.0'), 104.4],
    [new Date('0.0'), 104.4],
    [new Date('0.0'), 105.6],
    [new Date('0.0'), 105.7],
    [new Date('0.0'), 105.7],
    [new Date('0.0'), 106.5],
    [new Date('0.0'), 106.7],
    [new Date('0.0'), 107.5],
    [new Date('0.0'), 107.7],
    [new Date('0.0'), 107.9],
    [new Date('0.0'), 107.6],
    [new Date('0.0'), 107.2],
    [new Date('0.0'), 112.0],
    [new Date('0.0'), 113.9],
    [new Date('0.0'), 114.1],
    [new Date('0.0'), 114.1],
    [new Date('0.0'), 114.1],
    [new Date('0.0'), 114.5],
    [new Date('0.0'), 114.5],
    [new Date('0.0'), 114.1],
    [new Date('0.0'), 113.9],
    [new Date('0.0'), 114.0],
    [new Date('0.0'), 114.0],
    [new Date('0.0'), 114.2],
    [new Date('0.0'), 111.0],
    [new Date('0.0'), 111.4],
    [new Date('0.0'), 111.1],
    [new Date('0.0'), 104.5],
    [new Date('0.0'), 105.9],
    [new Date('0.0'), 103.9],
    [new Date('0.0'), 103.9],
    [new Date('0.0'), 102.6],
    [new Date('0.0'), 101.2],
    [new Date('0.0'), 102.5],
    [new Date('0.0'), 101.1],
    [new Date('0.0'), 102.5],
    [new Date('0.0'), 102.5],
    [new Date('0.0'), 100.5],
    [new Date('0.0'), 92.4],
    [new Date('0.0'), 90.5],
    [new Date('0.0'), 89.9],
    [new Date('0.0'), 90.0],
    [new Date('0.0'), 89.9],
    [new Date('0.0'), 88.9],
    [new Date('0.0'), 88.7],
    [new Date('0.0'), 88.5],
    [new Date('0.0'), 88.4],
    [new Date('0.0'), 87.4],
    [new Date('0.0'), 87.4],
    [new Date('0.0'), 87.4],
    [new Date('0.0'), 87.4],
    [new Date('0.0'), 85.7],
    [new Date('0.0'), 85.9],
    [new Date('0.0'), 85.7],
    [new Date('0.0'), 85.7],
    [new Date('0.0'), 85.4],
    [new Date('0.0'), 85.5],
    [new Date('0.0'), 85.6],
    [new Date('0.0'), 85.6],
    [new Date('0.0'), 85.5],
    [new Date('0.0'), 84.0],
    [new Date('0.0'), 82.0],
  ];
  return var_array;
}

// npoint = 106


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

