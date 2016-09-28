function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2015/10/25 19:07:15'), 67, 0.0],
    [new Date('2015/10/25 19:07:29'), 68, 0.0011323096862054518],
    [new Date('2015/10/25 19:07:42'), 65, 0.008080570984886239],
    [new Date('2015/10/25 19:08:03'), 58, 0.07671333171933722],
    [new Date('2015/10/25 19:08:22'), 44, 0.14927920302770675],
    [new Date('2015/10/25 19:08:39'), 36, 0.208722157942707],
    [new Date('2015/10/25 19:08:55'), 33, 0.285771323213349],
    [new Date('2015/10/25 19:09:10'), 31, 0.3711194054945781],
    [new Date('2015/10/25 19:09:21'), 36, 0.411112658023421],
    [new Date('2015/10/25 19:09:36'), 43, 0.4974334458797088],
    [new Date('2015/10/25 19:09:54'), 38, 0.577571408307513],
    [new Date('2015/10/25 19:10:09'), 47, 0.6187814210672291],
    [new Date('2015/10/25 19:10:23'), 39, 0.672729518111446],
    [new Date('2015/10/25 19:10:39'), 30, 0.7497275148872136],
    [new Date('2015/10/25 19:10:55'), 31, 0.8521181769537464],
    [new Date('2015/10/25 19:11:11'), 31, 0.882144161696673],
    [new Date('2015/10/25 19:11:24'), 32, 0.8917059695407785],
    [new Date('2015/10/25 19:11:37'), 36, 0.9377682824131491],
    [new Date('2015/10/25 19:11:57'), 26, 0.984232249533806],
    [new Date('2015/10/25 19:12:12'), 26, 1.0252881670636247],
    [new Date('2015/10/25 19:12:27'), 21, 1.075810743630104],
    [new Date('2015/10/25 19:12:44'), 23, 1.1639372659906737],
    [new Date('2015/10/25 19:12:57'), 29, 1.2221525400430087],
    [new Date('2015/10/25 19:13:09'), 26, 1.2481817912847628],
    [new Date('2015/10/25 19:13:27'), 23, 1.3137522843895562],
    [new Date('2015/10/25 19:13:42'), 25, 1.379412221429997],
    [new Date('2015/10/25 19:13:57'), 21, 1.4362678521034398],
    [new Date('2015/10/25 19:14:12'), 16, 1.4949248742401096],
    [new Date('2015/10/25 19:14:27'), 22, 1.6026085558951848],
    [new Date('2015/10/25 19:14:41'), 22, 1.677511999156736],
    [new Date('2015/10/25 19:14:58'), 20, 1.7531928253754379],
    [new Date('2015/10/25 19:15:12'), 18, 1.8208090231794771],
    [new Date('2015/10/25 19:15:27'), 10, 1.9034713441129616],
    [new Date('2015/10/25 19:15:47'), 11, 1.9840398967129314],
    [new Date('2015/10/25 19:15:56'), 10, 2.010301217406948],
    [new Date('2015/10/25 19:16:09'), 15, 2.0857391678384287],
    [new Date('2015/10/25 19:16:27'), 15, 2.204511938467395],
    [new Date('2015/10/25 19:16:39'), 16, 2.2832804846436976],
    [new Date('2015/10/25 19:16:56'), 11, 2.3888434812486317],
    [new Date('2015/10/25 19:17:09'), 8, 2.458734615896705],
    [new Date('2015/10/25 19:17:27'), 14, 2.4670759506885247],
    [new Date('2015/10/25 19:17:44'), 9, 2.4865629674449137],
    [new Date('2015/10/25 19:18:37'), 16, 2.5255213602042326],
    [new Date('2015/10/25 19:19:02'), 13, 2.6221883549003313],
    [new Date('2015/10/25 19:19:30'), 4, 2.671226168084114],
    [new Date('2015/10/25 19:19:39'), 4, 2.6746771560753277],
    [new Date('2015/10/25 19:19:55'), 3, 2.707254643685107],
    [new Date('2015/10/25 19:20:12'), 8, 2.7162470949479025],
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

