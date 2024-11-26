import { GoogleMap, LoadScript } from '@react-google-maps/api';

import '../styles/shopMaps.css';

const ShopMap = () => {

    const apiKey = "AIzaSyDDbD1guhdRrBjUi5wZVikIdxlAE0r0w24";
    const mId = "35b2c09b1ac9371c"

    const mapContainerStyle = {
        width: '100%',
        height: '100%',
    };

    const shopLocation = {
        lat: -36.78234841353206,
        lng: -59.87014115718526,
    };

    const handleMapLoad = (map) => {
        const data = new window.google.maps.marker.AdvancedMarkerElement({
            position: shopLocation,
            map: map,
            title: 'Shop Location',
        });
    }
     
    return (
        <LoadScript
            googleMapsApiKey={apiKey}
            libraries={['marker']}
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={shopLocation}
                zoom={15}
                onLoad={handleMapLoad}
                mapId={mId}
            >
            </GoogleMap>
        </LoadScript>
    );
};

export default ShopMap;