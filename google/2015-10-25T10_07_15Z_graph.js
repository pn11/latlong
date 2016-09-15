function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2015/10/25 19:07:15'), 67],
    [new Date('2015/10/25 19:07:29'), 68],
    [new Date('2015/10/25 19:07:42'), 65],
    [new Date('2015/10/25 19:08:03'), 58],
    [new Date('2015/10/25 19:08:22'), 44],
    [new Date('2015/10/25 19:08:39'), 36],
    [new Date('2015/10/25 19:08:55'), 33],
    [new Date('2015/10/25 19:09:10'), 31],
    [new Date('2015/10/25 19:09:21'), 36],
    [new Date('2015/10/25 19:09:36'), 43],
    [new Date('2015/10/25 19:09:54'), 38],
    [new Date('2015/10/25 19:10:09'), 47],
    [new Date('2015/10/25 19:10:23'), 39],
    [new Date('2015/10/25 19:10:39'), 30],
    [new Date('2015/10/25 19:10:55'), 31],
    [new Date('2015/10/25 19:11:11'), 31],
    [new Date('2015/10/25 19:11:24'), 32],
    [new Date('2015/10/25 19:11:37'), 36],
    [new Date('2015/10/25 19:11:57'), 26],
    [new Date('2015/10/25 19:12:12'), 26],
    [new Date('2015/10/25 19:12:27'), 21],
    [new Date('2015/10/25 19:12:44'), 23],
    [new Date('2015/10/25 19:12:57'), 29],
    [new Date('2015/10/25 19:13:09'), 26],
    [new Date('2015/10/25 19:13:27'), 23],
    [new Date('2015/10/25 19:13:42'), 25],
    [new Date('2015/10/25 19:13:57'), 21],
    [new Date('2015/10/25 19:14:12'), 16],
    [new Date('2015/10/25 19:14:27'), 22],
    [new Date('2015/10/25 19:14:41'), 22],
    [new Date('2015/10/25 19:14:58'), 20],
    [new Date('2015/10/25 19:15:12'), 18],
    [new Date('2015/10/25 19:15:27'), 10],
    [new Date('2015/10/25 19:15:47'), 11],
    [new Date('2015/10/25 19:15:56'), 10],
    [new Date('2015/10/25 19:16:09'), 15],
    [new Date('2015/10/25 19:16:27'), 15],
    [new Date('2015/10/25 19:16:39'), 16],
    [new Date('2015/10/25 19:16:56'), 11],
    [new Date('2015/10/25 19:17:09'), 8],
    [new Date('2015/10/25 19:17:27'), 14],
    [new Date('2015/10/25 19:17:44'), 9],
    [new Date('2015/10/25 19:18:37'), 16],
    [new Date('2015/10/25 19:19:02'), 13],
    [new Date('2015/10/25 19:19:30'), 4],
    [new Date('2015/10/25 19:19:39'), 4],
    [new Date('2015/10/25 19:19:55'), 3],
    [new Date('2015/10/25 19:20:12'), 8],
  ];
  return var_array;
}

// npoint = 48


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

