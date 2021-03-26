import React from 'react'
import { ImFacebook, ImInstagram, ImPinterest } from "react-icons/im";

function Footer() {
    return (
        <div className='footer'>
           <div className='footer-section'>
               <h1>ABOUT US</h1>
               <ul>
                   <li>History of Place Finder</li>
                   <li>Privacy Policy</li>
                   <li>FAQ</li>
               </ul>
           </div>
           <div className='footer-section'>
               <h1>USEFUL LINKS</h1>
               <ul>
                   <li>Blog</li>
                   <li></li>
               </ul>
           </div>
           <div className='footer-section'>
               <h1>HERE TO HELP</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolore.</p>
                   <p>Lorem ipsum dolor sit amet.</p>
           </div>
           <div className='footer-section'>
               <h1>FOLLOW US</h1>
               <div>
                   <div className='follow-info'>
                     <i><ImFacebook /></i><p> Facebook</p>
                   </div>
                   <div className='follow-info'>
                        <i><ImInstagram /></i><p> Instagram</p>
                   </div>
                   <div className='follow-info'>
                        <i><ImPinterest /></i><p> Pinterest</p>
                   </div>
               </div>
           </div>
           <div className="copyright">
                <p>Copyright &copy; 2021<span> PLACE FINDER.</span></p>
           </div>
        </div>
    )
}

export default Footer
