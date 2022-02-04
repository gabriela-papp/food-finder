import React, { useEffect, createRef, useState } from 'react'
import VenueDetails from './VenueDetails'

function Venues({ venues, childClicked }) {
  const [elRef, setElRef] = useState([])

  useEffect(() => {
    const refs = Array(venues.length)
      .fill()
      .map((_, i) => elRef[i] || createRef())
    setElRef(refs)
  }, [venues])

  return (
    <div className="restaurant-wrapper">
      <div className="restaurant-inner">
        {venues?.map((venue, i) => (
          <VenueDetails
            venue={venue}
            ref={elRef[i]}
            selected={childClicked === i}
            refProp={elRef[i]}
          />
        ))}
      </div>
    </div>
  )
}

export default Venues
