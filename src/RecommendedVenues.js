import React from 'react'
import { useGlobalContext } from './context';
import { ImLocation } from "react-icons/im";

function RecommendedVenues() {
    const { recommendedVenues, getVenueId } = useGlobalContext();
   
    return (
        <div className='recommened-wrapper'>
            <h1>Recommended Venues</h1>
            {recommendedVenues.map(item=>{
                return <div className='recommended-inner'>
                    {item.items.map(i =>{
                        return <div className='recommended-item'>
                            <h1 >{i.venue.name}</h1>
                            
                            <div>
                                <div onClick={()=>{getVenueId(i.venue.id)}}><i><ImLocation/></i></div>
                                <div>
                                <p>{i.venue.location.address}</p>
                                <p>{i.venue.location.postalCode}</p>
                                <p>{i.venue.location.city}</p>
                                </div>
                            </div>
                        </div>
                    })}
                    </div>
            })}
        </div>
    )
}

export default RecommendedVenues
