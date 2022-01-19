import GoogleMapReact from 'google-map-react'
import { Marker } from '@react-google-maps/api'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { useGlobalContext } from './context'

const containerStyle = {
  width: '100%',
  height: '400px',
}
function Map({ center, venues, setBounds }) {
  const { recommendedVenueId, setCoordinates, coordinates } = useGlobalContext()
  const isDesktop = useMediaQuery(`(min-width:600px)`)
  const { REACT_APP_GOOGLE_MAPS_API } = process.env

  //   const mapMarkers = venues.map((venue, i) => {
  //     const marker = {
  //       position: {
  //         lat: venue.location.lat,
  //         lng: venue.location.lng,
  //       },
  //       animation: {
  //         animation: true,
  //       },
  //     }
  //     return <Marker key={venue.id} {...marker} />
  //   })

  return (
    <div style={containerStyle}>
      <GoogleMapReact
        mapContainerStyle={containerStyle}
        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAPS_API }}
        defaultCenter={coordinates}
        center={center}
        defaultZoom={11}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={''}
      >
        {venues?.map((venue) => (
          <div lat={Number(venue.latitude)} lng={Number(venue.longitude)}>
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" />
            ) : (
              <Paper elevation={3}>
                <Typography variant="subtitle">{venue.name}</Typography>
                <img
                  src={
                    venue.photo
                      ? venue.photo.images.large.url
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCE5kYdm8oHHmrcZhvQI5iH2NtuS2L2Fd1c4ySD4AY2n1TJ92i0CxOoMvbLXiOKlUlvCc&usqp=CAU'
                  }
                  alt={venue.name}
                />
                <Rating size="small" value={Number(venue.rating)} read-only />
              </Paper>
            )}
          </div>
        ))}
        {/* <div>{mapMarkers}</div> */}
      </GoogleMapReact>
    </div>
  )
}

export default Map
