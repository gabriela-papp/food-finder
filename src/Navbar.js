import React,{useState} from 'react'
import axios from 'axios';
import { useGlobalContext } from './context';
import { ImFacebook, ImInstagram, ImPinterest, ImArrowDown2} from "react-icons/im";
import { IoMdHeartEmpty} from "react-icons/io";
import { HiOutlineSearch} from "react-icons/hi";
import { FaTimes } from 'react-icons/fa';


const Navbar=()=> {
    const { setVenues, location } = useGlobalContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCatModalOpen, setCatIsModalOpen] = useState(false);
    const [categories, setCategories] = useState([])
    const [input, setInput] = useState('')

    const openModal = () => {
        setIsModalOpen(true); 
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    const closeCatModal = () => {
        setCatIsModalOpen(false);
    }

    const getCategoriesModal=(e)=>{
        setCatIsModalOpen(true)
        getCategories();
    }
    const onTextSubmit = (e) => {
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

    const getCategories = () => {
        axios.get(`https://api.foursquare.com/v2/venues/categories?client_id=LIEUSSAMWMOVTOT2NMXPTPQ1VJ5UIESU3EJKN53JV4QIKMZL&client_secret=FURPJP2L1EQJHTT3Y05RAEJOOLBPXTMALC1OJ3NQ2LAHYT5G&v=20189988`)
            .then(res => {
                const categories = res.data.response.categories;
                setCategories(categories)

            })
            .catch(err => {
                console.log(err)
            })
    }


    const categList = categories.map((cat, index) => {
        return <li style={{ listStyle: 'none' }} key={index}>
                {cat.name}
               </li>
    })

    return (
        <div>
            {isModalOpen ? (
                <div className='modal'>
                    <div className="modal-container">
                        <h3>WHAT ARE YOU LOOKING FOR?</h3>
                        <input id="standard-basic" value={input} placeholder='Search places...' onChange={e => setInput(e.target.value)}/>
                        <button className="close-modal-btn" onClick={closeModal}>
                            <FaTimes />
                        </button>
                         {console.log(input)}
                    </div>
                </div>
            ):null}
            
            <div className='small-nav'>
                <div className='small-nav-left'>
                    <h3>PLACE FINDER | An Official Place Finder App</h3>
                </div>
                <div className='small-nav-right'>
                    <ul>
                        <li><ImFacebook /></li>
                        <li><ImInstagram /></li>
                        <li><ImPinterest /></li>
                    </ul>
                </div>
            </div>
            <div className='medium-nav'>
                <div className='medium-nav-left'>
                    <button>PLACE FINDER</button>
                </div>
                <div className='medium-nav-right'>
                    <p><IoMdHeartEmpty/></p>
                </div>
            </div>
            <div>
                <nav className='nav'>
                    <div className='nav-left'>
                        <ul>
                            <li>HOME</li>
                            <li onMouseOver={getCategoriesModal} > BY CATEGORY <span><ImArrowDown2 /></span></li>
                        </ul>
                    </div>
                 
                    <div className='nav-right' onClick={openModal}>
                        <li >SEARCH <span><HiOutlineSearch/></span></li>
                    </div>
                </nav>
                {isCatModalOpen ? (
                    <div className='cat-modal' onMouseLeave={closeCatModal}>
                        <div className="cat-modal-container">
                            <h3>CATEGORIES</h3>
                            <ul className="categories-list">
                                {categList}
                            </ul>
                        </div>
                    </div>
                ) : null}
            </div>
            
        </div>
    )
}

export default Navbar
