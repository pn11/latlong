function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2012/03/30 18:54:28'), 186],
    [new Date('2012/03/30 18:54:29'), 197],
    [new Date('2012/03/30 18:54:30'), 199],
    [new Date('2012/03/30 18:54:32'), 199],
    [new Date('2012/03/30 18:54:36'), 198],
    [new Date('2012/03/30 18:54:39'), 199],
    [new Date('2012/03/30 18:54:48'), 202],
    [new Date('2012/03/30 18:54:50'), 202],
    [new Date('2012/03/30 18:54:52'), 202],
    [new Date('2012/03/30 18:54:53'), 202],
    [new Date('2012/03/30 18:54:54'), 202],
    [new Date('2012/03/30 18:54:55'), 202],
    [new Date('2012/03/30 18:54:57'), 202],
    [new Date('2012/03/30 18:54:59'), 202],
    [new Date('2012/03/30 18:55:01'), 203],
    [new Date('2012/03/30 18:55:02'), 203],
    [new Date('2012/03/30 18:55:03'), 203],
    [new Date('2012/03/30 18:55:05'), 204],
    [new Date('2012/03/30 18:55:09'), 203],
    [new Date('2012/03/30 18:55:19'), 203],
    [new Date('2012/03/30 18:55:21'), 203],
    [new Date('2012/03/30 18:55:24'), 202],
    [new Date('2012/03/30 18:55:24'), 202],
    [new Date('2012/03/30 18:56:24'), 202],
    [new Date('2012/03/30 18:56:36'), 203],
    [new Date('2012/03/30 18:56:38'), 204],
    [new Date('2012/03/30 18:56:39'), 203],
    [new Date('2012/03/30 18:56:40'), 203],
    [new Date('2012/03/30 18:56:41'), 203],
    [new Date('2012/03/30 18:56:10'), 203],
    [new Date('2012/03/30 18:56:43'), 204],
    [new Date('2012/03/30 18:56:44'), 203],
    [new Date('2012/03/30 18:56:45'), 203],
    [new Date('2012/03/30 18:56:46'), 204],
    [new Date('2012/03/30 18:56:47'), 203],
    [new Date('2012/03/30 18:56:48'), 204],
    [new Date('2012/03/30 18:56:49'), 205],
    [new Date('2012/03/30 18:56:50'), 205],
    [new Date('2012/03/30 18:56:51'), 205],
    [new Date('2012/03/30 18:56:52'), 205],
    [new Date('2012/03/30 18:56:53'), 205],
    [new Date('2012/03/30 18:56:54'), 205],
    [new Date('2012/03/30 18:56:55'), 205],
    [new Date('2012/03/30 18:56:56'), 205],
    [new Date('2012/03/30 18:56:57'), 205],
    [new Date('2012/03/30 18:56:58'), 205],
    [new Date('2012/03/30 18:56:59'), 205],
    [new Date('2012/03/30 18:57:00'), 205],
    [new Date('2012/03/30 18:57:01'), 204],
    [new Date('2012/03/30 18:57:02'), 204],
    [new Date('2012/03/30 18:57:03'), 204],
    [new Date('2012/03/30 18:57:05'), 203],
    [new Date('2012/03/30 18:57:08'), 202],
    [new Date('2012/03/30 18:57:11'), 201],
    [new Date('2012/03/30 18:57:13'), 201],
    [new Date('2012/03/30 18:57:14'), 200],
    [new Date('2012/03/30 18:57:15'), 200],
    [new Date('2012/03/30 18:57:16'), 200],
    [new Date('2012/03/30 18:57:17'), 200],
    [new Date('2012/03/30 18:57:18'), 199],
    [new Date('2012/03/30 18:57:19'), 199],
    [new Date('2012/03/30 18:57:20'), 199],
    [new Date('2012/03/30 18:57:21'), 199],
    [new Date('2012/03/30 18:57:22'), 199],
    [new Date('2012/03/30 18:57:23'), 199],
    [new Date('2012/03/30 18:57:24'), 199],
    [new Date('2012/03/30 18:57:25'), 199],
    [new Date('2012/03/30 18:57:26'), 199],
    [new Date('2012/03/30 18:57:27'), 198],
    [new Date('2012/03/30 18:57:28'), 198],
    [new Date('2012/03/30 18:57:29'), 198],
    [new Date('2012/03/30 18:57:30'), 198],
    [new Date('2012/03/30 18:57:31'), 198],
    [new Date('2012/03/30 18:57:32'), 198],
    [new Date('2012/03/30 18:57:33'), 198],
    [new Date('2012/03/30 18:57:34'), 198],
    [new Date('2012/03/30 18:57:35'), 198],
    [new Date('2012/03/30 18:57:36'), 198],
    [new Date('2012/03/30 18:57:37'), 198],
    [new Date('2012/03/30 18:57:38'), 198],
    [new Date('2012/03/30 18:57:40'), 198],
    [new Date('2012/03/30 18:57:44'), 199],
    [new Date('2012/03/30 18:57:46'), 199],
    [new Date('2012/03/30 18:57:47'), 199],
    [new Date('2012/03/30 18:57:48'), 198],
    [new Date('2012/03/30 18:57:49'), 198],
    [new Date('2012/03/30 18:57:50'), 198],
    [new Date('2012/03/30 18:57:51'), 198],
    [new Date('2012/03/30 18:57:52'), 198],
    [new Date('2012/03/30 18:15:34'), 198],
    [new Date('2012/03/30 18:57:54'), 198],
    [new Date('2012/03/30 18:57:55'), 198],
    [new Date('2012/03/30 18:57:56'), 197],
    [new Date('2012/03/30 18:57:57'), 197],
    [new Date('2012/03/30 18:57:58'), 197],
    [new Date('2012/04/02 16:15:52'), 197],
    [new Date('2012/03/30 18:58:00'), 197],
    [new Date('2012/03/30 18:58:01'), 197],
    [new Date('2012/03/30 18:58:02'), 197],
    [new Date('2012/03/30 18:58:03'), 197],
    [new Date('2012/03/30 18:58:04'), 197],
    [new Date('2012/03/30 18:58:05'), 197],
    [new Date('2012/03/30 18:58:06'), 197],
    [new Date('2012/03/30 18:58:07'), 197],
    [new Date('2012/03/30 18:58:08'), 197],
    [new Date('2012/03/30 18:58:09'), 196],
    [new Date('2012/03/30 18:58:10'), 196],
    [new Date('2012/03/30 18:58:12'), 196],
    [new Date('2012/03/30 18:58:17'), 197],
    [new Date('2012/03/30 18:58:22'), 197],
    [new Date('2012/03/30 18:58:24'), 197],
    [new Date('2012/03/30 18:58:26'), 197],
    [new Date('2012/03/30 18:58:27'), 197],
    [new Date('2012/03/30 18:58:28'), 197],
    [new Date('2012/03/30 18:58:29'), 198],
    [new Date('2012/03/30 18:58:30'), 197],
    [new Date('2012/03/30 18:58:31'), 197],
    [new Date('2012/03/30 18:58:32'), 198],
    [new Date('2012/03/30 18:58:33'), 198],
    [new Date('2012/03/30 18:58:34'), 198],
    [new Date('2012/03/30 18:58:35'), 198],
    [new Date('2012/03/30 18:58:36'), 197],
    [new Date('2012/03/30 18:58:37'), 197],
    [new Date('2012/03/30 18:58:38'), 197],
    [new Date('2012/03/30 18:58:39'), 198],
    [new Date('2012/03/30 18:58:40'), 198],
    [new Date('2012/03/30 18:58:41'), 198],
    [new Date('2012/03/30 18:58:42'), 198],
    [new Date('2012/03/30 18:58:44'), 199],
    [new Date('2012/03/30 18:58:45'), 199],
    [new Date('2012/03/30 18:58:46'), 199],
    [new Date('2012/03/30 18:58:47'), 199],
    [new Date('2012/03/30 18:58:48'), 199],
    [new Date('2012/03/30 18:58:49'), 200],
    [new Date('2012/03/30 18:58:50'), 200],
    [new Date('2012/03/30 18:58:51'), 200],
    [new Date('2012/03/30 18:58:52'), 200],
    [new Date('2012/03/30 18:58:53'), 200],
    [new Date('2012/03/30 18:58:54'), 201],
    [new Date('2012/03/30 18:58:55'), 201],
    [new Date('2012/03/30 18:58:56'), 202],
    [new Date('2012/03/30 18:58:59'), 202],
    [new Date('2012/03/30 18:59:03'), 201],
    [new Date('2012/03/30 18:59:05'), 201],
    [new Date('2012/03/30 18:59:07'), 201],
    [new Date('2012/03/30 18:59:08'), 201],
    [new Date('2012/03/30 18:59:09'), 201],
    [new Date('2012/03/30 18:59:10'), 201],
    [new Date('2012/03/30 18:59:11'), 201],
    [new Date('2012/03/30 18:59:12'), 201],
    [new Date('2012/03/30 18:59:13'), 201],
    [new Date('2012/03/30 18:59:14'), 201],
    [new Date('2012/03/30 18:59:15'), 201],
    [new Date('2012/03/30 18:59:16'), 201],
    [new Date('2012/03/30 18:59:17'), 201],
    [new Date('2012/03/30 18:59:18'), 201],
    [new Date('2012/03/30 18:59:19'), 201],
    [new Date('2012/03/30 18:59:20'), 201],
    [new Date('2012/03/30 18:59:21'), 201],
    [new Date('2012/03/30 18:59:22'), 200],
    [new Date('2012/03/30 18:59:23'), 200],
    [new Date('2012/03/30 18:59:24'), 200],
    [new Date('2012/03/30 18:59:25'), 200],
    [new Date('2012/03/30 18:59:27'), 200],
    [new Date('2012/03/30 18:59:30'), 199],
    [new Date('2012/03/30 18:59:34'), 199],
    [new Date('2012/03/30 18:59:47'), 198],
    [new Date('2012/03/30 18:59:49'), 198],
    [new Date('2012/03/30 18:59:50'), 199],
    [new Date('2012/03/30 18:59:51'), 199],
    [new Date('2012/03/30 18:59:52'), 198],
    [new Date('2012/03/30 18:59:53'), 198],
    [new Date('2012/03/30 18:59:54'), 198],
    [new Date('2012/03/30 18:59:55'), 198],
    [new Date('2012/03/30 18:59:56'), 198],
    [new Date('2012/03/30 18:59:57'), 198],
    [new Date('2012/03/30 18:59:58'), 198],
    [new Date('2012/03/30 18:59:59'), 198],
    [new Date('2012/03/30 19:00:00'), 198],
    [new Date('2012/03/30 19:00:01'), 198],
    [new Date('2012/03/30 19:00:02'), 198],
    [new Date('2012/03/30 19:00:03'), 199],
    [new Date('2012/03/30 19:00:04'), 200],
    [new Date('2012/03/30 16:17:51'), 201],
    [new Date('2012/04/02 16:17:55'), 201],
    [new Date('2012/04/02 16:17:57'), 201],
    [new Date('2012/04/02 16:18:01'), 202],
    [new Date('2012/03/30 16:18:05'), 202],
    [new Date('2012/03/02 16:18:07'), 203],
    [new Date('2012/03/30 19:00:11'), 203],
    [new Date('2012/03/30 16:18:13'), 203],
    [new Date('2012/03/30 19:00:13'), 204],
    [new Date('2012/04/02 16:18:18'), 204],
    [new Date('2012/03/30 19:00:15'), 204],
    [new Date('2012/03/30 19:00:16'), 205],
    [new Date('2012/03/30 16:18:28'), 205],
    [new Date('2012/04/02 16:18:32'), 205],
    [new Date('2012/03/30 19:00:19'), 205],
    [new Date('2012/03/30 19:00:37'), 206],
    [new Date('2012/03/30 16:18:41'), 206],
    [new Date('2012/03/30 16:18:43'), 206],
    [new Date('2012/03/30 19:00:23'), 207],
    [new Date('2012/03/30 19:00:24'), 207],
    [new Date('2012/03/30 19:00:25'), 208],
    [new Date('2012/03/30 19:00:26'), 208],
    [new Date('2012/03/30 19:00:59'), 209],
    [new Date('2012/03/30 19:00:29'), 209],
    [new Date('2012/03/30 19:00:30'), 209],
    [new Date('2012/03/30 19:00:31'), 209],
    [new Date('2012/03/30 19:00:32'), 208],
    [new Date('2012/03/30 19:00:33'), 208],
    [new Date('2012/03/30 19:00:34'), 208],
    [new Date('2012/03/30 19:00:35'), 208],
    [new Date('2012/03/30 19:00:36'), 208],
    [new Date('2012/03/30 19:00:37'), 208],
    [new Date('2012/03/30 19:00:38'), 208],
    [new Date('2012/03/30 19:00:39'), 208],
    [new Date('2012/03/30 19:00:40'), 207],
    [new Date('2012/03/30 19:00:42'), 207],
    [new Date('2012/03/30 19:00:46'), 207],
    [new Date('2012/03/30 19:00:49'), 206],
    [new Date('2012/03/30 19:00:56'), 204],
    [new Date('2012/03/30 19:00:58'), 204],
    [new Date('2012/03/30 19:00:59'), 203],
    [new Date('2012/03/30 19:01:00'), 203],
    [new Date('2012/03/30 19:01:01'), 202],
    [new Date('2012/03/30 19:01:02'), 202],
    [new Date('2012/03/30 19:01:03'), 201],
    [new Date('2012/03/30 19:01:04'), 201],
    [new Date('2012/03/30 19:01:05'), 201],
    [new Date('2012/03/30 19:01:06'), 201],
    [new Date('2012/03/30 19:01:07'), 201],
    [new Date('2012/03/30 19:01:08'), 201],
    [new Date('2012/03/30 19:01:09'), 201],
    [new Date('2012/03/30 19:01:10'), 201],
    [new Date('2012/03/30 19:01:11'), 201],
    [new Date('2012/03/30 19:01:12'), 202],
    [new Date('2012/03/30 19:01:13'), 202],
    [new Date('2012/03/30 19:01:14'), 202],
    [new Date('2012/03/30 19:01:15'), 202],
    [new Date('2012/03/30 19:01:16'), 202],
    [new Date('2012/03/30 19:01:17'), 202],
    [new Date('2012/03/30 19:01:18'), 203],
    [new Date('2012/03/30 19:21:22'), 203],
    [new Date('2012/03/30 19:01:20'), 203],
    [new Date('2012/03/30 19:01:21'), 203],
    [new Date('2012/03/30 19:01:22'), 204],
    [new Date('2012/03/30 19:01:23'), 204],
    [new Date('2012/03/30 19:01:24'), 204],
    [new Date('2012/03/30 19:01:25'), 205],
    [new Date('2012/03/30 19:01:26'), 205],
    [new Date('2012/03/30 19:01:27'), 205],
    [new Date('2012/03/30 19:01:29'), 205],
    [new Date('2012/03/30 19:01:30'), 205],
    [new Date('2012/03/30 19:01:31'), 205],
    [new Date('2012/03/30 19:01:32'), 205],
    [new Date('2012/03/30 19:01:33'), 205],
    [new Date('2012/03/30 19:01:35'), 206],
    [new Date('2012/03/30 19:01:36'), 206],
    [new Date('2012/03/30 19:01:37'), 206],
    [new Date('2012/03/30 19:01:38'), 206],
    [new Date('2012/03/30 19:01:39'), 206],
    [new Date('2012/03/30 19:01:40'), 207],
    [new Date('2012/03/30 19:01:42'), 208],
    [new Date('2012/03/30 19:01:43'), 208],
    [new Date('2012/03/30 19:01:45'), 208],
    [new Date('2012/03/30 19:01:46'), 207],
    [new Date('2012/03/30 19:01:47'), 206],
    [new Date('2012/03/30 19:01:48'), 206],
    [new Date('2012/03/30 19:01:49'), 206],
    [new Date('2012/03/30 19:01:50'), 206],
    [new Date('2012/03/30 19:01:51'), 206],
    [new Date('2012/03/30 19:01:52'), 206],
    [new Date('2012/03/30 19:01:53'), 205],
    [new Date('2012/03/30 19:01:54'), 205],
    [new Date('2012/03/30 19:01:55'), 204],
    [new Date('2012/03/30 19:01:56'), 205],
    [new Date('2012/03/30 19:01:57'), 205],
    [new Date('2012/03/30 19:01:58'), 205],
    [new Date('2012/03/30 19:01:59'), 205],
    [new Date('2012/03/30 19:02:00'), 205],
    [new Date('2012/03/30 19:02:01'), 205],
    [new Date('2012/03/30 19:02:02'), 205],
    [new Date('2012/03/30 19:02:03'), 205],
    [new Date('2012/03/30 19:02:04'), 204],
    [new Date('2012/03/30 19:02:05'), 204],
    [new Date('2012/03/30 19:02:06'), 204],
    [new Date('2012/03/30 19:02:07'), 204],
    [new Date('2012/03/30 19:02:08'), 204],
    [new Date('2012/03/30 19:02:09'), 203],
    [new Date('2012/03/30 19:02:10'), 203],
    [new Date('2012/03/30 19:02:11'), 203],
    [new Date('2012/03/30 19:02:12'), 203],
    [new Date('2012/03/30 19:02:13'), 203],
    [new Date('2012/03/30 19:02:14'), 203],
    [new Date('2012/03/30 19:02:15'), 203],
    [new Date('2012/03/30 19:02:16'), 203],
    [new Date('2012/03/30 19:02:17'), 202],
    [new Date('2012/03/30 19:02:18'), 202],
    [new Date('2012/03/30 19:02:19'), 203],
    [new Date('2012/03/30 19:02:20'), 202],
    [new Date('2012/03/30 19:02:21'), 202],
    [new Date('2012/03/30 19:02:22'), 203],
    [new Date('2012/03/30 19:02:23'), 203],
    [new Date('2012/03/30 19:02:24'), 203],
    [new Date('2012/03/30 19:02:25'), 203],
    [new Date('2012/03/30 19:02:26'), 203],
    [new Date('2012/03/30 19:02:27'), 203],
    [new Date('2012/03/30 19:02:29'), 204],
    [new Date('2012/03/30 19:02:30'), 204],
    [new Date('2012/03/30 19:02:31'), 204],
    [new Date('2012/03/30 19:02:32'), 203],
    [new Date('2012/03/30 19:02:33'), 203],
    [new Date('2012/03/30 19:02:34'), 203],
    [new Date('2012/03/30 19:02:35'), 204],
    [new Date('2012/03/30 19:02:36'), 205],
    [new Date('2012/03/30 19:02:37'), 204],
    [new Date('2012/03/30 19:02:38'), 204],
    [new Date('2012/03/30 19:02:39'), 204],
    [new Date('2012/03/30 19:02:40'), 204],
    [new Date('2012/03/30 19:02:41'), 204],
    [new Date('2012/03/30 19:02:42'), 205],
    [new Date('2012/03/30 19:02:43'), 205],
    [new Date('2012/03/30 19:02:44'), 205],
    [new Date('2012/03/30 19:02:45'), 206],
    [new Date('2012/03/30 19:02:46'), 205],
    [new Date('2012/03/30 19:02:47'), 205],
    [new Date('2012/03/30 19:02:48'), 205],
    [new Date('2012/03/30 19:02:49'), 205],
    [new Date('2012/03/30 19:02:50'), 205],
    [new Date('2012/03/30 19:02:51'), 204],
    [new Date('2012/03/30 19:02:52'), 204],
    [new Date('2012/03/30 19:02:53'), 204],
    [new Date('2012/03/30 19:02:54'), 204],
    [new Date('2012/03/30 19:02:55'), 204],
    [new Date('2012/03/30 19:02:56'), 204],
    [new Date('2012/03/30 19:02:57'), 204],
    [new Date('2012/03/30 19:02:58'), 204],
    [new Date('2012/03/30 19:02:59'), 203],
    [new Date('2012/03/30 19:03:00'), 204],
    [new Date('2012/03/30 19:03:01'), 204],
    [new Date('2012/03/30 19:03:02'), 204],
    [new Date('2012/03/30 19:03:04'), 204],
    [new Date('2012/03/30 19:03:06'), 204],
    [new Date('2012/03/30 19:03:09'), 205],
    [new Date('2012/03/30 19:03:11'), 206],
    [new Date('2012/03/30 19:03:12'), 207],
    [new Date('2012/03/30 19:03:14'), 209],
    [new Date('2012/03/30 19:03:16'), 209],
    [new Date('2012/03/30 19:03:19'), 209],
    [new Date('2012/03/30 19:03:19'), 209],
    [new Date('2012/03/30 19:03:24'), 208],
    [new Date('2012/03/30 19:03:35'), 209],
  ];
  return var_array;
}

// npoint = 353


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
        options: chart_option,
    });
    var control = new google.visualization.ControlWrapper({
        controlType: 'ChartRangeFilter',
        containerId: 'control_ele',
        options: control_option,
    });
    dashboard.bind(control, chart);
    dashboard.draw(data);
  }
}

draw_ele();

function writeHTML(){
  document.getElementById("graph").innerHTML='<h2>Graph</h2><div id="dashboard_ele" style="width: 0px; height: 0px"></div><div id="graph_ele" style="width: 800px; height: 600px"></div><div id="control_ele" style="width: 800px; height: 100px"></div>';
}

