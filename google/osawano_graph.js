function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('0.0'), 81.5, 0.0],
    [new Date('0.0'), 81.5, 0.006508093245727693],
    [new Date('0.0'), 81.7, 0.03035257550352688],
    [new Date('0.0'), 81.1, 0.08057221858199579],
    [new Date('0.0'), 81.1, 0.10297751195272123],
    [new Date('0.0'), 81.6, 0.12413421700112642],
    [new Date('0.0'), 80.9, 0.2067908578766087],
    [new Date('0.0'), 80.9, 0.222006141792995],
    [new Date('0.0'), 80.6, 0.26906616305037945],
    [new Date('0.0'), 80.4, 0.31586153335305367],
    [new Date('0.0'), 80.6, 0.3571224550625463],
    [new Date('0.0'), 80.6, 0.3734074568296314],
    [new Date('0.0'), 80.9, 0.42051580261242094],
    [new Date('0.0'), 80.9, 0.46960661494178246],
    [new Date('0.0'), 80.6, 0.4798895724394166],
    [new Date('0.0'), 81.0, 0.5269442212415912],
    [new Date('0.0'), 81.1, 0.5537516869541591],
    [new Date('0.0'), 81.2, 0.593972764100655],
    [new Date('0.0'), 81.1, 0.6554198994321052],
    [new Date('0.0'), 81.2, 0.7012743560909976],
    [new Date('0.0'), 81.2, 0.7080322358893795],
    [new Date('0.0'), 81.2, 0.7403910059822817],
    [new Date('0.0'), 81.2, 0.7571950095925717],
    [new Date('0.0'), 81.2, 0.7738998545966255],
    [new Date('0.0'), 81.4, 0.8633013826594995],
    [new Date('0.0'), 81.4, 0.9001542221134251],
    [new Date('0.0'), 81.6, 0.9897846638279395],
    [new Date('0.0'), 81.0, 1.0426447079138816],
    [new Date('0.0'), 81.6, 1.2206623986897334],
    [new Date('0.0'), 88.1, 1.2603565236139949],
    [new Date('0.0'), 91.1, 1.2806537533195081],
    [new Date('0.0'), 95.9, 1.3671074884706216],
    [new Date('0.0'), 99.0, 1.4073631215484474],
    [new Date('0.0'), 100.1, 1.511196946738806],
    [new Date('0.0'), 96.2, 1.6173638703583264],
    [new Date('0.0'), 99.5, 1.7312998592278048],
    [new Date('0.0'), 100.6, 1.7692872383204312],
    [new Date('0.0'), 104.1, 1.8452422660438506],
    [new Date('0.0'), 104.0, 1.9167550095140902],
    [new Date('0.0'), 104.0, 1.9212230327351236],
    [new Date('0.0'), 104.0, 1.9469244988926577],
    [new Date('0.0'), 104.0, 1.9715703985342963],
    [new Date('0.0'), 104.2, 1.9880400902935855],
    [new Date('0.0'), 104.2, 1.9880400902935855],
    [new Date('0.0'), 104.4, 2.0031971075028867],
    [new Date('0.0'), 104.4, 2.012471304973149],
    [new Date('0.0'), 105.6, 2.0819043905357852],
    [new Date('0.0'), 105.7, 2.089777983322244],
    [new Date('0.0'), 105.7, 2.089777983322244],
    [new Date('0.0'), 106.5, 2.13344190742888],
    [new Date('0.0'), 106.7, 2.169486688574723],
    [new Date('0.0'), 107.5, 2.20434177219959],
    [new Date('0.0'), 107.7, 2.2905257409937905],
    [new Date('0.0'), 107.9, 2.4106880782796187],
    [new Date('0.0'), 107.6, 2.430713468811282],
    [new Date('0.0'), 107.2, 2.456636357173993],
    [new Date('0.0'), 112.0, 2.5886744878223067],
    [new Date('0.0'), 113.9, 2.634960112149635],
    [new Date('0.0'), 114.1, 2.6509152072798132],
    [new Date('0.0'), 114.1, 2.6521722211638394],
    [new Date('0.0'), 114.1, 2.6521722211638394],
    [new Date('0.0'), 114.5, 2.662112740912344],
    [new Date('0.0'), 114.5, 2.785470029374284],
    [new Date('0.0'), 114.1, 2.8158050549867357],
    [new Date('0.0'), 113.9, 2.9447845153973513],
    [new Date('0.0'), 114.0, 2.9783677970115403],
    [new Date('0.0'), 114.0, 2.9783677970115403],
    [new Date('0.0'), 114.2, 3.0013976792942523],
    [new Date('0.0'), 111.0, 3.197150865759284],
    [new Date('0.0'), 111.4, 3.2161451495101425],
    [new Date('0.0'), 111.1, 3.2564457282144352],
    [new Date('0.0'), 104.5, 3.293727279079808],
    [new Date('0.0'), 105.9, 3.3276251271325297],
    [new Date('0.0'), 103.9, 3.40486968596876],
    [new Date('0.0'), 103.9, 3.40486968596876],
    [new Date('0.0'), 102.6, 3.4568327086374295],
    [new Date('0.0'), 101.2, 3.484165339304146],
    [new Date('0.0'), 102.5, 3.509899806934408],
    [new Date('0.0'), 101.1, 3.529175321035501],
    [new Date('0.0'), 102.5, 3.5554775239604326],
    [new Date('0.0'), 102.5, 3.582188488016884],
    [new Date('0.0'), 100.5, 3.60364269403682],
    [new Date('0.0'), 92.4, 3.6228839830381423],
    [new Date('0.0'), 90.5, 3.6699348899466337],
    [new Date('0.0'), 89.9, 3.7139021481530725],
    [new Date('0.0'), 90.0, 3.76125576244975],
    [new Date('0.0'), 89.9, 3.8176058075759327],
    [new Date('0.0'), 88.9, 3.8804889602689805],
    [new Date('0.0'), 88.7, 3.9207021796534383],
    [new Date('0.0'), 88.5, 3.953058019804124],
    [new Date('0.0'), 88.4, 4.0168069149196315],
    [new Date('0.0'), 87.4, 4.068220297493173],
    [new Date('0.0'), 87.4, 4.072751529302446],
    [new Date('0.0'), 87.4, 4.072751529302446],
    [new Date('0.0'), 87.4, 4.077282761111718],
    [new Date('0.0'), 85.7, 4.19008703378585],
    [new Date('0.0'), 85.9, 4.309619621933651],
    [new Date('0.0'), 85.7, 4.324190452468581],
    [new Date('0.0'), 85.7, 4.400293452614882],
    [new Date('0.0'), 85.4, 4.521619155663552],
    [new Date('0.0'), 85.5, 4.579146697071101],
    [new Date('0.0'), 85.6, 4.5860316456648835],
    [new Date('0.0'), 85.6, 4.5860316456648835],
    [new Date('0.0'), 85.5, 4.592916594258666],
    [new Date('0.0'), 84.0, 4.677063323212025],
    [new Date('0.0'), 82.0, 4.806671530232592],
  ];
  return var_array;
}

// npoint = 106


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

