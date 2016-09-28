function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2016/05/27 15:03:05'), 57, 0.0],
    [new Date('2016/05/27 15:03:24'), 60, 0.0006583270026468445],
    [new Date('2016/05/27 15:05:42'), 63, 0.15758228666232207],
    [new Date('2016/05/27 15:06:20'), 60, 0.2890414556135998],
    [new Date('2016/05/27 15:06:45'), 65, 0.3551122317794061],
    [new Date('2016/05/27 15:07:51'), 34, 0.6470942969974571],
    [new Date('2016/05/27 15:08:29'), 33, 0.977861198544723],
    [new Date('2016/05/27 15:08:47'), 44, 1.1016470272310224],
    [new Date('2016/05/27 15:09:22'), 42, 1.2927250930448404],
    [new Date('2016/05/27 15:09:49'), 37, 1.2955068005433503],
    [new Date('2016/05/27 15:10:18'), 35, 1.4590442585500893],
    [new Date('2016/05/27 15:10:54'), 39, 1.6762325627137988],
    [new Date('2016/05/27 15:11:29'), 47, 1.8903404532784267],
    [new Date('2016/05/27 15:11:54'), 43, 1.9793994592547608],
    [new Date('2016/05/27 15:12:28'), 45, 2.092262627278883],
    [new Date('2016/05/27 15:14:05'), 30, 2.4225549383125866],
    [new Date('2016/05/27 15:14:33'), 27, 2.521313680271447],
    [new Date('2016/05/27 15:15:08'), 16, 2.6610853881043552],
    [new Date('2016/05/27 15:15:38'), 6, 2.756201395228573],
    [new Date('2016/05/27 15:16:05'), 23, 2.8073094394901124],
    [new Date('2016/05/27 15:16:39'), 19, 2.9791475526666313],
    [new Date('2016/05/27 15:17:08'), 19, 3.099222545016156],
    [new Date('2016/05/27 15:17:42'), 27, 3.282317011912279],
    [new Date('2016/05/27 15:18:08'), 30, 3.358344339837118],
    [new Date('2016/05/27 15:18:42'), 31, 3.4454950002099642],
    [new Date('2016/05/27 15:19:06'), 19, 3.6167182476190045],
    [new Date('2016/05/27 15:19:43'), 31, 3.7115176217327983],
    [new Date('2016/05/27 15:20:10'), 24, 3.8768780592482437],
    [new Date('2016/05/27 15:20:36'), 29, 4.00865190192642],
    [new Date('2016/05/27 15:21:11'), 24, 4.245837065290901],
    [new Date('2016/05/27 15:22:40'), 38, 4.395503755519246],
    [new Date('2016/05/27 15:23:03'), 42, 4.485125533481898],
    [new Date('2016/05/27 15:23:37'), 37, 4.50623823544122],
    [new Date('2016/05/27 15:24:34'), 30, 4.68647266167478],
    [new Date('2016/05/27 15:25:08'), 19, 4.801078810505517],
    [new Date('2016/05/27 15:25:38'), 25, 4.880853776841755],
    [new Date('2016/05/27 15:26:47'), 112, 4.906217884032051],
  ];
  return var_array;
}

// npoint = 37


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

