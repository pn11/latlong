function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2016/05/27 15:03:05'), 57, 0.0, 0.0],
    [new Date('2016/05/27 15:03:24'), 60, 0.0006583270026468445, 0.12473564260677054],
    [new Date('2016/05/27 15:05:42'), 63, 0.15758228666232207, 4.093668512861093],
    [new Date('2016/05/27 15:06:20'), 60, 0.2890414556135998, 12.454026532226308],
    [new Date('2016/05/27 15:06:45'), 65, 0.3551122317794061, 9.51419176787611],
    [new Date('2016/05/27 15:07:51'), 34, 0.6470942969974571, 15.926294466439144],
    [new Date('2016/05/27 15:08:29'), 33, 0.977861198544723, 31.33581172553045],
    [new Date('2016/05/27 15:08:47'), 44, 1.1016470272310224, 24.75716573725989],
    [new Date('2016/05/27 15:09:22'), 42, 1.2927250930448404, 19.65374391227842],
    [new Date('2016/05/27 15:09:49'), 37, 1.2955068005433503, 0.370894333134657],
    [new Date('2016/05/27 15:10:18'), 35, 1.4590442585500893, 20.301201683595185],
    [new Date('2016/05/27 15:10:54'), 39, 1.6762325627137988, 21.718830416370942],
    [new Date('2016/05/27 15:11:29'), 47, 1.8903404532784267, 22.022525886647436],
    [new Date('2016/05/27 15:11:54'), 43, 1.9793994592547608, 12.824496860592113],
    [new Date('2016/05/27 15:12:28'), 45, 2.092262627278883, 11.95021779078939],
    [new Date('2016/05/27 15:14:05'), 30, 2.4225549383125866, 12.258271337333333],
    [new Date('2016/05/27 15:14:33'), 27, 2.521313680271447, 12.697552537567772],
    [new Date('2016/05/27 15:15:08'), 16, 2.6610853881043552, 14.376518519956301],
    [new Date('2016/05/27 15:15:38'), 6, 2.756201395228573, 11.413920854906122],
    [new Date('2016/05/27 15:16:05'), 23, 2.8073094394901124, 6.814405901538617],
    [new Date('2016/05/27 15:16:39'), 19, 2.9791475526666313, 18.19462374810199],
    [new Date('2016/05/27 15:17:08'), 19, 3.099222545016156, 14.9058611192513],
    [new Date('2016/05/27 15:17:42'), 27, 3.282317011912279, 19.386472965471878],
    [new Date('2016/05/27 15:18:08'), 30, 3.358344339837118, 10.526860789593128],
    [new Date('2016/05/27 15:18:42'), 31, 3.4454950002099642, 9.227716980654305],
    [new Date('2016/05/27 15:19:06'), 19, 3.6167182476190045, 25.683487111356033],
    [new Date('2016/05/27 15:19:43'), 31, 3.7115176217327983, 9.22372288674752],
    [new Date('2016/05/27 15:20:10'), 24, 3.8768780592482437, 22.048058335392696],
    [new Date('2016/05/27 15:20:36'), 29, 4.00865190192642, 18.245608986209067],
    [new Date('2016/05/27 15:21:11'), 24, 4.245837065290901, 24.39618823177525],
    [new Date('2016/05/27 15:22:40'), 38, 4.395503755519246, 6.05393353732628],
    [new Date('2016/05/27 15:23:03'), 42, 4.485125533481898, 14.027756550676],
    [new Date('2016/05/27 15:23:37'), 37, 4.50623823544122, 2.235462560398862],
    [new Date('2016/05/27 15:24:34'), 30, 4.68647266167478, 11.383226920014291],
    [new Date('2016/05/27 15:25:08'), 19, 4.801078810505517, 12.1347686997251],
    [new Date('2016/05/27 15:25:38'), 25, 4.880853776841755, 9.572995960348488],
    [new Date('2016/05/27 15:26:47'), 112, 4.906217884032051, 1.3233447229720054],
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

