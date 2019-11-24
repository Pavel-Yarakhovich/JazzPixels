	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 48.850000, lng: 2.500000},
			zoom: 5,
      disableDefaultUI: true,
      scrollwheel: false
		})
			  
		paris = new google.maps.Marker(
      {
        position: {lat: 48.850000, lng: 2.320000},
        map: map,
        animation: google.maps.Animation.DROP,
        icon: 'img/map_pin.png'
      }
    );

    zurich = new google.maps.Marker(
      {
        position: {lat: 47.330000, lng: 8.520000},
        map: map,
        animation: google.maps.Animation.DROP,
        icon: 'img/map_pin-active.png'
      }
    );

	const styles = [
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#484848"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "labels.text",
      "stylers": [
        {
          "color": "#737373"
        },
        {
          "visibility": "simplified"
        },
        {
          "weight": 0.5
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#333333"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#1d1d1d"
        }
      ]
    }
  ]

map.setOptions({styles: styles});

}