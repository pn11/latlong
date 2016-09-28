function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2015/11/07 02:40:42'), 212, 0.0],
    [new Date('2015/11/07 02:40:46'), 212, 0.0],
    [new Date('2015/11/07 02:40:48'), 214, 0.02146114895864167],
    [new Date('2015/11/07 02:40:50'), 242, 0.027405869739175352],
    [new Date('2015/11/07 02:40:51'), 248, 0.040128794884033925],
    [new Date('2015/11/07 02:40:52'), 235, 0.048745924015417504],
    [new Date('2015/11/07 02:40:53'), 221, 0.05976348091699412],
    [new Date('2015/11/07 02:40:56'), 209, 0.0632496109331236],
    [new Date('2015/11/07 02:40:57'), 133, 0.08678499309720217],
    [new Date('2015/11/07 02:40:58'), 146, 0.08976418040561417],
    [new Date('2015/11/07 02:40:59'), 174, 0.10121336206757134],
    [new Date('2015/11/07 02:41:02'), 181, 0.10976580857183275],
    [new Date('2015/11/07 02:41:03'), 180, 0.11303680617151016],
    [new Date('2015/11/07 02:41:05'), 184, 0.12013547738389306],
    [new Date('2015/11/07 02:41:06'), 184, 0.12312827180993634],
    [new Date('2015/11/07 02:41:09'), 188, 0.13239662603853697],
    [new Date('2015/11/07 02:41:10'), 188, 0.1353468811210365],
    [new Date('2015/11/07 02:41:14'), 190, 0.14488694573858246],
    [new Date('2015/11/07 02:41:15'), 191, 0.14701168700325737],
    [new Date('2015/11/07 02:41:19'), 193, 0.15620570540505033],
    [new Date('2015/11/07 02:41:20'), 192, 0.15900198115418862],
    [new Date('2015/11/07 02:41:22'), 191, 0.16594634295131896],
    [new Date('2015/11/07 02:41:23'), 192, 0.16963630348396783],
    [new Date('2015/11/07 02:41:25'), 191, 0.17678251309450863],
    [new Date('2015/11/07 02:41:26'), 191, 0.18030855947349336],
    [new Date('2015/11/07 02:41:29'), 189, 0.19002585406308792],
    [new Date('2015/11/07 02:41:30'), 189, 0.192718497347957],
    [new Date('2015/11/07 02:41:34'), 189, 0.20238408525003937],
    [new Date('2015/11/07 02:41:35'), 187, 0.20508175369004483],
    [new Date('2015/11/07 02:41:38'), 185, 0.2136537088982192],
    [new Date('2015/11/07 02:41:39'), 184, 0.21632784582437514],
    [new Date('2015/11/07 02:41:42'), 182, 0.22520814595542868],
    [new Date('2015/11/07 02:41:43'), 183, 0.2286994521140022],
    [new Date('2015/11/07 02:41:45'), 181, 0.23623075330642146],
    [new Date('2015/11/07 02:41:46'), 182, 0.24044181682238025],
    [new Date('2015/11/07 02:41:48'), 182, 0.24920544089100177],
    [new Date('2015/11/07 02:41:49'), 182, 0.2527199453523446],
    [new Date('2015/11/07 02:41:51'), 182, 0.2595720300420469],
    [new Date('2015/11/07 02:41:52'), 181, 0.2628388845145394],
    [new Date('2015/11/07 02:41:55'), 180, 0.27081331900065664],
    [new Date('2015/11/07 02:41:56'), 181, 0.27306394059162065],
    [new Date('2015/11/07 02:42:00'), 180, 0.2820824598913562],
    [new Date('2015/11/07 02:42:01'), 179, 0.2846533090208878],
    [new Date('2015/11/07 02:42:04'), 178, 0.29362414680371274],
    [new Date('2015/11/07 02:42:05'), 178, 0.29671197415204487],
    [new Date('2015/11/07 02:42:08'), 178, 0.30519924508854546],
    [new Date('2015/11/07 02:42:09'), 180, 0.30796304266571106],
    [new Date('2015/11/07 02:42:14'), 179, 0.31695850563428896],
    [new Date('2015/11/07 02:42:15'), 180, 0.31843056956363097],
    [new Date('2015/11/07 02:42:39'), 184, 0.32647658067694646],
    [new Date('2015/11/07 02:42:40'), 183, 0.33970196436580924],
    [new Date('2015/11/07 02:42:41'), 181, 0.34578778121522485],
    [new Date('2015/11/07 02:42:42'), 182, 0.35195319314145185],
    [new Date('2015/11/07 02:42:43'), 183, 0.3582847795084926],
    [new Date('2015/11/07 02:42:44'), 183, 0.36482401378972534],
    [new Date('2015/11/07 02:42:44'), 183, 0.36482401378972534],
    [new Date('2015/11/07 02:42:45'), 185, 0.3759500322875764],
    [new Date('2015/11/07 02:42:46'), 188, 0.3846950915203267],
    [new Date('2015/11/07 02:42:47'), 188, 0.39336028552555435],
    [new Date('2015/11/07 02:42:48'), 186, 0.40314886499231267],
    [new Date('2015/11/07 02:42:49'), 185, 0.4138247119987108],
    [new Date('2015/11/07 02:42:50'), 183, 0.42364368370329175],
    [new Date('2015/11/07 02:42:51'), 182, 0.43282197574180475],
    [new Date('2015/11/07 02:42:51'), 182, 0.43282197574180475],
    [new Date('2015/11/07 02:42:52'), 182, 0.4431474313169289],
    [new Date('2015/11/07 02:42:53'), 182, 0.451530875243988],
    [new Date('2015/11/07 02:42:54'), 179, 0.45995407427069585],
    [new Date('2015/11/07 02:42:54'), 179, 0.45995407427069585],
    [new Date('2015/11/07 02:42:55'), 178, 0.4702084551194216],
    [new Date('2015/11/07 02:42:55'), 178, 0.4702084551194216],
    [new Date('2015/11/07 02:42:56'), 178, 0.48044873817031614],
    [new Date('2015/11/07 02:42:56'), 178, 0.48044873817031614],
    [new Date('2015/11/07 02:42:57'), 178, 0.49061735118878086],
    [new Date('2015/11/07 02:42:57'), 178, 0.49061735118878086],
    [new Date('2015/11/07 02:42:58'), 176, 0.5008355674919454],
    [new Date('2015/11/07 02:42:59'), 175, 0.5097791887818951],
    [new Date('2015/11/07 02:43:00'), 174, 0.5207441712974477],
    [new Date('2015/11/07 02:43:00'), 174, 0.5207441712974477],
    [new Date('2015/11/07 02:43:01'), 173, 0.5315574135930298],
    [new Date('2015/11/07 02:43:01'), 173, 0.5315574135930298],
    [new Date('2015/11/07 02:43:02'), 174, 0.5418754337019868],
    [new Date('2015/11/07 02:43:03'), 173, 0.5517026778859514],
    [new Date('2015/11/07 02:43:04'), 172, 0.5615262462724492],
    [new Date('2015/11/07 02:43:05'), 172, 0.5707163356063696],
    [new Date('2015/11/07 02:43:06'), 172, 0.5807885953194839],
    [new Date('2015/11/07 02:43:07'), 169, 0.5898873516934049],
    [new Date('2015/11/07 02:43:08'), 168, 0.5994151047120331],
    [new Date('2015/11/07 02:43:09'), 168, 0.6094446937312542],
    [new Date('2015/11/07 02:43:10'), 168, 0.6199013569753641],
    [new Date('2015/11/07 02:43:11'), 168, 0.6296149341606185],
    [new Date('2015/11/07 02:43:12'), 167, 0.6397808830299563],
    [new Date('2015/11/07 02:43:13'), 164, 0.6493817986358212],
    [new Date('2015/11/07 02:43:14'), 164, 0.658829135190885],
    [new Date('2015/11/07 02:43:15'), 161, 0.6682606891087443],
    [new Date('2015/11/07 02:43:16'), 160, 0.6773380851210361],
    [new Date('2015/11/07 02:43:17'), 158, 0.6848188643168627],
    [new Date('2015/11/07 02:43:18'), 158, 0.6901856764356874],
    [new Date('2015/11/07 02:43:26'), 149, 0.6997153245817374],
    [new Date('2015/11/07 02:43:27'), 149, 0.702738137757279],
    [new Date('2015/11/07 02:43:29'), 148, 0.7120113616096215],
    [new Date('2015/11/07 02:43:30'), 148, 0.7197256648428356],
    [new Date('2015/11/07 02:43:31'), 148, 0.7263151037946246],
    [new Date('2015/11/07 02:43:32'), 147, 0.7365650811644473],
    [new Date('2015/11/07 02:43:32'), 147, 0.7365650811644473],
    [new Date('2015/11/07 02:43:33'), 147, 0.7477404930952142],
    [new Date('2015/11/07 02:43:34'), 146, 0.7575078341682184],
    [new Date('2015/11/07 02:43:35'), 145, 0.7684088129627769],
    [new Date('2015/11/07 02:43:35'), 145, 0.7684088129627769],
    [new Date('2015/11/07 02:43:36'), 146, 0.7805343671599666],
    [new Date('2015/11/07 02:43:36'), 146, 0.7805343671599666],
    [new Date('2015/11/07 02:43:37'), 144, 0.7915552016332063],
    [new Date('2015/11/07 02:43:37'), 144, 0.7915552016332063],
    [new Date('2015/11/07 02:43:38'), 144, 0.8030225072046622],
    [new Date('2015/11/07 02:43:38'), 144, 0.8030225072046622],
    [new Date('2015/11/07 02:43:39'), 142, 0.8144060452435065],
    [new Date('2015/11/07 02:43:39'), 142, 0.8144060452435065],
    [new Date('2015/11/07 02:43:40'), 141, 0.8274225785696756],
    [new Date('2015/11/07 02:43:40'), 141, 0.8274225785696756],
    [new Date('2015/11/07 02:43:41'), 140, 0.8407119816895964],
    [new Date('2015/11/07 02:43:41'), 140, 0.8407119816895964],
    [new Date('2015/11/07 02:43:42'), 139, 0.8534943799305418],
    [new Date('2015/11/07 02:43:42'), 139, 0.8534943799305418],
    [new Date('2015/11/07 02:43:43'), 138, 0.8660942926955899],
    [new Date('2015/11/07 02:43:43'), 138, 0.8660942926955899],
    [new Date('2015/11/07 02:43:44'), 136, 0.8778100782660456],
    [new Date('2015/11/07 02:43:44'), 136, 0.8778100782660456],
    [new Date('2015/11/07 02:43:45'), 136, 0.8908957937607368],
    [new Date('2015/11/07 02:43:45'), 136, 0.8908957937607368],
    [new Date('2015/11/07 02:43:46'), 134, 0.9030354876828488],
    [new Date('2015/11/07 02:43:46'), 134, 0.9030354876828488],
    [new Date('2015/11/07 02:43:47'), 133, 0.9155104514515418],
    [new Date('2015/11/07 02:43:47'), 133, 0.9155104514515418],
    [new Date('2015/11/07 02:43:48'), 133, 0.9285816690639483],
    [new Date('2015/11/07 02:43:48'), 133, 0.9285816690639483],
    [new Date('2015/11/07 02:43:49'), 133, 0.9406982844068476],
    [new Date('2015/11/07 02:43:49'), 133, 0.9406982844068476],
    [new Date('2015/11/07 02:43:50'), 134, 0.95322489110246],
    [new Date('2015/11/07 02:43:50'), 134, 0.95322489110246],
    [new Date('2015/11/07 02:43:51'), 133, 0.9654877962422225],
    [new Date('2015/11/07 02:43:51'), 133, 0.9654877962422225],
    [new Date('2015/11/07 02:43:52'), 135, 0.979513663796584],
    [new Date('2015/11/07 02:43:52'), 135, 0.979513663796584],
    [new Date('2015/11/07 02:43:53'), 135, 0.992496511014955],
    [new Date('2015/11/07 02:43:53'), 135, 0.992496511014955],
    [new Date('2015/11/07 02:43:54'), 132, 1.0057106252508194],
    [new Date('2015/11/07 02:43:54'), 132, 1.0057106252508194],
    [new Date('2015/11/07 02:43:55'), 132, 1.0166558272646682],
    [new Date('2015/11/07 02:43:55'), 132, 1.0166558272646682],
    [new Date('2015/11/07 02:43:56'), 131, 1.0289639309254885],
    [new Date('2015/11/07 02:43:56'), 131, 1.0289639309254885],
    [new Date('2015/11/07 02:43:57'), 131, 1.040973512883869],
    [new Date('2015/11/07 02:43:57'), 131, 1.040973512883869],
    [new Date('2015/11/07 02:43:58'), 131, 1.052481689036546],
    [new Date('2015/11/07 02:43:58'), 131, 1.052481689036546],
    [new Date('2015/11/07 02:43:59'), 132, 1.0637744440006967],
    [new Date('2015/11/07 02:43:59'), 132, 1.0637744440006967],
    [new Date('2015/11/07 02:44:00'), 132, 1.0749595469972513],
    [new Date('2015/11/07 02:44:00'), 132, 1.0749595469972513],
    [new Date('2015/11/07 02:44:01'), 132, 1.0857594210388635],
    [new Date('2015/11/07 02:44:02'), 130, 1.094044277393522],
    [new Date('2015/11/07 02:44:03'), 129, 1.101314494988116],
    [new Date('2015/11/07 02:44:04'), 128, 1.1086033176227568],
    [new Date('2015/11/07 02:44:05'), 126, 1.1154210558070012],
    [new Date('2015/11/07 02:44:06'), 128, 1.1206498191479468],
    [new Date('2015/11/07 02:44:07'), 128, 1.1265165679893734],
    [new Date('2015/11/07 02:44:09'), 129, 1.1352248972419667],
    [new Date('2015/11/07 02:44:10'), 129, 1.1400457661444003],
    [new Date('2015/11/07 02:44:13'), 128, 1.1488453763845177],
    [new Date('2015/11/07 02:44:14'), 127, 1.1515093647468289],
    [new Date('2015/11/07 02:44:27'), 126, 1.1613338522116265],
    [new Date('2015/11/07 02:44:28'), 126, 1.1615238948477231],
    [new Date('2015/11/07 02:45:28'), 125, 1.1712356127972088],
    [new Date('2015/11/07 02:45:29'), 125, 1.1772362673384982],
    [new Date('2015/11/07 02:45:30'), 124, 1.186165238124788],
    [new Date('2015/11/07 02:45:31'), 124, 1.1927375268758444],
    [new Date('2015/11/07 02:45:32'), 123, 1.20169275048826],
    [new Date('2015/11/07 02:45:33'), 122, 1.2094134884020669],
    [new Date('2015/11/07 02:45:34'), 121, 1.218624186643924],
    [new Date('2015/11/07 02:45:35'), 118, 1.2289679892798493],
    [new Date('2015/11/07 02:45:36'), 117, 1.2385269638557281],
    [new Date('2015/11/07 02:45:37'), 117, 1.2475639857790388],
    [new Date('2015/11/07 02:45:38'), 116, 1.256471695875652],
    [new Date('2015/11/07 02:45:39'), 115, 1.2651649781036687],
    [new Date('2015/11/07 02:45:40'), 113, 1.2740797807306299],
    [new Date('2015/11/07 02:45:41'), 113, 1.283884028570576],
    [new Date('2015/11/07 02:45:42'), 111, 1.2917873806450393],
    [new Date('2015/11/07 02:45:43'), 111, 1.2983946085828608],
    [new Date('2015/11/07 02:45:45'), 109, 1.3062262331047891],
    [new Date('2015/11/07 02:45:46'), 108, 1.3105972137350081],
    [new Date('2015/11/07 02:46:29'), 95, 1.319440324596186],
    [new Date('2015/11/07 02:46:30'), 95, 1.321698955541969],
    [new Date('2015/11/07 02:46:32'), 96, 1.3310129837193947],
    [new Date('2015/11/07 02:46:33'), 95, 1.3365061693209446],
    [new Date('2015/11/07 02:46:34'), 93, 1.3431359068497981],
    [new Date('2015/11/07 02:46:35'), 92, 1.3487009445433662],
    [new Date('2015/11/07 02:46:36'), 91, 1.357640021694845],
    [new Date('2015/11/07 02:46:37'), 92, 1.3691474132437267],
    [new Date('2015/11/07 02:46:37'), 92, 1.3691474132437267],
    [new Date('2015/11/07 02:46:38'), 92, 1.3799844268934058],
    [new Date('2015/11/07 02:46:39'), 90, 1.389916768508277],
    [new Date('2015/11/07 02:46:40'), 89, 1.3995991564020092],
    [new Date('2015/11/07 02:46:40'), 89, 1.3995991564020092],
    [new Date('2015/11/07 02:46:41'), 89, 1.409950812109522],
    [new Date('2015/11/07 02:46:41'), 89, 1.409950812109522],
    [new Date('2015/11/07 02:46:42'), 89, 1.422418536040237],
    [new Date('2015/11/07 02:46:43'), 92, 1.4301193675670043],
    [new Date('2015/11/07 02:46:44'), 91, 1.4423620079957769],
    [new Date('2015/11/07 02:46:44'), 91, 1.4423620079957769],
    [new Date('2015/11/07 02:46:45'), 90, 1.4531727450029224],
    [new Date('2015/11/07 02:46:45'), 90, 1.4531727450029224],
    [new Date('2015/11/07 02:46:46'), 91, 1.4643360312706761],
    [new Date('2015/11/07 02:46:47'), 91, 1.4741504041404283],
    [new Date('2015/11/07 02:46:48'), 91, 1.4869786340029227],
    [new Date('2015/11/07 02:46:48'), 91, 1.4869786340029227],
    [new Date('2015/11/07 02:46:49'), 91, 1.4982925570350623],
    [new Date('2015/11/07 02:46:51'), 92, 1.5030701548240986],
    [new Date('2015/11/07 02:46:52'), 91, 1.50967259813443],
    [new Date('2015/11/07 02:46:53'), 93, 1.5186529924739092],
    [new Date('2015/11/07 02:46:54'), 93, 1.5254700684525102],
    [new Date('2015/11/07 02:46:55'), 96, 1.5354269243167988],
    [new Date('2015/11/07 02:46:56'), 97, 1.5435588840235162],
    [new Date('2015/11/07 02:46:57'), 96, 1.55294533588364],
    [new Date('2015/11/07 02:46:58'), 95, 1.5581098122666075],
    [new Date('2015/11/07 02:46:59'), 95, 1.5669248001795024],
    [new Date('2015/11/07 02:47:00'), 94, 1.5755497842508033],
    [new Date('2015/11/07 02:47:01'), 94, 1.582040512362733],
    [new Date('2015/11/07 02:47:02'), 94, 1.5896005316810515],
    [new Date('2015/11/07 02:47:04'), 96, 1.598668473365755],
    [new Date('2015/11/07 02:47:05'), 94, 1.6023949569976814],
    [new Date('2015/11/07 02:47:06'), 94, 1.6080676580606001],
    [new Date('2015/11/07 02:47:07'), 92, 1.6130087665991086],
    [new Date('2015/11/07 02:47:09'), 93, 1.6221939422346967],
    [new Date('2015/11/07 02:47:10'), 94, 1.6272255879572892],
    [new Date('2015/11/07 02:50:09'), 94, 1.6372145839686487],
    [new Date('2015/11/07 02:50:10'), 92, 1.6380152478261678],
    [new Date('2015/11/07 02:53:09'), 89, 1.6438201094005458],
  ];
  return var_array;
}

// npoint = 236


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

