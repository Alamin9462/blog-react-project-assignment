import React from 'react';
import './Header.css';
import profile from './profile.png';

const Header = () => {
    return (
        <div className='frist-section'>
           <h2>Knowledge Cafe</h2> 
           <img src={profile} alt="" />  
           
        </div>
    );
};

export default Header;