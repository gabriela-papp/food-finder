import React from 'react'
import { useGlobalContext } from './context';
import { ImLocation } from "react-icons/im";

function Restaurant() {
    const { venues } = useGlobalContext();

    return (
        <div className='restaurant-wrapper'>
            <div className='restaurant-inner'>
                {venues.map((venue,id)=>(
                    <div className='restaurant-item'>
                        <h1 key={id}>{venue.name}</h1>
                        <div>
                            <div><i><ImLocation /></i></div>
                            <div>
                                <p>{venue.location.address}</p>
                                <p>{venue.location.postalCode}</p>
                                <p>{venue.location.cc}</p>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default Restaurant
