$(document).ready(function(){
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
  var continentCoordinates;
  //On Continent Clicks
  $("path").on("click", function(){
    //Saves Attribute Of Aria-Label To Variable
    var continentClicked = $(this).attr("aria-label");
    //Checks What The Variable Is Then Sets Coordinate Variable Accordingly
    if(continentClicked = "Asia  "){
      continentCoordinates = "34.0479,100.6197";
    }
    else if(continentClicked = "North America  "){
      continentCoordinates = "54.5260,-105.2551";
    }
    else if(continentClicked = "South America  "){
      continentCoordinates = "-8.7832,-55.4915";
    }
    else if(continentClicked = "Europe  "){
      continentCoordinates = "54.5260,15.2551";
    }
    else if(continentClicked = "Australia  "){
      continentCoordinates = "-25.2744,133.7751";
    }
    else if(continentClicked = "Africa  "){
      continentCoordinates = "-8.7832,34.5085";
    }
    //Youtube API
    $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBh5nvrC9BnoH0A7JF1mVhNKEIDdDpFn7s&topicId=/m/04rlf&part=snippet&location=" + continentCoordinates +"&locationRadius=500mi&type=video&maxResults=3",
            method: "GET"
          })
          .done(function(response){
            console.log(response);
    })
  })
})
