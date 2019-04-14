const loadGoogleMapsApi = require('load-google-maps-api');

document.addEventListener('DOMContentLoaded', function() {

    const location = document.getElementById('locations');
    const obj = document.getElementsByClassName('js-map')[0];
    
    let mapenable = false, int;

    const initMap = function() {
        loadGoogleMapsApi({
            key: 'AIzaSyAtmyxhfag5M7TeoTEJMZvKdHEUaT4gkjs'
            }).then(function (googleMaps) {
            
            const el = document.querySelector('.js-map'),
                  markerWidth = 150,
                  markerHeight = 60;
                  
            let geocoder = new google.maps.Geocoder(),
                address = el.getAttribute('data-address');

            const image = {
				url: el.getAttribute('data-marker'),
				size: new google.maps.Size(markerWidth, markerHeight),
				scaledSize: new google.maps.Size(markerWidth, markerHeight),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(markerWidth/2, markerHeight/2),
				labelOrigin: new google.maps.Point(0, markerHeight)
			}
			
			const getLatLngFromAddress = function(address) {
               if (geocoder) {
                   geocoder.geocode( { 'address': address}, function(results, status) {

                       if (status == google.maps.GeocoderStatus.OK) {
                           let latitude = results[0].geometry.location.lat();
                           let longitude = results[0].geometry.location.lng();
                           let myLatLng = new google.maps.LatLng(latitude, longitude);
                           
                           showMap(myLatLng);
                       }
                   });
               }         
            };
			
            const showMap = function(coords) {
                const map = new googleMaps.Map(el, {
                    center: coords,
                    disableDefaultUI: true,
                    zoom: 17,
                    styles: [{"stylers": [{"saturation": -100},{"gamma": 0.8},{"lightness": 4},{"visibility": "on"}]},{"featureType": "landscape.natural", "stylers": [{"visibility": "on"},{"color": "#5dff00"},{"gamma": 4.97},{"lightness": -5},{"saturation": 100}]}]
                })
                
                const marker = new google.maps.Marker({
    				position: coords,
    				map: map,
    				draggable: false,
    				zIndex: 20,
    				icon: image,
    				animation: google.maps.Animation.DROP,				
    			});
            };

			
			const changeAddress = function(myLatLng) {
    			
                let point = location.getElementsByClassName('js-address');
                
                const getCoords = function(e) {
                        
                    let address = e.currentTarget.getAttribute('data-address');                    
                    
                    geocoder = new google.maps.Geocoder();
                    getLatLngFromAddress(address);                    
                    
                    for (let i = 0; i < point.length; i ++) {
                        point[i].classList.remove('is-active');
                    }
                    
                    e.currentTarget.classList.add('is-active');
                }
                
                
                for (let i = 0; i < point.length; i ++) {
                    point[i].addEventListener('click', getCoords);
                }
			}
			
			
			getLatLngFromAddress(address);
			changeAddress();
            
        
        }).catch(function (error) {
            console.error(error)
        })
    };

    const init = function() {
    
        // Fire when show in viewport
        
        clearInterval(int); // for better performance
    
        int = setInterval(function() {
            let bottomOfObject = obj.getBoundingClientRect().top + 200,
            bottomOfWindow = window.innerHeight;
    
            if ( bottomOfWindow > bottomOfObject ) {
                if (mapenable === false) {
                    initMap();
                    console.log('fire map');
                    mapenable = true;
                }
        	}

        }, 50);        
    }
    
    
    
    obj ? window.addEventListener('scroll', init) : false;
    
}, false);


