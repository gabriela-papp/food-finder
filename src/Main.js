import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Restaurant from './Restaurant'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Map from './Map'

function Main() {
    const [venues, setVenues] = useState([])
    const [location,setLocation]=useState({lat:null,lng:null})
    const [input,setInput]=useState('')
    

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLocation( {lat: position.coords.latitude, lng: position.coords.longitude })
                console.log(location.lat);
            });
        }
    
        
    }, [])
   const onTextSubmit=(e) => {
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
    
   
    return (
        <div>
            <Map
                center={location}
                markers={venues}
            />
            <TextField id="standard-basic" label="Search Cousine" value={input} onChange={e=>setInput(e.target.value)}/>
            <Button variant="contained" color="primary" href="#contained-buttons" onClick={onTextSubmit}>
                 Search
            </Button>
            <Restaurant venues={venues}/>
    </div>
    )
}

export default Main
