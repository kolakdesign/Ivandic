var APP_DATA = {
  /* PROMJENA POLOŽAJA TOČKICA XY, MAP CONTAINER 1 ILI 2 POZIVA NA SLIKU MAPE*/
  "scenes": [
    {
      "id": "0-ulaz",
      "name": "Ulaz",
      "mapcontainer": "1",
      "x": "46%",
      "y": "110%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.10105750243915246,
        "pitch": 0.09393712069449833,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": 0.7069304424625997,
          "pitch": 0.3054680227731321,
          "rotation": 0,
          "target": "1-radna-soba"
        },
        {
          "yaw": -0.012435342490110912,
          "pitch": 0.058526854054850475,
          "rotation": 0,
          "target": "2-hodnik"
        },
        {
          "yaw": -0.162435342490110912,
          "pitch": 0.058526854054850475,
          "rotation": -1,
          "target": "8-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-radna-soba",
      "name": "Radna soba",
      "mapcontainer": "1",
      "x": "42%",
      "y": "62%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2463679952477502,
          "pitch": 0.21117963947235907,
          "rotation": 0,
          "target": "0-ulaz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hodnik",
      "name": "Hodnik",
      "mapcontainer": "1",
      "x": "55%",
      "y": "58%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04564967537184472,
          "pitch": 0.19571091085372494,
          "rotation": 0,
          "target": "3-dnevni-boravak"
        },
        {
          "yaw": 2.722164163874776,
          "pitch": -0.3235683684907311,
          "rotation": 0,
          "target": "5-stubite"
        },
        {
          "yaw": -3.0930482229897684,
          "pitch": 0.06779666310382382,
          "rotation": 0,
          "target": "0-ulaz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dnevni-boravak",
      "name": "Dnevni boravak",
      "mapcontainer": "1",
      "x": "75%",
      "y": "52%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.30036133222558141,
          "pitch": 0.15021345066091385,
          "rotation": 0,
          "target": "4-kuhinja"
        },
        {
          "yaw": -1.5901614847457282,
          "pitch": 0.10323255279846322,
          "rotation": 0,
          "target": "2-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kuhinja",
      "name": "Kuhinja",
      "mapcontainer": "1",
      "x": "46%",
      "y": "75%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1126166753828038,
          "pitch": 0.21397090244122907,
          "rotation": 0,
          "target": "3-dnevni-boravak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stubite",
      "name": "Stubište",
      "mapcontainer": "1",
      "x": "40%",
      "y": "75%",
      "levels": [
      {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.1945379058937995,
        "pitch": 0.1865068043884559,
        "fov": 1.3662485491026943
      },
      "linkHotspots": [
        {
          "yaw": -1.1865369882159627,
          "pitch": 0.7465613716425477,
          "rotation": 0,
          "target": "2-hodnik"
        },
        {
          "yaw": 1.9063157063528537,
          "pitch": 0.1921977272550386,
          "rotation": 0,
          "target": "6-spavaa_garderoba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-spavaa_garderoba",
      "name": "Spavaća_Garderoba",
      "mapcontainer": "1",
      "x": "29%",
      "y": "75%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.048813918581437576,
          "pitch": 0.08408270380855853,
          "rotation": 0,
          "target": "7-spavaa"
        },
        {
          "yaw": -1.0548395960660386,
          "pitch": 0.14309469806156727,
          "rotation": 0,
          "target": "9-kupaonica"
        },
        {
          "yaw": -3.0548395960660386,
          "pitch": 0.14309469806156727,
          "rotation": 0,
          "target": "5-stubite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-spavaa",
      "name": "Spavaća",
      "mapcontainer": "1",
      "x": "29%",
      "y": "45%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.420919852842074,
          "pitch": 0.14234802451086281,
          "rotation": 0,
          "target": "6-spavaa_garderoba"
        },
        {
          "yaw": 1.620919852842074,
          "pitch": 0.14234802451086281,
          "rotation": 1,
          "target": "9-kupaonica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wc",
      "name": "WC",
      "mapcontainer": "2",
      "x": "39%",
      "y": "59%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8561039912518225,
          "pitch": 0.1647900913587318,
          "rotation": 0,
          "target": "2-hodnik"
        },
       ],
      "infoHotspots": []
    },
    {
      "id": "9-kupaonica",
      "name": "Kupaonica",
      "mapcontainer": "2",
      "x": "46%",
      "y": "66%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.77261153280966823,
          "pitch": 0.0897621375525226,
          "rotation": 6.283185307179586,
          "target": "6-spavaa_garderoba"
        },
              ],
      "infoHotspots": []
    },
  ],
  "name": "Ivandić",
  "settings": {
    "mouseViewMode": "drag",
    "deviceOrientationEnabled": true,
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false,
  }
};
