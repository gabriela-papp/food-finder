import GoogleMapReact from 'google-map-react'
import { Marker } from '@react-google-maps/api'
import { useGlobalContext } from './context'

const containerStyle = {
  width: '100%',
  height: '400px',
}
function Map({ center }) {
  const { venues, recommendedVenueId } = useGlobalContext()
  const coords = { lat: 0, lng: 0 }
  const { REACT_APP_GOOGLE_MAPS_API } = process.env

  const mapMarkers = venues.map((venue, i) => {
    const marker = {
      position: {
        lat: venue.location.lat,
        lng: venue.location.lng,
      },
      animation: {
        animation: true,
      },
    }
    return <Marker key={venue.id} {...marker} />
  })

  return (
    <div style={containerStyle}>
      <GoogleMapReact
        mapContainerStyle={containerStyle}
        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAPS_API }}
        defaultCenter={coords}
        center={center}
        defaultZoom={11}
        options={''}
        onChange={''}
        onChildClick={''}
      >
        <div>{mapMarkers}</div>
      </GoogleMapReact>
    </div>
  )
}

export default Map
