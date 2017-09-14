$(document).ready(function(){
    var map = AmCharts.makeChart("chartdiv", {

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

        "areas": [{
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
        }]
    },
    "zoomControl": {
        "panControlEnabled": false,
        "zoomControlEnabled": false,
        "homeButtonEnabled": false
    },

});

///////////////////////////////////////////////////////////////////////////////////////
//THIS IS THE SCROLLSPY STUFF/////////////////////////////////////////////////////////

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
var continentCoordinates;
  var continentClicked;
  //On Continent Clicks
  $("path").on("click", function(){
    $("#songlist").empty();
    $("#videopreview").empty();
    //Saves Attribute Of Aria-Label To Variable
    continentClicked = $(this).attr("aria-label");
    //Checks What The Variable Is Then Sets Coordinate Variable Accordingly
    if(continentClicked == "Asia  "){
      continentCoordinates = "34.0479,100.6197";
    }
    else if(continentClicked == "North America  "){
      continentCoordinates = "54.5260,-105.2551";
    }
    else if(continentClicked == "South America  "){
      continentCoordinates = "-8.7832,-55.4915";
    }
    else if(continentClicked == "Europe  "){
      continentCoordinates = "54.5260,15.2551";
    }
    else if(continentClicked == "Australia  "){
      continentCoordinates = "-25.2744,133.7751";
    }
    else if(continentClicked == "Africa  "){
      continentCoordinates = "-8.7832,34.5085";
    }
    //Youtube API
    $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBh5nvrC9BnoH0A7JF1mVhNKEIDdDpFn7s&topicId=/m/04rlf&part=snippet&location=" + continentCoordinates +"&locationRadius=500mi&type=video&maxResults=3",
            method: "GET"
          })
          .done(function(response){
            var videoArray = response.items;
            for (i = 0; i < videoArray.length; i++){
                $("#songlist").append("<li>" + response.items[i].snippet.title + "</li>");
                $("#songlist").append("<img src='" + response.items[i].snippet.thumbnails.default.url + "' id='" + i + "'>")
            }
            $(document).on("click", "img", function(){
                var videoIds = $(this).attr("id");
                $("#videopreview").empty();
                $("#videopreview").append("<iframe src='https://www.youtube.com/embed/" + response.items[videoIds].id.videoId + "''></iframe")
            })
            console.log(response);
    })
  })
})
