import React from 'react'
import Restaurant from './Restaurant'
import Map from './Map'


function Main(props) { 
  const {location, venues} = props
    return (
        <div>
            <Map
                center={location}
                markers={venues}
            />
           
            <Restaurant venues={venues}/>
    </div>
    )
}

export default Main
