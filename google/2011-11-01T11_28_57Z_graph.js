function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2011/11/01 20:28:57'), -11.389999, 0.0],
    [new Date('2011/11/01 20:29:02'), -11.389999, 0.02132609486191684],
    [new Date('2011/11/01 20:29:07'), -11.389999, 0.02705580942835565],
    [new Date('2011/11/01 20:29:12'), -11.389999, 0.048405388972401944],
    [new Date('2011/11/01 20:29:17'), -11.389999, 0.06641512508631156],
    [new Date('2011/11/01 20:29:22'), -11.389999, 0.08898663866338323],
    [new Date('2011/11/01 20:29:27'), -11.389999, 0.10455100293590547],
    [new Date('2011/11/01 20:29:32'), -11.389999, 0.125633747465484],
    [new Date('2011/11/01 20:29:37'), -11.389999, 0.1456415459444948],
    [new Date('2011/11/01 20:29:42'), -11.389999, 0.15434261436505117],
    [new Date('2011/11/01 20:29:47'), -11.389999, 0.16974369116873383],
    [new Date('2011/11/01 20:29:52'), -11.389999, 0.1808351661964033],
    [new Date('2011/11/01 20:29:57'), -11.389999, 0.19467439404132006],
    [new Date('2011/11/01 20:30:02'), -11.389999, 0.2104862383033817],
    [new Date('2011/11/01 20:30:07'), -11.389999, 0.23023536261359456],
    [new Date('2011/11/01 20:30:12'), -11.389999, 0.2432557105118265],
    [new Date('2011/11/01 20:30:17'), -11.389999, 0.26540852012206007],
    [new Date('2011/11/01 20:30:22'), 95.089996, 0.3072006198890565],
    [new Date('2011/11/01 20:30:27'), 91.579994, 0.3296469803381034],
    [new Date('2011/11/01 20:30:32'), 83.900002, 0.356726222175049],
    [new Date('2011/11/01 20:30:37'), 71.959999, 0.3886960595522812],
    [new Date('2011/11/01 20:30:42'), 68.610001, 0.41304989546154064],
    [new Date('2011/11/01 20:30:47'), 64.879997, 0.44504739842505125],
    [new Date('2011/11/01 20:30:52'), 62.949997, 0.47829168989457727],
    [new Date('2011/11/01 20:30:57'), 61.009998, 0.5115903920421858],
    [new Date('2011/11/01 20:31:01'), 58.500000, 0.5270511518260125],
    [new Date('2011/11/01 20:31:06'), 57.250000, 0.5424034918517626],
    [new Date('2011/11/01 20:31:11'), 55.419998, 0.5605888443838072],
    [new Date('2011/11/01 20:31:16'), 53.629997, 0.5800582463827547],
    [new Date('2011/11/01 20:31:21'), 50.020000, 0.601407825926801],
    [new Date('2011/11/01 20:31:26'), 50.360001, 0.6198277519338478],
    [new Date('2011/11/01 20:31:31'), 48.329998, 0.6384984133178273],
    [new Date('2011/11/01 20:31:36'), 45.930000, 0.660152018384584],
    [new Date('2011/11/01 20:31:41'), 45.099998, 0.6851947781421587],
    [new Date('2011/11/01 20:31:46'), 46.820000, 0.7159023986635217],
    [new Date('2011/11/01 20:31:51'), 45.899998, 0.7424182843230439],
    [new Date('2011/11/01 20:31:55'), 39.020000, 0.7675783073248564],
    [new Date('2011/11/01 20:32:00'), 40.270000, 0.7731433450184245],
    [new Date('2011/11/01 20:32:05'), 39.869999, 0.7745527389287269],
    [new Date('2011/11/01 20:32:10'), 39.869999, 0.7745527389287269],
    [new Date('2011/11/01 20:32:15'), 39.869999, 0.7745527389287269],
    [new Date('2011/11/01 20:32:20'), 39.869999, 0.7745527389287269],
    [new Date('2011/11/01 20:32:25'), 50.259998, 0.7799914125441184],
    [new Date('2011/11/01 20:32:30'), 54.399998, 0.7896789279574952],
    [new Date('2011/11/01 20:32:35'), 62.770000, 0.7969111677052387],
    [new Date('2011/11/01 20:32:40'), 62.549999, 0.8151765291894841],
    [new Date('2011/11/01 20:32:45'), 61.680000, 0.8312252894377529],
    [new Date('2011/11/01 20:32:50'), 62.739998, 0.8448036994714675],
    [new Date('2011/11/01 20:32:54'), 64.439995, 0.8606212530112968],
    [new Date('2011/11/01 20:32:59'), 61.770000, 0.8747937709935466],
    [new Date('2011/11/01 20:33:04'), 61.109997, 0.8813371462151086],
    [new Date('2011/11/01 20:33:09'), 57.619999, 0.8932410079652989],
    [new Date('2011/11/01 20:33:14'), 59.699997, 0.8947038425627224],
    [new Date('2011/11/01 20:33:19'), 59.699997, 0.8947038425627224],
    [new Date('2011/11/01 20:33:24'), 60.379997, 0.9060901563489308],
    [new Date('2011/11/01 20:33:28'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:33:32'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:33:37'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:33:42'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:33:47'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:33:52'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:33:56'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:34:01'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:34:06'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:34:11'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:34:16'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:34:21'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:34:26'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:34:31'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:34:36'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:34:41'), 60.090000, 0.9074605732868711],
    [new Date('2011/11/01 20:34:47'), 60.139999, 0.9325548380664641],
    [new Date('2011/11/01 20:34:52'), 60.500000, 0.9423323423879071],
    [new Date('2011/11/01 20:34:57'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:02'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:07'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:12'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:17'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:22'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:27'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:32'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:37'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:42'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:47'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:35:52'), 60.660000, 0.9492916404085243],
    [new Date('2011/11/01 20:36:01'), 25.939999, 1.0043449125327408],
    [new Date('2011/11/01 20:36:06'), 23.049999, 1.012712185717694],
    [new Date('2011/11/01 20:36:11'), 23.049999, 1.012712185717694],
    [new Date('2011/11/01 20:36:16'), 23.049999, 1.012712185717694],
    [new Date('2011/11/01 20:36:21'), 47.160000, 1.0321839063582912],
    [new Date('2011/11/01 20:36:26'), 55.079998, 1.0422758682075703],
    [new Date('2011/11/01 20:36:31'), 55.079998, 1.0422758682075703],
    [new Date('2011/11/01 20:36:36'), 55.079998, 1.0422758682075703],
    [new Date('2011/11/01 20:36:41'), 55.079998, 1.0422758682075703],
    [new Date('2011/11/01 20:36:46'), 55.079998, 1.0422758682075703],
    [new Date('2011/11/01 20:36:53'), 76.150002, 1.0587222440186994],
    [new Date('2011/11/01 20:36:58'), 85.070000, 1.0732471468736882],
    [new Date('2011/11/01 20:37:03'), 85.389999, 1.0741385258490734],
    [new Date('2011/11/01 20:37:08'), 85.389999, 1.0741385258490734],
    [new Date('2011/11/01 20:37:13'), 85.389999, 1.0741385258490734],
    [new Date('2011/11/01 20:37:18'), 85.389999, 1.0741385258490734],
    [new Date('2011/11/01 20:37:23'), 85.389999, 1.0741385258490734],
    [new Date('2011/11/01 20:37:28'), 85.389999, 1.0741385258490734],
    [new Date('2011/11/01 20:37:33'), 85.389999, 1.0741385258490734],
    [new Date('2011/11/01 20:42:57'), 94.339996, 1.0853820013536344],
    [new Date('2011/11/01 20:43:02'), 66.610001, 1.0907065877013784],
    [new Date('2011/11/01 20:43:15'), 64.449997, 1.1074923126447507],
    [new Date('2011/11/01 20:49:06'), 93.839996, 1.204258311221216],
    [new Date('2011/11/01 20:49:10'), 93.839996, 1.2343650777224175],
    [new Date('2011/11/01 20:49:15'), 93.839996, 1.2809105892496506],
    [new Date('2011/11/01 20:49:20'), 93.839996, 1.321427126604897],
    [new Date('2011/11/01 20:49:25'), 93.839996, 1.361373731589812],
    [new Date('2011/11/01 20:49:30'), 93.839996, 1.3832488690460842],
    [new Date('2011/11/01 20:49:35'), 93.839996, 1.3876935921345759],
    [new Date('2011/11/01 20:49:40'), 93.839996, 1.397138539076207],
    [new Date('2011/11/01 20:49:45'), 93.839996, 1.4277545788010702],
    [new Date('2011/11/01 20:49:50'), 93.839996, 1.4438022138076023],
    [new Date('2011/11/01 20:50:06'), 93.839996, 1.4872648857408135],
    [new Date('2011/11/01 20:50:21'), 93.839996, 1.4872648857408135],
    [new Date('2011/11/01 20:50:36'), 93.839996, 1.4872648857408135],
    [new Date('2011/11/01 20:51:21'), 93.839996, 1.4872648857408135],
    [new Date('2011/11/01 21:01:33'), 93.949997, 1.5573570053046348],
    [new Date('2011/11/01 21:01:38'), 93.949997, 1.5844128969243925],
    [new Date('2011/11/01 21:01:43'), 93.949997, 1.5980599564090066],
    [new Date('2011/11/01 21:01:48'), 93.949997, 1.6448864773688199],
    [new Date('2011/11/01 21:01:53'), 93.949997, 1.6715849314637607],
    [new Date('2011/11/01 21:02:19'), 93.549995, 1.678510414717211],
    [new Date('2011/11/01 21:02:24'), 93.549995, 1.7000438052567655],
    [new Date('2011/11/01 21:02:29'), 93.549995, 1.719022633642646],
    [new Date('2011/11/01 21:02:34'), 38.070000, 1.7386757437960032],
    [new Date('2011/11/01 21:02:39'), 44.829998, 1.7480986778608039],
    [new Date('2011/11/01 21:02:44'), 44.829998, 1.7480986778608039],
    [new Date('2011/11/01 21:02:48'), 44.829998, 1.7480986778608039],
    [new Date('2011/11/01 21:02:53'), 63.840000, 1.7609262038616829],
    [new Date('2011/11/01 21:02:58'), 65.129997, 1.7622999111211373],
    [new Date('2011/11/01 21:03:03'), 65.129997, 1.7622999111211373],
    [new Date('2011/11/01 21:03:08'), 65.129997, 1.7622999111211373],
    [new Date('2011/11/01 21:03:13'), 65.129997, 1.7622999111211373],
    [new Date('2011/11/01 21:03:18'), 65.129997, 1.7622999111211373],
    [new Date('2011/11/01 21:03:23'), 65.129997, 1.7622999111211373],
    [new Date('2011/11/01 21:03:28'), 65.129997, 1.7622999111211373],
    [new Date('2011/11/01 21:03:33'), 65.129997, 1.7622999111211373],
    [new Date('2011/11/01 21:03:38'), 65.129997, 1.7622999111211373],
    [new Date('2011/11/01 21:03:43'), 51.489998, 1.7818938967448663],
    [new Date('2011/11/01 21:03:47'), 60.180000, 1.794832157964306],
    [new Date('2011/11/01 21:03:52'), 70.139999, 1.8159482809237255],
    [new Date('2011/11/01 21:03:57'), 75.680000, 1.8232692402901747],
    [new Date('2011/11/01 21:04:02'), 71.689995, 1.8403648931894416],
    [new Date('2011/11/01 21:04:07'), 63.770000, 1.8541508458967988],
    [new Date('2011/11/01 21:04:12'), 51.180000, 1.8722951908372738],
    [new Date('2011/11/01 21:04:17'), 46.739998, 1.8854627594859767],
    [new Date('2011/11/01 21:04:22'), 43.959999, 1.899538107953726],
    [new Date('2011/11/01 21:04:27'), 41.820000, 1.9152123056857806],
    [new Date('2011/11/01 21:04:31'), 47.270000, 1.93278071698009],
    [new Date('2011/11/01 21:04:36'), 66.869995, 1.9594784946939021],
    [new Date('2011/11/01 21:04:41'), 74.750000, 1.9773954943064656],
    [new Date('2011/11/01 21:04:46'), 79.959999, 1.993130347476419],
    [new Date('2011/11/01 21:04:51'), 74.320000, 2.0154965169105634],
    [new Date('2011/11/01 21:04:56'), 77.979996, 2.0363657597914853],
    [new Date('2011/11/01 21:05:01'), 78.150002, 2.0444966091056656],
    [new Date('2011/11/01 21:05:06'), 79.529999, 2.048874813649304],
    [new Date('2011/11/01 21:05:10'), 81.110001, 2.0533499041355268],
    [new Date('2011/11/01 21:05:15'), 77.059998, 2.0710820125260017],
    [new Date('2011/11/01 21:05:20'), 75.369995, 2.079563430354988],
    [new Date('2011/11/01 21:05:25'), 71.449997, 2.0926087188169045],
    [new Date('2011/11/01 21:05:30'), 72.229996, 2.11282214530986],
    [new Date('2011/11/01 21:05:35'), 69.680000, 2.1287460853064766],
    [new Date('2011/11/01 21:05:40'), 84.720001, 2.1397316346377826],
    [new Date('2011/11/01 21:05:45'), 92.379997, 2.1489143524382044],
    [new Date('2011/11/01 21:05:50'), 92.379997, 2.1489143524382044],
    [new Date('2011/11/01 21:05:55'), 92.379997, 2.1489143524382044],
    [new Date('2011/11/01 21:06:00'), 92.379997, 2.1489143524382044],
    [new Date('2011/11/01 21:06:05'), 92.379997, 2.1489143524382044],
    [new Date('2011/11/01 21:06:10'), 92.379997, 2.1489143524382044],
    [new Date('2011/11/01 21:06:15'), 92.379997, 2.1489143524382044],
    [new Date('2011/11/01 21:06:19'), 92.379997, 2.1489143524382044],
    [new Date('2011/11/01 21:06:25'), 84.339996, 2.175020151807251],
    [new Date('2011/11/01 21:06:29'), 77.900002, 2.1885572717643953],
    [new Date('2011/11/01 21:06:34'), 67.659996, 2.211453269106809],
    [new Date('2011/11/01 21:06:39'), 61.480000, 2.242389093313718],
    [new Date('2011/11/01 21:06:44'), 59.189999, 2.2642134029755017],
    [new Date('2011/11/01 21:06:49'), 57.750000, 2.284901008247359],
    [new Date('2011/11/01 21:06:54'), 56.139999, 2.305996596884619],
    [new Date('2011/11/01 21:06:59'), 54.959999, 2.3231867911045643],
    [new Date('2011/11/01 21:07:04'), 52.570000, 2.34670490325307],
    [new Date('2011/11/01 21:07:09'), 52.129997, 2.369726746942691],
    [new Date('2011/11/01 21:07:14'), 51.889999, 2.392510671592601],
    [new Date('2011/11/01 21:07:19'), 52.340000, 2.410727029024184],
    [new Date('2011/11/01 21:07:24'), 53.009998, 2.429414608591294],
    [new Date('2011/11/01 21:07:29'), 51.750000, 2.453434148415415],
    [new Date('2011/11/01 21:07:34'), 53.389999, 2.478584839197296],
    [new Date('2011/11/01 21:07:39'), 52.070000, 2.5007349993765313],
    [new Date('2011/11/01 21:07:44'), 54.489998, 2.518504748038297],
    [new Date('2011/11/01 21:07:49'), 54.860001, 2.5342157694263756],
    [new Date('2011/11/01 21:07:54'), 54.730000, 2.5453190419514033],
    [new Date('2011/11/01 21:07:59'), 54.779999, 2.556156472176979],
    [new Date('2011/11/01 21:08:04'), 57.160000, 2.5664911053539434],
    [new Date('2011/11/01 21:08:09'), 56.389999, 2.5680232780693193],
    [new Date('2011/11/01 21:08:14'), 56.389999, 2.5680232780693193],
    [new Date('2011/11/01 21:08:19'), 58.129997, 2.571234380077836],
    [new Date('2011/11/01 21:08:24'), 57.709999, 2.572604797015776],
    [new Date('2011/11/01 21:08:28'), 52.379997, 2.5824586497243627],
    [new Date('2011/11/01 21:08:33'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:08:38'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:08:43'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:08:48'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:08:53'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:08:58'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:03'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:07'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:12'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:17'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:22'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:27'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:32'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:36'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:41'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:46'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:51'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:09:56'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:01'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:06'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:11'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:16'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:21'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:26'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:31'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:36'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:41'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:46'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:51'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:10:56'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:01'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:06'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:11'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:16'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:21'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:26'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:31'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:35'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:40'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:45'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:50'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:11:55'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:12:00'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:12:05'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:12:10'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:12:15'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:12:20'), 53.750000, 2.5942516336877413],
    [new Date('2011/11/01 21:12:39'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:12:44'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:12:49'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:12:54'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:12:59'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:04'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:09'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:14'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:19'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:24'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:29'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:34'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:39'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:44'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:49'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:54'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:13:59'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:14:04'), 25.430000, 2.612485330834427],
    [new Date('2011/11/01 21:15:07'), -7.840000, 2.636467815491744],
  ];
  return var_array;
}

// npoint = 268


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

