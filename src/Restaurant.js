import React from 'react'

function Restaurant(props) {
  const {venues}=props

    return (
        <div>
            <ul>
                {venues.map((venue,id)=>(
                    <li key={id}>{venue.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Restaurant
