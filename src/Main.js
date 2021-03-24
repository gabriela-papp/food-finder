import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Restaurant from './Restaurant'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Map from './Map'

function Main() {
    const [venues, setVenues] = useState([])
    const [location,setLocation]=useState({lat:null,lng:null})
    const [input,setInput]=useState('')
    const [categories,setCategories]=useState([])
    const [sub,setSub]=useState([])
    

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLocation( {lat: position.coords.latitude, lng: position.coords.longitude })
                console.log(location.lat);
            });
            getCategories();
           
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
    
    const getCategories=()=>{
        axios.get(`https://api.foursquare.com/v2/venues/categories?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G&v=20189988`)
            .then(res => {
                const categories = res.data.response.categories;
                setCategories(categories)
                console.log(categories);
              
            })
            .catch(err => {
                console.log(err)
            })
    }

    const categList = categories.map((cat, index) => {
        return <li style={{ listStyle: 'none' }} key={index}>
            <button className='categButton btn btn-outline-info'>
                {cat.name}
            </button>
        </li>
    })

    const getSubs = () => {
        axios.get(`https://api.foursquare.com/v2/venues/categories?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G&v=20189988`)
            .then(res => {
                const sub = res.data.response.categories[0].categories;
                setSub(sub)
                console.log(sub);
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
            <Container maxWidth="sm" style={{textAlign:'center', marginLeft: 'auto', marginRight:'auto', marginTop:'15px' }}>
            <TextField id="standard-basic" label="Search Places" value={input} onChange={e=>setInput(e.target.value)}/>
            <Button variant="contained"  href="#contained-buttons" style={{backgroundColor:'#129e9e', marginLeft:'5px', marginTop:'13px'}} onClick={onTextSubmit}>
                 Search
            </Button>
            </Container>
            <Container maxWidth="md">
                <div className="categories">
                    <div className="col">
                        <ul className="categories-list">
                            {categList}
                        </ul>
                    </div>
                </div>       
            </Container>
            <Restaurant venues={venues}/>
    </div>
    )
}

export default Main
