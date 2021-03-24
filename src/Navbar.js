import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { ImFacebook, ImInstagram, ImPinterest, ImArrowDown2} from "react-icons/im";
import { IoMdHeartEmpty} from "react-icons/io";
import { HiOutlineSearch} from "react-icons/hi";
import { FaTimes } from 'react-icons/fa';


const Navbar=()=> {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
       
        
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            {isModalOpen ? (
                <div className='modal'>
                    <div className="modal-container">
                        <h3>WHAT ARE YOU LOOKING FOR?</h3>
                        <input id="standard-basic" value="Search products..."/>
                        <button className="close-modal-btn" onClick={closeModal}>
                            <FaTimes />
                        </button>
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
                            <li> BY CATEGORY <span><ImArrowDown2 /></span></li>
                        </ul>
                    </div>
                    <div className='nav-right' onClick={openModal}>
                        <li >SEARCH <span><HiOutlineSearch/></span></li>
                    </div>
                </nav>
         
            </div>
            
        </div>
    )
}

export default Navbar
