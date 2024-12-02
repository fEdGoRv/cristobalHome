import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow
} from "@vis.gl/react-google-maps";
import { useState } from 'react';


function ShowMaps(){
    const [open, setOpen] = useState(false)

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

    return(
        <APIProvider apiKey={apiKey}>
            <div style={mapContainerStyle}>
                <Map
                zoom={16}
                center={shopLocation}
                mapId={mId}
                >
                  <AdvancedMarker
                   position={shopLocation}
                   onClick={()=>setOpen(true)}
                   >
                    <Pin
                    background={"peru"}
                    borderColor={"green"}
                    glyphColor={"black"} 
                    />
                  </AdvancedMarker>

                  {open && <InfoWindow 
                  position={shopLocation}
                  onClick={()=>setOpen(false)}
                  >
                    Cristobal Home
                    </InfoWindow>}

                </Map>
            </div>
        </APIProvider>
    );
};

export default ShowMaps;