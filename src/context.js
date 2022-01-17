import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [venues, setVenues] = useState([])
  const [input, setInput] = useState('')
  const [location, setLocation] = useState({ lat: null, lng: null })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCatModalOpen, setIsCatModalOpen] = useState(false)
  const [recommendedVenues, setRecommendedVenues] = useState([])
  const [recommendedVenueId, setRecommendedVenueId] = useState([])
  const [getByCategory, setGetByCategory] = useState([])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      })
    }
  }, [])

  const URL =
    'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
  var options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'b9a7e73397msh978d4b617a4ff92p13c79ejsn03bd956de277',
    },
  }
  const getPlacesData = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(URL, options)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPlacesData()
  }, [])

  const getVenueId = (id) => {
    setRecommendedVenueId(id)
    alert(recommendedVenueId)
  }

  const onTextSubmit = (e) => {
    e.preventDefault()
    axios
      .get(
        `https://api.foursquare.com/v2/venues/search?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G&ll=${location.lat},${location.lng}&query=${input}&v=20189988&limit=9`,
      )
      .then((res) => {
        const venues = res.data.response.venues
        setVenues(venues)
        setInput('')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const openCatModal = () => {
    setIsCatModalOpen(true)
  }
  const closeCatModal = () => {
    setIsCatModalOpen(false)
  }
  const handleCategory = (id) => {
    axios
      .get(
        `https://api.foursquare.com/v2/venues/similar?${id}&client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G`,
      )
      .then((res) => {
        const byCategory = res.data.response

        setGetByCategory(byCategory)
        console.log(getByCategory)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <AppContext.Provider
      value={{
        venues,
        setVenues,
        location,
        onTextSubmit,
        input,
        setInput,
        openModal,
        closeModal,
        openCatModal,
        closeCatModal,
        isCatModalOpen,
        isModalOpen,
        recommendedVenues,
        getVenueId,
        handleCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
