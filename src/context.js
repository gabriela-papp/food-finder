import React, { useState, useContext,useEffect } from 'react'
import axios from 'axios';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [venues, setVenues] = useState([])
    const [input, setInput] = useState('')
    const [location, setLocation] = useState({ lat: null, lng: null })
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [recommendedVenues, setRecommendedVenues] = useState([])
    const [recommendedVenueId, setRecommendedVenueId] = useState([])
    const [getByCategory,setGetByCategory]=useState([])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
            });
        }
    }, [])

    useEffect(() => {
        axios.get(`https://api.foursquare.com/v2/venues/explore?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G&ll=${location.lat},${location.lng}&query=food&v=20189988&limit=9`)
            .then(res => {
                const recomVenues = res.data.response.groups;

                setRecommendedVenues(recomVenues)

            })
            .catch(err => {
                console.log(err)
            })
    }, [location.lat, location.lng])

    const getVenueId =(id)=>{
        setRecommendedVenueId(id)
        alert(recommendedVenueId)
    }

    const onTextSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://api.foursquare.com/v2/venues/search?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G&ll=${location.lat},${location.lng}&query=${input}&v=20189988&limit=9`)
            .then(res => {
                const venues = res.data.response.venues;

                setVenues(venues)
                setInput('')
                console.log(venues);
                
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    const handleCategory =(id)=>{
        axios.get(`https://api.foursquare.com/v2/venues/${id}/similar`)
            .then(res => {
                const byCategory = res.data.response.venues;

                setGetByCategory(byCategory)
                console.log(getByCategory)
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
        openModal,
        closeModal,
        isModalOpen,
        recommendedVenues,
        getVenueId,
        handleCategory
    }}>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };

