import { GoogleMap, LoadScript  } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { useGlobalContext } from './context';

const containerStyle = {
    width: '100%',
    height: '500px'
};
function Map({center}) {
    const { venues } = useGlobalContext();

    const mapMarkers = venues.map((venue, i) => {
        const marker = {
            position: {
                lat: venue.location.lat,
                lng: venue.location.lng
            },
            animation:{
                animation:true
            }
        }
        return <Marker key={venue.id} {...marker} />
    })
   
    return (
        <LoadScript
            googleMapsApiKey=""
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <div>{mapMarkers}</div>
            </GoogleMap>
        </LoadScript>

    )
}

export default Map
