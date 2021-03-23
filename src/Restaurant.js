import React from 'react'

function Restaurant(props) {
  const {venues}=props

    return (
        <div>
            <ul>
                {venues.map((venue,id)=>(
                    <ul>

                        <li key={id}>{venue.name}</li>
                        <li key={id}>{venue.location.city}</li>
                        <li key={id}>{venue.location.neighborhood}</li>
                        <li key={id}>{venue.categories.name}</li>
                        
                    </ul>
                    ))}
            </ul>
        </div>
    )
}

export default Restaurant
