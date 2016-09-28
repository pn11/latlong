function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2016/05/27 17:08:53'), 18, 0.0],
    [new Date('2016/05/27 17:09:07'), 10, 0.06211792919563989],
    [new Date('2016/05/27 17:10:07'), 19, 0.1614460723220447],
    [new Date('2016/05/27 17:10:40'), 25, 0.25803088356620807],
    [new Date('2016/05/27 17:11:14'), 20, 0.3821661166700164],
    [new Date('2016/05/27 17:12:18'), 13, 0.4034105544707508],
    [new Date('2016/05/27 17:12:46'), 14, 0.4084305226993552],
    [new Date('2016/05/27 17:13:18'), 5, 0.43397023087967074],
    [new Date('2016/05/27 17:13:51'), 7, 0.6463555671147807],
    [new Date('2016/05/27 17:14:24'), 13, 0.910882321859839],
    [new Date('2016/05/27 17:14:55'), 12, 1.1586525177314142],
    [new Date('2016/05/27 17:15:26'), 6, 1.3054909869210787],
    [new Date('2016/05/27 17:16:57'), 5, 1.7752954103995513],
    [new Date('2016/05/27 17:17:30'), 19, 1.853839712324803],
    [new Date('2016/05/27 17:17:59'), 14, 1.9241307007250363],
    [new Date('2016/05/27 17:18:29'), 18, 2.022433641246177],
    [new Date('2016/05/27 17:18:54'), 30, 2.0735010361751627],
    [new Date('2016/05/27 17:21:01'), 20, 2.2246433079107275],
    [new Date('2016/05/27 17:21:33'), 20, 2.3614330878283285],
    [new Date('2016/05/27 17:21:59'), 31, 2.417292450816406],
    [new Date('2016/05/27 17:22:33'), 38, 2.47537201135231],
    [new Date('2016/05/27 17:23:02'), 30, 2.620648326704351],
    [new Date('2016/05/27 17:23:28'), 24, 2.777447523703848],
    [new Date('2016/05/27 17:24:04'), 20, 2.9463291985746447],
    [new Date('2016/05/27 17:24:29'), 19, 3.07622598173389],
    [new Date('2016/05/27 17:25:23'), 41, 3.1066393355233655],
    [new Date('2016/05/27 17:26:04'), 31, 3.281743232331775],
    [new Date('2016/05/27 17:26:35'), 22, 3.3700673747724554],
    [new Date('2016/05/27 17:27:03'), 32, 3.395899894833569],
    [new Date('2016/05/27 17:27:36'), 29, 3.4890841771313004],
    [new Date('2016/05/27 17:28:09'), 44, 3.5747111973752173],
    [new Date('2016/05/27 17:28:39'), 26, 3.6875560839239094],
    [new Date('2016/05/27 17:29:09'), 44, 3.796035310497154],
    [new Date('2016/05/27 17:29:36'), 33, 3.898350107622997],
    [new Date('2016/05/27 17:30:09'), 33, 3.997669478392847],
    [new Date('2016/05/27 17:30:33'), 28, 4.078555004468059],
    [new Date('2016/05/27 17:31:09'), 39, 4.11563450951137],
    [new Date('2016/05/27 17:31:40'), 41, 4.178919563373877],
    [new Date('2016/05/27 17:32:11'), 58, 4.30052609991174],
    [new Date('2016/05/27 17:32:41'), 69, 4.310489754585878],
    [new Date('2016/05/27 17:33:10'), 61, 4.424048061686031],
    [new Date('2016/05/27 17:34:45'), 63, 4.756443117576658],
    [new Date('2016/05/27 17:35:14'), 73, 4.863777172830016],
    [new Date('2016/05/27 17:35:48'), 86, 4.948458815235502],
    [new Date('2016/05/27 17:36:15'), 82, 5.004571136218118],
    [new Date('2016/05/27 17:36:48'), 68, 5.140311209305203],
    [new Date('2016/05/27 17:37:15'), 65, 5.246895482803814],
    [new Date('2016/05/27 17:37:46'), 80, 5.316996039368044],
    [new Date('2016/05/27 17:38:19'), 88, 5.402114457965025],
    [new Date('2016/05/27 17:38:48'), 90, 5.4354214292596215],
    [new Date('2016/05/27 17:39:19'), 91, 5.461781582861279],
    [new Date('2016/05/27 17:39:51'), 95, 5.491934199310407],
    [new Date('2016/05/27 17:40:18'), 101, 5.555136734540877],
    [new Date('2016/05/27 17:40:47'), 108, 5.6322576425764765],
    [new Date('2016/05/27 17:41:21'), 109, 5.720410031166147],
    [new Date('2016/05/27 17:41:45'), 119, 5.763748294937519],
    [new Date('2016/05/27 17:42:16'), 127, 5.822314351120671],
    [new Date('2016/05/27 17:42:52'), 121, 5.9054429625356235],
    [new Date('2016/05/27 17:43:53'), 124, 5.944714941065363],
    [new Date('2016/05/27 17:44:18'), 116, 5.976850836150431],
    [new Date('2016/05/27 17:46:49'), 122, 5.982411004333637],
  ];
  return var_array;
}

// npoint = 61


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

