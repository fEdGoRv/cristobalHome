import { GoogleMap, LoadScript } from '@react-google-maps/api';

import './shopMaps.css';

const ShopMap = () => {

    const apiKey = "AIzaSyDDbD1guhdRrBjUi5wZVikIdxlAE0r0w24";

    const mapContainerStyle = {
        width: '100%',
        height: '100%',
    };

    const shopLocation = {
        lat: -36.78228686277276,
        lng: -59.87017005764709,
    };

    // const handleMapLoad = (map) => {
    //     const marker = new window.google.maps.marker.AdvancedMarkerElement({
    //         position: shopLocation,
    //         map: map,
    //         title: 'Shop Location',
    //     });

    //     marker.content = document.createElement('div');
    //     marker.content.innerHTML = `
    //     <div style="background-color: white; padding: 5px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);">
    //       <strong>Shop</strong>
    //     </div>
    //   `;
    // }

    return (
        <LoadScript
         googleMapsApiKey={apiKey}
         libraries={['marker']}
          >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={shopLocation}
                zoom={15}
                //onLoad={handleMapLoad}
           >
            </GoogleMap>
        </LoadScript>
    );
};

export default ShopMap;