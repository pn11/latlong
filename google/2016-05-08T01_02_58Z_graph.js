function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2016/05/08 10:02:58'), 622, 0.0, ],
    [new Date('2016/05/08 10:03:31'), 618, 0.0036070572941531323, 0.3934971593621599],
    [new Date('2016/05/08 10:04:45'), 620, 0.006053740914044177, 0.11902785177848325],
    [new Date('2016/05/08 10:05:15'), 620, 0.03755957748354614, 3.7807003883402355],
    [new Date('2016/05/08 10:05:41'), 625, 0.05905813756747489, 2.9767237039285965],
    [new Date('2016/05/08 10:06:04'), 627, 0.08243917507226804, 3.659640652924146],
    [new Date('2016/05/08 10:06:26'), 629, 0.10904921615638512, 4.354370359219159],
    [new Date('2016/05/08 10:06:49'), 638, 0.13746678661961642, 4.447967550766638],
    [new Date('2016/05/08 10:07:12'), 648, 0.15417946710735042, 2.6158978154714108],
    [new Date('2016/05/08 10:07:44'), 649, 0.18888645066164692, 3.9045356498583565],
    [new Date('2016/05/08 10:07:58'), 655, 0.2045133412736219, 4.018343300222137],
    [new Date('2016/05/08 10:08:23'), 639, 0.23829552467684906, 4.864634410064712],
    [new Date('2016/05/08 10:08:35'), 642, 0.2510006957381726, 3.8115513183970604],
    [new Date('2016/05/08 10:08:47'), 649, 0.26702468241529664, 4.807196003137222],
    [new Date('2016/05/08 10:08:57'), 652, 0.2733484207371737, 2.2765457958757387],
    [new Date('2016/05/08 10:09:13'), 658, 0.28759908431732206, 3.206399305533388],
    [new Date('2016/05/08 10:09:29'), 660, 0.2974051738493741, 2.2063701447117063],
    [new Date('2016/05/08 10:09:51'), 660, 0.3226979853421166, 4.138823698812402],
    [new Date('2016/05/08 10:10:10'), 658, 0.35009841670872655, 5.191660679989257],
    [new Date('2016/05/08 10:10:36'), 666, 0.37694626932569725, 3.717394977734401],
    [new Date('2016/05/08 10:10:57'), 662, 0.39528858362967345, 3.1443967378244913],
    [new Date('2016/05/08 10:11:20'), 668, 0.4208003476591572, 3.9931456741800613],
    [new Date('2016/05/08 10:11:40'), 666, 0.44999401428410474, 5.25485999249056],
    [new Date('2016/05/08 10:12:05'), 683, 0.4815161818768466, 4.539192133354826],
    [new Date('2016/05/08 10:12:34'), 689, 0.5156382300209414, 4.235840459266954],
    [new Date('2016/05/08 10:12:49'), 694, 0.5309322351272335, 3.67056122551011],
    [new Date('2016/05/08 10:12:53'), 694, 0.536261059109033, 4.795941583619496],
    [new Date('2016/05/08 10:13:18'), 692, 0.5528204152358825, 2.3845472822663423],
    [new Date('2016/05/08 10:13:57'), 704, 0.6089216323085463, 5.178573883630504],
    [new Date('2016/05/08 10:14:10'), 703, 0.6206969936371792, 3.2608692910060144],
    [new Date('2016/05/08 10:14:15'), 703, 0.627103713961726, 4.612838633673673],
    [new Date('2016/05/08 10:14:29'), 705, 0.6373563336458448, 2.636387918773397],
    [new Date('2016/05/08 10:14:40'), 710, 0.6446834569936558, 2.3979676411017907],
    [new Date('2016/05/08 10:15:21'), 713, 0.6606707761064332, 1.4037646050243568],
    [new Date('2016/05/08 10:15:43'), 717, 0.6704648884494506, 1.6026729288573949],
    [new Date('2016/05/08 10:16:14'), 722, 0.7133978081340527, 4.9857584149860505],
    [new Date('2016/05/08 10:16:43'), 723, 0.7418048916463459, 3.5263965739398335],
    [new Date('2016/05/08 10:17:05'), 729, 0.761857316737882, 3.281305924069545],
    [new Date('2016/05/08 10:17:25'), 733, 0.7802183271102174, 3.3049818670203623],
    [new Date('2016/05/08 10:17:52'), 725, 0.8296602847792154, 6.592261022533063],
    [new Date('2016/05/08 10:18:11'), 734, 0.8606535528451832, 5.8724086861833715],
    [new Date('2016/05/08 10:18:25'), 735, 0.8776660842874688, 4.374650942302014],
    [new Date('2016/05/08 10:18:34'), 733, 0.8892925162757781, 4.650572795323699],
    [new Date('2016/05/08 10:18:36'), 733, 0.8924181255053655, 5.626096613257324],
    [new Date('2016/05/08 10:18:46'), 735, 0.9043155382788479, 4.283068598453677],
    [new Date('2016/05/08 10:18:58'), 734, 0.9119687371578841, 2.2959596637108306],
    [new Date('2016/05/08 10:19:28'), 736, 0.9580529008749271, 5.530099646045161],
    [new Date('2016/05/08 10:19:37'), 737, 0.9697910147133659, 4.695245535375537],
    [new Date('2016/05/08 10:19:44'), 735, 0.9778302899434469, 4.134484404041629],
    [new Date('2016/05/08 10:20:01'), 747, 0.992978965042554, 3.207954726869752],
    [new Date('2016/05/08 10:20:15'), 757, 1.0111300266559362, 4.667415843441148],
    [new Date('2016/05/08 10:20:32'), 755, 1.0233826194036804, 2.5946666995222816],
    [new Date('2016/05/08 10:20:49'), 758, 1.0335538958734551, 2.1539173700699314],
    [new Date('2016/05/08 10:21:08'), 766, 1.0623483343042162, 5.455788334249444],
    [new Date('2016/05/08 10:21:50'), 768, 1.0825514844112036, 1.7316985805989364],
    [new Date('2016/05/08 10:22:14'), 777, 1.1021737892167454, 2.9433457208312706],
    [new Date('2016/05/08 10:22:33'), 784, 1.1229749953463293, 3.941281161394846],
    [new Date('2016/05/08 10:22:53'), 781, 1.1364646762731947, 2.4281425668357772],
    [new Date('2016/05/08 10:23:16'), 778, 1.1586758966635933, 3.476538843714569],
    [new Date('2016/05/08 10:23:47'), 791, 1.2010249270777709, 4.9179519190657786],
    [new Date('2016/05/08 10:24:08'), 773, 1.2031326018711732, 0.3613156788689612],
    [new Date('2016/05/08 10:24:24'), 792, 1.2427855341345377, 8.92190975925703],
    [new Date('2016/05/08 10:24:45'), 769, 1.2554094300504595, 2.1640964427294396],
    [new Date('2016/05/08 10:25:08'), 805, 1.2778750902075384, 3.5163641984993217],
    [new Date('2016/05/08 10:25:38'), 800, 1.3134549596310305, 4.26958433081905],
    [new Date('2016/05/08 10:26:09'), 805, 1.330740483974859, 2.0073512141220147],
    [new Date('2016/05/08 10:26:24'), 807, 1.3422729563687485, 2.7677933745335044],
    [new Date('2016/05/08 10:26:41'), 807, 1.3467490555533919, 0.9478798273362109],
    [new Date('2016/05/08 10:27:03'), 813, 1.3930243398850615, 7.572319254273204],
    [new Date('2016/05/08 10:27:31'), 829, 1.422305248080639, 3.7646881965742605],
    [new Date('2016/05/08 10:27:46'), 812, 1.442925749851035, 4.948920424895021],
    [new Date('2016/05/08 10:28:07'), 826, 1.4699597740737496, 4.63440415246535],
    [new Date('2016/05/08 10:28:22'), 818, 1.4815990128571899, 2.793417308025666],
    [new Date('2016/05/08 10:28:37'), 815, 1.5054027539119592, 5.712897853144666],
    [new Date('2016/05/08 10:28:53'), 813, 1.5261865902367273, 4.6763631730728115],
    [new Date('2016/05/08 10:29:09'), 835, 1.5421354592089649, 3.58849551875346],
    [new Date('2016/05/08 10:29:24'), 828, 1.5622730301234662, 4.833017019480296],
    [new Date('2016/05/08 10:29:41'), 810, 1.5888297461200072, 5.623775152208665],
    [new Date('2016/05/08 10:29:57'), 820, 1.6090773152425295, 4.555703052567509],
    [new Date('2016/05/08 10:30:13'), 820, 1.6334913228003296, 5.493151700505015],
    [new Date('2016/05/08 10:30:29'), 823, 1.6489266577713082, 3.472950368470201],
    [new Date('2016/05/08 10:30:45'), 825, 1.6697170094735103, 4.677829132995469],
    [new Date('2016/05/08 10:31:01'), 840, 1.6976629713505194, 6.287841422327018],
    [new Date('2016/05/08 10:31:18'), 842, 1.7200541557199631, 4.741662572352779],
    [new Date('2016/05/08 10:31:34'), 834, 1.7409916455050862, 4.710935201652689],
    [new Date('2016/05/08 10:31:49'), 828, 1.7570342159471, 3.8502169060832743],
    [new Date('2016/05/08 10:32:05'), 844, 1.7712226520308048, 3.192398118833576],
    [new Date('2016/05/08 10:32:21'), 844, 1.7899666758246398, 4.217405353612866],
    [new Date('2016/05/08 10:33:23'), 845, 1.861886954981927, 4.176016209132806],
    [new Date('2016/05/08 10:33:49'), 845, 1.887574716594764, 3.5567669925466587],
    [new Date('2016/05/08 10:34:09'), 862, 1.9166360201022452, 5.231034631346602],
    [new Date('2016/05/08 10:34:27'), 856, 1.9430091864986059, 5.274633279272122],
    [new Date('2016/05/08 10:34:29'), 856, 1.94356325123313, 0.9973165221433367],
    [new Date('2016/05/08 10:34:53'), 851, 1.9673100272866793, 3.562016408032395],
    [new Date('2016/05/08 10:35:14'), 856, 1.9974846449181947, 5.172791593974084],
    [new Date('2016/05/08 10:35:29'), 852, 2.015705958237845, 4.373115196716086],
    [new Date('2016/05/08 10:35:48'), 855, 2.0299566218179934, 2.7001257309754845],
    [new Date('2016/05/08 10:36:13'), 869, 2.0606968626657847, 4.426594682081925],
    [new Date('2016/05/08 10:36:21'), 868, 2.0671680865066246, 2.912050728377938],
    [new Date('2016/05/08 10:36:45'), 872, 2.095957193766365, 4.318366088961064],
    [new Date('2016/05/08 10:37:11'), 855, 2.119316595751467, 3.234378736398704],
    [new Date('2016/05/08 10:37:40'), 872, 2.1545291424024513, 4.371212687708447],
    [new Date('2016/05/08 10:38:04'), 870, 2.181490928613542, 4.044267931663654],
    [new Date('2016/05/08 10:38:25'), 874, 2.2132206511104338, 5.43938099946713],
    [new Date('2016/05/08 10:38:46'), 871, 2.231590510873775, 3.1491188165727544],
    [new Date('2016/05/08 10:39:01'), 884, 2.2525831266118947, 5.038227777148693],
    [new Date('2016/05/08 10:39:16'), 881, 2.254699351845247, 0.5078940560045985],
    [new Date('2016/05/08 10:39:32'), 882, 2.2818382121507232, 6.106243568732067],
    [new Date('2016/05/08 10:41:28'), 884, 2.3089923722622316, 0.8427153138054303],
    [new Date('2016/05/08 10:41:38'), 885, 2.312129515144402, 1.1293714375812607],
    [new Date('2016/05/08 10:42:02'), 891, 2.3576860687675305, 6.8334830434692995],
    [new Date('2016/05/08 10:42:18'), 890, 2.358577447742916, 0.20056026946169428],
    [new Date('2016/05/08 10:43:09'), 887, 2.409377607549934, 3.585893633436563],
    [new Date('2016/05/08 10:43:23'), 898, 2.4308120243874125, 5.511707186780199],
    [new Date('2016/05/08 10:43:38'), 894, 2.4417885290674604, 2.6343611232115207],
    [new Date('2016/05/08 10:44:26'), 893, 2.459012306116428, 1.2917832786725814],
    [new Date('2016/05/08 10:44:41'), 900, 2.4657124882776373, 1.6080437186901968],
    [new Date('2016/05/08 10:44:57'), 906, 2.472681510067173, 1.5680299026454985],
    [new Date('2016/05/08 10:45:13'), 909, 2.47497780397607, 0.516666129501792],
    [new Date('2016/05/08 10:47:05'), 907, 2.547853765636329, 2.342441624794037],
    [new Date('2016/05/08 10:47:16'), 906, 2.5570448373946824, 3.0079871209157365],
    [new Date('2016/05/08 10:47:46'), 909, 2.5597290845154097, 0.32210965448726914],
    [new Date('2016/05/08 10:48:53'), 925, 2.5797508676810392, 1.075797304421893],
    [new Date('2016/05/08 10:49:12'), 926, 2.5816417680353454, 0.35827585660538697],
    [new Date('2016/05/08 10:49:48'), 919, 2.609444232784866, 2.780246474952035],
    [new Date('2016/05/08 10:50:20'), 924, 2.657254971684366, 5.378708126193755],
    [new Date('2016/05/08 10:50:39'), 942, 2.68004464182082, 4.318042762696632],
    [new Date('2016/05/08 10:50:59'), 923, 2.704169205275054, 4.342421421762129],
    [new Date('2016/05/08 10:51:19'), 933, 2.7095494596494216, 0.9684457873861734],
    [new Date('2016/05/08 10:51:39'), 933, 2.7123682474700264, 0.5073818077088567],
    [new Date('2016/05/08 10:52:55'), 953, 2.7486954826944743, 1.7207637737896353],
    [new Date('2016/05/08 10:53:53'), 936, 2.7729979162434084, 1.508426909933848],
    [new Date('2016/05/08 10:54:21'), 929, 2.7804955739310766, 0.9639845598430785],
    [new Date('2016/05/08 10:55:17'), 953, 2.825352480283675, 2.883658265524191],
    [new Date('2016/05/08 10:55:52'), 961, 2.829382773392078, 0.4145444340071706],
    [new Date('2016/05/08 10:56:17'), 969, 2.8561308946722628, 3.8517294643465654],
    [new Date('2016/05/08 10:56:48'), 989, 2.900101849176611, 5.106304394053374],
    [new Date('2016/05/08 10:57:59'), 962, 2.9269520558211592, 1.3614189284559748],
    [new Date('2016/05/08 10:58:12'), 965, 2.936033926763973, 2.5149796457022604],
    [new Date('2016/05/08 10:59:36'), 977, 2.9633655663938563, 1.171355984137866],
    [new Date('2016/05/08 11:00:06'), 970, 2.979466843921483, 1.932153303315177],
    [new Date('2016/05/08 11:02:57'), 986, 3.0417982212145813, 1.3122395219599652],
    [new Date('2016/05/08 11:03:34'), 986, 3.0422539274470637, 0.04433898478207791],
    [new Date('2016/05/08 11:04:14'), 986, 3.053080938466829, 0.9744309917789037],
    [new Date('2016/05/08 11:04:58'), 989, 3.069898369598807, 1.3759716380709186],
    [new Date('2016/05/08 11:05:43'), 995, 3.0847064596093317, 1.1846472008419835],
    [new Date('2016/05/08 11:07:03'), 995, 3.086313415910143, 0.07231303353650147],
    [new Date('2016/05/08 11:08:07'), 1005, 3.1366370504356036, 2.8307044420571725],
    [new Date('2016/05/08 11:08:50'), 1001, 3.1555651443455166, 1.5846776296671337],
    [new Date('2016/05/08 11:09:31'), 1012, 3.183752061584813, 2.4749488307675],
    [new Date('2016/05/08 11:10:14'), 1032, 3.21837713103503, 2.898843023739133],
    [new Date('2016/05/08 11:10:55'), 1020, 3.233415736905693, 1.3204629544972177],
    [new Date('2016/05/08 11:11:32'), 1024, 3.2399990069321616, 0.6405343809537148],
    [new Date('2016/05/08 11:14:21'), 1036, 3.3098371546787217, 1.4876765200450672],
    [new Date('2016/05/08 11:14:51'), 1036, 3.31194697033077, 0.2531778782457661],
    [new Date('2016/05/08 11:18:55'), 1045, 3.336082759211815, 0.3561018031629616],
    [new Date('2016/05/08 11:19:47'), 1043, 3.3422393780573714, 0.4262274585385119],
    [new Date('2016/05/08 11:20:40'), 1051, 3.3483058771632526, 0.41206409021079304],
    [new Date('2016/05/08 11:21:35'), 1054, 3.352094833603351, 0.24800442153371613],
    [new Date('2016/05/08 11:22:32'), 1058, 3.392365043077743, 2.543381651014244],
    [new Date('2016/05/08 11:23:32'), 1072, 3.4006056432801404, 0.49443601214383515],
    [new Date('2016/05/08 11:25:01'), 1090, 3.468871830966434, 2.7613289401197365],
    [new Date('2016/05/08 11:25:20'), 1092, 3.494812128693213, 4.915003779810739],
    [new Date('2016/05/08 11:26:04'), 1107, 3.5107994478059905, 1.3080533819545146],
    [new Date('2016/05/08 11:26:49'), 1107, 3.534122875033506, 1.8658741782012513],
    [new Date('2016/05/08 11:29:41'), 1119, 3.596833417539892, 1.312546238505754],
    [new Date('2016/05/08 11:30:18'), 1119, 3.6124012620862116, 1.5147091991013586],
    [new Date('2016/05/08 11:30:59'), 1141, 3.624113579110394, 1.0283985679769665],
    [new Date('2016/05/08 11:32:27'), 1149, 3.629312903907478, 0.21269965078980319],
    [new Date('2016/05/08 11:33:14'), 1148, 3.637307128207202, 0.61232356338314],
    [new Date('2016/05/08 11:34:08'), 1149, 3.650106468003947, 0.8532893197829958],
    [new Date('2016/05/08 11:35:01'), 1157, 3.6602212183994025, 0.6870396495026511],
    [new Date('2016/05/08 11:35:58'), 1188, 3.6898090320323162, 1.8687040189208712],
    [new Date('2016/05/08 11:53:50'), 1178, 3.7273751546158613, 0.12615488927309962],
    [new Date('2016/05/08 11:57:59'), 1187, 3.7311593420717664, 0.05471114394079554],
    [new Date('2016/05/08 11:58:59'), 1177, 3.734655816710088, 0.20978847829931124],
    [new Date('2016/05/08 12:04:01'), 1178, 3.737104344795842, 0.029187752015612117],
    [new Date('2016/05/08 12:12:08'), 1179, 3.738059297223582, 0.007059196591094809],
    [new Date('2016/05/08 12:13:06'), 1193, 3.7470346630648006, 0.5570916729032159],
    [new Date('2016/05/08 12:14:12'), 1173, 3.773448880410431, 1.4407754915798388],
    [new Date('2016/05/08 12:15:14'), 1171, 3.775322993745779, 0.10881948398796026],
    [new Date('2016/05/08 12:16:20'), 1161, 3.794502947347177, 1.0461792873489988],
    [new Date('2016/05/08 12:17:11'), 1161, 3.7970632385301313, 0.1807264364438051],
    [new Date('2016/05/08 12:18:07'), 1139, 3.8354603173342503, 2.4683836374076624],
    [new Date('2016/05/08 12:20:58'), 1130, 3.855690264451124, 0.425893623513132],
    [new Date('2016/05/08 12:21:56'), 1129, 3.8766869657990775, 1.3032435319419142],
    [new Date('2016/05/08 12:22:55'), 1090, 3.935872891357375, 3.6113446103367854],
    [new Date('2016/05/08 12:26:04'), 1101, 3.994946201186254, 1.1252059015024638],
    [new Date('2016/05/08 12:26:49'), 1071, 4.02434911978473, 2.3522334878780473],
    [new Date('2016/05/08 12:28:29'), 1088, 4.0394939201992885, 0.5452128149241188],
    [new Date('2016/05/08 12:29:09'), 1093, 4.078782333910161, 3.535957233978537],
    [new Date('2016/05/08 12:29:51'), 1093, 4.123995010773095, 3.875372302537159],
    [new Date('2016/05/08 12:30:24'), 1087, 4.145489160572837, 2.3448163417900085],
    [new Date('2016/05/08 12:31:25'), 1106, 4.19078832542417, 2.6733933354884853],
    [new Date('2016/05/08 12:31:54'), 1117, 4.201805062780471, 1.3675949821614661],
    [new Date('2016/05/08 12:33:25'), 1117, 4.209373437692281, 0.2994082382694218],
    [new Date('2016/05/08 12:33:59'), 1120, 4.248508610940786, 4.143724226312298],
    [new Date('2016/05/08 12:35:04'), 1102, 4.28864226820295, 2.2227871714429415],
    [new Date('2016/05/08 12:35:25'), 1102, 4.312981455298565, 4.172432073533909],
    [new Date('2016/05/08 12:35:49'), 1098, 4.3281000009666855, 2.2677818502181606],
    [new Date('2016/05/08 12:36:12'), 1087, 4.346199504389705, 2.832965753168231],
    [new Date('2016/05/08 12:36:36'), 1086, 4.3527772860700535, 0.9866672520523242],
    [new Date('2016/05/08 12:37:02'), 1072, 4.378934913561132, 3.6218253449185656],
    [new Date('2016/05/08 12:37:28'), 1057, 4.398479299626775, 2.7061457629352508],
    [new Date('2016/05/08 12:37:55'), 1065, 4.413523007959435, 2.005827777688045],
    [new Date('2016/05/08 12:38:23'), 1063, 4.426726185054749, 1.6975513408259744],
    [new Date('2016/05/08 12:38:49'), 1061, 4.453505343693176, 3.7078835037822264],
    [new Date('2016/05/08 12:39:19'), 1064, 4.456301619442314, 0.3355530898965965],
    [new Date('2016/05/08 12:39:52'), 1054, 4.484047844312422, 3.0268608949208295],
    [new Date('2016/05/08 12:40:22'), 1077, 4.502989290031056, 2.272973486236113],
    [new Date('2016/05/08 12:40:56'), 1065, 4.507529479803226, 0.48072597587680754],
    [new Date('2016/05/08 12:41:29'), 1043, 4.531005322872971, 2.561001062154007],
    [new Date('2016/05/08 12:42:06'), 1035, 4.536002757689365, 0.48623690105454975],
    [new Date('2016/05/08 12:42:41'), 1027, 4.539460280410899, 0.3556309085005703],
    [new Date('2016/05/08 12:43:21'), 1031, 4.542290257112883, 0.2546979031786056],
    [new Date('2016/05/08 12:44:49'), 1032, 4.543245209540623, 0.03906623568026332],
    [new Date('2016/05/08 12:45:36'), 1033, 4.544131509392183, 0.06788679714076849],
    [new Date('2016/05/08 12:46:27'), 1034, 4.545461807844858, 0.0939034201888479],
    [new Date('2016/05/08 12:47:20'), 1006, 4.60840954043637, 4.275695043951798],
    [new Date('2016/05/08 12:48:18'), 1023, 4.668841754059024, 3.750964983475042],
    [new Date('2016/05/08 12:49:03'), 1012, 4.69232644149948, 1.8787749952365365],
    [new Date('2016/05/08 12:49:36'), 999, 4.709922583488605, 1.9195791260863682],
    [new Date('2016/05/08 12:50:41'), 1003, 4.7310933672686994, 1.1725357170514161],
    [new Date('2016/05/08 12:51:14'), 1003, 4.732014633127755, 0.10050173007874867],
    [new Date('2016/05/08 12:53:52'), 983, 4.788417850017483, 1.2851365873608842],
    [new Date('2016/05/08 12:54:36'), 977, 4.8083007060469605, 1.6267791296845382],
    [new Date('2016/05/08 12:55:15'), 983, 4.847437032850831, 3.6125840126649553],
    [new Date('2016/05/08 12:56:01'), 966, 4.867367060609786, 1.5597413028747735],
    [new Date('2016/05/08 12:56:41'), 966, 4.8911292306718614, 2.1385953055867963],
    [new Date('2016/05/08 12:58:19'), 965, 4.930144247937928, 1.4332047158963244],
    [new Date('2016/05/08 12:59:25'), 958, 4.93728540186364, 0.3895174868570367],
    [new Date('2016/05/08 13:00:00'), 954, 5.027185261193475, 9.246842673925897],
    [new Date('2016/05/08 13:00:37'), 963, 5.062946114804042, 3.4794344053524577],
    [new Date('2016/05/08 13:00:55'), 951, 5.071850276516922, 1.7808323425760215],
    [new Date('2016/05/08 13:01:22'), 945, 5.08125690708581, 1.2542174091850553],
    [new Date('2016/05/08 13:01:37'), 938, 5.089287192349165, 1.9272684632051782],
    [new Date('2016/05/08 13:01:56'), 932, 5.102541899893793, 2.5114182716138065],
    [new Date('2016/05/08 13:03:03'), 909, 5.149974958148511, 2.5486419360744],
    [new Date('2016/05/08 13:03:26'), 919, 5.18366587833165, 5.273361419969521],
    [new Date('2016/05/08 13:03:39'), 920, 5.186465381174475, 0.7752469410900481],
    [new Date('2016/05/08 13:03:51'), 913, 5.198347986011722, 3.564781451174045],
    [new Date('2016/05/08 13:04:02'), 913, 5.207003797021231, 2.832810875839135],
    [new Date('2016/05/08 13:04:09'), 911, 5.2087916124515266, 0.9194479355806042],
    [new Date('2016/05/08 13:04:29'), 905, 5.224956970185707, 2.9097643921523355],
    [new Date('2016/05/08 13:04:45'), 897, 5.2494011003671295, 5.499929290820167],
    [new Date('2016/05/08 13:05:13'), 896, 5.2752045937403365, 3.3175920051266448],
    [new Date('2016/05/08 13:05:27'), 897, 5.2890105078409455, 3.5500921972994033],
    [new Date('2016/05/08 13:05:52'), 892, 5.323377762665729, 4.948884694768714],
    [new Date('2016/05/08 13:06:16'), 905, 5.342246135047616, 2.8302558572831273],
    [new Date('2016/05/08 13:06:56'), 902, 5.372429279434981, 2.7164829948628655],
    [new Date('2016/05/08 13:07:19'), 874, 5.40972971598558, 5.838329199224077],
    [new Date('2016/05/08 13:07:42'), 886, 5.441172153827668, 4.921425053544262],
    [new Date('2016/05/08 13:08:11'), 870, 5.474232472452372, 4.104039553411561],
    [new Date('2016/05/08 13:08:28'), 890, 5.4917553413213565, 3.7107251722554624],
    [new Date('2016/05/08 13:08:42'), 898, 5.498956929220948, 1.8518368884664247],
    [new Date('2016/05/08 13:08:57'), 897, 5.5009546380312, 0.4794501144606974],
    [new Date('2016/05/08 13:09:16'), 900, 5.519737639235135, 3.5588844386401988],
    [new Date('2016/05/08 13:09:38'), 899, 5.523235404800079, 0.5723616379000103],
    [new Date('2016/05/08 13:10:01'), 898, 5.523564568301403, 0.051521243685405206],
    [new Date('2016/05/08 13:10:28'), 907, 5.55263441452309, 3.8759794962249456],
    [new Date('2016/05/08 13:10:45'), 904, 5.564797143233267, 2.5756366680373564],
    [new Date('2016/05/08 13:11:02'), 896, 5.578627234119402, 2.9287251288287637],
    [new Date('2016/05/08 13:11:22'), 883, 5.595040361858014, 2.9543629929500286],
    [new Date('2016/05/08 13:12:43'), 857, 5.663697982172634, 3.051449791760873],
    [new Date('2016/05/08 13:12:59'), 854, 5.680236059732221, 3.7210674509070265],
    [new Date('2016/05/08 13:13:08'), 854, 5.6903324939778415, 4.038573698248279],
    [new Date('2016/05/08 13:13:20'), 852, 5.702638396684274, 3.6917708119299344],
    [new Date('2016/05/08 13:13:34'), 852, 5.713164768919944, 2.7067814320292007],
    [new Date('2016/05/08 13:13:46'), 848, 5.726126735547062, 3.8885899881356614],
    [new Date('2016/05/08 13:14:03'), 845, 5.746115571423683, 4.232929950343216],
    [new Date('2016/05/08 13:14:25'), 840, 5.769988247493285, 3.9064379022985616],
    [new Date('2016/05/08 13:15:00'), 840, 5.818805536338893, 5.021206852691085],
    [new Date('2016/05/08 13:15:49'), 835, 5.865047346159916, 3.3973574562384994],
    [new Date('2016/05/08 13:15:53'), 835, 5.871847182156103, 6.119852396568644],
    [new Date('2016/05/08 13:16:08'), 835, 5.882211913093923, 2.4875354250766315],
    [new Date('2016/05/08 13:17:05'), 829, 5.956779979462372, 4.7095620864283525],
    [new Date('2016/05/08 13:17:13'), 828, 5.960452771591003, 1.6527564578840486],
    [new Date('2016/05/08 13:17:42'), 812, 6.01583838220807, 6.875455111084243],
    [new Date('2016/05/08 13:17:58'), 816, 6.03741680091911, 4.8551442099840045],
    [new Date('2016/05/08 13:18:12'), 820, 6.054878503251363, 4.490152028293493],
    [new Date('2016/05/08 13:19:07'), 816, 6.130775379502635, 4.967795536446949],
    [new Date('2016/05/08 13:19:20'), 813, 6.143803006664155, 3.607650598574513],
    [new Date('2016/05/08 13:19:32'), 808, 6.1554689778611404, 3.499791359095848],
    [new Date('2016/05/08 13:19:42'), 811, 6.160441054018981, 1.7899474168225553],
    [new Date('2016/05/08 13:20:39'), 798, 6.241974660609564, 5.149490942563142],
    [new Date('2016/05/08 13:21:32'), 808, 6.305654400517838, 4.3254162956563285],
    [new Date('2016/05/08 13:21:44'), 804, 6.3214210688066075, 4.7300004866307335],
    [new Date('2016/05/08 13:22:57'), 790, 6.411188608689055, 4.426892377764527],
    [new Date('2016/05/08 13:23:05'), 791, 6.4201715162220845, 4.042308389863469],
    [new Date('2016/05/08 13:23:09'), 791, 6.422967791971223, 2.5166481742244735],
    [new Date('2016/05/08 13:23:24'), 788, 6.434308418090903, 2.7217502687233446],
    [new Date('2016/05/08 13:23:43'), 777, 6.463676308694539, 5.564442430162534],
    [new Date('2016/05/08 13:24:03'), 786, 6.480361143031267, 3.0032701806111115],
    [new Date('2016/05/08 13:24:23'), 779, 6.505436870988543, 4.513631032309659],
    [new Date('2016/05/08 13:24:42'), 786, 6.5202845410540675, 2.8132427492573],
    [new Date('2016/05/08 13:25:23'), 781, 6.523054864726688, 0.24324793223008392],
    [new Date('2016/05/08 13:25:47'), 770, 6.550819632082877, 4.164715103428392],
    [new Date('2016/05/08 13:26:12'), 795, 6.585433747616257, 4.984432636806663],
    [new Date('2016/05/08 13:27:18'), 774, 6.664728567828685, 4.325172011586971],
    [new Date('2016/05/08 13:27:28'), 761, 6.6782623524518145, 4.872162464326884],
    [new Date('2016/05/08 13:27:34'), 762, 6.684362247425617, 3.65993698428143],
    [new Date('2016/05/08 13:27:45'), 764, 6.697658782513839, 4.351593301599896],
    [new Date('2016/05/08 13:27:57'), 766, 6.713936020274873, 4.8831713283101195],
    [new Date('2016/05/08 13:28:18'), 783, 6.738403779036955, 4.194472930642697],
    [new Date('2016/05/08 13:28:45'), 767, 6.774270267512925, 4.782198463462714],
    [new Date('2016/05/08 13:29:19'), 745, 6.7899778403504465, 1.663154771031708],
    [new Date('2016/05/08 13:29:36'), 746, 6.812231094601539, 4.712453841407862],
    [new Date('2016/05/08 13:29:57'), 753, 6.834837982206124, 3.875466446500272],
    [new Date('2016/05/08 13:30:19'), 756, 6.862298485527236, 4.493536907091154],
    [new Date('2016/05/08 13:30:31'), 759, 6.8792634501887555, 5.089489398455675],
    [new Date('2016/05/08 13:30:44'), 751, 6.898048374107528, 5.2019789313523725],
    [new Date('2016/05/08 13:31:07'), 723, 6.929504305634613, 4.9235371085872],
    [new Date('2016/05/08 13:31:30'), 729, 6.962875597728099, 5.22333267550223],
    [new Date('2016/05/08 13:32:05'), 722, 7.004155553095937, 4.245938266406127],
    [new Date('2016/05/08 13:32:21'), 718, 7.02571764687414, 4.851471100095766],
    [new Date('2016/05/08 13:32:26'), 718, 7.032738301314697, 5.0548711972009714],
    [new Date('2016/05/08 13:32:30'), 722, 7.037743859845177, 4.505002677431848],
    [new Date('2016/05/08 13:32:38'), 722, 7.041972041576084, 1.902681778908232],
    [new Date('2016/05/08 13:32:54'), 712, 7.066107456360351, 5.430468326460086],
    [new Date('2016/05/08 13:33:11'), 719, 7.086634700370138, 4.346945790307927],
    [new Date('2016/05/08 13:33:23'), 720, 7.103164859682476, 4.959047793701472],
    [new Date('2016/05/08 13:33:36'), 716, 7.116618683788063, 3.7256743677011643],
    [new Date('2016/05/08 13:33:51'), 712, 7.132389360236474, 3.784962347618512],
    [new Date('2016/05/08 13:34:07'), 709, 7.154714517298127, 5.023160338871889],
    [new Date('2016/05/08 13:34:24'), 718, 7.182396234918113, 5.862010790114713],
    [new Date('2016/05/08 13:34:40'), 713, 7.200532118287525, 4.080573758117588],
    [new Date('2016/05/08 13:34:53'), 700, 7.2085624035508795, 2.2237713036982822],
    [new Date('2016/05/08 13:35:10'), 699, 7.211392380252864, 0.5992891839496601],
    [new Date('2016/05/08 13:35:39'), 694, 7.251034267432302, 4.921061856757776],
    [new Date('2016/05/08 13:35:59'), 687, 7.276685447796841, 4.61721246561713],
    [new Date('2016/05/08 13:36:17'), 671, 7.29379456319324, 3.421823079279718],
    [new Date('2016/05/08 13:36:31'), 683, 7.32473067926269, 7.955001275001685],
    [new Date('2016/05/08 13:37:16'), 672, 7.3632608571028175, 3.082414227210178],
    [new Date('2016/05/08 13:37:33'), 682, 7.375048097449788, 2.496121485240855],
    [new Date('2016/05/08 13:37:41'), 693, 7.3802595641394975, 2.3451600103689487],
    [new Date('2016/05/08 13:37:56'), 691, 7.39134085882998, 2.659510725715898],
    [new Date('2016/05/08 13:38:13'), 684, 7.426535708348423, 7.453026956846695],
    [new Date('2016/05/08 13:39:00'), 658, 7.4692543170827665, 3.2720636477369673],
    [new Date('2016/05/08 13:39:18'), 638, 7.48986145956199, 4.121428495844611],
    [new Date('2016/05/08 13:39:37'), 643, 7.521073033664203, 5.913771935156241],
    [new Date('2016/05/08 13:39:58'), 632, 7.545612829460724, 4.2068221365465135],
    [new Date('2016/05/08 13:40:13'), 638, 7.555662653498201, 2.411957768994415],
    [new Date('2016/05/08 13:40:28'), 650, 7.5774484536613596, 5.2285920391579985],
    [new Date('2016/05/08 13:40:44'), 655, 7.609841108095506, 7.2883472476829665],
    [new Date('2016/05/08 13:41:43'), 625, 7.69103864526545, 4.954425996810119],
    [new Date('2016/05/08 13:41:53'), 618, 7.696329208348831, 1.90460271001729],
    [new Date('2016/05/08 13:41:59'), 617, 7.702230483571878, 3.5407651338278914],
    [new Date('2016/05/08 13:42:37'), 608, 7.7442894135514235, 3.9845302085885828],
    [new Date('2016/05/08 13:42:44'), 610, 7.754164318591127, 5.078522591847592],
    [new Date('2016/05/08 13:43:03'), 604, 7.781777945230418, 5.232055573760421],
    [new Date('2016/05/08 13:43:15'), 608, 7.796771454122622, 4.49805266766107],
    [new Date('2016/05/08 13:43:42'), 605, 7.834908754638572, 5.084973402126664],
    [new Date('2016/05/08 13:43:49'), 605, 7.839432008920866, 2.32624505946566],
    [new Date('2016/05/08 13:43:55'), 601, 7.842430831136352, 1.7992933292913846],
    [new Date('2016/05/08 13:44:19'), 602, 7.880473194639243, 5.706354525433569],
    [new Date('2016/05/08 13:44:30'), 599, 7.89468801541633, 4.652123163410442],
    [new Date('2016/05/08 13:44:41'), 598, 7.9029138106558126, 2.69207844201243],
    [new Date('2016/05/08 13:44:49'), 600, 7.90869529371565, 2.6016673769265783],
    [new Date('2016/05/08 13:45:00'), 605, 7.910032362178728, 0.4375860424618789],
    [new Date('2016/05/08 13:46:36'), 630, 7.9198674128708335, 0.36881440095396395],
    [new Date('2016/05/08 13:49:11'), 540, 8.357456119980817, 10.163350616747998],
    [new Date('2016/05/08 13:49:31'), 543, 8.366441540004466, 1.6173756042567367],
    [new Date('2016/05/08 13:49:45'), 549, 8.569017452080214, 52.09094881947807],
    [new Date('2016/05/08 13:50:09'), 552, 8.74896926474145, 26.99277189918554],
    [new Date('2016/05/08 13:50:52'), 511, 8.81402591391535, 5.446603186651972],
    [new Date('2016/05/08 13:51:11'), 513, 8.917824254692746, 19.667054042033037],
    [new Date('2016/05/08 13:51:27'), 505, 9.019985385333642, 22.986254394201417],
    [new Date('2016/05/08 13:51:50'), 505, 9.143271874586409, 19.297015709128544],
    [new Date('2016/05/08 13:52:12'), 483, 9.258592448954332, 18.87063944202382],
    [new Date('2016/05/08 13:52:13'), 483, 9.263971864171808, 19.365894782915614],
    [new Date('2016/05/08 13:52:24'), 482, 9.31588186324545, 16.988726969555703],
    [new Date('2016/05/08 13:52:44'), 459, 9.52068845007485, 36.865185629292206],
    [new Date('2016/05/08 13:53:07'), 450, 9.693690515288234, 27.0785841203556],
    [new Date('2016/05/08 13:53:37'), 447, 9.909920121364191, 25.94755272911485],
    [new Date('2016/05/08 13:54:42'), 368, 10.365151577740013, 25.21281912235321],
    [new Date('2016/05/08 13:54:48'), 370, 10.385767481387303, 12.369542188373993],
    [new Date('2016/05/08 13:55:08'), 366, 10.53744728239829, 27.302364181977623],
    [new Date('2016/05/08 13:55:19'), 365, 10.61183580619875, 24.345335061968488],
    [new Date('2016/05/08 13:55:22'), 365, 10.623005561124886, 13.403705911364082],
    [new Date('2016/05/08 13:55:32'), 362, 10.647239536978534, 8.724231307313188],
    [new Date('2016/05/08 13:55:40'), 358, 10.693958534212157, 21.02354875513093],
    [new Date('2016/05/08 13:55:58'), 373, 10.85025863784625, 31.260020726818677],
    [new Date('2016/05/08 13:56:16'), 362, 10.987387667893163, 27.425806009382537],
    [new Date('2016/05/08 13:56:18'), 361, 10.994844268683158, 13.421881421992477],
    [new Date('2016/05/08 13:56:23'), 358, 11.040655188287458, 32.983862115096066],
    [new Date('2016/05/08 13:56:37'), 340, 11.194491444806108, 39.55789453336713],
    [new Date('2016/05/08 13:57:07'), 309, 11.26097554624333, 7.978092172466708],
    [new Date('2016/05/08 13:57:14'), 313, 11.35039287852798, 45.98605660353431],
    [new Date('2016/05/08 13:57:28'), 307, 11.486361113439886, 34.963260405918255],
    [new Date('2016/05/08 13:57:53'), 318, 11.658320297738499, 24.762122539000387],
    [new Date('2016/05/08 13:57:59'), 301, 11.68357273816923, 15.151464258439582],
    [new Date('2016/05/08 13:58:19'), 292, 11.836183305637139, 27.46990214422347],
    [new Date('2016/05/08 13:58:26'), 291, 11.850710694781577, 7.471228702853764],
    [new Date('2016/05/08 13:58:40'), 290, 11.907513736140205, 14.606496349361182],
    [new Date('2016/05/08 13:58:46'), 290, 11.936417715453812, 17.342387588164414],
    [new Date('2016/05/08 13:59:01'), 281, 12.028196405661241, 22.02688564978282],
    [new Date('2016/05/08 13:59:55'), 229, 12.231489646815769, 13.552882743635156],
    [new Date('2016/05/08 14:00:04'), 235, 12.283721647531879, 20.892800286443983],
    [new Date('2016/05/08 14:00:08'), 235, 12.29543357909862, 10.540738410068373],
    [new Date('2016/05/08 14:00:24'), 233, 12.395923284038796, 22.61018361153946],
    [new Date('2016/05/08 14:00:47'), 235, 12.66074566882889, 41.450460228014585],
    [new Date('2016/05/08 14:00:58'), 234, 12.815395571529184, 50.61269542918695],
    [new Date('2016/05/08 14:01:15'), 227, 12.932467696924197, 24.791744201297032],
    [new Date('2016/05/08 14:01:20'), 226, 12.95166153276162, 13.819561802944248],
    [new Date('2016/05/08 14:01:25'), 227, 12.996083567032079, 31.98386467473095],
    [new Date('2016/05/08 14:01:35'), 226, 13.107869353062513, 40.24288297095667],
    [new Date('2016/05/08 14:01:49'), 226, 13.245019122233535, 35.26708350111956],
    [new Date('2016/05/08 14:02:00'), 218, 13.332217841046619, 28.537762520645984],
    [new Date('2016/05/08 14:02:05'), 216, 13.343051104792387, 7.799949896953251],
    [new Date('2016/05/08 14:02:10'), 214, 13.382661205952958, 28.519272835611545],
    [new Date('2016/05/08 14:02:28'), 203, 13.526744797528337, 28.81671831507571],
    [new Date('2016/05/08 14:02:55'), 210, 13.539511646260552, 1.7022464976285878],
    [new Date('2016/05/08 14:03:16'), 201, 13.65926188298187, 20.528612009368732],
    [new Date('2016/05/08 14:03:39'), 208, 13.716094561465024, 8.895549675624034],
    [new Date('2016/05/08 14:03:57'), 208, 13.71791490804584, 0.3640693161632949],
    [new Date('2016/05/08 14:05:01'), 210, 13.767715507406958, 2.8012837140628926],
    [new Date('2016/05/08 14:05:22'), 214, 13.779102217673268, 1.9520074742245217],
    [new Date('2016/05/08 14:05:33'), 208, 13.78667655522282, 2.4788741071261895],
    [new Date('2016/05/08 14:09:15'), 207, 13.80692167156755, 0.3282991839685718],
    [new Date('2016/05/08 14:10:17'), 208, 13.828916387235049, 1.2771125226290703],
    [new Date('2016/05/08 14:10:42'), 206, 13.833201838144497, 0.6171049309605846],
  ];
  return var_array;
}

// npoint = 421


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

