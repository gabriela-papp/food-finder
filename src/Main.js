import React from 'react'
import { useGlobalContext } from './context';
import Restaurant from './Restaurant'
import Map from './Map'
import RecommendedVenues from './RecommendedVenues'
import { ImShare } from "react-icons/im";
import { AiFillContacts } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";


function Main() { 
    const { location, venues} = useGlobalContext();
  
    return (
        <div>
            <Map
                center={location}
                markers={venues}
            />
            <div className='info-suggest'>
                <div className="empty-section"></div>
                <div className="info">
                    <div className='info-section'>
                        <i><ImShare /></i><p><span>Share. </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eius.</p>
                    </div>
                    <div className='info-section'>
                        <i><IoMdHeartEmpty /></i><p><span>Can't decide? </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, corrupti.</p>
                    </div>
                    <div className='info-section'>
                        <i><AiFillContacts /></i><p><span>Save your favorite places. </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, tempore.</p>
                    </div>
                </div>
                <div className="suggest">

                </div>
            </div>
            <Restaurant venues={venues}/>
            <RecommendedVenues/>
    </div>
    )
}

export default Main
