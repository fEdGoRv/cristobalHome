import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function ShowMaps(){

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
        console.log(`Google Maps API Version: ${google.maps.version}`);
        
        if (google?.maps?.marker?.AdvancedMarkerElement) {
            const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
                map,
                position: shopLocation,
                title: 'Shop Location',
            });
        } else {
            console.error('AdvancedMarkerElement is not available.');
        }
    };

    


    return (
        <LoadScript
        googleMapsApiKey={apiKey}
        //libraries={['places']}
        version='beta'
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={shopLocation}
                zoom={16}
                mapId={mId}
                onLoad={handleMapLoad}
            >
                <Marker position={shopLocation} />
            </GoogleMap>
        </LoadScript>
    );
};

export default ShowMaps;