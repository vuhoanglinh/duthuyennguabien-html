

//Google map blue version
(function($) {
"use strict";
google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(10.780713, 106.655257),
            zoom: 19,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: false,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: false,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "336d75"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#666666"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill"
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#6bb1e1"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    }
],
        }
        var mapElement = document.getElementById('map-blue');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['Seahorse LTD', '373/35/2 Lý Thường Kiệt, Phường 9, Quận Tân Bình, TP Hồ Chí Minh', '+84 123 456 7890', 'support@duthuyennguabien.com', 'undefined', 10.780713, 106.655257]
        ];
		var i;
		var description;
		var telephone;
		var email;
		var web;
		var marker;
		var link;
        for (i = 0; i < locations.length; i++) {
   if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
   if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
   if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
   if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
            marker = new google.maps.Marker({
                icon: 'images/maap.png',
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web);
        }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web) {
if (web.substring(0, 7) != "http://") {
link = "http://" + web;
} else {
link = web;
}
      google.maps.event.addListener(marker, 'click', function() {
            var html= "<div style='color:#000;background-color:#fff;padding:5px;width:250px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
            var iw = new google.maps.InfoWindow({content:html});
            iw.open(map,marker);
        });
    }
}
})(jQuery);