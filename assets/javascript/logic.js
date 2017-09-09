
var map = AmCharts.makeChart( "chartdiv", {

  "type": "map",
"theme": "chalk",

  "dragMap": false,
  "projection": "eckert3",

  "areasSettings": {
    "autoZoom": false,
    "rollOverOutlineColor": "#000000",
    "selectedColor": "#000000",
    "outlineAlpha": 1,
    "outlineColor": "#FFFFFF",
    "outlineThickness": 1,
    "color": "#000000"
  },

  "dataProvider": {
    "map": "continentsLow",

    "areas": [ {
      "id": "africa",
      "title": "Africa",
      "pattern": {
        "url": "https://www.amcharts.com/lib/3/patterns/black/pattern1.png",
        "width": 4,
        "height": 4,
        "color": "green"
      }
    }, {
      "id": "asia",
      "title": "Asia",
      "pattern": {
        "url": "https://www.amcharts.com/lib/3/patterns/black/pattern2.png",
        "width": 4,
        "height": 4,
        "color": "yellow"
      }
    }, {
      "id": "australia",
      "title": "Australia",
      "pattern": {
        "url": "https://www.amcharts.com/lib/3/patterns/black/pattern3.png",
        "width": 4,
        "height": 4,
        "color": "orange"
      }
    }, {
      "id": "europe",
      "title": "Europe",
      "pattern": {
        "url": "https://www.amcharts.com/lib/3/patterns/black/pattern4.png",
        "width": 4,
        "height": 4,
        "color": "blue"
      }
    }, {
      "id": "north_america",
      "title": "North America",
      "pattern": {
        "url": "https://www.amcharts.com/lib/3/patterns/black/pattern5.png",
        "width": 4,
        "height": 4,
        "color": "red"
      }
    }, {
      "id": "south_america",
      "title": "South America",
      "pattern": {
        "url": "https://www.amcharts.com/lib/3/patterns/black/pattern6.png",
        "width": 4,
        "height": 4,
        "color": "purple"
      }
    } ]
  },
  "zoomControl": {
    "panControlEnabled": false,
    "zoomControlEnabled": false,
    "homeButtonEnabled": false
  },

} );