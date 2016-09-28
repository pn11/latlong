function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)'],
    [new Date('2016/05/08 10:02:58'), 622, 0.0],
    [new Date('2016/05/08 10:03:31'), 618, 0.0036070572941531323],
    [new Date('2016/05/08 10:04:45'), 620, 0.006053740914044177],
    [new Date('2016/05/08 10:05:15'), 620, 0.03755957748354614],
    [new Date('2016/05/08 10:05:41'), 625, 0.05905813756747489],
    [new Date('2016/05/08 10:06:04'), 627, 0.08243917507226804],
    [new Date('2016/05/08 10:06:26'), 629, 0.10904921615638512],
    [new Date('2016/05/08 10:06:49'), 638, 0.13746678661961642],
    [new Date('2016/05/08 10:07:12'), 648, 0.15417946710735042],
    [new Date('2016/05/08 10:07:44'), 649, 0.18888645066164692],
    [new Date('2016/05/08 10:07:58'), 655, 0.2045133412736219],
    [new Date('2016/05/08 10:08:23'), 639, 0.23829552467684906],
    [new Date('2016/05/08 10:08:35'), 642, 0.2510006957381726],
    [new Date('2016/05/08 10:08:47'), 649, 0.26702468241529664],
    [new Date('2016/05/08 10:08:57'), 652, 0.2733484207371737],
    [new Date('2016/05/08 10:09:13'), 658, 0.28759908431732206],
    [new Date('2016/05/08 10:09:29'), 660, 0.2974051738493741],
    [new Date('2016/05/08 10:09:51'), 660, 0.3226979853421166],
    [new Date('2016/05/08 10:10:10'), 658, 0.35009841670872655],
    [new Date('2016/05/08 10:10:36'), 666, 0.37694626932569725],
    [new Date('2016/05/08 10:10:57'), 662, 0.39528858362967345],
    [new Date('2016/05/08 10:11:20'), 668, 0.4208003476591572],
    [new Date('2016/05/08 10:11:40'), 666, 0.44999401428410474],
    [new Date('2016/05/08 10:12:05'), 683, 0.4815161818768466],
    [new Date('2016/05/08 10:12:34'), 689, 0.5156382300209414],
    [new Date('2016/05/08 10:12:49'), 694, 0.5309322351272335],
    [new Date('2016/05/08 10:12:53'), 694, 0.536261059109033],
    [new Date('2016/05/08 10:13:18'), 692, 0.5528204152358825],
    [new Date('2016/05/08 10:13:57'), 704, 0.6089216323085463],
    [new Date('2016/05/08 10:14:10'), 703, 0.6206969936371792],
    [new Date('2016/05/08 10:14:15'), 703, 0.627103713961726],
    [new Date('2016/05/08 10:14:29'), 705, 0.6373563336458448],
    [new Date('2016/05/08 10:14:40'), 710, 0.6446834569936558],
    [new Date('2016/05/08 10:15:21'), 713, 0.6606707761064332],
    [new Date('2016/05/08 10:15:43'), 717, 0.6704648884494506],
    [new Date('2016/05/08 10:16:14'), 722, 0.7133978081340527],
    [new Date('2016/05/08 10:16:43'), 723, 0.7418048916463459],
    [new Date('2016/05/08 10:17:05'), 729, 0.761857316737882],
    [new Date('2016/05/08 10:17:25'), 733, 0.7802183271102174],
    [new Date('2016/05/08 10:17:52'), 725, 0.8296602847792154],
    [new Date('2016/05/08 10:18:11'), 734, 0.8606535528451832],
    [new Date('2016/05/08 10:18:25'), 735, 0.8776660842874688],
    [new Date('2016/05/08 10:18:34'), 733, 0.8892925162757781],
    [new Date('2016/05/08 10:18:36'), 733, 0.8924181255053655],
    [new Date('2016/05/08 10:18:46'), 735, 0.9043155382788479],
    [new Date('2016/05/08 10:18:58'), 734, 0.9119687371578841],
    [new Date('2016/05/08 10:19:28'), 736, 0.9580529008749271],
    [new Date('2016/05/08 10:19:37'), 737, 0.9697910147133659],
    [new Date('2016/05/08 10:19:44'), 735, 0.9778302899434469],
    [new Date('2016/05/08 10:20:01'), 747, 0.992978965042554],
    [new Date('2016/05/08 10:20:15'), 757, 1.0111300266559362],
    [new Date('2016/05/08 10:20:32'), 755, 1.0233826194036804],
    [new Date('2016/05/08 10:20:49'), 758, 1.0335538958734551],
    [new Date('2016/05/08 10:21:08'), 766, 1.0623483343042162],
    [new Date('2016/05/08 10:21:50'), 768, 1.0825514844112036],
    [new Date('2016/05/08 10:22:14'), 777, 1.1021737892167454],
    [new Date('2016/05/08 10:22:33'), 784, 1.1229749953463293],
    [new Date('2016/05/08 10:22:53'), 781, 1.1364646762731947],
    [new Date('2016/05/08 10:23:16'), 778, 1.1586758966635933],
    [new Date('2016/05/08 10:23:47'), 791, 1.2010249270777709],
    [new Date('2016/05/08 10:24:08'), 773, 1.2031326018711732],
    [new Date('2016/05/08 10:24:24'), 792, 1.2427855341345377],
    [new Date('2016/05/08 10:24:45'), 769, 1.2554094300504595],
    [new Date('2016/05/08 10:25:08'), 805, 1.2778750902075384],
    [new Date('2016/05/08 10:25:38'), 800, 1.3134549596310305],
    [new Date('2016/05/08 10:26:09'), 805, 1.330740483974859],
    [new Date('2016/05/08 10:26:24'), 807, 1.3422729563687485],
    [new Date('2016/05/08 10:26:41'), 807, 1.3467490555533919],
    [new Date('2016/05/08 10:27:03'), 813, 1.3930243398850615],
    [new Date('2016/05/08 10:27:31'), 829, 1.422305248080639],
    [new Date('2016/05/08 10:27:46'), 812, 1.442925749851035],
    [new Date('2016/05/08 10:28:07'), 826, 1.4699597740737496],
    [new Date('2016/05/08 10:28:22'), 818, 1.4815990128571899],
    [new Date('2016/05/08 10:28:37'), 815, 1.5054027539119592],
    [new Date('2016/05/08 10:28:53'), 813, 1.5261865902367273],
    [new Date('2016/05/08 10:29:09'), 835, 1.5421354592089649],
    [new Date('2016/05/08 10:29:24'), 828, 1.5622730301234662],
    [new Date('2016/05/08 10:29:41'), 810, 1.5888297461200072],
    [new Date('2016/05/08 10:29:57'), 820, 1.6090773152425295],
    [new Date('2016/05/08 10:30:13'), 820, 1.6334913228003296],
    [new Date('2016/05/08 10:30:29'), 823, 1.6489266577713082],
    [new Date('2016/05/08 10:30:45'), 825, 1.6697170094735103],
    [new Date('2016/05/08 10:31:01'), 840, 1.6976629713505194],
    [new Date('2016/05/08 10:31:18'), 842, 1.7200541557199631],
    [new Date('2016/05/08 10:31:34'), 834, 1.7409916455050862],
    [new Date('2016/05/08 10:31:49'), 828, 1.7570342159471],
    [new Date('2016/05/08 10:32:05'), 844, 1.7712226520308048],
    [new Date('2016/05/08 10:32:21'), 844, 1.7899666758246398],
    [new Date('2016/05/08 10:33:23'), 845, 1.861886954981927],
    [new Date('2016/05/08 10:33:49'), 845, 1.887574716594764],
    [new Date('2016/05/08 10:34:09'), 862, 1.9166360201022452],
    [new Date('2016/05/08 10:34:27'), 856, 1.9430091864986059],
    [new Date('2016/05/08 10:34:29'), 856, 1.94356325123313],
    [new Date('2016/05/08 10:34:53'), 851, 1.9673100272866793],
    [new Date('2016/05/08 10:35:14'), 856, 1.9974846449181947],
    [new Date('2016/05/08 10:35:29'), 852, 2.015705958237845],
    [new Date('2016/05/08 10:35:48'), 855, 2.0299566218179934],
    [new Date('2016/05/08 10:36:13'), 869, 2.0606968626657847],
    [new Date('2016/05/08 10:36:21'), 868, 2.0671680865066246],
    [new Date('2016/05/08 10:36:45'), 872, 2.095957193766365],
    [new Date('2016/05/08 10:37:11'), 855, 2.119316595751467],
    [new Date('2016/05/08 10:37:40'), 872, 2.1545291424024513],
    [new Date('2016/05/08 10:38:04'), 870, 2.181490928613542],
    [new Date('2016/05/08 10:38:25'), 874, 2.2132206511104338],
    [new Date('2016/05/08 10:38:46'), 871, 2.231590510873775],
    [new Date('2016/05/08 10:39:01'), 884, 2.2525831266118947],
    [new Date('2016/05/08 10:39:16'), 881, 2.254699351845247],
    [new Date('2016/05/08 10:39:32'), 882, 2.2818382121507232],
    [new Date('2016/05/08 10:41:28'), 884, 2.3089923722622316],
    [new Date('2016/05/08 10:41:38'), 885, 2.312129515144402],
    [new Date('2016/05/08 10:42:02'), 891, 2.3576860687675305],
    [new Date('2016/05/08 10:42:18'), 890, 2.358577447742916],
    [new Date('2016/05/08 10:43:09'), 887, 2.409377607549934],
    [new Date('2016/05/08 10:43:23'), 898, 2.4308120243874125],
    [new Date('2016/05/08 10:43:38'), 894, 2.4417885290674604],
    [new Date('2016/05/08 10:44:26'), 893, 2.459012306116428],
    [new Date('2016/05/08 10:44:41'), 900, 2.4657124882776373],
    [new Date('2016/05/08 10:44:57'), 906, 2.472681510067173],
    [new Date('2016/05/08 10:45:13'), 909, 2.47497780397607],
    [new Date('2016/05/08 10:47:05'), 907, 2.547853765636329],
    [new Date('2016/05/08 10:47:16'), 906, 2.5570448373946824],
    [new Date('2016/05/08 10:47:46'), 909, 2.5597290845154097],
    [new Date('2016/05/08 10:48:53'), 925, 2.5797508676810392],
    [new Date('2016/05/08 10:49:12'), 926, 2.5816417680353454],
    [new Date('2016/05/08 10:49:48'), 919, 2.609444232784866],
    [new Date('2016/05/08 10:50:20'), 924, 2.657254971684366],
    [new Date('2016/05/08 10:50:39'), 942, 2.68004464182082],
    [new Date('2016/05/08 10:50:59'), 923, 2.704169205275054],
    [new Date('2016/05/08 10:51:19'), 933, 2.7095494596494216],
    [new Date('2016/05/08 10:51:39'), 933, 2.7123682474700264],
    [new Date('2016/05/08 10:52:55'), 953, 2.7486954826944743],
    [new Date('2016/05/08 10:53:53'), 936, 2.7729979162434084],
    [new Date('2016/05/08 10:54:21'), 929, 2.7804955739310766],
    [new Date('2016/05/08 10:55:17'), 953, 2.825352480283675],
    [new Date('2016/05/08 10:55:52'), 961, 2.829382773392078],
    [new Date('2016/05/08 10:56:17'), 969, 2.8561308946722628],
    [new Date('2016/05/08 10:56:48'), 989, 2.900101849176611],
    [new Date('2016/05/08 10:57:59'), 962, 2.9269520558211592],
    [new Date('2016/05/08 10:58:12'), 965, 2.936033926763973],
    [new Date('2016/05/08 10:59:36'), 977, 2.9633655663938563],
    [new Date('2016/05/08 11:00:06'), 970, 2.979466843921483],
    [new Date('2016/05/08 11:02:57'), 986, 3.0417982212145813],
    [new Date('2016/05/08 11:03:34'), 986, 3.0422539274470637],
    [new Date('2016/05/08 11:04:14'), 986, 3.053080938466829],
    [new Date('2016/05/08 11:04:58'), 989, 3.069898369598807],
    [new Date('2016/05/08 11:05:43'), 995, 3.0847064596093317],
    [new Date('2016/05/08 11:07:03'), 995, 3.086313415910143],
    [new Date('2016/05/08 11:08:07'), 1005, 3.1366370504356036],
    [new Date('2016/05/08 11:08:50'), 1001, 3.1555651443455166],
    [new Date('2016/05/08 11:09:31'), 1012, 3.183752061584813],
    [new Date('2016/05/08 11:10:14'), 1032, 3.21837713103503],
    [new Date('2016/05/08 11:10:55'), 1020, 3.233415736905693],
    [new Date('2016/05/08 11:11:32'), 1024, 3.2399990069321616],
    [new Date('2016/05/08 11:14:21'), 1036, 3.3098371546787217],
    [new Date('2016/05/08 11:14:51'), 1036, 3.31194697033077],
    [new Date('2016/05/08 11:18:55'), 1045, 3.336082759211815],
    [new Date('2016/05/08 11:19:47'), 1043, 3.3422393780573714],
    [new Date('2016/05/08 11:20:40'), 1051, 3.3483058771632526],
    [new Date('2016/05/08 11:21:35'), 1054, 3.352094833603351],
    [new Date('2016/05/08 11:22:32'), 1058, 3.392365043077743],
    [new Date('2016/05/08 11:23:32'), 1072, 3.4006056432801404],
    [new Date('2016/05/08 11:25:01'), 1090, 3.468871830966434],
    [new Date('2016/05/08 11:25:20'), 1092, 3.494812128693213],
    [new Date('2016/05/08 11:26:04'), 1107, 3.5107994478059905],
    [new Date('2016/05/08 11:26:49'), 1107, 3.534122875033506],
    [new Date('2016/05/08 11:29:41'), 1119, 3.596833417539892],
    [new Date('2016/05/08 11:30:18'), 1119, 3.6124012620862116],
    [new Date('2016/05/08 11:30:59'), 1141, 3.624113579110394],
    [new Date('2016/05/08 11:32:27'), 1149, 3.629312903907478],
    [new Date('2016/05/08 11:33:14'), 1148, 3.637307128207202],
    [new Date('2016/05/08 11:34:08'), 1149, 3.650106468003947],
    [new Date('2016/05/08 11:35:01'), 1157, 3.6602212183994025],
    [new Date('2016/05/08 11:35:58'), 1188, 3.6898090320323162],
    [new Date('2016/05/08 11:53:50'), 1178, 3.7273751546158613],
    [new Date('2016/05/08 11:57:59'), 1187, 3.7311593420717664],
    [new Date('2016/05/08 11:58:59'), 1177, 3.734655816710088],
    [new Date('2016/05/08 12:04:01'), 1178, 3.737104344795842],
    [new Date('2016/05/08 12:12:08'), 1179, 3.738059297223582],
    [new Date('2016/05/08 12:13:06'), 1193, 3.7470346630648006],
    [new Date('2016/05/08 12:14:12'), 1173, 3.773448880410431],
    [new Date('2016/05/08 12:15:14'), 1171, 3.775322993745779],
    [new Date('2016/05/08 12:16:20'), 1161, 3.794502947347177],
    [new Date('2016/05/08 12:17:11'), 1161, 3.7970632385301313],
    [new Date('2016/05/08 12:18:07'), 1139, 3.8354603173342503],
    [new Date('2016/05/08 12:20:58'), 1130, 3.855690264451124],
    [new Date('2016/05/08 12:21:56'), 1129, 3.8766869657990775],
    [new Date('2016/05/08 12:22:55'), 1090, 3.935872891357375],
    [new Date('2016/05/08 12:26:04'), 1101, 3.994946201186254],
    [new Date('2016/05/08 12:26:49'), 1071, 4.02434911978473],
    [new Date('2016/05/08 12:28:29'), 1088, 4.0394939201992885],
    [new Date('2016/05/08 12:29:09'), 1093, 4.078782333910161],
    [new Date('2016/05/08 12:29:51'), 1093, 4.123995010773095],
    [new Date('2016/05/08 12:30:24'), 1087, 4.145489160572837],
    [new Date('2016/05/08 12:31:25'), 1106, 4.19078832542417],
    [new Date('2016/05/08 12:31:54'), 1117, 4.201805062780471],
    [new Date('2016/05/08 12:33:25'), 1117, 4.209373437692281],
    [new Date('2016/05/08 12:33:59'), 1120, 4.248508610940786],
    [new Date('2016/05/08 12:35:04'), 1102, 4.28864226820295],
    [new Date('2016/05/08 12:35:25'), 1102, 4.312981455298565],
    [new Date('2016/05/08 12:35:49'), 1098, 4.3281000009666855],
    [new Date('2016/05/08 12:36:12'), 1087, 4.346199504389705],
    [new Date('2016/05/08 12:36:36'), 1086, 4.3527772860700535],
    [new Date('2016/05/08 12:37:02'), 1072, 4.378934913561132],
    [new Date('2016/05/08 12:37:28'), 1057, 4.398479299626775],
    [new Date('2016/05/08 12:37:55'), 1065, 4.413523007959435],
    [new Date('2016/05/08 12:38:23'), 1063, 4.426726185054749],
    [new Date('2016/05/08 12:38:49'), 1061, 4.453505343693176],
    [new Date('2016/05/08 12:39:19'), 1064, 4.456301619442314],
    [new Date('2016/05/08 12:39:52'), 1054, 4.484047844312422],
    [new Date('2016/05/08 12:40:22'), 1077, 4.502989290031056],
    [new Date('2016/05/08 12:40:56'), 1065, 4.507529479803226],
    [new Date('2016/05/08 12:41:29'), 1043, 4.531005322872971],
    [new Date('2016/05/08 12:42:06'), 1035, 4.536002757689365],
    [new Date('2016/05/08 12:42:41'), 1027, 4.539460280410899],
    [new Date('2016/05/08 12:43:21'), 1031, 4.542290257112883],
    [new Date('2016/05/08 12:44:49'), 1032, 4.543245209540623],
    [new Date('2016/05/08 12:45:36'), 1033, 4.544131509392183],
    [new Date('2016/05/08 12:46:27'), 1034, 4.545461807844858],
    [new Date('2016/05/08 12:47:20'), 1006, 4.60840954043637],
    [new Date('2016/05/08 12:48:18'), 1023, 4.668841754059024],
    [new Date('2016/05/08 12:49:03'), 1012, 4.69232644149948],
    [new Date('2016/05/08 12:49:36'), 999, 4.709922583488605],
    [new Date('2016/05/08 12:50:41'), 1003, 4.7310933672686994],
    [new Date('2016/05/08 12:51:14'), 1003, 4.732014633127755],
    [new Date('2016/05/08 12:53:52'), 983, 4.788417850017483],
    [new Date('2016/05/08 12:54:36'), 977, 4.8083007060469605],
    [new Date('2016/05/08 12:55:15'), 983, 4.847437032850831],
    [new Date('2016/05/08 12:56:01'), 966, 4.867367060609786],
    [new Date('2016/05/08 12:56:41'), 966, 4.8911292306718614],
    [new Date('2016/05/08 12:58:19'), 965, 4.930144247937928],
    [new Date('2016/05/08 12:59:25'), 958, 4.93728540186364],
    [new Date('2016/05/08 13:00:00'), 954, 5.027185261193475],
    [new Date('2016/05/08 13:00:37'), 963, 5.062946114804042],
    [new Date('2016/05/08 13:00:55'), 951, 5.071850276516922],
    [new Date('2016/05/08 13:01:22'), 945, 5.08125690708581],
    [new Date('2016/05/08 13:01:37'), 938, 5.089287192349165],
    [new Date('2016/05/08 13:01:56'), 932, 5.102541899893793],
    [new Date('2016/05/08 13:03:03'), 909, 5.149974958148511],
    [new Date('2016/05/08 13:03:26'), 919, 5.18366587833165],
    [new Date('2016/05/08 13:03:39'), 920, 5.186465381174475],
    [new Date('2016/05/08 13:03:51'), 913, 5.198347986011722],
    [new Date('2016/05/08 13:04:02'), 913, 5.207003797021231],
    [new Date('2016/05/08 13:04:09'), 911, 5.2087916124515266],
    [new Date('2016/05/08 13:04:29'), 905, 5.224956970185707],
    [new Date('2016/05/08 13:04:45'), 897, 5.2494011003671295],
    [new Date('2016/05/08 13:05:13'), 896, 5.2752045937403365],
    [new Date('2016/05/08 13:05:27'), 897, 5.2890105078409455],
    [new Date('2016/05/08 13:05:52'), 892, 5.323377762665729],
    [new Date('2016/05/08 13:06:16'), 905, 5.342246135047616],
    [new Date('2016/05/08 13:06:56'), 902, 5.372429279434981],
    [new Date('2016/05/08 13:07:19'), 874, 5.40972971598558],
    [new Date('2016/05/08 13:07:42'), 886, 5.441172153827668],
    [new Date('2016/05/08 13:08:11'), 870, 5.474232472452372],
    [new Date('2016/05/08 13:08:28'), 890, 5.4917553413213565],
    [new Date('2016/05/08 13:08:42'), 898, 5.498956929220948],
    [new Date('2016/05/08 13:08:57'), 897, 5.5009546380312],
    [new Date('2016/05/08 13:09:16'), 900, 5.519737639235135],
    [new Date('2016/05/08 13:09:38'), 899, 5.523235404800079],
    [new Date('2016/05/08 13:10:01'), 898, 5.523564568301403],
    [new Date('2016/05/08 13:10:28'), 907, 5.55263441452309],
    [new Date('2016/05/08 13:10:45'), 904, 5.564797143233267],
    [new Date('2016/05/08 13:11:02'), 896, 5.578627234119402],
    [new Date('2016/05/08 13:11:22'), 883, 5.595040361858014],
    [new Date('2016/05/08 13:12:43'), 857, 5.663697982172634],
    [new Date('2016/05/08 13:12:59'), 854, 5.680236059732221],
    [new Date('2016/05/08 13:13:08'), 854, 5.6903324939778415],
    [new Date('2016/05/08 13:13:20'), 852, 5.702638396684274],
    [new Date('2016/05/08 13:13:34'), 852, 5.713164768919944],
    [new Date('2016/05/08 13:13:46'), 848, 5.726126735547062],
    [new Date('2016/05/08 13:14:03'), 845, 5.746115571423683],
    [new Date('2016/05/08 13:14:25'), 840, 5.769988247493285],
    [new Date('2016/05/08 13:15:00'), 840, 5.818805536338893],
    [new Date('2016/05/08 13:15:49'), 835, 5.865047346159916],
    [new Date('2016/05/08 13:15:53'), 835, 5.871847182156103],
    [new Date('2016/05/08 13:16:08'), 835, 5.882211913093923],
    [new Date('2016/05/08 13:17:05'), 829, 5.956779979462372],
    [new Date('2016/05/08 13:17:13'), 828, 5.960452771591003],
    [new Date('2016/05/08 13:17:42'), 812, 6.01583838220807],
    [new Date('2016/05/08 13:17:58'), 816, 6.03741680091911],
    [new Date('2016/05/08 13:18:12'), 820, 6.054878503251363],
    [new Date('2016/05/08 13:19:07'), 816, 6.130775379502635],
    [new Date('2016/05/08 13:19:20'), 813, 6.143803006664155],
    [new Date('2016/05/08 13:19:32'), 808, 6.1554689778611404],
    [new Date('2016/05/08 13:19:42'), 811, 6.160441054018981],
    [new Date('2016/05/08 13:20:39'), 798, 6.241974660609564],
    [new Date('2016/05/08 13:21:32'), 808, 6.305654400517838],
    [new Date('2016/05/08 13:21:44'), 804, 6.3214210688066075],
    [new Date('2016/05/08 13:22:57'), 790, 6.411188608689055],
    [new Date('2016/05/08 13:23:05'), 791, 6.4201715162220845],
    [new Date('2016/05/08 13:23:09'), 791, 6.422967791971223],
    [new Date('2016/05/08 13:23:24'), 788, 6.434308418090903],
    [new Date('2016/05/08 13:23:43'), 777, 6.463676308694539],
    [new Date('2016/05/08 13:24:03'), 786, 6.480361143031267],
    [new Date('2016/05/08 13:24:23'), 779, 6.505436870988543],
    [new Date('2016/05/08 13:24:42'), 786, 6.5202845410540675],
    [new Date('2016/05/08 13:25:23'), 781, 6.523054864726688],
    [new Date('2016/05/08 13:25:47'), 770, 6.550819632082877],
    [new Date('2016/05/08 13:26:12'), 795, 6.585433747616257],
    [new Date('2016/05/08 13:27:18'), 774, 6.664728567828685],
    [new Date('2016/05/08 13:27:28'), 761, 6.6782623524518145],
    [new Date('2016/05/08 13:27:34'), 762, 6.684362247425617],
    [new Date('2016/05/08 13:27:45'), 764, 6.697658782513839],
    [new Date('2016/05/08 13:27:57'), 766, 6.713936020274873],
    [new Date('2016/05/08 13:28:18'), 783, 6.738403779036955],
    [new Date('2016/05/08 13:28:45'), 767, 6.774270267512925],
    [new Date('2016/05/08 13:29:19'), 745, 6.7899778403504465],
    [new Date('2016/05/08 13:29:36'), 746, 6.812231094601539],
    [new Date('2016/05/08 13:29:57'), 753, 6.834837982206124],
    [new Date('2016/05/08 13:30:19'), 756, 6.862298485527236],
    [new Date('2016/05/08 13:30:31'), 759, 6.8792634501887555],
    [new Date('2016/05/08 13:30:44'), 751, 6.898048374107528],
    [new Date('2016/05/08 13:31:07'), 723, 6.929504305634613],
    [new Date('2016/05/08 13:31:30'), 729, 6.962875597728099],
    [new Date('2016/05/08 13:32:05'), 722, 7.004155553095937],
    [new Date('2016/05/08 13:32:21'), 718, 7.02571764687414],
    [new Date('2016/05/08 13:32:26'), 718, 7.032738301314697],
    [new Date('2016/05/08 13:32:30'), 722, 7.037743859845177],
    [new Date('2016/05/08 13:32:38'), 722, 7.041972041576084],
    [new Date('2016/05/08 13:32:54'), 712, 7.066107456360351],
    [new Date('2016/05/08 13:33:11'), 719, 7.086634700370138],
    [new Date('2016/05/08 13:33:23'), 720, 7.103164859682476],
    [new Date('2016/05/08 13:33:36'), 716, 7.116618683788063],
    [new Date('2016/05/08 13:33:51'), 712, 7.132389360236474],
    [new Date('2016/05/08 13:34:07'), 709, 7.154714517298127],
    [new Date('2016/05/08 13:34:24'), 718, 7.182396234918113],
    [new Date('2016/05/08 13:34:40'), 713, 7.200532118287525],
    [new Date('2016/05/08 13:34:53'), 700, 7.2085624035508795],
    [new Date('2016/05/08 13:35:10'), 699, 7.211392380252864],
    [new Date('2016/05/08 13:35:39'), 694, 7.251034267432302],
    [new Date('2016/05/08 13:35:59'), 687, 7.276685447796841],
    [new Date('2016/05/08 13:36:17'), 671, 7.29379456319324],
    [new Date('2016/05/08 13:36:31'), 683, 7.32473067926269],
    [new Date('2016/05/08 13:37:16'), 672, 7.3632608571028175],
    [new Date('2016/05/08 13:37:33'), 682, 7.375048097449788],
    [new Date('2016/05/08 13:37:41'), 693, 7.3802595641394975],
    [new Date('2016/05/08 13:37:56'), 691, 7.39134085882998],
    [new Date('2016/05/08 13:38:13'), 684, 7.426535708348423],
    [new Date('2016/05/08 13:39:00'), 658, 7.4692543170827665],
    [new Date('2016/05/08 13:39:18'), 638, 7.48986145956199],
    [new Date('2016/05/08 13:39:37'), 643, 7.521073033664203],
    [new Date('2016/05/08 13:39:58'), 632, 7.545612829460724],
    [new Date('2016/05/08 13:40:13'), 638, 7.555662653498201],
    [new Date('2016/05/08 13:40:28'), 650, 7.5774484536613596],
    [new Date('2016/05/08 13:40:44'), 655, 7.609841108095506],
    [new Date('2016/05/08 13:41:43'), 625, 7.69103864526545],
    [new Date('2016/05/08 13:41:53'), 618, 7.696329208348831],
    [new Date('2016/05/08 13:41:59'), 617, 7.702230483571878],
    [new Date('2016/05/08 13:42:37'), 608, 7.7442894135514235],
    [new Date('2016/05/08 13:42:44'), 610, 7.754164318591127],
    [new Date('2016/05/08 13:43:03'), 604, 7.781777945230418],
    [new Date('2016/05/08 13:43:15'), 608, 7.796771454122622],
    [new Date('2016/05/08 13:43:42'), 605, 7.834908754638572],
    [new Date('2016/05/08 13:43:49'), 605, 7.839432008920866],
    [new Date('2016/05/08 13:43:55'), 601, 7.842430831136352],
    [new Date('2016/05/08 13:44:19'), 602, 7.880473194639243],
    [new Date('2016/05/08 13:44:30'), 599, 7.89468801541633],
    [new Date('2016/05/08 13:44:41'), 598, 7.9029138106558126],
    [new Date('2016/05/08 13:44:49'), 600, 7.90869529371565],
    [new Date('2016/05/08 13:45:00'), 605, 7.910032362178728],
    [new Date('2016/05/08 13:46:36'), 630, 7.9198674128708335],
    [new Date('2016/05/08 13:49:11'), 540, 8.357456119980817],
    [new Date('2016/05/08 13:49:31'), 543, 8.366441540004466],
    [new Date('2016/05/08 13:49:45'), 549, 8.569017452080214],
    [new Date('2016/05/08 13:50:09'), 552, 8.74896926474145],
    [new Date('2016/05/08 13:50:52'), 511, 8.81402591391535],
    [new Date('2016/05/08 13:51:11'), 513, 8.917824254692746],
    [new Date('2016/05/08 13:51:27'), 505, 9.019985385333642],
    [new Date('2016/05/08 13:51:50'), 505, 9.143271874586409],
    [new Date('2016/05/08 13:52:12'), 483, 9.258592448954332],
    [new Date('2016/05/08 13:52:13'), 483, 9.263971864171808],
    [new Date('2016/05/08 13:52:24'), 482, 9.31588186324545],
    [new Date('2016/05/08 13:52:44'), 459, 9.52068845007485],
    [new Date('2016/05/08 13:53:07'), 450, 9.693690515288234],
    [new Date('2016/05/08 13:53:37'), 447, 9.909920121364191],
    [new Date('2016/05/08 13:54:42'), 368, 10.365151577740013],
    [new Date('2016/05/08 13:54:48'), 370, 10.385767481387303],
    [new Date('2016/05/08 13:55:08'), 366, 10.53744728239829],
    [new Date('2016/05/08 13:55:19'), 365, 10.61183580619875],
    [new Date('2016/05/08 13:55:22'), 365, 10.623005561124886],
    [new Date('2016/05/08 13:55:32'), 362, 10.647239536978534],
    [new Date('2016/05/08 13:55:40'), 358, 10.693958534212157],
    [new Date('2016/05/08 13:55:58'), 373, 10.85025863784625],
    [new Date('2016/05/08 13:56:16'), 362, 10.987387667893163],
    [new Date('2016/05/08 13:56:18'), 361, 10.994844268683158],
    [new Date('2016/05/08 13:56:23'), 358, 11.040655188287458],
    [new Date('2016/05/08 13:56:37'), 340, 11.194491444806108],
    [new Date('2016/05/08 13:57:07'), 309, 11.26097554624333],
    [new Date('2016/05/08 13:57:14'), 313, 11.35039287852798],
    [new Date('2016/05/08 13:57:28'), 307, 11.486361113439886],
    [new Date('2016/05/08 13:57:53'), 318, 11.658320297738499],
    [new Date('2016/05/08 13:57:59'), 301, 11.68357273816923],
    [new Date('2016/05/08 13:58:19'), 292, 11.836183305637139],
    [new Date('2016/05/08 13:58:26'), 291, 11.850710694781577],
    [new Date('2016/05/08 13:58:40'), 290, 11.907513736140205],
    [new Date('2016/05/08 13:58:46'), 290, 11.936417715453812],
    [new Date('2016/05/08 13:59:01'), 281, 12.028196405661241],
    [new Date('2016/05/08 13:59:55'), 229, 12.231489646815769],
    [new Date('2016/05/08 14:00:04'), 235, 12.283721647531879],
    [new Date('2016/05/08 14:00:08'), 235, 12.29543357909862],
    [new Date('2016/05/08 14:00:24'), 233, 12.395923284038796],
    [new Date('2016/05/08 14:00:47'), 235, 12.66074566882889],
    [new Date('2016/05/08 14:00:58'), 234, 12.815395571529184],
    [new Date('2016/05/08 14:01:15'), 227, 12.932467696924197],
    [new Date('2016/05/08 14:01:20'), 226, 12.95166153276162],
    [new Date('2016/05/08 14:01:25'), 227, 12.996083567032079],
    [new Date('2016/05/08 14:01:35'), 226, 13.107869353062513],
    [new Date('2016/05/08 14:01:49'), 226, 13.245019122233535],
    [new Date('2016/05/08 14:02:00'), 218, 13.332217841046619],
    [new Date('2016/05/08 14:02:05'), 216, 13.343051104792387],
    [new Date('2016/05/08 14:02:10'), 214, 13.382661205952958],
    [new Date('2016/05/08 14:02:28'), 203, 13.526744797528337],
    [new Date('2016/05/08 14:02:55'), 210, 13.539511646260552],
    [new Date('2016/05/08 14:03:16'), 201, 13.65926188298187],
    [new Date('2016/05/08 14:03:39'), 208, 13.716094561465024],
    [new Date('2016/05/08 14:03:57'), 208, 13.71791490804584],
    [new Date('2016/05/08 14:05:01'), 210, 13.767715507406958],
    [new Date('2016/05/08 14:05:22'), 214, 13.779102217673268],
    [new Date('2016/05/08 14:05:33'), 208, 13.78667655522282],
    [new Date('2016/05/08 14:09:15'), 207, 13.80692167156755],
    [new Date('2016/05/08 14:10:17'), 208, 13.828916387235049],
    [new Date('2016/05/08 14:10:42'), 206, 13.833201838144497],
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

