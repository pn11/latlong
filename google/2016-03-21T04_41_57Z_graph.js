function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2016/03/21 13:41:57'), 45, 0.0, ],
    [new Date('2016/03/21 13:42:03'), 44, 0.007643164214973913, 4.585898528984347],
    [new Date('2016/03/21 13:42:06'), 44, 0.010537807408876007, 3.473571832682514],
    [new Date('2016/03/21 13:42:14'), 42, 0.02016642592209349, 4.332878330947867],
    [new Date('2016/03/21 13:42:22'), 42, 0.031066576406267747, 4.905067717878416],
    [new Date('2016/03/21 13:42:42'), 33, 0.06553771233897844, 6.204804467887926],
    [new Date('2016/03/21 13:42:56'), 36, 0.09109261778415022, 6.571261400187027],
    [new Date('2016/03/21 13:43:07'), 36, 0.1064966256139901, 5.041311653402144],
    [new Date('2016/03/21 13:43:19'), 35, 0.12154663459959242, 4.515002695680694],
    [new Date('2016/03/21 13:43:28'), 35, 0.13538618865289928, 5.535821621322748],
    [new Date('2016/03/21 13:43:33'), 32, 0.14566255859246915, 7.398986356490316],
    [new Date('2016/03/21 13:43:54'), 39, 0.1850770531197094, 6.756770490384041],
    [new Date('2016/03/21 13:44:02'), 34, 0.19953997197521778, 6.508313484978766],
    [new Date('2016/03/21 13:44:11'), 34, 0.21567793788444578, 6.455186363691202],
    [new Date('2016/03/21 13:44:35'), 35, 0.251342465277684, 5.3496791089857325],
    [new Date('2016/03/21 13:44:47'), 37, 0.27093345542523434, 5.877297044265098],
    [new Date('2016/03/21 13:45:02'), 39, 0.29363460315468404, 5.448275455067924],
    [new Date('2016/03/21 13:45:15'), 38, 0.3165487334455133, 6.34545146515272],
    [new Date('2016/03/21 13:45:26'), 39, 0.3354171058274008, 6.175103688617733],
    [new Date('2016/03/21 13:45:40'), 41, 0.3608556809817036, 6.541347896820727],
    [new Date('2016/03/21 13:45:57'), 44, 0.3879735731982604, 5.742612469388503],
    [new Date('2016/03/21 13:45:59'), 44, 0.391466172193819, 6.286678192005512],
    [new Date('2016/03/21 13:46:17'), 45, 0.41943780790433366, 5.594327142102933],
    [new Date('2016/03/21 13:46:31'), 48, 0.43958860134624805, 5.18163259934942],
    [new Date('2016/03/21 13:46:43'), 42, 0.4572298406977497, 5.292371805450485],
    [new Date('2016/03/21 13:47:41'), 41, 0.47126857720385434, 0.871369852103049],
    [new Date('2016/03/21 13:48:31'), 42, 0.48382506104806416, 0.9040668367831085],
    [new Date('2016/03/21 13:48:53'), 41, 0.5188786558095815, 5.736042779157382],
    [new Date('2016/03/21 13:49:20'), 49, 0.5651837832745532, 6.17401699532956],
    [new Date('2016/03/21 13:49:44'), 42, 0.6061821511762527, 6.149755185254922],
    [new Date('2016/03/21 13:49:58'), 37, 0.6262824730614834, 5.16865419905931],
    [new Date('2016/03/21 13:50:01'), 38, 0.6311332159533225, 5.8208914702068135],
    [new Date('2016/03/21 13:50:10'), 40, 0.6476456136769678, 6.604959089458117],
    [new Date('2016/03/21 13:50:24'), 36, 0.6886137990243929, 10.534676232195011],
    [new Date('2016/03/21 13:50:34'), 37, 0.7055350655733741, 6.091655957633227],
    [new Date('2016/03/21 13:50:44'), 37, 0.7222171939248535, 6.005566206532602],
    [new Date('2016/03/21 13:50:55'), 35, 0.7402884899882253, 5.914242348012567],
    [new Date('2016/03/21 13:51:04'), 40, 0.7568003408984678, 6.604740364097037],
    [new Date('2016/03/21 13:51:07'), 40, 0.762099430277604, 6.358907254963426],
    [new Date('2016/03/21 13:51:12'), 39, 0.7702905765414808, 5.897625309991312],
    [new Date('2016/03/21 13:51:22'), 34, 0.7856799236581582, 5.540164962003861],
    [new Date('2016/03/21 13:51:29'), 33, 0.7975435169238589, 6.101276536646096],
    [new Date('2016/03/21 13:51:40'), 35, 0.8183820191060559, 6.819873441446262],
    [new Date('2016/03/21 13:51:54'), 32, 0.8423829444491555, 6.171666516797049],
    [new Date('2016/03/21 13:52:08'), 36, 0.8662777359669225, 6.144374961711514],
    [new Date('2016/03/21 13:52:22'), 36, 0.8876552096582687, 5.497064663489033],
    [new Date('2016/03/21 13:52:36'), 31, 0.905434102012241, 4.571715176735721],
    [new Date('2016/03/21 13:52:55'), 37, 0.9295320777909633, 4.565932252810543],
    [new Date('2016/03/21 13:53:04'), 39, 0.945238213508944, 6.282454287192303],
    [new Date('2016/03/21 13:53:18'), 38, 0.9678889918258305, 5.824485852913679],
    [new Date('2016/03/21 13:53:35'), 40, 0.993564799918622, 5.437229949061711],
    [new Date('2016/03/21 13:53:46'), 41, 1.0092072830637735, 5.11935812023139],
    [new Date('2016/03/21 13:54:01'), 39, 1.0301085174281281, 5.016296247445124],
    [new Date('2016/03/21 13:54:15'), 38, 1.063976120060361, 8.708812105431297],
    [new Date('2016/03/21 13:54:37'), 36, 1.1021538835627729, 6.247270391303772],
    [new Date('2016/03/21 13:54:52'), 36, 1.124998557801511, 5.482721817297105],
    [new Date('2016/03/21 13:54:55'), 34, 1.1279380818608833, 3.527428871246808],
    [new Date('2016/03/21 13:55:00'), 35, 1.1385149405839698, 7.615338280622375],
    [new Date('2016/03/21 13:55:08'), 32, 1.1536164559787472, 6.795681927649778],
    [new Date('2016/03/21 13:55:19'), 37, 1.174727019531489, 6.908911708170019],
    [new Date('2016/03/21 13:55:34'), 37, 1.2021939337308178, 6.592059407838951],
    [new Date('2016/03/21 13:55:43'), 36, 1.215411122406797, 5.286875470391641],
    [new Date('2016/03/21 13:55:55'), 36, 1.233189506901243, 5.333515348333863],
    [new Date('2016/03/21 13:56:14'), 43, 1.2637881418451442, 5.797636094633898],
    [new Date('2016/03/21 13:56:20'), 38, 1.2717778470804602, 4.793823141189523],
    [new Date('2016/03/21 13:56:30'), 38, 1.2874997838883167, 5.6598972508283145],
    [new Date('2016/03/21 13:56:39'), 35, 1.2999043429356498, 4.961823618933313],
    [new Date('2016/03/21 13:56:55'), 31, 1.3273714214967962, 6.180092676257917],
    [new Date('2016/03/21 13:57:08'), 29, 1.3458696097969471, 5.122575221580274],
    [new Date('2016/03/21 13:57:21'), 27, 1.3659512812579222, 5.561078250731553],
    [new Date('2016/03/21 13:57:32'), 27, 1.384629678569884, 6.112930029369318],
    [new Date('2016/03/21 13:57:51'), 25, 1.4154368149928487, 5.83714163803541],
    [new Date('2016/03/21 13:58:04'), 26, 1.4368271668723318, 5.92348205893376],
    [new Date('2016/03/21 13:58:37'), 25, 1.4586766985932, 2.3835852786401808],
    [new Date('2016/03/21 13:58:43'), 21, 1.4664394227025135, 4.6576344655881226],
    [new Date('2016/03/21 13:58:59'), 20, 1.4899744212261476, 5.2953746678176765],
    [new Date('2016/03/21 13:59:25'), 21, 1.532491975172967, 5.8870459310980765],
    [new Date('2016/03/21 13:59:43'), 20, 1.56734032296523, 6.969669558452606],
    [new Date('2016/03/21 13:59:51'), 19, 1.581217665156619, 6.244803986125028],
    [new Date('2016/03/21 13:59:56'), 17, 1.5903307990867, 6.5614564296582865],
    [new Date('2016/03/21 14:00:11'), 19, 1.6146254292807007, 5.830711246560168],
    [new Date('2016/03/21 14:00:26'), 23, 1.642382878714205, 6.661787864041038],
    [new Date('2016/03/21 14:00:43'), 19, 1.6729955267581764, 6.482678409311622],
    [new Date('2016/03/21 14:00:56'), 16, 1.6974431657503806, 6.770115413225773],
    [new Date('2016/03/21 14:00:59'), 16, 1.70263640895568, 6.231891846359236],
    [new Date('2016/03/21 14:01:09'), 19, 1.7209380673676942, 6.5885970283251085],
    [new Date('2016/03/21 14:01:20'), 19, 1.7379816182016061, 5.57788936382574],
    [new Date('2016/03/21 14:01:31'), 19, 1.7550571896469505, 5.588368836658174],
    [new Date('2016/03/21 14:01:35'), 19, 1.7581052863250841, 2.74328701032035],
    [new Date('2016/03/21 14:01:43'), 23, 1.770666443285786, 5.652520632315857],
    [new Date('2016/03/21 14:01:55'), 26, 1.789302979990352, 5.590961011369774],
    [new Date('2016/03/21 14:02:12'), 32, 1.819977651148917, 6.495812715931398],
    [new Date('2016/03/21 14:02:31'), 35, 1.8566500944826887, 6.948462947451485],
    [new Date('2016/03/21 14:02:48'), 34, 1.884772873205665, 5.955411964865577],
    [new Date('2016/03/21 14:02:49'), 34, 1.8867340911120751, 7.060384463076793],
    [new Date('2016/03/21 14:02:58'), 36, 1.900146241601632, 5.36486019582271],
    [new Date('2016/03/21 14:03:09'), 38, 1.9159389447444914, 5.168521028572242],
    [new Date('2016/03/21 14:03:19'), 39, 1.931790141165886, 5.706430711702059],
    [new Date('2016/03/21 14:03:29'), 39, 1.9489989714553677, 6.195178904213395],
    [new Date('2016/03/21 14:03:41'), 44, 1.9698543649823752, 6.25661805810227],
    [new Date('2016/03/21 14:03:50'), 45, 1.9857266231000792, 6.348903247081619],
    [new Date('2016/03/21 14:04:05'), 46, 2.0108478587874585, 6.029096564971083],
    [new Date('2016/03/21 14:04:32'), 54, 2.06054500738493, 6.62628647966286],
    [new Date('2016/03/21 14:04:47'), 42, 2.072180366809937, 2.792486262001729],
    [new Date('2016/03/21 14:06:09'), 62, 2.202850952675373, 5.736757428238661],
    [new Date('2016/03/21 14:06:53'), 61, 2.2704706222702544, 5.5325184213993825],
    [new Date('2016/03/21 14:07:04'), 66, 2.282681878362201, 3.9964110846370957],
    [new Date('2016/03/21 14:07:38'), 67, 2.3016018612198157, 2.0032923025709883],
  ];
  return var_array;
}

// npoint = 108


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

