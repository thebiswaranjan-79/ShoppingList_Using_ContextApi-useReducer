// CSS Imports
import './Header.css';

// Component Imort 
import React from 'react';
import HeaderImage from '../../assets/header_img.avif'
const Header = () => {
    return (
        <div className='header-wrapper'>
            <h1 className='header-text'>Shooping List</h1>
           <div className='header-image-wrapper'>
            <img
                className='header-image' 
                src={HeaderImage}  
                />
           </div>
        </div>
    );
}
                                                                      
// 15min from 1st video 
export default Header;
