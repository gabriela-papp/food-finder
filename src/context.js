import React, { useState, useContext,useEffect } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [venues, setVenues] = useState([])
    const [location, setLocation] = useState({ lat: null, lng: null })

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
                console.log(location.lat)
            });
        }
    }, [])

    return <AppContext.Provider value={{
        venues,
        setVenues,
        location, 

    }}>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };

