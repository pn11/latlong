function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2016/03/20 13:01:49'), 28, 0.0, ],
    [new Date('2016/03/20 13:01:59'), 28, 0.013165168466909884, 4.739460648087559],
    [new Date('2016/03/20 13:02:14'), 28, 0.01706104250688773, 0.935009769594684],
    [new Date('2016/03/20 13:02:27'), 26, 0.028606034890778766, 3.1970748140005933],
    [new Date('2016/03/20 13:02:44'), 24, 0.05256705028115213, 5.074097376784948],
    [new Date('2016/03/20 13:02:58'), 28, 0.07204387096176879, 5.0083253178728535],
    [new Date('2016/03/20 13:03:15'), 26, 0.07933021566921422, 1.5429906439296215],
    [new Date('2016/03/20 13:03:28'), 26, 0.09544438565597732, 4.462385534795933],
    [new Date('2016/03/20 13:03:52'), 24, 0.12908756863072024, 5.046477446211435],
    [new Date('2016/03/20 13:04:11'), 25, 0.16008112801828828, 5.8724638839602585],
    [new Date('2016/03/20 13:04:26'), 22, 0.18032624436301686, 4.8588279227348625],
    [new Date('2016/03/20 13:04:34'), 24, 0.1891978979040749, 3.9922440934761227],
    [new Date('2016/03/20 13:04:39'), 24, 0.19391271744203015, 3.3946700673277865],
    [new Date('2016/03/20 13:04:52'), 27, 0.21267070541875893, 5.194519747401821],
    [new Date('2016/03/20 13:05:09'), 22, 0.24567553647283644, 6.989258340863471],
    [new Date('2016/03/20 13:05:17'), 17, 0.25401145727382685, 3.751164360445679],
    [new Date('2016/03/20 13:05:25'), 22, 0.26790570561416005, 6.252411753149954],
    [new Date('2016/03/20 13:05:36'), 25, 0.2828702811181882, 4.897497437681934],
    [new Date('2016/03/20 13:05:55'), 25, 0.30675675811750036, 4.525858799869675],
    [new Date('2016/03/20 13:06:04'), 23, 0.32102451832091994, 5.707104081367838],
    [new Date('2016/03/20 13:06:18'), 23, 0.34148920732873045, 5.262348602008417],
    [new Date('2016/03/20 13:06:35'), 27, 0.358237236906888, 3.546641557727489],
    [new Date('2016/03/20 13:06:55'), 27, 0.390067676533231, 5.729479132741735],
    [new Date('2016/03/20 13:07:14'), 25, 0.4134778517031005, 4.435612137448958],
    [new Date('2016/03/20 13:07:25'), 26, 0.42797350871352263, 4.744033203410886],
    [new Date('2016/03/20 13:07:35'), 26, 0.44195650184392815, 5.033877526945986],
    [new Date('2016/03/20 13:07:47'), 26, 0.45657311574757964, 4.384984171095441],
    [new Date('2016/03/20 13:08:01'), 29, 0.4765955753438466, 5.148632467611504],
    [new Date('2016/03/20 13:08:14'), 23, 0.4953321312548581, 5.188584713818558],
    [new Date('2016/03/20 13:08:29'), 23, 0.5184637240321629, 5.551582266553159],
    [new Date('2016/03/20 13:08:43'), 23, 0.5334261876214109, 3.8474906372352105],
    [new Date('2016/03/20 13:08:55'), 27, 0.5522864232671162, 5.658070693711582],
    [new Date('2016/03/20 13:09:10'), 29, 0.572370342684784, 4.820140660240288],
    [new Date('2016/03/20 13:09:25'), 27, 0.5992863785147747, 6.459848599197761],
    [new Date('2016/03/20 13:09:39'), 25, 0.6241776113415172, 6.400602726876642],
    [new Date('2016/03/20 13:09:51'), 22, 0.6459690058155504, 6.53741834220998],
    [new Date('2016/03/20 13:10:09'), 22, 0.6706624851648738, 4.938695869864683],
    [new Date('2016/03/20 13:10:20'), 22, 0.6903339635732367, 6.437938388191495],
    [new Date('2016/03/20 13:10:31'), 23, 0.7083559783991644, 5.898113943030889],
    [new Date('2016/03/20 13:10:52'), 22, 0.738924204974288, 5.240267412878334],
    [new Date('2016/03/20 13:11:03'), 23, 0.7501479885577487, 3.6732382636780514],
    [new Date('2016/03/20 13:11:17'), 24, 0.773448951793948, 5.991676260736984],
    [new Date('2016/03/20 13:11:34'), 21, 0.8011084807030324, 5.857312004276692],
    [new Date('2016/03/20 13:12:04'), 25, 0.8311583622148281, 3.6059857814154856],
    [new Date('2016/03/20 13:12:21'), 24, 0.854530516126265, 4.949397298892525],
    [new Date('2016/03/20 13:12:42'), 28, 0.8822386412276825, 4.749964303100144],
    [new Date('2016/03/20 13:12:58'), 30, 0.9044333919158358, 4.993818904834512],
    [new Date('2016/03/20 13:13:16'), 30, 0.93045188762661, 5.20369914215483],
    [new Date('2016/03/20 13:13:30'), 34, 0.9523253740044999, 5.624610782885966],
    [new Date('2016/03/20 13:13:46'), 34, 0.9799822913066566, 6.222806392985262],
    [new Date('2016/03/20 13:14:08'), 38, 1.0148251976681157, 5.701566495511495],
    [new Date('2016/03/20 13:14:23'), 35, 1.036941498749424, 5.307912259514014],
    [new Date('2016/03/20 13:14:30'), 29, 1.0447401965094416, 4.010758848009018],
    [new Date('2016/03/20 13:14:47'), 34, 1.07517877445543, 6.445816506209297],
    [new Date('2016/03/20 13:14:53'), 36, 1.083187668104198, 4.805336189260829],
    [new Date('2016/03/20 13:15:04'), 34, 1.0988341912214505, 5.120680292919019],
    [new Date('2016/03/20 13:15:17'), 40, 1.1193693511299871, 5.68665966697934],
    [new Date('2016/03/20 13:15:22'), 39, 1.1263247558367218, 5.007891388848876],
    [new Date('2016/03/20 13:15:37'), 40, 1.148526421221087, 5.3283996922476975],
    [new Date('2016/03/20 13:15:47'), 38, 1.1611030230426995, 4.527576655780489],
    [new Date('2016/03/20 13:15:57'), 40, 1.1731931555794024, 4.352447713213036],
    [new Date('2016/03/20 13:16:20'), 38, 1.2097372229241685, 5.7199409757025075],
    [new Date('2016/03/20 13:16:35'), 33, 1.2394574852016926, 7.13286294660578],
    [new Date('2016/03/20 13:16:48'), 33, 1.26210846282765, 6.272578419495883],
    [new Date('2016/03/20 13:17:00'), 27, 1.273557644489607, 3.434754498587151],
    [new Date('2016/03/20 13:17:12'), 24, 1.29926613578494, 7.712547388599896],
    [new Date('2016/03/20 13:17:26'), 32, 1.318427485558168, 4.927204227401486],
    [new Date('2016/03/20 13:17:39'), 36, 1.33590675967926, 4.840414371994724],
    [new Date('2016/03/20 13:23:09'), 26, 1.8655903021998093, 5.778365918405992],
    [new Date('2016/03/20 13:23:33'), 33, 1.9074768158104909, 6.2829770416022335],
    [new Date('2016/03/20 13:23:39'), 35, 1.9187479624217558, 6.762687966758997],
    [new Date('2016/03/20 13:23:50'), 35, 1.9377842687130125, 6.230063877138563],
    [new Date('2016/03/20 13:24:12'), 41, 1.9735730109541376, 5.856339639456829],
    [new Date('2016/03/20 13:24:28'), 44, 1.9990216997569321, 5.7259549806287735],
    [new Date('2016/03/20 13:24:38'), 39, 2.0182376323373976, 6.917735728967519],
    [new Date('2016/03/20 13:24:56'), 47, 2.0450770760275785, 5.367888738036201],
    [new Date('2016/03/20 13:25:03'), 48, 2.054087582425421, 4.633974718890565],
    [new Date('2016/03/20 13:25:54'), 42, 2.11909938777541, 4.589068612940364],
    [new Date('2016/03/20 13:26:11'), 50, 2.1459272228182793, 5.681188597313573],
    [new Date('2016/03/20 13:26:17'), 50, 2.153987809035086, 4.836351730083897],
    [new Date('2016/03/20 13:26:28'), 50, 2.1767322686093853, 7.443641315225212],
    [new Date('2016/03/20 13:26:37'), 53, 2.189416101967029, 5.073533343057482],
    [new Date('2016/03/20 13:26:56'), 55, 2.214289191170961, 4.712795849165985],
    [new Date('2016/03/20 13:27:25'), 75, 2.2591732628586363, 5.571815795711442],
    [new Date('2016/03/20 13:27:46'), 60, 2.301612915299755, 7.27536898990607],
    [new Date('2016/03/20 13:27:55'), 57, 2.3111770835595684, 3.825667303925262],
    [new Date('2016/03/20 13:28:06'), 62, 2.31804101738142, 2.2463783416968663],
    [new Date('2016/03/20 13:28:16'), 66, 2.3355821688833127, 6.31481454068136],
    [new Date('2016/03/20 13:55:31'), 57, 2.364160373316565, 0.06292448682550889],
    [new Date('2016/03/20 14:01:19'), 59, 2.3662313149308365, 0.021423533940740282],
    [new Date('2016/03/20 14:07:44'), 58, 2.3690596959311425, 0.026447198963899445],
    [new Date('2016/03/20 14:08:45'), 77, 2.3744147183966784, 0.31603411272014625],
    [new Date('2016/03/20 14:10:53'), 77, 2.3755228478657266, 0.031166141316979295],
    [new Date('2016/03/20 14:13:38'), 70, 2.377747239891478, 0.04853218965275725],
  ];
  return var_array;
}

// npoint = 94


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

