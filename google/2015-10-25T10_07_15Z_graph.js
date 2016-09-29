function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)', 'Velocity (km/h)'],
    [new Date('2015/10/25 19:07:15'), 67, 0.0, 0.0],
    [new Date('2015/10/25 19:07:29'), 68, 0.0011323096862054518, 0.2911653478814019],
    [new Date('2015/10/25 19:07:42'), 65, 0.008080570984886239, 1.9241338980962177],
    [new Date('2015/10/25 19:08:03'), 58, 0.07671333171933722, 11.765616125905884],
    [new Date('2015/10/25 19:08:22'), 44, 0.14927920302770675, 13.749322984743698],
    [new Date('2015/10/25 19:08:39'), 36, 0.208722157942707, 12.58791986435299],
    [new Date('2015/10/25 19:08:55'), 33, 0.285771323213349, 17.33606218589446],
    [new Date('2015/10/25 19:09:10'), 31, 0.3711194054945781, 20.483539747494973],
    [new Date('2015/10/25 19:09:21'), 36, 0.411112658023421, 13.088700827621302],
    [new Date('2015/10/25 19:09:36'), 43, 0.4974334458797088, 20.71698908550907],
    [new Date('2015/10/25 19:09:54'), 38, 0.577571408307513, 16.02759248556083],
    [new Date('2015/10/25 19:10:09'), 47, 0.6187814210672291, 9.890403062331876],
    [new Date('2015/10/25 19:10:23'), 39, 0.672729518111446, 13.87236781137006],
    [new Date('2015/10/25 19:10:39'), 30, 0.7497275148872136, 17.324549274547707],
    [new Date('2015/10/25 19:10:55'), 31, 0.8521181769537464, 23.03789896496987],
    [new Date('2015/10/25 19:11:11'), 31, 0.882144161696673, 6.755846567158482],
    [new Date('2015/10/25 19:11:24'), 32, 0.8917059695407785, 2.6478852491369333],
    [new Date('2015/10/25 19:11:37'), 36, 0.9377682824131491, 12.755717410810316],
    [new Date('2015/10/25 19:11:57'), 26, 0.984232249533806, 8.363514081718236],
    [new Date('2015/10/25 19:12:12'), 26, 1.0252881670636247, 9.853420207156478],
    [new Date('2015/10/25 19:12:27'), 21, 1.075810743630104, 12.12541837595507],
    [new Date('2015/10/25 19:12:44'), 23, 1.1639372659906737, 18.6620870881206],
    [new Date('2015/10/25 19:12:57'), 29, 1.2221525400430087, 16.121152814492785],
    [new Date('2015/10/25 19:13:09'), 26, 1.2481817912847628, 7.808775372526241],
    [new Date('2015/10/25 19:13:27'), 23, 1.3137522843895562, 13.114098620958671],
    [new Date('2015/10/25 19:13:42'), 25, 1.379412221429997, 15.758384889705834],
    [new Date('2015/10/25 19:13:57'), 21, 1.4362678521034398, 13.645351361626226],
    [new Date('2015/10/25 19:14:12'), 16, 1.4949248742401096, 14.077685312800739],
    [new Date('2015/10/25 19:14:27'), 22, 1.6026085558951848, 25.84408359721806],
    [new Date('2015/10/25 19:14:41'), 22, 1.677511999156736, 19.260885410113183],
    [new Date('2015/10/25 19:14:58'), 20, 1.7531928253754379, 16.026527905136856],
    [new Date('2015/10/25 19:15:12'), 18, 1.8208090231794771, 17.387022292467233],
    [new Date('2015/10/25 19:15:27'), 10, 1.9034713441129616, 19.83895702403625],
    [new Date('2015/10/25 19:15:47'), 11, 1.9840398967129314, 14.502339467994545],
    [new Date('2015/10/25 19:15:56'), 10, 2.010301217406948, 10.504528277606642],
    [new Date('2015/10/25 19:16:09'), 15, 2.0857391678384287, 20.890509350256213],
    [new Date('2015/10/25 19:16:27'), 15, 2.204511938467395, 23.754554125793277],
    [new Date('2015/10/25 19:16:39'), 16, 2.2832804846436976, 23.630563852890724],
    [new Date('2015/10/25 19:16:56'), 11, 2.3888434812486317, 22.354516928103656],
    [new Date('2015/10/25 19:17:09'), 8, 2.458734615896705, 19.35446805638946],
    [new Date('2015/10/25 19:17:27'), 14, 2.4670759506885247, 1.6682669583639262],
    [new Date('2015/10/25 19:17:44'), 9, 2.4865629674449137, 4.12666237194115],
    [new Date('2015/10/25 19:18:37'), 16, 2.5255213602042326, 2.6462304515763826],
    [new Date('2015/10/25 19:19:02'), 13, 2.6221883549003313, 13.920047236238208],
    [new Date('2015/10/25 19:19:30'), 4, 2.671226168084114, 6.30486169505778],
    [new Date('2015/10/25 19:19:39'), 4, 2.6746771560753277, 1.380395196485474],
    [new Date('2015/10/25 19:19:55'), 3, 2.707254643685107, 7.329934712200275],
    [new Date('2015/10/25 19:20:12'), 8, 2.7162470949479025, 1.9042837968273107],
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

