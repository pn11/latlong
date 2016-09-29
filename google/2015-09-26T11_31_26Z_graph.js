function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2015/09/26 20:31:26'), 109, 0.0, 0.0],
    [new Date('2015/09/26 20:31:30'), 120, 0.0021416717416264594, 1.9275045674638134],
    [new Date('2015/09/26 20:31:38'), 122, 0.0157416756883582, 6.120001776029283],
    [new Date('2015/09/26 20:31:46'), 123, 0.02651057208257155, 4.8460033773960065],
    [new Date('2015/09/26 20:31:55'), 129, 0.037973940111222945, 4.585347211460559],
    [new Date('2015/09/26 20:32:12'), 127, 0.05842296046853253, 4.3303807815479125],
    [new Date('2015/09/26 20:32:30'), 121, 0.08311278309563516, 4.937964525420526],
    [new Date('2015/09/26 20:32:45'), 117, 0.1002508992477822, 4.113147876515289],
    [new Date('2015/09/26 20:33:02'), 118, 0.12124351498590176, 4.445495097484141],
    [new Date('2015/09/26 20:33:19'), 114, 0.13916253023573252, 3.794614994081808],
    [new Date('2015/09/26 20:33:37'), 110, 0.16094874484155233, 4.357242921163964],
    [new Date('2015/09/26 20:33:53'), 106, 0.18348442821374583, 5.070528758743536],
    [new Date('2015/09/26 20:34:10'), 100, 0.20687434593786774, 4.953159047461107],
    [new Date('2015/09/26 20:34:27'), 99, 0.22538497672082347, 3.9198982834494496],
    [new Date('2015/09/26 20:34:44'), 99, 0.25224258039452885, 5.687492542667016],
    [new Date('2015/09/26 20:35:06'), 83, 0.28423048780404503, 5.234384848829922],
    [new Date('2015/09/26 20:35:18'), 79, 0.301537675994633, 5.192156457176395],
    [new Date('2015/09/26 20:35:30'), 77, 0.3176599685375042, 4.8366877628613745],
    [new Date('2015/09/26 20:35:40'), 81, 0.3307980188396728, 4.729698108780683],
    [new Date('2015/09/26 20:35:52'), 84, 0.3460239805658842, 4.5677885178634146],
    [new Date('2015/09/26 20:36:05'), 89, 0.36238090068501755, 4.529608648375388],
    [new Date('2015/09/26 20:36:19'), 90, 0.3792299783417645, 4.332619968877778],
    [new Date('2015/09/26 20:36:34'), 91, 0.401676137664857, 5.387078237542206],
    [new Date('2015/09/26 20:36:47'), 91, 0.42045360996697145, 5.199915406739397],
    [new Date('2015/09/26 20:37:01'), 86, 0.43876537918013814, 4.708740654814287],
    [new Date('2015/09/26 20:37:15'), 79, 0.46189287308558546, 5.947069861400747],
    [new Date('2015/09/26 20:37:26'), 75, 0.47561580696576683, 4.491141997150269],
    [new Date('2015/09/26 20:37:43'), 72, 0.4998875700456208, 5.139902769851427],
    [new Date('2015/09/26 20:38:01'), 70, 0.531581987300251, 6.338883450926039],
    [new Date('2015/09/26 20:38:18'), 75, 0.5641048293180873, 6.887190074365343],
    [new Date('2015/09/26 20:38:27'), 72, 0.5779486233809839, 5.537517625158621],
    [new Date('2015/09/26 20:38:38'), 73, 0.5945987878946145, 5.4491447499154875],
    [new Date('2015/09/26 20:38:41'), 71, 0.5985998511553824, 4.801275912921507],
    [new Date('2015/09/26 20:38:51'), 72, 0.613536646237811, 5.377246229674312],
    [new Date('2015/09/26 20:39:01'), 71, 0.6305263409878282, 6.1162901100062115],
    [new Date('2015/09/26 20:39:12'), 71, 0.6476438980353616, 5.602109579192742],
    [new Date('2015/09/26 20:39:24'), 73, 0.6660581861273502, 5.524286427596598],
    [new Date('2015/09/26 20:39:34'), 69, 0.6809967945511548, 5.377899032569664],
    [new Date('2015/09/26 20:39:43'), 67, 0.6909536504154433, 3.9827423457154274],
    [new Date('2015/09/26 20:39:56'), 65, 0.6932202624141723, 0.627677168878809],
    [new Date('2015/09/26 20:40:13'), 67, 0.7023467619841856, 1.9326704971792603],
    [new Date('2015/09/26 20:40:27'), 67, 0.7220890272922431, 5.076582507786224],
    [new Date('2015/09/26 20:40:47'), 71, 0.7486586598148823, 4.782533854075067],
    [new Date('2015/09/26 20:41:07'), 74, 0.7747782900719825, 4.701533446278037],
    [new Date('2015/09/26 20:41:26'), 70, 0.7913882773928743, 3.1471554923795058],
    [new Date('2015/09/26 20:41:47'), 67, 0.820156520874973, 4.931698882645488],
    [new Date('2015/09/26 20:42:07'), 67, 0.8464887437702953, 4.739800121158002],
    [new Date('2015/09/26 20:42:48'), 62, 0.8801060184047965, 2.9517606996147463],
    [new Date('2015/09/26 20:43:05'), 59, 0.9021714334212664, 4.672676121134804],
    [new Date('2015/09/26 20:43:27'), 54, 0.9255613511453883, 3.827441082129038],
    [new Date('2015/09/26 20:43:47'), 60, 0.9471803194357667, 3.89141429226812],
    [new Date('2015/09/26 20:44:26'), 57, 0.9653597129760786, 1.6780978652595575],
    [new Date('2015/09/26 20:44:49'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:45:10'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:45:37'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:48:03'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:48:15'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:48:50'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:49:33'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:50:14'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:50:58'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:51:47'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:52:33'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:54:24'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:56:20'), 57, 0.9653597129760786, 0.0],
    [new Date('2015/09/26 20:57:24'), 58, 0.9792119831647106, 0.779190198110553],
    [new Date('2015/09/26 20:58:24'), 57, 0.9792119831647106, 0.0],
    [new Date('2015/09/26 21:27:27'), 69, 1.0254254720047395, 0.09544954665754686],
    [new Date('2015/09/26 21:28:16'), 58, 1.0852227279460605, 4.3932677834439895],
    [new Date('2015/09/26 21:28:54'), 65, 1.123393395781364, 3.6161685317655983],
    [new Date('2015/09/26 21:29:17'), 64, 1.1491622242022719, 4.033381839794269],
    [new Date('2015/09/26 21:29:29'), 66, 1.1644225413808418, 4.578095153570968],
    [new Date('2015/09/26 21:29:46'), 67, 1.1823649717974785, 3.799573499993629],
    [new Date('2015/09/26 21:30:11'), 66, 1.2182688242886717, 5.170154758731831],
    [new Date('2015/09/26 21:30:18'), 66, 1.2292469740050243, 5.64590556840985],
    [new Date('2015/09/26 21:30:35'), 59, 1.2538969031786578, 5.219985001475355],
    [new Date('2015/09/26 21:30:41'), 59, 1.2618082482428863, 4.746807038537127],
    [new Date('2015/09/26 21:30:59'), 55, 1.274354301170173, 2.509210585457326],
    [new Date('2015/09/26 21:31:18'), 65, 1.2913824819325708, 3.2263921444543],
    [new Date('2015/09/26 21:31:41'), 66, 1.315400894016995, 3.7594036306055494],
    [new Date('2015/09/26 21:31:51'), 62, 1.3195044509981957, 1.4772805132322238],
    [new Date('2015/09/26 21:32:04'), 62, 1.3205794944917828, 0.2977043520702722],
    [new Date('2015/09/26 21:32:28'), 62, 1.3205794944917828, 0.0],
    [new Date('2015/09/26 21:33:23'), 62, 1.321133559226307, 0.03626605535066679],
    [new Date('2015/09/26 21:33:55'), 58, 1.3263181020683088, 0.5832610697251988],
    [new Date('2015/09/26 21:34:32'), 57, 1.328180132019548, 0.18117048174219222],
    [new Date('2015/09/26 21:35:08'), 58, 1.3300900368750277, 0.19099048554795453],
    [new Date('2015/09/26 21:36:34'), 58, 1.3310014493399926, 0.038152149696206596],
    [new Date('2015/09/26 21:38:08'), 58, 1.3315555140745168, 0.021219500471134824],
    [new Date('2015/09/26 21:39:03'), 55, 1.332663643543565, 0.07253211070133364],
    [new Date('2015/09/26 21:40:49'), 65, 1.336415481803348, 0.12742092203036398],
    [new Date('2015/09/26 21:41:50'), 66, 1.336415481803348, 0.0],
    [new Date('2015/09/26 21:44:45'), 62, 1.3379447051941118, 0.03145830975285286],
    [new Date('2015/09/26 21:46:45'), 59, 1.339982685421314, 0.061139406816067436],
    [new Date('2015/09/26 21:47:43'), 63, 1.3407662512833105, 0.04863512246875429],
    [new Date('2015/09/26 21:48:44'), 63, 1.3407662512833105, 0.0],
    [new Date('2015/09/26 21:49:45'), 63, 1.3416776637482755, 0.05378827662088144],
    [new Date('2015/09/26 21:50:43'), 65, 1.3420068272495989, 0.020430838013177927],
    [new Date('2015/09/26 21:51:43'), 66, 1.3420068272495989, 0.0],
    [new Date('2015/09/26 21:52:44'), 65, 1.343077663120412, 0.06319687106438712],
    [new Date('2015/09/26 21:54:43'), 66, 1.3436317278549361, 0.016761622220896416],
    [new Date('2015/09/26 21:55:50'), 65, 1.3436317278549361, 0.0],
    [new Date('2015/09/26 21:57:44'), 66, 1.3436317278549361, 0.0],
    [new Date('2015/09/26 21:58:47'), 66, 1.3441857925894602, 0.03166084197280434],
    [new Date('2015/09/26 22:00:46'), 67, 1.3447398573239844, 0.016761622220896416],
    [new Date('2015/09/26 22:02:46'), 68, 1.345523423185981, 0.023506975859897906],
    [new Date('2015/09/26 22:03:48'), 68, 1.3458525866873043, 0.019112719431682575],
    [new Date('2015/09/26 22:05:47'), 67, 1.3476828265289165, 0.05536860025045376],
    [new Date('2015/09/26 22:06:47'), 67, 1.3476828265289165, 0.0],
    [new Date('2015/09/26 22:09:44'), 67, 1.3476828265289165, 0.0],
    [new Date('2015/09/26 22:10:46'), 67, 1.3476828265289165, 0.0],
    [new Date('2015/09/26 22:13:47'), 68, 1.3481285160166092, 0.008864542296649465],
    [new Date('2015/09/26 22:14:46'), 68, 1.3481285160166092, 0.0],
    [new Date('2015/09/26 22:17:49'), 68, 1.3481285160166092, 0.0],
    [new Date('2015/09/26 22:18:47'), 68, 1.3481285160166092, 0.0],
    [new Date('2015/09/26 22:19:48'), 67, 1.3481285160166092, 0.0],
    [new Date('2015/09/26 22:20:48'), 67, 1.3481285160166092, 0.0],
    [new Date('2015/09/26 22:21:48'), 67, 1.3481285160166092, 0.0],
    [new Date('2015/09/26 22:26:50'), 67, 1.3481285160166092, 0.0],
    [new Date('2015/09/26 22:28:50'), 69, 1.3516481548918822, 0.10558916625819087],
    [new Date('2015/09/26 22:29:48'), 68, 1.3519773183932056, 0.020430838013177927],
    [new Date('2015/09/26 22:30:47'), 71, 1.3519773183932056, 0.0],
    [new Date('2015/09/26 22:31:48'), 71, 1.3519773183932056, 0.0],
    [new Date('2015/09/26 22:32:41'), 71, 1.352306481894529, 0.02235827556159094],
    [new Date('2015/09/26 22:33:44'), 71, 1.352306481894529, 0.0],
    [new Date('2015/09/26 22:36:46'), 69, 1.3526356453958523, 0.006510926399803955],
    [new Date('2015/09/26 22:38:48'), 70, 1.3544634169425565, 0.053934242361760386],
    [new Date('2015/09/26 22:40:49'), 69, 1.3544634169425565, 0.0],
    [new Date('2015/09/26 22:42:49'), 69, 1.3563254468937957, 0.05586089853717594],
    [new Date('2015/09/26 22:43:48'), 69, 1.3566546103951191, 0.02008455262312407],
    [new Date('2015/09/26 22:44:48'), 69, 1.3566546103951191, 0.0],
    [new Date('2015/09/26 22:45:46'), 69, 1.3566546103951191, 0.0],
    [new Date('2015/09/26 22:47:52'), 68, 1.357100299882812, 0.012733985362647245],
    [new Date('2015/09/26 22:48:48'), 68, 1.357100299882812, 0.0],
    [new Date('2015/09/26 22:49:49'), 68, 1.357100299882812, 0.0],
    [new Date('2015/09/26 22:50:49'), 68, 1.357100299882812, 0.0],
    [new Date('2015/09/26 22:52:47'), 69, 1.357100299882812, 0.0],
    [new Date('2015/09/26 22:55:50'), 69, 1.357100299882812, 0.0],
    [new Date('2015/09/26 22:56:50'), 69, 1.3575459893705046, 0.02674136926155922],
    [new Date('2015/09/26 22:57:50'), 69, 1.357875152871828, 0.01974981007940533],
    [new Date('2015/09/26 22:58:53'), 69, 1.357875152871828, 0.0],
    [new Date('2015/09/26 22:59:51'), 69, 1.357875152871828, 0.0],
    [new Date('2015/09/26 23:01:50'), 69, 1.3582043163731514, 0.009957887434994284],
    [new Date('2015/09/26 23:02:50'), 69, 1.3582043163731514, 0.0],
    [new Date('2015/09/26 23:03:52'), 68, 1.3587583811076756, 0.03217150071430118],
    [new Date('2015/09/26 23:05:51'), 68, 1.3587583811076756, 0.0],
    [new Date('2015/09/26 23:06:52'), 68, 1.3587583811076756, 0.0],
    [new Date('2015/09/26 23:08:52'), 68, 1.3587583811076756, 0.0],
    [new Date('2015/09/26 23:10:54'), 69, 1.3587583811076756, 0.0],
    [new Date('2015/09/26 23:13:53'), 69, 1.3587583811076756, 0.0],
    [new Date('2015/09/26 23:15:55'), 69, 1.3587583811076756, 0.0],
    [new Date('2015/09/26 23:16:54'), 69, 1.3587583811076756, 0.0],
    [new Date('2015/09/26 23:18:53'), 70, 1.3593124458421997, 0.016761622220896416],
    [new Date('2015/09/26 23:19:54'), 70, 1.3593124458421997, 0.0],
    [new Date('2015/09/26 23:20:55'), 70, 1.3593124458421997, 0.0],
    [new Date('2015/09/26 23:21:56'), 70, 1.3593124458421997, 0.0],
    [new Date('2015/09/26 23:22:52'), 70, 1.3593124458421997, 0.0],
    [new Date('2015/09/26 23:25:52'), 70, 1.3593124458421997, 0.0],
    [new Date('2015/09/26 23:26:54'), 70, 1.3598665105767238, 0.03217150071430118],
    [new Date('2015/09/26 23:27:53'), 71, 1.3598665105767238, 0.0],
    [new Date('2015/09/26 23:28:54'), 71, 1.3598665105767238, 0.0],
    [new Date('2015/09/26 23:30:56'), 70, 1.3598665105767238, 0.0],
    [new Date('2015/09/26 23:31:54'), 70, 1.3598665105767238, 0.0],
    [new Date('2015/09/26 23:32:51'), 70, 1.3598665105767238, 0.0],
    [new Date('2015/09/26 23:33:51'), 70, 1.3598665105767238, 0.0],
    [new Date('2015/09/26 23:34:52'), 70, 1.3598665105767238, 0.0],
    [new Date('2015/09/26 23:35:55'), 70, 1.3598665105767238, 0.0],
    [new Date('2015/09/26 23:36:55'), 70, 1.3598665105767238, 0.0],
    [new Date('2015/09/26 23:39:55'), 70, 1.360420575311248, 0.011081294690481518],
    [new Date('2015/09/26 23:40:57'), 70, 1.360420575311248, 0.0],
    [new Date('2015/09/26 23:41:59'), 70, 1.360420575311248, 0.0],
    [new Date('2015/09/26 23:43:02'), 70, 1.360974640045772, 0.03166084197280434],
    [new Date('2015/09/26 23:43:59'), 69, 1.360974640045772, 0.0],
  ];
  return var_array;
}

// npoint = 173


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

