import { GoogleMap, LoadScript  } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '400px'
};
function Map({center,markers}) {

    const mapMarkers = markers.map((venue, i) => {
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
            googleMapsApiKey="AIzaSyBPgPC57PYZCJ3ZFypu0osA6S8aTubikTg"
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
