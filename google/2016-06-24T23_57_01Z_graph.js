function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2016/06/25 08:57:01'), 59],
    [new Date('2016/06/25 08:57:05'), 60],
    [new Date('2016/06/25 08:57:18'), 58],
    [new Date('2016/06/25 08:57:28'), 71],
    [new Date('2016/06/25 08:57:46'), 76],
    [new Date('2016/06/25 08:59:36'), 77],
    [new Date('2016/06/25 09:00:05'), 92],
    [new Date('2016/06/25 09:00:09'), 92],
    [new Date('2016/06/25 09:00:13'), 95],
    [new Date('2016/06/25 09:00:23'), 95],
    [new Date('2016/06/25 09:00:33'), 90],
    [new Date('2016/06/25 09:00:56'), 94],
    [new Date('2016/06/25 09:01:29'), 94],
    [new Date('2016/06/25 09:01:41'), 92],
    [new Date('2016/06/25 09:01:56'), 104],
    [new Date('2016/06/25 09:02:03'), 115],
    [new Date('2016/06/25 09:02:14'), 115],
    [new Date('2016/06/25 09:02:27'), 127],
    [new Date('2016/06/25 09:02:43'), 139],
    [new Date('2016/06/25 09:02:57'), 147],
    [new Date('2016/06/25 09:03:04'), 150],
    [new Date('2016/06/25 09:03:13'), 158],
    [new Date('2016/06/25 09:03:26'), 161],
    [new Date('2016/06/25 09:03:33'), 159],
    [new Date('2016/06/25 09:03:38'), 156],
    [new Date('2016/06/25 09:03:45'), 156],
    [new Date('2016/06/25 09:03:53'), 156],
    [new Date('2016/06/25 09:04:40'), 154],
    [new Date('2016/06/25 09:04:52'), 157],
    [new Date('2016/06/25 09:04:59'), 163],
    [new Date('2016/06/25 09:05:05'), 165],
    [new Date('2016/06/25 09:05:09'), 165],
    [new Date('2016/06/25 09:05:19'), 170],
    [new Date('2016/06/25 09:05:23'), 175],
    [new Date('2016/06/25 09:05:34'), 179],
    [new Date('2016/06/25 09:05:40'), 180],
    [new Date('2016/06/25 09:05:49'), 188],
    [new Date('2016/06/25 09:05:54'), 189],
    [new Date('2016/06/25 09:06:05'), 189],
    [new Date('2016/06/25 09:06:10'), 190],
    [new Date('2016/06/25 09:06:28'), 201],
    [new Date('2016/06/25 09:06:33'), 203],
    [new Date('2016/06/25 09:06:40'), 204],
    [new Date('2016/06/25 09:06:42'), 204],
    [new Date('2016/06/25 09:06:51'), 206],
    [new Date('2016/06/25 09:06:55'), 209],
    [new Date('2016/06/25 09:06:57'), 209],
    [new Date('2016/06/25 09:07:06'), 205],
    [new Date('2016/06/25 09:07:15'), 205],
    [new Date('2016/06/25 09:07:20'), 207],
    [new Date('2016/06/25 09:07:22'), 208],
    [new Date('2016/06/25 09:07:34'), 221],
    [new Date('2016/06/25 09:07:40'), 229],
    [new Date('2016/06/25 09:07:49'), 235],
    [new Date('2016/06/25 09:07:52'), 232],
    [new Date('2016/06/25 09:08:00'), 234],
    [new Date('2016/06/25 09:08:03'), 234],
    [new Date('2016/06/25 09:08:07'), 234],
    [new Date('2016/06/25 09:08:21'), 236],
    [new Date('2016/06/25 09:08:23'), 234],
    [new Date('2016/06/25 09:08:32'), 239],
    [new Date('2016/06/25 09:08:37'), 239],
    [new Date('2016/06/25 09:08:53'), 248],
    [new Date('2016/06/25 09:09:32'), 292],
    [new Date('2016/06/25 09:09:44'), 313],
    [new Date('2016/06/25 09:10:04'), 340],
    [new Date('2016/06/25 09:10:10'), 349],
    [new Date('2016/06/25 09:10:25'), 369],
    [new Date('2016/06/25 09:10:40'), 388],
    [new Date('2016/06/25 09:10:51'), 398],
    [new Date('2016/06/25 09:10:56'), 399],
    [new Date('2016/06/25 09:11:08'), 405],
    [new Date('2016/06/25 09:11:14'), 406],
    [new Date('2016/06/25 09:11:32'), 419],
    [new Date('2016/06/25 09:11:42'), 420],
    [new Date('2016/06/25 09:11:48'), 422],
    [new Date('2016/06/25 09:12:07'), 432],
    [new Date('2016/06/25 09:12:17'), 433],
    [new Date('2016/06/25 09:12:20'), 435],
    [new Date('2016/06/25 09:12:23'), 436],
    [new Date('2016/06/25 09:12:31'), 433],
    [new Date('2016/06/25 09:12:42'), 436],
    [new Date('2016/06/25 09:12:55'), 434],
    [new Date('2016/06/25 09:13:01'), 436],
    [new Date('2016/06/25 09:13:04'), 437],
    [new Date('2016/06/25 09:13:15'), 442],
    [new Date('2016/06/25 09:13:19'), 441],
    [new Date('2016/06/25 09:13:32'), 449],
    [new Date('2016/06/25 09:13:37'), 459],
    [new Date('2016/06/25 09:13:49'), 468],
    [new Date('2016/06/25 09:13:54'), 471],
    [new Date('2016/06/25 09:15:27'), 452],
    [new Date('2016/06/25 09:15:37'), 452],
    [new Date('2016/06/25 09:15:42'), 449],
    [new Date('2016/06/25 09:15:48'), 444],
    [new Date('2016/06/25 09:15:56'), 438],
    [new Date('2016/06/25 09:16:12'), 435],
    [new Date('2016/06/25 09:16:17'), 433],
    [new Date('2016/06/25 09:16:22'), 434],
    [new Date('2016/06/25 09:16:24'), 434],
    [new Date('2016/06/25 09:16:33'), 432],
    [new Date('2016/06/25 09:16:39'), 431],
    [new Date('2016/06/25 09:16:46'), 429],
    [new Date('2016/06/25 09:16:50'), 427],
    [new Date('2016/06/25 09:16:59'), 422],
    [new Date('2016/06/25 09:17:04'), 424],
    [new Date('2016/06/25 09:17:08'), 425],
    [new Date('2016/06/25 09:17:13'), 427],
    [new Date('2016/06/25 09:17:24'), 432],
    [new Date('2016/06/25 09:17:35'), 428],
    [new Date('2016/06/25 09:17:44'), 422],
    [new Date('2016/06/25 09:17:52'), 416],
    [new Date('2016/06/25 09:18:13'), 390],
    [new Date('2016/06/25 09:18:25'), 383],
    [new Date('2016/06/25 09:18:40'), 378],
    [new Date('2016/06/25 09:18:50'), 377],
    [new Date('2016/06/25 09:18:56'), 382],
    [new Date('2016/06/25 09:19:13'), 355],
    [new Date('2016/06/25 09:19:27'), 358],
    [new Date('2016/06/25 09:19:43'), 330],
    [new Date('2016/06/25 09:19:59'), 321],
    [new Date('2016/06/25 09:20:25'), 309],
    [new Date('2016/06/25 09:20:28'), 294],
    [new Date('2016/06/25 09:20:44'), 283],
    [new Date('2016/06/25 09:21:00'), 288],
    [new Date('2016/06/25 09:21:15'), 271],
    [new Date('2016/06/25 09:21:30'), 252],
    [new Date('2016/06/25 09:21:46'), 264],
    [new Date('2016/06/25 09:22:02'), 228],
    [new Date('2016/06/25 09:22:17'), 226],
    [new Date('2016/06/25 09:23:08'), 157],
    [new Date('2016/06/25 09:23:15'), 155],
    [new Date('2016/06/25 09:23:26'), 157],
    [new Date('2016/06/25 09:23:50'), 151],
    [new Date('2016/06/25 09:24:09'), 139],
    [new Date('2016/06/25 09:24:20'), 137],
    [new Date('2016/06/25 09:24:58'), 98],
    [new Date('2016/06/25 09:25:07'), 96],
    [new Date('2016/06/25 09:25:18'), 93],
    [new Date('2016/06/25 09:25:27'), 97],
    [new Date('2016/06/25 09:25:41'), 91],
    [new Date('2016/06/25 09:26:28'), 98],
    [new Date('2016/06/25 09:26:47'), 106],
    [new Date('2016/06/25 09:27:02'), 88],
    [new Date('2016/06/25 09:27:22'), 81],
    [new Date('2016/06/25 09:27:29'), 81],
    [new Date('2016/06/25 09:27:42'), 87],
    [new Date('2016/06/25 09:28:48'), 84],
    [new Date('2016/06/25 09:29:10'), 75],
    [new Date('2016/06/25 09:29:18'), 77],
    [new Date('2016/06/25 09:29:29'), 82],
    [new Date('2016/06/25 09:29:47'), 87],
    [new Date('2016/06/25 09:30:00'), 89],
    [new Date('2016/06/25 09:30:15'), 79],
    [new Date('2016/06/25 09:30:23'), 89],
    [new Date('2016/06/25 09:30:35'), 105],
    [new Date('2016/06/25 09:30:56'), 69],
    [new Date('2016/06/25 09:31:05'), 72],
    [new Date('2016/06/25 09:31:12'), 72],
    [new Date('2016/06/25 09:31:18'), 75],
    [new Date('2016/06/25 09:31:46'), 80],
    [new Date('2016/06/25 09:32:23'), 86],
    [new Date('2016/06/25 09:32:42'), 83],
    [new Date('2016/06/25 09:32:57'), 82],
    [new Date('2016/06/25 09:33:09'), 83],
    [new Date('2016/06/25 09:33:27'), 80],
    [new Date('2016/06/25 09:33:48'), 87],
    [new Date('2016/06/25 09:34:02'), 103],
    [new Date('2016/06/25 09:34:19'), 100],
    [new Date('2016/06/25 09:34:33'), 114],
    [new Date('2016/06/25 09:35:04'), 91],
    [new Date('2016/06/25 09:35:18'), 101],
    [new Date('2016/06/25 09:35:33'), 115],
    [new Date('2016/06/25 09:35:49'), 113],
    [new Date('2016/06/25 09:36:08'), 112],
    [new Date('2016/06/25 09:36:49'), 93],
    [new Date('2016/06/25 09:39:19'), 39],
    [new Date('2016/06/25 09:39:28'), 42],
    [new Date('2016/06/25 09:39:39'), 41],
    [new Date('2016/06/25 09:39:54'), 39],
    [new Date('2016/06/25 09:41:02'), 29],
    [new Date('2016/06/25 09:41:25'), 30],
    [new Date('2016/06/25 09:42:07'), 33],
    [new Date('2016/06/25 09:42:30'), 34],
    [new Date('2016/06/25 09:42:56'), 27],
    [new Date('2016/06/25 09:43:20'), 22],
    [new Date('2016/06/25 10:00:21'), 11],
    [new Date('2016/06/25 10:00:29'), 11],
    [new Date('2016/06/25 10:00:44'), 9],
    [new Date('2016/06/25 10:01:05'), 16],
    [new Date('2016/06/25 10:02:09'), 27],
    [new Date('2016/06/25 10:02:35'), 27],
    [new Date('2016/06/25 10:02:53'), 26],
    [new Date('2016/06/25 10:03:55'), 31],
    [new Date('2016/06/25 10:04:25'), 27],
    [new Date('2016/06/25 10:04:55'), 28],
    [new Date('2016/06/25 10:05:25'), 29],
    [new Date('2016/06/25 10:05:52'), 34],
    [new Date('2016/06/25 10:06:24'), 31],
    [new Date('2016/06/25 10:06:51'), 39],
    [new Date('2016/06/25 10:07:25'), 33],
    [new Date('2016/06/25 10:07:36'), 32],
    [new Date('2016/06/25 10:07:53'), 26],
    [new Date('2016/06/25 10:08:07'), 19],
    [new Date('2016/06/25 10:08:21'), 29],
    [new Date('2016/06/25 10:08:38'), 27],
    [new Date('2016/06/25 10:08:58'), 29],
    [new Date('2016/06/25 10:09:16'), 7],
    [new Date('2016/06/25 10:09:43'), 20],
    [new Date('2016/06/25 10:10:11'), 18],
    [new Date('2016/06/25 10:11:06'), 15],
    [new Date('2016/06/25 10:11:23'), 13],
    [new Date('2016/06/25 10:14:03'), 20],
    [new Date('2016/06/25 10:14:27'), 29],
    [new Date('2016/06/25 10:14:30'), 28],
    [new Date('2016/06/25 10:15:23'), -1],
    [new Date('2016/06/25 10:15:52'), 25],
    [new Date('2016/06/25 10:16:49'), 34],
    [new Date('2016/06/25 10:17:11'), 15],
    [new Date('2016/06/25 10:17:24'), 21],
    [new Date('2016/06/25 10:18:16'), 20],
    [new Date('2016/06/25 10:19:50'), 38],
    [new Date('2016/06/25 10:20:16'), 41],
    [new Date('2016/06/25 10:20:30'), 45],
    [new Date('2016/06/25 10:20:43'), 44],
    [new Date('2016/06/25 10:20:48'), 43],
    [new Date('2016/06/25 10:21:05'), 35],
    [new Date('2016/06/25 10:22:06'), 21],
    [new Date('2016/06/25 10:22:26'), 10],
    [new Date('2016/06/25 10:22:30'), 9],
    [new Date('2016/06/25 10:22:33'), 17],
    [new Date('2016/06/25 10:22:47'), 22],
    [new Date('2016/06/25 10:24:08'), 19],
    [new Date('2016/06/25 10:24:28'), 14],
    [new Date('2016/06/25 10:24:32'), 14],
    [new Date('2016/06/25 10:24:51'), -6],
    [new Date('2016/06/25 10:25:03'), 6],
    [new Date('2016/06/25 10:25:35'), 14],
    [new Date('2016/06/25 10:26:28'), 19],
    [new Date('2016/06/25 10:26:56'), 11],
    [new Date('2016/06/25 10:30:26'), 4],
    [new Date('2016/06/25 10:31:22'), 56],
    [new Date('2016/06/25 10:33:27'), -6],
    [new Date('2016/06/25 10:36:10'), 15],
    [new Date('2016/06/25 10:37:36'), 16],
    [new Date('2016/06/25 10:38:05'), 9],
    [new Date('2016/06/25 10:38:54'), 7],
    [new Date('2016/06/25 10:39:46'), 10],
    [new Date('2016/06/25 10:41:07'), 4],
    [new Date('2016/06/25 10:41:45'), -26],
    [new Date('2016/06/25 10:42:32'), 12],
    [new Date('2016/06/25 10:43:17'), 6],
    [new Date('2016/06/25 10:44:06'), 23],
    [new Date('2016/06/25 10:45:47'), 16],
    [new Date('2016/06/25 10:47:48'), 6],
    [new Date('2016/06/25 10:49:03'), 1],
    [new Date('2016/06/25 10:50:04'), 6],
    [new Date('2016/06/25 10:50:56'), 5],
    [new Date('2016/06/25 10:52:37'), 2],
    [new Date('2016/06/25 10:53:48'), 10],
    [new Date('2016/06/25 10:55:22'), -4],
    [new Date('2016/06/25 10:56:02'), 11],
    [new Date('2016/06/25 10:57:11'), 7],
    [new Date('2016/06/25 10:58:13'), 7],
    [new Date('2016/06/25 10:59:21'), -1],
    [new Date('2016/06/25 10:59:43'), -1],
    [new Date('2016/06/25 11:00:08'), -1],
    [new Date('2016/06/25 11:00:36'), 0],
    [new Date('2016/06/25 11:01:22'), 5],
    [new Date('2016/06/25 11:01:53'), 11],
    [new Date('2016/06/25 11:04:08'), -4],
    [new Date('2016/06/25 11:05:03'), 5],
    [new Date('2016/06/25 11:05:48'), 6],
    [new Date('2016/06/25 11:06:23'), 8],
    [new Date('2016/06/25 11:07:01'), 7],
    [new Date('2016/06/25 11:07:38'), 9],
    [new Date('2016/06/25 11:08:15'), 7],
    [new Date('2016/06/25 11:08:40'), 3],
    [new Date('2016/06/25 11:09:02'), 10],
    [new Date('2016/06/25 11:09:26'), -3],
    [new Date('2016/06/25 11:09:48'), 28],
    [new Date('2016/06/25 11:10:15'), 25],
    [new Date('2016/06/25 11:11:05'), 12],
    [new Date('2016/06/25 11:11:22'), 9],
    [new Date('2016/06/25 11:11:37'), 15],
    [new Date('2016/06/25 11:11:56'), 19],
    [new Date('2016/06/25 11:14:07'), 23],
    [new Date('2016/06/25 11:14:38'), 15],
    [new Date('2016/06/25 11:14:56'), 5],
    [new Date('2016/06/25 11:15:17'), 7],
    [new Date('2016/06/25 11:15:46'), 14],
    [new Date('2016/06/25 11:16:04'), 14],
    [new Date('2016/06/25 11:16:10'), 14],
    [new Date('2016/06/25 11:16:28'), 0],
    [new Date('2016/06/25 11:16:57'), 2],
    [new Date('2016/06/25 11:17:14'), 2],
    [new Date('2016/06/25 11:17:55'), 38],
    [new Date('2016/06/25 11:19:32'), -8],
    [new Date('2016/06/25 11:25:51'), 16],
    [new Date('2016/06/25 11:26:37'), -29],
    [new Date('2016/06/25 11:27:25'), 5],
    [new Date('2016/06/25 11:28:13'), -2],
    [new Date('2016/06/25 11:28:52'), 1],
    [new Date('2016/06/25 11:29:44'), 16],
    [new Date('2016/06/25 11:30:08'), 16],
    [new Date('2016/06/25 11:32:13'), -4],
    [new Date('2016/06/25 11:32:58'), 0],
    [new Date('2016/06/25 11:33:40'), -1],
    [new Date('2016/06/25 11:34:11'), -10],
    [new Date('2016/06/25 11:34:43'), -7],
    [new Date('2016/06/25 11:35:18'), 3],
    [new Date('2016/06/25 11:35:21'), 1],
    [new Date('2016/06/25 11:35:49'), -1],
    [new Date('2016/06/25 11:36:39'), 0],
    [new Date('2016/06/25 11:38:04'), 2],
    [new Date('2016/06/25 11:38:54'), -5],
    [new Date('2016/06/25 11:39:36'), -5],
    [new Date('2016/06/25 11:39:55'), 1],
    [new Date('2016/06/25 11:40:20'), 19],
    [new Date('2016/06/25 11:40:43'), 5],
    [new Date('2016/06/25 11:41:33'), 9],
    [new Date('2016/06/25 11:42:02'), -3],
    [new Date('2016/06/25 11:42:19'), 2],
    [new Date('2016/06/25 11:43:12'), 41],
    [new Date('2016/06/25 11:43:40'), 22],
    [new Date('2016/06/25 11:44:39'), 3],
    [new Date('2016/06/25 11:44:59'), 7],
    [new Date('2016/06/25 11:45:12'), 5],
    [new Date('2016/06/25 11:45:22'), 9],
    [new Date('2016/06/25 11:46:49'), 11],
    [new Date('2016/06/25 11:47:03'), 17],
    [new Date('2016/06/25 11:47:21'), 14],
    [new Date('2016/06/25 11:47:35'), 12],
    [new Date('2016/06/25 11:48:04'), 15],
    [new Date('2016/06/25 11:49:01'), 23],
    [new Date('2016/06/25 11:50:47'), 24],
    [new Date('2016/06/25 11:51:53'), 24],
    [new Date('2016/06/25 11:52:33'), 23],
    [new Date('2016/06/25 11:53:18'), 24],
    [new Date('2016/06/25 11:57:13'), -17],
    [new Date('2016/06/25 11:57:38'), -17],
    [new Date('2016/06/25 11:57:46'), -14],
    [new Date('2016/06/25 11:58:09'), -1],
    [new Date('2016/06/25 11:58:21'), 10],
    [new Date('2016/06/25 11:58:50'), 5],
    [new Date('2016/06/25 11:59:04'), 1],
    [new Date('2016/06/25 11:59:27'), 10],
    [new Date('2016/06/25 11:59:33'), 10],
    [new Date('2016/06/25 12:00:06'), -19],
    [new Date('2016/06/25 12:00:26'), 9],
    [new Date('2016/06/25 12:00:48'), 12],
    [new Date('2016/06/25 12:01:13'), 18],
    [new Date('2016/06/25 12:01:41'), 15],
    [new Date('2016/06/25 12:02:19'), 16],
    [new Date('2016/06/25 12:03:37'), 12],
    [new Date('2016/06/25 12:04:10'), 3],
    [new Date('2016/06/25 12:04:51'), 14],
    [new Date('2016/06/25 12:06:46'), 10],
    [new Date('2016/06/25 12:08:40'), 19],
    [new Date('2016/06/25 12:08:46'), 20],
    [new Date('2016/06/25 12:09:20'), 23],
    [new Date('2016/06/25 12:10:01'), 18],
    [new Date('2016/06/25 12:10:36'), 24],
    [new Date('2016/06/25 12:11:38'), 5],
    [new Date('2016/06/25 12:12:11'), 19],
    [new Date('2016/06/25 12:12:41'), 20],
    [new Date('2016/06/25 12:13:24'), 25],
    [new Date('2016/06/25 12:14:06'), 16],
    [new Date('2016/06/25 12:14:31'), 9],
    [new Date('2016/06/25 12:15:54'), 27],
    [new Date('2016/06/25 12:16:14'), 29],
    [new Date('2016/06/25 12:16:23'), 26],
    [new Date('2016/06/25 12:16:32'), 26],
    [new Date('2016/06/25 12:16:47'), 21],
    [new Date('2016/06/25 12:16:59'), 16],
    [new Date('2016/06/25 12:17:07'), 17],
    [new Date('2016/06/25 12:17:27'), 14],
    [new Date('2016/06/25 12:17:54'), 22],
    [new Date('2016/06/25 12:18:31'), 19],
    [new Date('2016/06/25 12:18:51'), 17],
    [new Date('2016/06/25 12:19:16'), 38],
    [new Date('2016/06/25 12:19:36'), 35],
    [new Date('2016/06/25 12:19:53'), 27],
    [new Date('2016/06/25 12:20:13'), 39],
    [new Date('2016/06/25 12:20:22'), 37],
    [new Date('2016/06/25 12:20:38'), 30],
    [new Date('2016/06/25 12:21:10'), 14],
    [new Date('2016/06/25 12:22:12'), 4],
    [new Date('2016/06/25 12:22:45'), 30],
    [new Date('2016/06/25 12:22:51'), 30],
    [new Date('2016/06/25 12:23:08'), 18],
    [new Date('2016/06/25 12:23:23'), 20],
    [new Date('2016/06/25 12:23:39'), 19],
    [new Date('2016/06/25 12:24:02'), 11],
    [new Date('2016/06/25 12:24:07'), 9],
    [new Date('2016/06/25 12:24:35'), 17],
    [new Date('2016/06/25 12:24:48'), 19],
    [new Date('2016/06/25 12:25:09'), 16],
    [new Date('2016/06/25 12:25:38'), 28],
    [new Date('2016/06/25 12:25:56'), 16],
    [new Date('2016/06/25 12:25:59'), 17],
    [new Date('2016/06/25 12:26:10'), 16],
    [new Date('2016/06/25 12:26:24'), 16],
    [new Date('2016/06/25 12:26:32'), 19],
    [new Date('2016/06/25 12:27:03'), 10],
    [new Date('2016/06/25 12:27:18'), 13],
    [new Date('2016/06/25 12:27:56'), 7],
    [new Date('2016/06/25 12:28:11'), 15],
    [new Date('2016/06/25 12:28:19'), 14],
    [new Date('2016/06/25 12:28:42'), 6],
    [new Date('2016/06/25 12:29:06'), 6],
    [new Date('2016/06/25 12:29:27'), 8],
    [new Date('2016/06/25 12:29:56'), 19],
    [new Date('2016/06/25 12:29:57'), 18],
    [new Date('2016/06/25 12:30:13'), 12],
    [new Date('2016/06/25 12:30:27'), 11],
    [new Date('2016/06/25 12:30:44'), 15],
    [new Date('2016/06/25 12:31:05'), 12],
    [new Date('2016/06/25 12:31:28'), 16],
    [new Date('2016/06/25 12:32:00'), 18],
    [new Date('2016/06/25 12:32:16'), 23],
    [new Date('2016/06/25 12:32:28'), 28],
    [new Date('2016/06/25 12:33:34'), 10],
    [new Date('2016/06/25 12:34:03'), 26],
    [new Date('2016/06/25 12:34:05'), 25],
    [new Date('2016/06/25 12:34:19'), 25],
    [new Date('2016/06/25 12:34:27'), 23],
    [new Date('2016/06/25 12:34:40'), 23],
    [new Date('2016/06/25 12:34:59'), 34],
    [new Date('2016/06/25 12:35:05'), 32],
    [new Date('2016/06/25 12:35:28'), 18],
    [new Date('2016/06/25 12:35:39'), 25],
    [new Date('2016/06/25 12:36:03'), 21],
    [new Date('2016/06/25 12:36:49'), 32],
    [new Date('2016/06/25 12:37:04'), 26],
    [new Date('2016/06/25 12:37:48'), 19],
    [new Date('2016/06/25 12:37:55'), 22],
    [new Date('2016/06/25 12:38:17'), 9],
    [new Date('2016/06/25 12:38:43'), 36],
    [new Date('2016/06/25 12:39:11'), 12],
    [new Date('2016/06/25 12:39:35'), 32],
    [new Date('2016/06/25 12:40:02'), 22],
    [new Date('2016/06/25 12:40:17'), 27],
    [new Date('2016/06/25 12:40:32'), 16],
    [new Date('2016/06/25 12:41:05'), 34],
    [new Date('2016/06/25 12:41:20'), 33],
    [new Date('2016/06/25 12:42:12'), 31],
    [new Date('2016/06/25 12:42:18'), 34],
    [new Date('2016/06/25 12:42:23'), 36],
    [new Date('2016/06/25 12:42:29'), 36],
    [new Date('2016/06/25 12:42:51'), 30],
    [new Date('2016/06/25 12:42:53'), 30],
    [new Date('2016/06/25 12:43:16'), 24],
    [new Date('2016/06/25 12:43:33'), 22],
    [new Date('2016/06/25 12:43:48'), 24],
    [new Date('2016/06/25 12:44:03'), 30],
    [new Date('2016/06/25 12:44:19'), 19],
    [new Date('2016/06/25 12:44:39'), 33],
    [new Date('2016/06/25 12:44:53'), 26],
    [new Date('2016/06/25 12:45:16'), 32],
    [new Date('2016/06/25 12:45:37'), 37],
    [new Date('2016/06/25 12:45:59'), 31],
    [new Date('2016/06/25 12:46:09'), 35],
    [new Date('2016/06/25 12:46:28'), 36],
    [new Date('2016/06/25 12:46:34'), 33],
    [new Date('2016/06/25 12:46:53'), 38],
    [new Date('2016/06/25 12:47:15'), 34],
    [new Date('2016/06/25 12:47:38'), 30],
    [new Date('2016/06/25 12:47:59'), 49],
    [new Date('2016/06/25 12:48:21'), 47],
    [new Date('2016/06/25 12:48:35'), 42],
    [new Date('2016/06/25 12:48:51'), 44],
    [new Date('2016/06/25 12:49:43'), 45],
    [new Date('2016/06/25 12:49:57'), 41],
    [new Date('2016/06/25 12:50:01'), 39],
    [new Date('2016/06/25 12:50:15'), 40],
    [new Date('2016/06/25 12:50:21'), 41],
    [new Date('2016/06/25 12:50:31'), 38],
    [new Date('2016/06/25 12:50:39'), 39],
    [new Date('2016/06/25 12:50:54'), 42],
    [new Date('2016/06/25 12:51:18'), 44],
    [new Date('2016/06/25 12:51:27'), 44],
    [new Date('2016/06/25 12:51:40'), 41],
    [new Date('2016/06/25 12:51:54'), 43],
    [new Date('2016/06/25 12:52:58'), 39],
    [new Date('2016/06/25 12:53:25'), 35],
    [new Date('2016/06/25 12:53:46'), 40],
    [new Date('2016/06/25 12:54:02'), 38],
    [new Date('2016/06/25 12:54:16'), 45],
    [new Date('2016/06/25 12:54:38'), 57],
    [new Date('2016/06/25 12:54:57'), 42],
    [new Date('2016/06/25 12:55:22'), 47],
    [new Date('2016/06/25 12:55:54'), 49],
    [new Date('2016/06/25 12:56:09'), 48],
    [new Date('2016/06/25 12:57:13'), 40],
    [new Date('2016/06/25 12:57:23'), 38],
    [new Date('2016/06/25 12:57:39'), 45],
    [new Date('2016/06/25 12:57:51'), 37],
    [new Date('2016/06/25 12:58:10'), 39],
    [new Date('2016/06/25 12:58:20'), 42],
    [new Date('2016/06/25 12:58:28'), 40],
    [new Date('2016/06/25 12:58:34'), 43],
    [new Date('2016/06/25 12:58:48'), 35],
    [new Date('2016/06/25 12:59:11'), 39],
    [new Date('2016/06/25 12:59:38'), 40],
    [new Date('2016/06/25 12:59:43'), 39],
    [new Date('2016/06/25 12:59:46'), 39],
    [new Date('2016/06/25 13:00:03'), 35],
    [new Date('2016/06/25 13:00:11'), 36],
    [new Date('2016/06/25 13:00:27'), 36],
    [new Date('2016/06/25 13:00:38'), 37],
    [new Date('2016/06/25 13:00:54'), 38],
    [new Date('2016/06/25 13:01:17'), 41],
    [new Date('2016/06/25 13:01:32'), 43],
    [new Date('2016/06/25 13:01:58'), 38],
    [new Date('2016/06/25 13:02:28'), 35],
    [new Date('2016/06/25 13:02:43'), 33],
    [new Date('2016/06/25 13:04:26'), 43],
    [new Date('2016/06/25 13:04:58'), 39],
    [new Date('2016/06/25 13:05:19'), 35],
    [new Date('2016/06/25 13:05:49'), 39],
    [new Date('2016/06/25 13:06:23'), 31],
    [new Date('2016/06/25 13:06:46'), 43],
    [new Date('2016/06/25 13:07:02'), 31],
    [new Date('2016/06/25 13:07:24'), 30],
    [new Date('2016/06/25 13:07:46'), 32],
    [new Date('2016/06/25 13:08:01'), 31],
    [new Date('2016/06/25 13:08:32'), 27],
    [new Date('2016/06/25 13:08:49'), 34],
  ];
  return var_array;
}

// npoint = 529


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

function writeHTMLGraph(){
  document.getElementById("graph").innerHTML='<h2>Graph</h2><div id="dashboard_ele" style="width: 0px; height: 0px"></div><div id="graph_ele" style="width: 800px; height: 600px"></div><div id="control_ele" style="width: 800px; height: 100px"></div>';
}
