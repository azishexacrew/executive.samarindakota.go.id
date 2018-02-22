$(function () {

    var styled_map;

    if($("#style-map").length){
        styled_map = new GMaps({
            el: '#style-map',
            lat: -0.5013804,
            lng: 117.0973124,
            zoom: 13,
            zoomControl: true,
            zoomControlOpt: {
                style: 'SMALL',
                position: 'TOP_LEFT'
            },
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            // HERE BEGIN YOUR THEME THAT YOU HAVE TO INTEGRATA
            styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#193341"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#2c5a71"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#29768a"
                    }, {
                        "lightness": -37
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#406d80"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#406d80"
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#3e606f"
                    }, {
                        "weight": 2
                    }, {
                        "gamma": 0.84
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [{
                        "weight": 0.6
                    }, {
                        "color": "#1a3541"
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#2c5a71"
                    }]
                }
            ]
            // END OF STYLE
        });
    }

});