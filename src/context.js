import React, { useState, useContext,useEffect } from 'react'
import axios from 'axios';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [venues, setVenues] = useState([])
    const [input, setInput] = useState('')
    const [location, setLocation] = useState({ lat: null, lng: null })
  

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
            });
        }
    }, [])

    const onTextSubmit = () => {
        
        axios.get(`https://api.foursquare.com/v2/venues/search?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G&ll=${location.lat},${location.lng}&query=${input}&v=20189988&limit=10`)
            .then(res => {
                const venues = res.data.response.venues;

                setVenues(venues)
                console.log(venues);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return <AppContext.Provider value={{
        venues,
        setVenues,
        location, 
        onTextSubmit,
        input,
         setInput,
       
    }}>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };

