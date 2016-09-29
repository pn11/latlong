function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)', 'Velocity (km/h)'],
    [new Date('2015/11/03 11:49:12'), 17, 0.0, 0.0],
    [new Date('2015/11/03 11:49:42'), -10, 0.004743458105854146, 0.5692149727024974],
    [new Date('2015/11/03 11:50:13'), -9, 0.005086062340339243, 0.03978629819826928],
    [new Date('2015/11/03 11:50:46'), -7, 0.005869628202335839, 0.08547991221781057],
    [new Date('2015/11/03 11:58:32'), -8, 0.006785980608442291, 0.007079117300393192],
    [new Date('2015/11/03 12:14:37'), 14, 0.01188358871843592, 0.019016983622774163],
    [new Date('2015/11/03 12:16:39'), 32, 0.02690657630037792, 0.44330127290976395],
    [new Date('2015/11/03 12:20:35'), 18, 0.035188162532013845, 0.12632928149953104],
    [new Date('2015/11/03 12:24:36'), 14, 0.038081245691745015, 0.04321617997938679],
    [new Date('2015/11/03 12:34:47'), 7, 0.04499629113481191, 0.04074331193951036],
    [new Date('2015/11/03 12:39:15'), -7, 0.10297642760424643, 0.7788376540670306],
    [new Date('2015/11/03 12:40:05'), 38, 0.13793394271611245, 2.5169410880543532],
    [new Date('2015/11/03 12:41:50'), -1, 0.1626645072002653, 0.8479050680280977],
    [new Date('2015/11/03 12:42:26'), 8, 0.1677559122211694, 0.5091405020904096],
    [new Date('2015/11/03 12:42:58'), 4, 0.16886810823404508, 0.1251220514485143],
    [new Date('2015/11/03 12:44:12'), 1, 0.17075900858835127, 0.091989746966248],
    [new Date('2015/11/03 12:45:38'), -2, 0.18549374840783, 0.616803062210738],
    [new Date('2015/11/03 12:49:52'), -3, 0.19949061756035708, 0.19838082263424203],
    [new Date('2015/11/03 12:50:53'), -4, 0.3367019930615146, 8.09772052137979],
    [new Date('2015/11/03 12:51:55'), -7, 0.384168161277445, 2.756100089957249],
    [new Date('2015/11/03 12:52:26'), -8, 0.3864367641522704, 0.2634506564313361],
    [new Date('2015/11/03 12:53:03'), -6, 0.416061784050857, 2.8824343685111278],
    [new Date('2015/11/03 12:56:01'), -4, 0.4197456221957933, 0.07450459169534186],
    [new Date('2015/11/03 12:58:25'), -5, 0.4197456221957933, 0.0],
    [new Date('2015/11/03 13:08:18'), -6, 0.42029147811007805, 0.003313796444224284],
    [new Date('2015/11/03 13:15:22'), 1, 0.43955574683274223, 0.16356454575846965],
    [new Date('2015/11/03 13:16:10'), 4, 0.7129355633015291, 20.50348623515901],
    [new Date('2015/11/03 13:17:12'), 0, 1.1298743597832368, 24.209349473131414],
    [new Date('2015/11/03 13:17:43'), 1, 1.3431556085369498, 24.76814501656021],
    [new Date('2015/11/03 13:18:10'), 3, 1.5312956586914819, 25.085340020604267],
    [new Date('2015/11/03 13:19:08'), 3, 1.919390175428577, 24.088625176785214],
    [new Date('2015/11/03 13:19:34'), 1, 2.095242008642826, 24.348715368126754],
    [new Date('2015/11/03 13:20:09'), -5, 2.287563184583398, 19.781606668173144],
    [new Date('2015/11/03 13:20:37'), 6, 2.3997161986039517, 14.419673231214048],
    [new Date('2015/11/03 13:21:05'), 23, 2.5174732623281963, 15.140193907402876],
    [new Date('2015/11/03 13:21:38'), 14, 2.6324260848438077, 12.540307910793954],
    [new Date('2015/11/03 13:22:08'), 17, 2.7502118982727555, 14.13429761147374],
    [new Date('2015/11/03 13:22:41'), 15, 2.8667332981420874, 12.711425440290755],
    [new Date('2015/11/03 13:23:34'), 16, 3.070456034608345, 13.837770778840156],
    [new Date('2015/11/03 13:24:08'), 2, 3.3568726860375446, 30.326468974856432],
    [new Date('2015/11/03 13:24:40'), -7, 3.633115820909542, 31.077352673099735],
    [new Date('2015/11/03 13:25:05'), -4, 3.816829114242445, 26.454714239938003],
    [new Date('2015/11/03 13:25:38'), -6, 4.037641647763013, 24.088640020425565],
    [new Date('2015/11/03 13:26:08'), 4, 4.225395933772514, 22.53051432114022],
    [new Date('2015/11/03 13:26:34'), -5, 4.3919224677044015, 23.057520082876675],
    [new Date('2015/11/03 13:27:04'), -3, 4.579909844164955, 22.55848517526635],
    [new Date('2015/11/03 13:27:34'), -1, 4.780168483675243, 24.03103674123459],
    [new Date('2015/11/03 13:28:11'), -6, 4.997933588027178, 21.187956099107154],
    [new Date('2015/11/03 13:28:34'), 2, 5.143699046375719, 22.81546304585859],
    [new Date('2015/11/03 13:29:10'), 5, 5.300265980945272, 15.656693456955303],
    [new Date('2015/11/03 13:30:05'), 15, 5.428028565410042, 8.36264189223944],
    [new Date('2015/11/03 13:30:36'), 18, 5.584958537648956, 18.224125808389985],
    [new Date('2015/11/03 13:31:11'), 13, 5.746141135505825, 16.578781493849377],
    [new Date('2015/11/03 13:31:37'), 18, 5.869089358095115, 17.023600050824825],
    [new Date('2015/11/03 13:32:05'), -18, 6.105885304328448, 30.44519308714271],
    [new Date('2015/11/03 13:32:36'), 0, 6.372409616740043, 30.951210473604707],
    [new Date('2015/11/03 13:33:03'), -2, 6.580484347419429, 27.743297423918087],
    [new Date('2015/11/03 13:33:31'), 0, 6.772514602715319, 24.689604252328753],
    [new Date('2015/11/03 13:34:20'), -3, 7.1089868744593225, 24.720411801600314],
    [new Date('2015/11/03 13:34:49'), 0, 7.288080835460891, 22.232353779504994],
    [new Date('2015/11/03 13:35:18'), 0, 7.464031068839264, 21.842097936625706],
    [new Date('2015/11/03 13:35:49'), 5, 7.654414336159353, 22.109024592010282],
    [new Date('2015/11/03 13:36:19'), -6, 7.831677999354648, 21.271639583435405],
    [new Date('2015/11/03 13:37:20'), 6, 7.972934755301061, 8.336464285362105],
    [new Date('2015/11/03 13:37:53'), 0, 8.228273710188258, 27.85515871496703],
    [new Date('2015/11/03 13:38:19'), 7, 8.361178951303124, 18.40226415436604],
    [new Date('2015/11/03 13:38:54'), 5, 8.489775412365832, 13.227064566449886],
    [new Date('2015/11/03 13:39:20'), 22, 8.559649621420844, 9.674890484540125],
    [new Date('2015/11/03 13:39:55'), 17, 8.663748587017817, 10.70732217568865],
    [new Date('2015/11/03 13:40:22'), 18, 8.798870672064426, 18.016278006214534],
    [new Date('2015/11/03 13:40:51'), 14, 9.027092334922381, 28.330965044435857],
    [new Date('2015/11/03 13:41:21'), 4, 9.266541625819533, 28.73391490765819],
    [new Date('2015/11/03 13:41:47'), 5, 9.430200144135986, 22.660410228431928],
    [new Date('2015/11/03 13:42:19'), 10, 9.624798815751156, 21.892350556706642],
    [new Date('2015/11/03 13:42:50'), 1, 9.843989373758765, 25.45438738152873],
    [new Date('2015/11/03 13:43:24'), 3, 10.086982220167588, 25.7286543256401],
    [new Date('2015/11/03 13:43:48'), 10, 10.226187316039455, 20.880764380780064],
    [new Date('2015/11/03 13:44:21'), 10, 10.336233079397923, 12.004992366378273],
    [new Date('2015/11/03 13:44:50'), 11, 10.445715040485716, 13.590864135036355],
    [new Date('2015/11/03 13:45:24'), 27, 10.608252414466307, 17.20983959794494],
    [new Date('2015/11/03 13:45:56'), 21, 10.778343493402076, 19.135246380273983],
    [new Date('2015/11/03 13:46:19'), 20, 10.89196705967688, 17.78455819953435],
    [new Date('2015/11/03 13:46:57'), 22, 11.040448017060571, 14.066617015297052],
    [new Date('2015/11/03 13:47:23'), 24, 11.17608185384997, 18.780069709301515],
    [new Date('2015/11/03 13:47:52'), 23, 11.291767528143966, 14.360980257185581],
    [new Date('2015/11/03 13:48:22'), 29, 11.397283557041677, 12.661923467725343],
    [new Date('2015/11/03 13:49:29'), 40, 11.443312044357656, 2.4731724527988947],
    [new Date('2015/11/03 13:50:33'), 31, 11.478706688162985, 1.9909487140497621],
    [new Date('2015/11/03 13:51:12'), 24, 11.796081019906037, 29.296092160897093],
    [new Date('2015/11/03 13:51:53'), -3, 12.1294498503212, 29.271409499867882],
    [new Date('2015/11/03 13:52:20'), 0, 12.338905848429496, 27.927466414439483],
    [new Date('2015/11/03 13:52:49'), 8, 12.55163886563814, 26.40823661900403],
    [new Date('2015/11/03 13:53:23'), -5, 12.779864860563771, 24.16510534506683],
    [new Date('2015/11/03 13:53:50'), 1, 12.968551168424794, 25.1581743814697],
    [new Date('2015/11/03 13:54:14'), 1, 13.150455578014025, 27.285661438384718],
    [new Date('2015/11/03 13:54:48'), 1, 13.385344778263454, 24.870621202880695],
    [new Date('2015/11/03 13:55:23'), -5, 13.642488599777419, 26.449078784293665],
    [new Date('2015/11/03 13:55:45'), -2, 13.771553891276074, 21.11977497250707],
    [new Date('2015/11/03 13:56:19'), -10, 13.895590018928981, 13.133237045601934],
    [new Date('2015/11/03 13:56:50'), 16, 13.978489134974016, 9.626994121358894],
    [new Date('2015/11/03 13:57:19'), 20, 14.077154762046959, 12.248146809054948],
    [new Date('2015/11/03 13:57:51'), 20, 14.164823862739254, 9.862773827883245],
    [new Date('2015/11/03 13:58:20'), 13, 14.258726465795293, 11.656874862128966],
    [new Date('2015/11/03 13:58:53'), 19, 14.497983691571191, 26.100788266461638],
    [new Date('2015/11/03 13:59:22'), 18, 14.635129313168283, 17.02497371550109],
    [new Date('2015/11/03 13:59:56'), 7, 14.709505212696476, 7.875095244161469],
    [new Date('2015/11/03 14:00:21'), 22, 14.78271098298423, 10.541630921436768],
    [new Date('2015/11/03 14:00:51'), 24, 14.899491912260965, 14.013711513208165],
    [new Date('2015/11/03 14:01:18'), 26, 15.130798042451607, 30.840817358752243],
    [new Date('2015/11/03 14:01:56'), 10, 15.397975432134634, 25.311542180497348],
    [new Date('2015/11/03 14:02:18'), -6, 15.629859262566633, 37.94462679796348],
    [new Date('2015/11/03 14:02:50'), -10, 15.846412116757431, 24.362196096464846],
    [new Date('2015/11/03 14:03:21'), 0, 15.957301954209326, 12.87752951054256],
    [new Date('2015/11/03 14:03:56'), -5, 16.106811257142436, 15.37809973026283],
    [new Date('2015/11/03 14:04:57'), 1, 16.49430441742874, 22.868448803781888],
    [new Date('2015/11/03 14:05:22'), 1, 16.674034672191134, 25.88115668578491],
    [new Date('2015/11/03 14:05:48'), -1, 16.859236120774092, 25.64327749610174],
    [new Date('2015/11/03 14:06:43'), -2, 17.13944122770099, 18.34069790794234],
    [new Date('2015/11/03 14:07:02'), 6, 17.195706526766564, 10.66079350716183],
    [new Date('2015/11/03 14:07:37'), 11, 17.2927360418241, 9.980178691632068],
    [new Date('2015/11/03 14:08:03'), 19, 17.371801487126174, 10.947523195671995],
    [new Date('2015/11/03 14:08:32'), 15, 17.51853227914618, 18.214856940414304],
    [new Date('2015/11/03 14:09:00'), 3, 17.800332444524205, 36.23144983431761],
    [new Date('2015/11/03 14:09:36'), 0, 18.08502283099625, 28.46903864720465],
    [new Date('2015/11/03 14:09:59'), 2, 18.23100885393411, 22.84998619896942],
    [new Date('2015/11/03 14:11:14'), 9, 18.432801293871446, 9.686037116992146],
    [new Date('2015/11/03 14:11:42'), 10, 18.559153709826283, 16.245310622764826],
    [new Date('2015/11/03 14:12:04'), 13, 18.686756691192024, 20.880487859848678],
    [new Date('2015/11/03 14:12:38'), 12, 18.82583135434869, 14.72555256952955],
    [new Date('2015/11/03 14:13:10'), 7, 18.992148196370266, 18.710644727427212],
    [new Date('2015/11/03 14:13:37'), 8, 19.211282601535164, 29.217920688652914],
    [new Date('2015/11/03 14:14:11'), -5, 19.49659676372216, 30.209734819799635],
    [new Date('2015/11/03 14:14:39'), -5, 19.73679062076441, 30.882067334003594],
    [new Date('2015/11/03 14:15:09'), -3, 19.960016831944856, 26.787145341653332],
    [new Date('2015/11/03 14:15:38'), -1, 20.147811268576817, 23.312412823277928],
    [new Date('2015/11/03 14:16:13'), 2, 20.33081606135274, 18.82335011409485],
    [new Date('2015/11/03 14:16:45'), 7, 20.437023374044347, 11.94832267780585],
    [new Date('2015/11/03 14:17:10'), 3, 20.518369725344098, 11.713874587163929],
    [new Date('2015/11/03 14:17:40'), 7, 20.60986444938268, 10.979366884629734],
    [new Date('2015/11/03 14:18:43'), 20, 20.735680712280942, 7.18950073704343],
    [new Date('2015/11/03 14:19:11'), 27, 20.811669254977613, 9.769955489572077],
    [new Date('2015/11/03 14:19:43'), 34, 20.914942697031215, 11.618262231030231],
    [new Date('2015/11/03 14:20:14'), 26, 20.93939329042089, 2.839423748478534],
    [new Date('2015/11/03 14:20:40'), 23, 20.969873664757884, 4.220359523583597],
    [new Date('2015/11/03 14:21:06'), 6, 21.23986322551231, 37.38316995061281],
    [new Date('2015/11/03 14:21:44'), 2, 21.60843713882171, 34.91752862931178],
    [new Date('2015/11/03 14:22:09'), 2, 21.806293451542604, 28.491309031808775],
    [new Date('2015/11/03 14:22:41'), -2, 22.037297526317865, 25.98795841221663],
    [new Date('2015/11/03 14:23:08'), -5, 22.26432181034402, 30.269904536820682],
    [new Date('2015/11/03 14:23:44'), 0, 22.542244465389246, 27.792265504522543],
    [new Date('2015/11/03 14:24:13'), -6, 22.71487895439158, 21.430488289944776],
    [new Date('2015/11/03 14:24:38'), -2, 22.85831154879197, 20.654293593656323],
    [new Date('2015/11/03 14:25:10'), 7, 22.95497826327669, 10.875005379530936],
    [new Date('2015/11/03 14:25:40'), 12, 22.977107828609668, 2.6555478399573],
    [new Date('2015/11/03 14:36:25'), 13, 22.979999350893557, 0.01613872902636668],
    [new Date('2015/11/03 14:37:26'), 13, 22.980445040381248, 0.02630298615891071],
    [new Date('2015/11/03 14:43:42'), 32, 22.985491021305887, 0.04831258332101349],
    [new Date('2015/11/03 14:44:34'), 17, 22.98820869744973, 0.18814680995825492],
    [new Date('2015/11/03 14:45:27'), 21, 22.9909936489231, 0.1891665151723979],
    [new Date('2015/11/03 14:46:33'), 4, 23.134010802599754, 7.800935655090078],
    [new Date('2015/11/03 14:48:14'), 30, 23.555945387556086, 15.039252533096944],
    [new Date('2015/11/03 14:48:31'), 25, 23.60180161634126, 9.710730801566095],
    [new Date('2015/11/03 14:49:13'), -42, 23.77419563840849, 14.776630462905498],
    [new Date('2015/11/03 14:49:37'), 31, 23.86205100483221, 13.178304963558324],
    [new Date('2015/11/03 14:50:00'), 35, 23.92169472885886, 9.335539412866627],
    [new Date('2015/11/03 14:50:33'), 41, 24.025015240478773, 11.27132854035426],
    [new Date('2015/11/03 14:51:03'), 43, 24.12284899757975, 11.740050852117495],
    [new Date('2015/11/03 14:51:38'), 46, 24.238637064734476, 11.909629764485997],
    [new Date('2015/11/03 14:52:12'), 48, 24.346696692990744, 11.441607697722603],
    [new Date('2015/11/03 14:52:43'), 51, 24.442934479057183, 11.17600096255414],
    [new Date('2015/11/03 14:53:13'), 67, 24.573064465535545, 15.615598377403453],
    [new Date('2015/11/03 14:53:43'), 81, 24.688897595849152, 13.899975637632885],
    [new Date('2015/11/03 14:55:08'), 79, 24.754898503215255, 2.7953325472702257],
    [new Date('2015/11/03 14:55:42'), 70, 24.925485906529367, 18.062195645023667],
    [new Date('2015/11/03 14:56:19'), 75, 25.129479924154012, 19.848066579695097],
    [new Date('2015/11/03 14:56:51'), 58, 25.33912537871248, 23.585113637827853],
    [new Date('2015/11/03 14:57:20'), 53, 25.538971634175617, 24.80850067818244],
    [new Date('2015/11/03 14:58:15'), 16, 25.782010941823838, 15.908027409701837],
    [new Date('2015/11/03 14:58:44'), 62, 26.05747875896073, 34.19600488595887],
    [new Date('2015/11/03 15:01:20'), 7, 26.657951015495264, 13.857052073873868],
    [new Date('2015/11/03 15:01:56'), -5, 26.842148584448637, 18.419756895337265],
    [new Date('2015/11/03 15:02:22'), -5, 26.912852682332232, 9.78979816849798],
    [new Date('2015/11/03 15:02:56'), 6, 26.998971567577698, 9.118470202461218],
    [new Date('2015/11/03 15:03:26'), 6, 27.06869190162029, 8.36644008511133],
    [new Date('2015/11/03 15:03:55'), 24, 27.14637105907095, 9.642929890426988],
    [new Date('2015/11/03 15:04:17'), 25, 27.212389611526127, 10.80303585630158],
    [new Date('2015/11/03 15:04:46'), 24, 27.315058331858832, 12.745082524060093],
    [new Date('2015/11/03 15:05:48'), 27, 27.447447446060647, 7.68710985687944],
    [new Date('2015/11/03 15:06:15'), 30, 27.603222921076256, 20.770063335414793],
    [new Date('2015/11/03 15:06:44'), 31, 27.7376644869721, 16.689297835346256],
    [new Date('2015/11/03 15:07:15'), 28, 27.88548531898257, 17.16629016895794],
    [new Date('2015/11/03 15:07:56'), 7, 28.187287505363248, 26.499704170010702],
    [new Date('2015/11/03 15:08:25'), -9, 28.436167729067805, 30.895476046082965],
    [new Date('2015/11/03 15:08:59'), -14, 28.618385421010398, 19.293637970392307],
    [new Date('2015/11/03 15:09:25'), -1, 28.817921817818615, 27.62811648113765],
    [new Date('2015/11/03 15:10:16'), 46, 29.07257994296292, 17.97586765724516],
    [new Date('2015/11/03 15:10:43'), -6, 29.22281234303037, 20.030986675659875],
    [new Date('2015/11/03 15:11:17'), 1, 29.397204447976417, 18.46504640605212],
    [new Date('2015/11/03 15:11:47'), 1, 29.561927760358408, 19.76679748583878],
    [new Date('2015/11/03 15:12:17'), 11, 29.644805090314765, 9.945279594762658],
    [new Date('2015/11/03 15:12:47'), 3, 29.70211877979637, 6.877642737792306],
    [new Date('2015/11/03 15:13:14'), 13, 29.787193165319962, 11.343251403145986],
    [new Date('2015/11/03 15:13:47'), 3, 29.83996730732748, 5.757179128092801],
    [new Date('2015/11/03 15:14:17'), 13, 29.938103031852176, 11.776286942963502],
    [new Date('2015/11/03 15:14:50'), 42, 30.052790653050334, 12.51137685798092],
    [new Date('2015/11/03 15:15:08'), 27, 30.087595445575985, 6.960958505130196],
    [new Date('2015/11/03 15:16:31'), 35, 30.39495996175319, 13.331472990818632],
    [new Date('2015/11/03 15:16:57'), 23, 30.472919900879145, 10.794453109747554],
    [new Date('2015/11/03 15:17:26'), 7, 30.580585134415337, 13.36533933552719],
    [new Date('2015/11/03 15:18:04'), 24, 30.803810051256445, 21.14762370073657],
    [new Date('2015/11/03 15:18:29'), 24, 30.987429842231315, 26.441249900381358],
    [new Date('2015/11/03 15:18:55'), 31, 31.198235551848743, 29.188482870105336],
    [new Date('2015/11/03 15:19:28'), 21, 31.351759481418917, 16.748065044019032],
    [new Date('2015/11/03 15:20:34'), 26, 31.4368348221184, 4.640473129062727],
    [new Date('2015/11/03 15:21:13'), 17, 31.547402364384965, 10.206234670759956],
    [new Date('2015/11/03 15:22:17'), 14, 31.61332805623744, 3.708320166701754],
    [new Date('2015/11/03 15:22:47'), 43, 31.687519932238462, 8.903025120122965],
    [new Date('2015/11/03 15:23:18'), 30, 31.771139339991624, 9.71064090036725],
    [new Date('2015/11/03 15:23:41'), 38, 31.780033863241485, 1.3921862478044464],
    [new Date('2015/11/03 15:25:19'), 29, 31.834526911538735, 2.0017854476540333],
    [new Date('2015/11/03 15:25:55'), 30, 31.837277610475457, 0.2750698936720899],
    [new Date('2015/11/03 15:27:08'), 6, 32.400995021639424, 27.799762742332497],
    [new Date('2015/11/03 15:27:51'), 2, 32.74463357195612, 28.76973909628148],
    [new Date('2015/11/03 15:28:10'), 15, 32.82352009622706, 14.946920388177409],
    [new Date('2015/11/03 15:28:54'), 10, 32.961878640222295, 11.320244508701148],
    [new Date('2015/11/03 15:29:20'), 6, 33.03912658876952, 10.695869798846907],
    [new Date('2015/11/03 15:29:52'), 11, 33.27658404507404, 26.713963834258696],
    [new Date('2015/11/03 15:30:22'), 11, 33.37676698139573, 12.021952358603173],
    [new Date('2015/11/03 15:30:50'), 31, 33.45007812980056, 9.425719080620938],
    [new Date('2015/11/03 15:31:22'), 36, 33.533888763776346, 9.428696322276409],
    [new Date('2015/11/03 15:32:10'), 49, 33.65160073382662, 8.828397753770375],
    [new Date('2015/11/03 15:33:10'), 0, 33.79185226364622, 8.415091789175957],
    [new Date('2015/11/03 15:33:35'), 44, 33.85837315878071, 9.579008899366665],
    [new Date('2015/11/03 15:34:10'), 57, 33.8876090118023, 3.0071163107917647],
    [new Date('2015/11/03 15:36:01'), 51, 33.88981710769631, 0.07161392088690981],
    [new Date('2015/11/03 15:36:39'), 50, 33.89115417615939, 0.12666964387054389],
    [new Date('2015/11/03 15:37:02'), 50, 33.89209483921628, 0.14723421759997155],
    [new Date('2015/11/03 15:38:27'), 50, 34.069422466125445, 7.510346551447176],
    [new Date('2015/11/03 15:39:10'), 52, 34.43709478192985, 30.781868299903852],
    [new Date('2015/11/03 15:39:42'), 6, 34.79135959037296, 39.8547909498503],
    [new Date('2015/11/03 15:40:12'), -8, 35.10098488943346, 37.15503588725965],
    [new Date('2015/11/03 15:40:37'), -18, 35.277568964528584, 25.428106813697934],
    [new Date('2015/11/03 15:41:12'), -9, 35.48821714656714, 21.66667015253698],
    [new Date('2015/11/03 15:41:42'), 17, 35.572598217087226, 10.125728462410567],
    [new Date('2015/11/03 15:42:11'), 12, 35.64050702209038, 8.430058552115845],
    [new Date('2015/11/03 15:42:42'), 10, 35.719786582677486, 9.206658648825039],
    [new Date('2015/11/03 15:43:13'), -2, 35.82288107824094, 11.972264000917253],
    [new Date('2015/11/03 15:43:44'), 6, 35.91636940414958, 10.856708815196725],
    [new Date('2015/11/03 15:44:16'), 18, 35.98129893855895, 7.304572621054847],
    [new Date('2015/11/03 15:44:46'), 14, 36.04142468651369, 7.215089754569556],
    [new Date('2015/11/03 15:45:16'), 26, 36.05737581982455, 1.9141359973026164],
    [new Date('2015/11/03 15:45:42'), 13, 36.08041138624761, 3.1895399662697925],
    [new Date('2015/11/03 15:46:12'), 38, 36.184518808189, 12.492890632966537],
    [new Date('2015/11/03 15:46:42'), 30, 36.30374455167772, 14.307089218646263],
    [new Date('2015/11/03 15:47:14'), 32, 36.33263462669723, 3.2501334396946437],
    [new Date('2015/11/03 15:48:16'), 29, 36.342692533343254, 0.5840074826724091],
    [new Date('2015/11/03 15:48:49'), 25, 36.34584116762977, 0.3434873767107641],
    [new Date('2015/11/03 15:55:00'), 34, 36.354419440457185, 0.08323930506385652],
    [new Date('2015/11/03 15:55:57'), 26, 36.62634641413125, 17.174335179414374],
    [new Date('2015/11/03 15:56:59'), -1, 37.140573835210304, 29.858366385235712],
    [new Date('2015/11/03 15:58:36'), 22, 37.48386298888845, 12.740628383931073],
    [new Date('2015/11/03 15:58:53'), 18, 37.52550444856632, 8.818191461198074],
    [new Date('2015/11/03 15:59:33'), 27, 37.6115870501343, 7.747434141117507],
    [new Date('2015/11/03 16:00:25'), 37, 37.68998752677644, 5.427725305994616],
    [new Date('2015/11/03 16:01:26'), 39, 37.72246675292085, 1.916806788850376],
    [new Date('2015/11/03 16:02:30'), 38, 37.75312876447114, 1.7247381497037972],
    [new Date('2015/11/03 16:03:09'), 42, 37.87626238795386, 11.366180629173867],
    [new Date('2015/11/03 16:04:12'), 53, 38.000508784019665, 7.0997940609031],
    [new Date('2015/11/03 16:05:13'), 61, 38.09895348348736, 5.809851116125888],
    [new Date('2015/11/03 16:06:11'), 69, 38.18389127456614, 5.272000825579961],
    [new Date('2015/11/03 16:06:48'), 69, 38.2527810092963, 6.702785000772166],
    [new Date('2015/11/03 16:07:10'), 73, 38.311888622832846, 9.67215494234376],
    [new Date('2015/11/03 16:07:41'), 85, 38.37861152062797, 7.748465550401431],
    [new Date('2015/11/03 16:08:14'), 77, 38.45167772430228, 7.970858582651647],
    [new Date('2015/11/03 16:08:39'), 77, 38.501668149840384, 7.198621277486848],
    [new Date('2015/11/03 16:09:40'), 98, 38.59005840795589, 5.216474249439578],
    [new Date('2015/11/03 16:10:08'), 97, 38.654994199728975, 8.348887513682836],
    [new Date('2015/11/03 16:10:40'), 103, 38.71350758362612, 6.582755688428604],
    [new Date('2015/11/03 16:11:42'), 104, 38.77007584208954, 3.2846085559406712],
    [new Date('2015/11/03 16:12:18'), 106, 38.93013140422194, 16.005556213240222],
    [new Date('2015/11/03 16:12:44'), 109, 38.98631544536749, 7.779328773998667],
    [new Date('2015/11/03 16:13:13'), 115, 39.03382686455618, 5.897969278596296],
    [new Date('2015/11/03 16:13:44'), 124, 39.085017698090795, 5.944741958858244],
    [new Date('2015/11/03 16:14:15'), 123, 39.131440255806986, 5.391006702525329],
    [new Date('2015/11/03 16:14:41'), 135, 39.17212425204494, 5.633168709870628],
    [new Date('2015/11/03 16:15:14'), 134, 39.21867238227275, 5.077977843034398],
    [new Date('2015/11/03 16:15:49'), 139, 39.26686140173539, 4.956584859014134],
    [new Date('2015/11/03 16:16:18'), 148, 39.3168306907795, 6.203084157199901],
    [new Date('2015/11/03 16:16:40'), 169, 39.35165882325761, 5.699148950963197],
    [new Date('2015/11/03 16:17:13'), 155, 39.38901585957848, 4.075313053185771],
    [new Date('2015/11/03 16:18:16'), 161, 39.43134793675325, 2.418975838558113],
    [new Date('2015/11/03 16:18:45'), 158, 39.43411988954902, 0.3441044849918578],
    [new Date('2015/11/03 16:20:31'), 157, 39.43966298075853, 0.18825592787024048],
    [new Date('2015/11/03 16:22:51'), 128, 39.591740199450406, 3.9105570520769244],
    [new Date('2015/11/03 16:23:47'), 83, 40.03500803844956, 28.49578964994576],
    [new Date('2015/11/03 16:24:39'), 54, 40.26160117000115, 15.687216799725576],
    [new Date('2015/11/03 16:25:17'), 41, 40.50947272464462, 23.482568334643982],
    [new Date('2015/11/03 16:25:45'), 46, 40.59291123565531, 10.727808558517482],
    [new Date('2015/11/03 16:26:17'), 54, 40.6659797254047, 8.220205096807351],
    [new Date('2015/11/03 16:26:47'), 52, 40.78475333224562, 14.25283282090993],
    [new Date('2015/11/03 16:27:18'), 39, 40.87430960125588, 10.400082852804243],
    [new Date('2015/11/03 16:27:44'), 63, 40.93924859100425, 8.991552426697051],
    [new Date('2015/11/03 16:28:11'), 59, 41.02678349585765, 11.671320647120275],
    [new Date('2015/11/03 16:28:47'), 68, 41.184000566737986, 15.721707088033376],
    [new Date('2015/11/03 16:29:18'), 55, 41.39772309323641, 24.81939017401031],
    [new Date('2015/11/03 16:29:47'), 43, 41.55541139282607, 19.575099259406453],
    [new Date('2015/11/03 16:30:19'), 59, 41.68512200058711, 14.592443373116277],
    [new Date('2015/11/03 16:30:47'), 67, 41.77363067320045, 11.379686478858503],
    [new Date('2015/11/03 16:31:15'), 68, 41.84764526585946, 9.516161913301556],
    [new Date('2015/11/03 16:31:49'), 63, 41.9476392107103, 10.587594160676986],
    [new Date('2015/11/03 16:32:16'), 65, 42.07483964638322, 16.96005808972289],
    [new Date('2015/11/03 16:32:47'), 63, 42.24771943841731, 20.076362945894772],
    [new Date('2015/11/03 16:33:20'), 64, 42.4405927257842, 21.04072225820585],
    [new Date('2015/11/03 16:33:45'), 51, 42.612741985176314, 24.78949335246449],
    [new Date('2015/11/03 16:34:18'), 30, 42.88923106444357, 30.162445010973407],
    [new Date('2015/11/03 16:35:20'), 36, 42.99867359745055, 6.354727722985912],
    [new Date('2015/11/03 16:35:52'), 33, 43.00270613023298, 0.45365993802387306],
    [new Date('2015/11/03 16:39:54'), 23, 43.182671038047324, 2.6771639178993927],
    [new Date('2015/11/03 16:40:42'), 39, 43.39136331543866, 15.651920804350214],
    [new Date('2015/11/03 16:41:16'), 42, 43.54515736618348, 16.28407596121613],
    [new Date('2015/11/03 16:41:46'), 28, 43.64353192302864, 11.80494682141939],
    [new Date('2015/11/03 16:42:10'), 52, 43.711201513290305, 10.150438539250159],
    [new Date('2015/11/03 16:42:43'), 44, 43.789621911078896, 8.55495248602839],
    [new Date('2015/11/03 16:43:08'), 57, 43.85770771904658, 9.804356347346966],
    [new Date('2015/11/03 16:43:40'), 57, 43.85960100539597, 0.2129947143067451],
    [new Date('2015/11/03 16:44:06'), 57, 43.86359642301648, 0.5532116705315806],
    [new Date('2015/11/03 16:44:49'), 52, 44.16765347558979, 25.45593928520712],
    [new Date('2015/11/03 16:45:14'), 40, 44.316350210674855, 21.412329852249744],
    [new Date('2015/11/03 16:45:52'), 50, 44.54447749712899, 21.61205871670737],
    [new Date('2015/11/03 16:46:21'), 47, 44.68850198314193, 17.8789017119516],
    [new Date('2015/11/03 16:46:50'), 54, 44.85635245489654, 20.836610286778303],
    [new Date('2015/11/03 16:47:18'), 17, 45.00172923348523, 18.691300104260563],
    [new Date('2015/11/03 16:47:54'), 67, 45.1946731025176, 19.29438690323663],
    [new Date('2015/11/03 16:48:18'), 36, 45.31359401884996, 17.83813744985467],
    [new Date('2015/11/03 16:48:53'), 57, 45.421372071891305, 11.085742598538106],
    [new Date('2015/11/03 16:49:22'), 45, 45.601592420556884, 22.372181213658184],
    [new Date('2015/11/03 16:49:53'), 55, 45.76892137335082, 19.431749356715294],
    [new Date('2015/11/03 16:50:14'), 49, 45.89009699018911, 20.77296288656381],
    [new Date('2015/11/03 16:50:46'), 52, 46.077085786482556, 21.036239583012993],
    [new Date('2015/11/03 16:51:16'), 55, 46.22796186688072, 18.10512964777917],
    [new Date('2015/11/03 16:51:43'), 45, 46.393043461345464, 22.01087926196569],
    [new Date('2015/11/03 16:53:20'), 60, 46.47282419972972, 2.9609346204468157],
    [new Date('2015/11/03 16:53:55'), 60, 46.4741612681928, 0.1375270419165905],
    [new Date('2015/11/03 16:55:04'), 42, 46.531980783757994, 3.0166703773144774],
    [new Date('2015/11/03 16:55:43'), 42, 46.813107451579384, 25.950153952743374],
    [new Date('2015/11/03 16:56:14'), 34, 46.98879552179581, 20.40248557352006],
    [new Date('2015/11/03 16:56:41'), 38, 47.10343006848877, 15.28460622572804],
    [new Date('2015/11/03 16:57:39'), 39, 47.105986830667725, 0.1586955835214606],
    [new Date('2015/11/03 16:59:21'), -9, 47.383306315435576, 9.78774652121826],
    [new Date('2015/11/03 17:00:04'), -3, 47.68592783662534, 25.335755262398962],
    [new Date('2015/11/03 17:00:30'), -4, 47.8361696421355, 20.802711532176072],
    [new Date('2015/11/03 17:01:07'), -5, 48.0087716749768, 16.793711303477682],
    [new Date('2015/11/03 17:01:39'), -5, 48.19557263867772, 21.015108416353307],
    [new Date('2015/11/03 17:02:02'), -4, 48.32806823978999, 20.738441913225632],
    [new Date('2015/11/03 17:02:37'), -12, 48.330961322949726, 0.2975742678580633],
    [new Date('2015/11/03 17:03:08'), -4, 48.33216700831178, 0.1400150743026729],
    [new Date('2015/11/03 17:04:10'), -7, 48.334055519656474, 0.10965549743374953],
    [new Date('2015/11/03 17:04:56'), -3, 48.33639273504762, 0.1829125088720137],
    [new Date('2015/11/03 17:05:36'), 0, 48.33839495845981, 0.18020010709727005],
    [new Date('2015/11/03 17:07:55'), -10, 48.35392186052184, 0.40213559297336093],
    [new Date('2015/11/03 17:08:49'), -5, 48.59456615784359, 16.042953154783582],
    [new Date('2015/11/03 17:09:50'), -5, 48.596792578499056, 0.13139531737208565],
    [new Date('2015/11/03 17:11:29'), 0, 48.66608990002453, 2.5199026009262795],
    [new Date('2015/11/03 17:11:57'), -2, 48.66729558538658, 0.15501668940653074],
    [new Date('2015/11/03 17:12:27'), -3, 48.66807336839565, 0.09333396108877504],
    [new Date('2015/11/03 17:13:00'), -3, 48.668627433130176, 0.06044342558444465],
    [new Date('2015/11/03 17:13:36'), -2, 48.6691814978647, 0.055406473452407595],
    [new Date('2015/11/03 17:21:18'), 0, 48.669510661366026, 0.0025649103999227704],
    [new Date('2015/11/03 17:25:14'), -2, 48.67318099430983, 0.0559881296512376],
  ];
  return var_array;
}

// npoint = 369


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

