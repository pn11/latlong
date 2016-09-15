function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)'],
    [new Date('2015/10/10 11:22:29'), 105],
    [new Date('2015/10/10 11:22:48'), 107],
    [new Date('2015/10/10 11:22:51'), 108],
    [new Date('2015/10/10 11:22:58'), 107],
    [new Date('2015/10/10 11:23:09'), 108],
    [new Date('2015/10/10 11:23:23'), 106],
    [new Date('2015/10/10 11:23:29'), 109],
    [new Date('2015/10/10 11:23:46'), 119],
    [new Date('2015/10/10 11:24:10'), 121],
    [new Date('2015/10/10 11:24:31'), 124],
    [new Date('2015/10/10 11:24:46'), 124],
    [new Date('2015/10/10 11:25:02'), 132],
    [new Date('2015/10/10 11:25:22'), 127],
    [new Date('2015/10/10 11:25:24'), 127],
    [new Date('2015/10/10 11:25:43'), 123],
    [new Date('2015/10/10 11:26:07'), 127],
    [new Date('2015/10/10 11:26:20'), 130],
    [new Date('2015/10/10 11:26:41'), 125],
    [new Date('2015/10/10 11:26:55'), 129],
    [new Date('2015/10/10 11:27:08'), 129],
    [new Date('2015/10/10 11:27:40'), 122],
    [new Date('2015/10/10 11:27:56'), 128],
    [new Date('2015/10/10 11:28:27'), 134],
    [new Date('2015/10/10 11:28:55'), 140],
    [new Date('2015/10/10 11:29:21'), 140],
    [new Date('2015/10/10 11:29:45'), 134],
    [new Date('2015/10/10 11:30:13'), 136],
    [new Date('2015/10/10 11:30:21'), 136],
    [new Date('2015/10/10 11:30:31'), 133],
    [new Date('2015/10/10 11:30:51'), 161],
    [new Date('2015/10/10 11:31:01'), 160],
    [new Date('2015/10/10 11:31:16'), 170],
    [new Date('2015/10/10 11:32:11'), 171],
    [new Date('2015/10/10 11:32:37'), 187],
    [new Date('2015/10/10 11:34:01'), 191],
    [new Date('2015/10/10 11:34:15'), 198],
    [new Date('2015/10/10 11:34:21'), 198],
    [new Date('2015/10/10 11:34:45'), 198],
    [new Date('2015/10/10 11:35:42'), 206],
    [new Date('2015/10/10 11:35:59'), 212],
    [new Date('2015/10/10 11:36:49'), 211],
    [new Date('2015/10/10 11:37:49'), 217],
    [new Date('2015/10/10 11:38:23'), 183],
    [new Date('2015/10/10 11:38:51'), 204],
    [new Date('2015/10/10 11:39:49'), 218],
    [new Date('2015/10/10 11:40:03'), 220],
    [new Date('2015/10/10 11:40:19'), 220],
    [new Date('2015/10/10 11:40:26'), 217],
    [new Date('2015/10/10 11:40:55'), 213],
    [new Date('2015/10/10 11:41:10'), 210],
    [new Date('2015/10/10 11:41:34'), 219],
    [new Date('2015/10/10 11:41:59'), 216],
    [new Date('2015/10/10 11:43:11'), 238],
    [new Date('2015/10/10 11:44:40'), 234],
    [new Date('2015/10/10 11:45:07'), 229],
    [new Date('2015/10/10 11:45:33'), 228],
    [new Date('2015/10/10 11:48:23'), 228],
    [new Date('2015/10/10 11:49:07'), 237],
    [new Date('2015/10/10 11:49:28'), 234],
    [new Date('2015/10/10 11:49:37'), 241],
    [new Date('2015/10/10 11:50:11'), 250],
    [new Date('2015/10/10 11:51:01'), 250],
    [new Date('2015/10/10 11:51:12'), 257],
    [new Date('2015/10/10 11:51:25'), 267],
    [new Date('2015/10/10 11:51:45'), 273],
    [new Date('2015/10/10 11:51:56'), 271],
    [new Date('2015/10/10 11:52:15'), 280],
    [new Date('2015/10/10 11:52:35'), 269],
    [new Date('2015/10/10 11:52:52'), 285],
    [new Date('2015/10/10 11:53:15'), 276],
    [new Date('2015/10/10 11:53:32'), 267],
    [new Date('2015/10/10 11:53:37'), 268],
    [new Date('2015/10/10 11:53:53'), 275],
    [new Date('2015/10/10 11:54:11'), 276],
    [new Date('2015/10/10 11:54:46'), 283],
    [new Date('2015/10/10 11:55:16'), 280],
    [new Date('2015/10/10 11:55:16'), 280],
    [new Date('2015/10/10 11:55:32'), 290],
    [new Date('2015/10/10 11:55:56'), 279],
    [new Date('2015/10/10 11:56:20'), 277],
    [new Date('2015/10/10 11:56:44'), 279],
    [new Date('2015/10/10 11:57:10'), 282],
    [new Date('2015/10/10 11:58:13'), 284],
    [new Date('2015/10/10 11:58:41'), 285],
    [new Date('2015/10/10 11:59:16'), 285],
    [new Date('2015/10/10 12:00:00'), 268],
    [new Date('2015/10/10 12:00:56'), 303],
    [new Date('2015/10/10 12:01:36'), 310],
    [new Date('2015/10/10 12:01:54'), 311],
    [new Date('2015/10/10 12:02:28'), 320],
    [new Date('2015/10/10 12:02:50'), 322],
    [new Date('2015/10/10 12:03:16'), 321],
    [new Date('2015/10/10 12:03:24'), 319],
    [new Date('2015/10/10 12:04:06'), 330],
    [new Date('2015/10/10 12:04:26'), 329],
    [new Date('2015/10/10 12:05:31'), 320],
    [new Date('2015/10/10 12:05:55'), 338],
    [new Date('2015/10/10 12:06:28'), 337],
    [new Date('2015/10/10 12:06:54'), 341],
    [new Date('2015/10/10 12:07:47'), 359],
    [new Date('2015/10/10 12:08:05'), 354],
    [new Date('2015/10/10 12:08:38'), 350],
    [new Date('2015/10/10 12:10:08'), 366],
    [new Date('2015/10/10 12:10:56'), 366],
    [new Date('2015/10/10 12:11:25'), 364],
    [new Date('2015/10/10 12:11:59'), 367],
    [new Date('2015/10/10 12:12:36'), 370],
    [new Date('2015/10/10 12:13:13'), 372],
    [new Date('2015/10/10 12:13:58'), 372],
    [new Date('2015/10/10 12:16:26'), 392],
    [new Date('2015/10/10 12:17:08'), 386],
    [new Date('2015/10/10 12:18:21'), 405],
    [new Date('2015/10/10 12:18:54'), 401],
    [new Date('2015/10/10 12:19:34'), 402],
    [new Date('2015/10/10 12:20:06'), 422],
    [new Date('2015/10/10 12:20:55'), 434],
    [new Date('2015/10/10 12:21:31'), 433],
    [new Date('2015/10/10 12:22:06'), 445],
    [new Date('2015/10/10 12:22:43'), 453],
    [new Date('2015/10/10 12:23:33'), 450],
    [new Date('2015/10/10 12:24:07'), 467],
    [new Date('2015/10/10 12:24:53'), 471],
    [new Date('2015/10/10 12:25:35'), 467],
    [new Date('2015/10/10 12:26:24'), 463],
    [new Date('2015/10/10 12:27:11'), 465],
    [new Date('2015/10/10 12:28:10'), 499],
    [new Date('2015/10/10 12:29:04'), 494],
    [new Date('2015/10/10 12:29:44'), 513],
    [new Date('2015/10/10 12:30:27'), 514],
    [new Date('2015/10/10 12:31:16'), 516],
    [new Date('2015/10/10 12:31:59'), 529],
    [new Date('2015/10/10 12:32:54'), 567],
    [new Date('2015/10/10 12:33:49'), 558],
    [new Date('2015/10/10 12:34:45'), 537],
    [new Date('2015/10/10 12:35:29'), 533],
    [new Date('2015/10/10 12:36:00'), 528],
    [new Date('2015/10/10 12:36:35'), 538],
    [new Date('2015/10/10 12:37:06'), 537],
    [new Date('2015/10/10 12:37:33'), 546],
    [new Date('2015/10/10 12:38:09'), 542],
    [new Date('2015/10/10 12:39:18'), 558],
    [new Date('2015/10/10 12:39:59'), 552],
    [new Date('2015/10/10 12:40:40'), 557],
    [new Date('2015/10/10 12:41:14'), 565],
    [new Date('2015/10/10 12:41:49'), 591],
    [new Date('2015/10/10 12:42:14'), 584],
    [new Date('2015/10/10 12:42:43'), 585],
    [new Date('2015/10/10 12:43:09'), 603],
    [new Date('2015/10/10 12:43:36'), 598],
    [new Date('2015/10/10 12:44:17'), 605],
    [new Date('2015/10/10 12:44:46'), 612],
    [new Date('2015/10/10 12:46:21'), 605],
    [new Date('2015/10/10 12:46:52'), 604],
    [new Date('2015/10/10 12:47:24'), 601],
    [new Date('2015/10/10 12:47:54'), 601],
    [new Date('2015/10/10 12:48:29'), 603],
    [new Date('2015/10/10 12:48:52'), 606],
    [new Date('2015/10/10 12:49:28'), 631],
    [new Date('2015/10/10 12:49:56'), 628],
    [new Date('2015/10/10 12:51:10'), 624],
    [new Date('2015/10/10 12:54:03'), 624],
    [new Date('2015/10/10 12:55:03'), 621],
    [new Date('2015/10/10 12:55:29'), 622],
    [new Date('2015/10/10 12:56:00'), 623],
    [new Date('2015/10/10 12:56:34'), 619],
    [new Date('2015/10/10 12:58:19'), 601],
    [new Date('2015/10/10 12:58:33'), 601],
    [new Date('2015/10/10 12:58:48'), 615],
    [new Date('2015/10/10 12:58:59'), 613],
    [new Date('2015/10/10 12:59:11'), 616],
    [new Date('2015/10/10 12:59:25'), 611],
    [new Date('2015/10/10 12:59:51'), 629],
    [new Date('2015/10/10 13:00:31'), 625],
    [new Date('2015/10/10 13:01:02'), 625],
    [new Date('2015/10/10 13:01:28'), 625],
    [new Date('2015/10/10 13:01:59'), 622],
    [new Date('2015/10/10 13:03:09'), 637],
    [new Date('2015/10/10 13:03:43'), 639],
    [new Date('2015/10/10 13:04:16'), 639],
    [new Date('2015/10/10 13:04:52'), 639],
    [new Date('2015/10/10 13:05:30'), 651],
    [new Date('2015/10/10 13:06:09'), 656],
    [new Date('2015/10/10 13:06:58'), 666],
    [new Date('2015/10/10 13:07:39'), 671],
    [new Date('2015/10/10 13:08:27'), 678],
    [new Date('2015/10/10 13:10:31'), 692],
    [new Date('2015/10/10 13:13:26'), 701],
    [new Date('2015/10/10 13:14:35'), 699],
    [new Date('2015/10/10 13:15:05'), 731],
    [new Date('2015/10/10 13:16:34'), 694],
    [new Date('2015/10/10 13:17:13'), 687],
    [new Date('2015/10/10 13:18:13'), 700],
    [new Date('2015/10/10 13:18:32'), 698],
    [new Date('2015/10/10 13:18:51'), 701],
    [new Date('2015/10/10 13:19:13'), 702],
    [new Date('2015/10/10 13:19:36'), 689],
    [new Date('2015/10/10 13:20:01'), 683],
    [new Date('2015/10/10 13:20:17'), 686],
    [new Date('2015/10/10 13:20:22'), 686],
    [new Date('2015/10/10 13:20:27'), 686],
    [new Date('2015/10/10 13:20:38'), 686],
    [new Date('2015/10/10 13:21:03'), 686],
    [new Date('2015/10/10 13:21:20'), 690],
    [new Date('2015/10/10 13:21:30'), 689],
    [new Date('2015/10/10 13:21:41'), 694],
    [new Date('2015/10/10 13:21:55'), 698],
    [new Date('2015/10/10 13:22:12'), 700],
    [new Date('2015/10/10 13:22:27'), 699],
    [new Date('2015/10/10 13:24:01'), 720],
    [new Date('2015/10/10 13:24:11'), 721],
    [new Date('2015/10/10 13:26:23'), 686],
    [new Date('2015/10/10 13:26:47'), 691],
    [new Date('2015/10/10 13:28:53'), 692],
    [new Date('2015/10/10 13:29:30'), 692],
    [new Date('2015/10/10 13:33:06'), 689],
    [new Date('2015/10/10 13:33:58'), 689],
    [new Date('2015/10/10 13:34:58'), 689],
    [new Date('2015/10/10 13:35:49'), 689],
    [new Date('2015/10/10 13:36:56'), 689],
    [new Date('2015/10/10 13:37:57'), 689],
    [new Date('2015/10/10 13:38:51'), 689],
    [new Date('2015/10/10 13:39:51'), 689],
    [new Date('2015/10/10 13:40:51'), 689],
    [new Date('2015/10/10 13:41:57'), 688],
    [new Date('2015/10/10 13:42:57'), 688],
    [new Date('2015/10/10 13:43:57'), 688],
    [new Date('2015/10/10 13:44:55'), 688],
    [new Date('2015/10/10 13:45:54'), 687],
    [new Date('2015/10/10 13:46:52'), 687],
    [new Date('2015/10/10 13:47:52'), 687],
    [new Date('2015/10/10 13:48:51'), 687],
    [new Date('2015/10/10 13:49:57'), 688],
    [new Date('2015/10/10 13:50:57'), 688],
    [new Date('2015/10/10 13:51:53'), 688],
    [new Date('2015/10/10 13:52:51'), 690],
    [new Date('2015/10/10 13:53:48'), 690],
    [new Date('2015/10/10 13:54:47'), 690],
    [new Date('2015/10/10 13:56:52'), 690],
    [new Date('2015/10/10 13:57:48'), 690],
    [new Date('2015/10/10 14:04:09'), 685],
    [new Date('2015/10/10 14:05:04'), 686],
    [new Date('2015/10/10 14:06:03'), 686],
    [new Date('2015/10/10 14:10:52'), 675],
    [new Date('2015/10/10 14:14:54'), 702],
    [new Date('2015/10/10 14:16:54'), 697],
    [new Date('2015/10/10 14:17:51'), 697],
    [new Date('2015/10/10 14:19:45'), 692],
    [new Date('2015/10/10 14:20:49'), 690],
    [new Date('2015/10/10 14:22:49'), 689],
    [new Date('2015/10/10 14:25:55'), 688],
    [new Date('2015/10/10 14:28:49'), 692],
    [new Date('2015/10/10 14:30:48'), 688],
    [new Date('2015/10/10 14:31:58'), 707],
    [new Date('2015/10/10 14:37:15'), 689],
    [new Date('2015/10/10 14:38:11'), 695],
    [new Date('2015/10/10 14:40:50'), 690],
    [new Date('2015/10/10 14:41:31'), 692],
    [new Date('2015/10/10 14:43:05'), 693],
    [new Date('2015/10/10 14:43:54'), 692],
    [new Date('2015/10/10 14:48:05'), 676],
    [new Date('2015/10/10 14:49:08'), 691],
    [new Date('2015/10/10 14:59:37'), 685],
    [new Date('2015/10/10 15:03:20'), 711],
    [new Date('2015/10/10 15:04:59'), 686],
    [new Date('2015/10/10 15:07:05'), 684],
    [new Date('2015/10/10 15:07:55'), 682],
    [new Date('2015/10/10 15:08:48'), 683],
    [new Date('2015/10/10 15:09:45'), 683],
    [new Date('2015/10/10 15:10:41'), 684],
    [new Date('2015/10/10 15:11:40'), 684],
    [new Date('2015/10/10 15:13:13'), 684],
    [new Date('2015/10/10 15:18:36'), 693],
    [new Date('2015/10/10 15:22:06'), 690],
    [new Date('2015/10/10 15:25:32'), 688],
    [new Date('2015/10/10 15:27:00'), 702],
    [new Date('2015/10/10 15:29:49'), 722],
    [new Date('2015/10/10 15:34:13'), 690],
    [new Date('2015/10/10 15:34:57'), 685],
    [new Date('2015/10/10 15:37:39'), 693],
    [new Date('2015/10/10 15:38:16'), 657],
    [new Date('2015/10/10 15:39:47'), 698],
    [new Date('2015/10/10 15:40:42'), 625],
    [new Date('2015/10/10 15:41:09'), 596],
    [new Date('2015/10/10 15:41:30'), 595],
    [new Date('2015/10/10 15:41:55'), 608],
    [new Date('2015/10/10 15:42:22'), 596],
    [new Date('2015/10/10 15:42:37'), 597],
    [new Date('2015/10/10 15:42:47'), 604],
    [new Date('2015/10/10 15:43:02'), 592],
    [new Date('2015/10/10 15:43:16'), 591],
    [new Date('2015/10/10 15:43:33'), 592],
    [new Date('2015/10/10 15:43:50'), 594],
    [new Date('2015/10/10 15:44:04'), 590],
    [new Date('2015/10/10 15:44:25'), 593],
    [new Date('2015/10/10 15:45:02'), 581],
    [new Date('2015/10/10 15:45:49'), 570],
    [new Date('2015/10/10 15:46:14'), 575],
    [new Date('2015/10/10 15:46:39'), 578],
    [new Date('2015/10/10 15:46:55'), 580],
    [new Date('2015/10/10 15:47:15'), 582],
    [new Date('2015/10/10 15:47:34'), 583],
    [new Date('2015/10/10 15:47:54'), 584],
    [new Date('2015/10/10 15:48:23'), 566],
    [new Date('2015/10/10 15:48:46'), 555],
    [new Date('2015/10/10 15:49:14'), 555],
    [new Date('2015/10/10 15:49:42'), 546],
    [new Date('2015/10/10 15:50:07'), 550],
    [new Date('2015/10/10 15:50:39'), 538],
    [new Date('2015/10/10 15:51:18'), 534],
    [new Date('2015/10/10 15:51:57'), 516],
    [new Date('2015/10/10 15:52:21'), 526],
    [new Date('2015/10/10 15:52:40'), 507],
    [new Date('2015/10/10 15:53:14'), 509],
    [new Date('2015/10/10 15:53:29'), 508],
    [new Date('2015/10/10 15:53:55'), 498],
    [new Date('2015/10/10 15:54:13'), 496],
    [new Date('2015/10/10 15:54:29'), 495],
    [new Date('2015/10/10 15:54:57'), 493],
    [new Date('2015/10/10 15:55:21'), 492],
    [new Date('2015/10/10 15:55:52'), 493],
    [new Date('2015/10/10 15:56:18'), 492],
    [new Date('2015/10/10 15:56:58'), 477],
    [new Date('2015/10/10 15:57:31'), 474],
    [new Date('2015/10/10 15:58:05'), 468],
    [new Date('2015/10/10 15:58:36'), 461],
    [new Date('2015/10/10 15:59:02'), 456],
    [new Date('2015/10/10 16:00:07'), 442],
    [new Date('2015/10/10 16:01:00'), 439],
    [new Date('2015/10/10 16:01:25'), 460],
    [new Date('2015/10/10 16:01:43'), 455],
    [new Date('2015/10/10 16:01:54'), 440],
    [new Date('2015/10/10 16:02:31'), 416],
    [new Date('2015/10/10 16:02:45'), 414],
    [new Date('2015/10/10 16:03:02'), 403],
    [new Date('2015/10/10 16:03:28'), 467],
    [new Date('2015/10/10 16:03:52'), 399],
    [new Date('2015/10/10 16:04:17'), 393],
    [new Date('2015/10/10 16:04:39'), 389],
    [new Date('2015/10/10 16:05:04'), 378],
    [new Date('2015/10/10 16:05:30'), 375],
    [new Date('2015/10/10 16:06:06'), 362],
    [new Date('2015/10/10 16:06:41'), 339],
    [new Date('2015/10/10 16:07:04'), 348],
    [new Date('2015/10/10 16:07:29'), 335],
    [new Date('2015/10/10 16:08:33'), 325],
    [new Date('2015/10/10 16:09:03'), 322],
    [new Date('2015/10/10 16:09:28'), 310],
    [new Date('2015/10/10 16:09:57'), 311],
    [new Date('2015/10/10 16:10:15'), 312],
    [new Date('2015/10/10 16:10:48'), 309],
    [new Date('2015/10/10 16:11:17'), 313],
    [new Date('2015/10/10 16:11:43'), 305],
    [new Date('2015/10/10 16:12:03'), 304],
    [new Date('2015/10/10 16:12:29'), 300],
    [new Date('2015/10/10 16:13:01'), 288],
    [new Date('2015/10/10 16:13:41'), 289],
    [new Date('2015/10/10 16:16:30'), 273],
    [new Date('2015/10/10 16:17:12'), 268],
    [new Date('2015/10/10 16:17:35'), 249],
    [new Date('2015/10/10 16:18:00'), 241],
    [new Date('2015/10/10 16:18:09'), 241],
    [new Date('2015/10/10 16:18:29'), 241],
    [new Date('2015/10/10 16:18:56'), 233],
    [new Date('2015/10/10 16:19:58'), 228],
    [new Date('2015/10/10 16:20:25'), 217],
    [new Date('2015/10/10 16:20:40'), 216],
    [new Date('2015/10/10 16:20:59'), 211],
    [new Date('2015/10/10 16:21:17'), 213],
    [new Date('2015/10/10 16:22:10'), 214],
    [new Date('2015/10/10 16:22:41'), 209],
    [new Date('2015/10/10 16:23:04'), 207],
    [new Date('2015/10/10 16:23:45'), 206],
    [new Date('2015/10/10 16:23:57'), 205],
    [new Date('2015/10/10 16:24:16'), 205],
    [new Date('2015/10/10 16:24:37'), 204],
    [new Date('2015/10/10 16:25:04'), 179],
    [new Date('2015/10/10 16:25:23'), 189],
    [new Date('2015/10/10 16:25:43'), 189],
    [new Date('2015/10/10 16:25:49'), 190],
    [new Date('2015/10/10 16:25:59'), 191],
    [new Date('2015/10/10 16:26:08'), 181],
    [new Date('2015/10/10 16:26:23'), 178],
    [new Date('2015/10/10 16:26:38'), 178],
    [new Date('2015/10/10 16:26:57'), 173],
    [new Date('2015/10/10 16:27:15'), 162],
    [new Date('2015/10/10 16:27:30'), 167],
    [new Date('2015/10/10 16:27:59'), 168],
    [new Date('2015/10/10 16:28:29'), 158],
    [new Date('2015/10/10 16:28:56'), 157],
    [new Date('2015/10/10 16:29:06'), 160],
    [new Date('2015/10/10 16:29:24'), 164],
    [new Date('2015/10/10 16:29:42'), 159],
    [new Date('2015/10/10 16:30:04'), 156],
    [new Date('2015/10/10 16:30:22'), 157],
    [new Date('2015/10/10 16:30:25'), 158],
    [new Date('2015/10/10 16:30:44'), 147],
    [new Date('2015/10/10 16:30:50'), 147],
    [new Date('2015/10/10 16:31:04'), 137],
    [new Date('2015/10/10 16:31:23'), 137],
    [new Date('2015/10/10 16:31:40'), 143],
    [new Date('2015/10/10 16:31:59'), 131],
    [new Date('2015/10/10 16:32:11'), 136],
    [new Date('2015/10/10 16:32:29'), 133],
    [new Date('2015/10/10 16:32:45'), 122],
    [new Date('2015/10/10 16:32:59'), 113],
    [new Date('2015/10/10 16:33:13'), 119],
    [new Date('2015/10/10 16:33:42'), 125],
    [new Date('2015/10/10 16:33:48'), 123],
    [new Date('2015/10/10 16:33:57'), 124],
    [new Date('2015/10/10 16:34:13'), 120],
    [new Date('2015/10/10 16:34:25'), 109],
    [new Date('2015/10/10 16:34:43'), 111],
    [new Date('2015/10/10 16:35:00'), 114],
    [new Date('2015/10/10 16:35:18'), 103],
    [new Date('2015/10/10 16:35:39'), 101],
    [new Date('2015/10/10 16:35:56'), 101],
    [new Date('2015/10/10 16:36:19'), 106],
    [new Date('2015/10/10 16:36:30'), 107],
    [new Date('2015/10/10 16:36:42'), 94],
    [new Date('2015/10/10 16:37:00'), 94],
    [new Date('2015/10/10 16:37:11'), 84],
    [new Date('2015/10/10 16:37:17'), 83],
    [new Date('2015/10/10 16:37:33'), 86],
    [new Date('2015/10/10 16:37:53'), 80],
    [new Date('2015/10/10 16:38:09'), 72],
    [new Date('2015/10/10 16:38:31'), 88],
    [new Date('2015/10/10 16:38:46'), 90],
    [new Date('2015/10/10 16:38:56'), 91],
    [new Date('2015/10/10 16:39:08'), 92],
    [new Date('2015/10/10 16:39:19'), 89],
    [new Date('2015/10/10 16:39:33'), 89],
    [new Date('2015/10/10 16:39:55'), 86],
    [new Date('2015/10/10 16:40:10'), 89],
    [new Date('2015/10/10 16:40:33'), 74],
    [new Date('2015/10/10 16:40:56'), 82],
    [new Date('2015/10/10 16:41:25'), 75],
    [new Date('2015/10/10 16:41:42'), 73],
    [new Date('2015/10/10 16:41:59'), 80],
    [new Date('2015/10/10 16:42:13'), 77],
    [new Date('2015/10/10 16:42:30'), 77],
    [new Date('2015/10/10 16:42:46'), 74],
    [new Date('2015/10/10 16:43:04'), 80],
    [new Date('2015/10/10 16:43:56'), 76],
    [new Date('2015/10/10 16:44:18'), 69],
    [new Date('2015/10/10 16:44:42'), 84],
    [new Date('2015/10/10 16:44:54'), 85],
    [new Date('2015/10/10 16:45:02'), 80],
    [new Date('2015/10/10 16:45:15'), 84],
    [new Date('2015/10/10 16:45:28'), 83],
    [new Date('2015/10/10 16:45:41'), 84],
    [new Date('2015/10/10 16:45:53'), 87],
    [new Date('2015/10/10 16:46:07'), 79],
    [new Date('2015/10/10 16:46:28'), 79],
    [new Date('2015/10/10 16:46:46'), 83],
    [new Date('2015/10/10 16:47:02'), 76],
    [new Date('2015/10/10 16:47:15'), 79],
    [new Date('2015/10/10 16:47:27'), 75],
    [new Date('2015/10/10 16:47:41'), 78],
    [new Date('2015/10/10 16:48:00'), 88],
    [new Date('2015/10/10 16:48:14'), 79],
    [new Date('2015/10/10 16:48:28'), 83],
    [new Date('2015/10/10 16:48:51'), 81],
    [new Date('2015/10/10 16:49:11'), 85],
    [new Date('2015/10/10 16:49:16'), 86],
    [new Date('2015/10/10 16:49:34'), 81],
    [new Date('2015/10/10 16:49:54'), 75],
    [new Date('2015/10/10 16:50:04'), 79],
    [new Date('2015/10/10 16:50:25'), 79],
    [new Date('2015/10/10 16:50:42'), 75],
    [new Date('2015/10/10 16:51:07'), 74],
    [new Date('2015/10/10 16:51:27'), 71],
    [new Date('2015/10/10 16:51:53'), 69],
    [new Date('2015/10/10 16:52:26'), 73],
    [new Date('2015/10/10 16:52:44'), 70],
    [new Date('2015/10/10 16:52:54'), 69],
    [new Date('2015/10/10 16:53:08'), 59],
    [new Date('2015/10/10 16:53:24'), 67],
    [new Date('2015/10/10 16:53:40'), 66],
    [new Date('2015/10/10 16:53:57'), 61],
    [new Date('2015/10/10 16:54:09'), 57],
    [new Date('2015/10/10 16:54:32'), 54],
    [new Date('2015/10/10 16:54:51'), 63],
    [new Date('2015/10/10 16:55:09'), 68],
  ];
  return var_array;
}

// npoint = 483


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

