import React from 'react'
import VenueDetails from './VenueDetails'

function Venues({ venues }) {
  return (
    <div className="restaurant-wrapper">
      <div className="restaurant-inner">
        {venues?.map((venue, id) => (
          <VenueDetails venue={venue} />
        ))}
      </div>
    </div>
  )
}

export default Venues
